declare module "@env" {
    export const FRESHCART_API_URL_LOCAL: string;
    export const REACT_APP_TROOTT_API_URL_LOCAL: string;
    // Add other environment variables here
  
    // Allow importing any string-based environment variable
    declare const env: { [key: string]: string };
    export = env;
  }
  