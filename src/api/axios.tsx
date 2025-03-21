import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Platform } from "react-native";
import ENV from "@env";
import DeviceInfo, { getVersion } from "react-native-device-info";
import * as RNLocalize from "react-native-localize";
import moment from "moment-timezone";
import Auth from "./auth";
import User from "./user";


let navigationRef = null;
export const setNavigationRef = (ref: any): void => {
  navigationRef = ref;
};

const BaseURL: string = ENV.TROOTT_API_URL_LOCAL;
const appVersion = getVersion();

export const axiosPublic = axios.create({
  baseURL: BaseURL,
});

export const axiosPrivate = axios.create({
  baseURL: BaseURL,
  headers: {
    "Content-Type": "application/json",
    "X-Client-Type": "mobile",
    "X-Platform": Platform.OS,
    "X-App-Version": appVersion,
    "User-Agent": `Troott/${getVersion()} (${
      Platform.OS
    } ${DeviceInfo.getSystemVersion()}; ${DeviceInfo.getModel()})`,
    "X-Locale": RNLocalize.getLocales()[0].languageTag || "en-US",
    "X-Timezone": moment.tz.guess(),
  },
});

const api = {
  auth: new Auth(axiosPublic, axiosPrivate),
  user: new User(axiosPrivate),
};

axiosPrivate.interceptors.request.use(
  async function (config) {
    const deviceId = await DeviceInfo.getUniqueId();
    config.headers["X-Device-ID"] = deviceId;

    const authToken = await AsyncStorage.getItem("authToken");
    if (authToken) {
      config.headers.authorization = `Bearer ${authToken}`;
    }
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

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
      await AsyncStorage.removeItem("authToken");
      console.log("Unauthorized. Redirecting to login.");
    }

    return Promise.reject(error);
  }
);

axiosPrivate.defaults.timeout = 10000; 

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

axiosPrivate.interceptors.request.use((config) => {
    config.signal = requestController.signal;
    return config;
});

export const cancelRequests = () => {
    requestController.abort();
};


export default api;
