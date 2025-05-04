import axios from "axios";
import { Platform } from "react-native";
import { Config } from "react-native-config"
import ENV from "@env";
import DeviceInfo, { getVersion } from "react-native-device-info";
import * as RNLocalize from "react-native-localize";
import moment from "moment-timezone";
import storage from "../utils/storage.util";
import { CommonActions } from "@react-navigation/native";
import Auth from "./auth";
import User from "./user";
import Bite from "./bite";
import Catalog from "./catalog";
import Email from "./email";
import Feed from "./feed";
import Invitation from "./invitation";
import Library from "./library";
import Notification from "./notification";
import Playlist from "./playlist";
import Preacher from "./preacher";
import Search from "./search";
import Sermon from "./sermon";
import Staff from "./staff";
import Subscription from "./subscription";


/**
 * Sets the navigation reference for handling navigation outside of React components
 * @param {any} ref - The navigation reference object
 * @returns {void}
 */
let navigationRef: any = null;
export const setNavigationRef = (ref: any): void => {
  navigationRef = ref;
};

const BaseURL: string = Config.TROOTT_API_URL_LOCAL as string;
const appVersion = getVersion();

export const axiosPublic = axios.create({
  baseURL: BaseURL,
  headers: {
    "Content-Type": "application/json",
    "X-Client-Type": "mobile",
    "X-Platform": Platform.OS,
    "X-App-Version": appVersion,
    "User-Agent": `Troott/${getVersion()} (${Platform.OS} 
      ${DeviceInfo.getSystemVersion()}; ${DeviceInfo.getModel()})`,
    "X-Locale": RNLocalize.getLocales()[0].languageTag || "en-US",
    "X-Timezone": moment.tz.guess(),
  },
});

export const axiosPrivate = axios.create({
  baseURL: BaseURL,
  headers: {
    "Content-Type": "application/json",
    "X-Client-Type": "mobile",
    "X-Platform": Platform.OS,
    "X-App-Version": appVersion,
    "User-Agent": `Troott/${getVersion()} (${Platform.OS} 
      ${DeviceInfo.getSystemVersion()}; ${DeviceInfo.getModel()})`,
    "X-Locale": RNLocalize.getLocales()[0].languageTag || "en-US",
    "X-Timezone": moment.tz.guess(),
  },
});

/**
 * API instance containing all service endpoints
 * @type {Object} API service instances for different endpoints
 * @property {Auth} auth - Authentication service
 * @property {User} user - User management service
 * @property {Bite} bite - Bite related operations
 * @property {Catalog} catalog - Catalog management service
 * @property {Email} email - Email service operations
 * @property {Feed} feed - Feed management service
 * @property {Invitation} invitation - Invitation handling service
 * @property {Library} library - Library management service
 * @property {Notification} notification - Notification handling service
 * @property {Playlist} playlist - Playlist management service
 * @property {Preacher} preacher - Preacher management service
 * @property {Search} search - Search functionality service
 * @property {Sermon} sermon - Sermon management service
 * @property {Staff} staff - Staff management service
 * @property {Subscription} subscription - Subscription handling service
 */
const api = {
  auth: new Auth(axiosPublic, axiosPrivate),
  bite: new Bite(axiosPrivate),
  catalog: new Catalog(axiosPrivate),
  email: new Email(axiosPrivate),
  feed: new Feed(axiosPrivate),
  invitation: new Invitation(axiosPrivate),
  library: new Library(axiosPrivate),
  notification: new Notification(axiosPrivate),
  playlist: new Playlist(axiosPrivate),
  preacher: new Preacher(axiosPrivate),
  search: new Search(axiosPrivate),
  sermon: new Sermon(axiosPrivate),
  staf: new Staff(axiosPrivate),
  subsription: new Subscription(axiosPrivate),
  user: new User(axiosPrivate),
};


/**
 * Axios request interceptor that adds device ID and authentication headers
 * @param {AxiosRequestConfig} config - The axios request configuration
 * @returns {Promise<AxiosRequestConfig>} Modified request configuration
 */
axiosPrivate.interceptors.request.use(
  async function (config) {
    const deviceId = await DeviceInfo.getUniqueId();
    config.headers["X-Device-ID"] = deviceId;

    const accessToken = await storage.fetchData("accessToken");
    if (accessToken) {
      config.headers.authorization = `Bearer ${accessToken}`;
    }
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);


/**
 * Axios response interceptor that handles request timeouts
 * @param {AxiosResponse} response - The axios response object
 * @returns {Promise<AxiosResponse>} The response or rejected promise with timeout error
 */
axiosPrivate.interceptors.response.use(
  function (response) {
    return response;
  },
  async function (error) {
    if (!error.response) {
      console.error("Network error: ", error.message);
      return Promise.reject({
        message: "Network Error. Please check your internet connection.",
      });
    }

    const { status } = error?.response?.status;

    if (status === 403 || status === 401) {
      await storage.removeData("acessToken");
      console.log("Unauthorized. Redirecting to login.");
      
      if (navigationRef?.dispatch) {
        navigationRef.dispatch(
          CommonActions.reset({
            index: 0,
            routes: [{ name: "Login" }],
          })
        );
      }
    }

    return Promise.reject(error);
  }
);

axiosPrivate.defaults.timeout = 10000;


/**
 * Axios response interceptor that handles request timeouts
 * @param {AxiosResponse} response - The axios response object
 * @returns {Promise<AxiosResponse>} The response or rejected promise with timeout error
 */
axiosPrivate.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.code === "ECONNABORTED") {
      console.error("Request timeout:", error.message);
      return Promise.reject({ message: "Request Timeout. Please try again." });
    }
    return Promise.reject(error);
  }
);

const requestController = new AbortController();

/**
 * Axios request interceptor that adds abort signal to requests
 * @param {AxiosRequestConfig} config - The axios request configuration
 * @returns {AxiosRequestConfig} Modified request configuration with abort signal
 */
axiosPrivate.interceptors.request.use((config) => {
  config.signal = requestController.signal;
  return config;
});

/**
 * Cancels all pending API requests
 * @returns {void}
 */
export const cancelRequests = () => {
  requestController.abort();
};

export default api;
