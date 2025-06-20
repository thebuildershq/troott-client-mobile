import { TrackCardProps } from "@/components/tracks/types";

type Track = Partial<TrackCardProps>;

export interface PlayerState {
    currentTrack: Track | null; 
    setCurrentTrack: (track: Track| null) => void; 
    showFullPlayer: boolean;
    setShowFullPlayer: (show: boolean) => void;
    showMiniPlayer: boolean;
    setShowMiniPlayer: (show: boolean) => void;
}