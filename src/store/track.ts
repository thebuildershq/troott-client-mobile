import {create} from 'zustand';
import { PlayerState } from './types';


export const useTrackStore = create<PlayerState>((set,get)=>({
    currentTrack: null,
    setCurrentTrack: (track) => set({ currentTrack: track }),
    showFullPlayer: false,
    setShowFullPlayer: (show) => set({ showFullPlayer: show }),
    showMiniPlayer: false,
    setShowMiniPlayer: (show) => set({ showMiniPlayer: show }),
}))