import React, { createContext, useReducer, useEffect, useContext } from "react";
import TrackPlayer, { Event } from "react-native-track-player";
import { TAction } from "../types/app.type";
import { IAppState, IPlayerState } from "../utils/app.interface";
import storage from "../utils/async-storage.util";

// initialstate
const initialState: IAppState = {
  auth: {
    isAuthenticated: false,
    user: { name: null, email: null },
    token: null,
  },
  player: {
    isPlaying: false,
    currentTrack: { title: null, artist: null, artwork: null },
    position: 0,
    duration: 0,
    playlist: [],
  },
  media: { favorites: [], downloads: [], searchHistory: [] },
  notifications: { alerts: [], pushToken: null },
  subscription: { plan: null, paymentStatus: null },
  ui: { isLoading: false, error: null },
};

// Reducer Function
function appReducer(state: IAppState, action: TAction): IAppState {
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

// Create Context
const AppContext = createContext<{
  state: IAppState;
  dispatch: React.Dispatch<TAction>;
}>({ state: initialState, dispatch: () => null });

export const AppProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [state, dispatch] = useReducer(appReducer, initialState);

  useEffect(() => {
    const listeners = [
      TrackPlayer.addEventListener(Event.RemotePlay, () => {
        dispatch({ type: "PLAY" });
        TrackPlayer.play();
      }),

      TrackPlayer.addEventListener(Event.RemotePause, () => {
        dispatch({ type: "PAUSE" });
        TrackPlayer.pause();
      }),

      TrackPlayer.addEventListener(
        Event.PlaybackActiveTrackChanged,
        async () => {
          const activeTrack = await TrackPlayer.getActiveTrack();
          if (activeTrack) {
            dispatch({
              type: "SET_TRACK",
              payload: {
                title: activeTrack.title || null,
                artist: activeTrack.artist || null,
                artwork: activeTrack.artwork || null,
              },
            });
          }
        }
      ),

      TrackPlayer.addEventListener(Event.PlaybackProgressUpdated, (event) => {
        dispatch({
          type: "SET_PROGRESS",
          payload: { position: event.position, duration: event.duration },
        });
      }),
    ];
    // Cleanup listeners when unmounting
    return () => {
        
      listeners.forEach((listener) => listener.remove());
    };
  }, []);

  useEffect(() => {
    const loadAuthState = async () => {
      const storedAuth = await storage.fetchData("auth");
      if (storedAuth) {
        dispatch({ type: "SET_AUTH_FROM_STORAGE", payload: JSON.parse(storedAuth) });
      }
    };
    loadAuthState();
  }, []);

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  );
};

// Custom Hook to Use Context
export const usePlayer = () => useContext(AppContext);
