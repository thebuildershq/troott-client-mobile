import { createContext, useEffect, useReducer, useState } from "react";
import TrackPlayer, { Event } from "react-native-track-player";
import initialState, { IAppState } from "../utils/app.interface";
import { TAction } from "./app.actions";
import appReducer from "./app.reducer";
import storage from "../utils/storage.util";
import { setupTrackPlayer } from "../services/SetupService";


// Create Context
const AppContext = createContext<{
    state: IAppState;
    dispatch: React.Dispatch<TAction>;
  }>({ state: initialState, dispatch: () => null });
  
  export const AppProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [state, dispatch] = useReducer(appReducer, initialState);
    
    const [isPlayerReady, setIsPlayerReady] = useState(false);

    useEffect(() => {
      const setup = async () => {
        const isSetup = await setupTrackPlayer();
        dispatch({ type: "SET_PLAYER_READY", payload: isSetup });
      };
      setup();
    }, []);
  

    useEffect(() => {

      if (!state.isPlayerReady) return;

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