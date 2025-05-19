import { AppRegistry } from 'react-native';
import { registerRootComponent } from 'expo';
import TrackPlayer from 'react-native-track-player';
import { TrackPlayerService } from './src/services/PlaybackService';
import App from './App';




// registerRootComponent calls AppRegistry.registerComponent('main', () => App);
// It also ensures that whether you load the app in Expo Go or in a native build,
// the environment is set up appropriately

// const appName = "main"

//troott: sermon streaming app

// TrackPlayer.registerPlaybackService(() => require('./src/services/PlaybackService'));
// AppRegistry.registerComponent("main", () => App);
// registerRootComponent(App);

TrackPlayer.registerPlaybackService(() => TrackPlayerService);
