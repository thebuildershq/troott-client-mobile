import { IAppState } from "../utils/app.interface";
import storage from "../utils/storage.util";
import { TAction } from "./app.actions";


// Reducer Function
const appReducer = (state: IAppState, action: TAction): IAppState => {
    switch (action.type) {
      case "LOGIN":
        storage.keepData("auth", action.payload);
        return {
          ...state,
          auth: {
            isAuthenticated: true,
            user: { name: action.payload.name, email: action.payload.email },
            token: action.payload.token,
          },
        };
  
      case "LOGOUT":
        storage.removeData("auth");
        return {
          ...state,
          auth: {
            isAuthenticated: false,
            user: { name: null, email: null },
            token: null,
          },
        };
  
      case "PLAY":
        return { ...state, player: { ...state.player, isPlaying: true } };
      case "PAUSE":
        return { ...state, player: { ...state.player, isPlaying: false } };
      case "SET_TRACK":
        return {
          ...state,
          player: { ...state.player, currentTrack: action.payload },
        };
      case "SET_PROGRESS":
        return {
          ...state,
          player: {
            ...state.player,
            position: action.payload.position,
            duration: action.payload.duration,
          },
        };
      case "ADD_TO_PLAYLIST":
        return {
          ...state,
          player: {
            ...state.player,
            playlist: [...state.player.playlist, action.payload],
          },
        };
  
      case "ADD_FAVORITE":
        return {
          ...state,
          media: {
            ...state.media,
            favorites: [...state.media.favorites, action.payload],
          },
        };
      case "REMOVE_FAVORITE":
        return {
          ...state,
          media: {
            ...state.media,
            favorites: state.media.favorites.filter(
              (item) => item !== action.payload
            ),
          },
        };
      case "ADD_DOWNLOAD":
        return {
          ...state,
          media: {
            ...state.media,
            downloads: [...state.media.downloads, action.payload],
          },
        };
      case "REMOVE_DOWNLOAD":
        return {
          ...state,
          media: {
            ...state.media,
            downloads: state.media.downloads.filter(
              (item) => item !== action.payload
            ),
          },
        };
      case "ADD_SEARCH_HISTORY":
        return {
          ...state,
          media: {
            ...state.media,
            searchHistory: [action.payload, ...state.media.searchHistory],
          },
        };
  
      case "ADD_NOTIFICATION":
        return {
          ...state,
          notifications: {
            ...state.notifications,
            alerts: [...state.notifications.alerts, action.payload],
          },
        };
      case "SET_PUSH_TOKEN":
        return {
          ...state,
          notifications: { ...state.notifications, pushToken: action.payload },
        };
  
      case "UPDATE_SUBSCRIPTION":
        return {
          ...state,
          subscription: {
            ...state.subscription,
            plan: action.payload.plan,
            paymentStatus: action.payload.paymentStatus,
          },
        };
  
      case "SET_LOADING":
        return { ...state, ui: { ...state.ui, isLoading: action.payload } };
      case "SET_ERROR":
        return { ...state, ui: { ...state.ui, error: action.payload } };
  
      default:
        return state;
    }
  }

  export default appReducer;