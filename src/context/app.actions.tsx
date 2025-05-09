import { IAppState, IPlayerState } from "../utils/app.interface";

export type TAction =

 // Auth Actions
 | { type: "LOGIN"; payload: { name: string; email: string; token: string } }
 | { type: "LOGOUT" }
 | { type: "SET_AUTH_FROM_STORAGE"; payload: IAppState["auth"] }

 // Player Actions
 | { type: "SET_PLAYER_READY", payload: boolean}
 | { type: "PLAY" }
 | { type: "PAUSE" }
 | { type: "SET_TRACK"; payload: IPlayerState["currentTrack"] }
 | { type: "SET_PROGRESS"; payload: { position: number; duration: number } }
 | { type: "ADD_TO_PLAYLIST"; payload: any }

 // Media Actions
 | { type: "ADD_FAVORITE"; payload: any }
 | { type: "REMOVE_FAVORITE"; payload: any }
 | { type: "ADD_DOWNLOAD"; payload: any }
 | { type: "REMOVE_DOWNLOAD"; payload: any }
 | { type: "ADD_SEARCH_HISTORY"; payload: string }

 // Notifications
 | { type: "ADD_NOTIFICATION"; payload: any }
 | { type: "SET_PUSH_TOKEN"; payload: string }
 
 // Subscription
 | { type: "UPDATE_SUBSCRIPTION"; payload: { plan: string; paymentStatus: string } }

 // UI Actions
 | { type: "SET_LOADING"; payload: boolean }
 | { type: "SET_ERROR"; payload: string | null };




