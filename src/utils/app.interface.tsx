export interface IAppState {
  player: IPlayerState;
  auth: IAuthState;
  media: IMedia
  notifications: INotifications
  subscription: ISubscription
  ui: IUi
}

export interface IPlayerState {
  isPlaying: boolean;
  currentTrack: {
    title: string | null;
    artist: string | null;
    artwork: string | null;
  };
  position: number;
  duration: number;
  playlist: Array<string>
}

export interface IAuthState {
  isAuthenticated: boolean;
  user: {
    name: string | null;
    email: string | null;
  };
  token: string | null;
}

export interface IPlayer {
  isPlaying: boolean;
  currentTrack: {
    title: string | null;
    artist: string | null;
    artwork: string | null;
  };
  position: number;
  duration: number;
  playlist: any[]; // Stores user-created playlists
}

export interface IMedia {
  favorites: any[];
  downloads: any[];
  searchHistory: string[];
}

export interface INotifications {
  alerts: any[];
  pushToken: string | null;
}

export interface ISubscription {
  plan: string | null;
  paymentStatus: string | null;
}

export interface IUi {
  isLoading: boolean;
  error: string | null;
}
