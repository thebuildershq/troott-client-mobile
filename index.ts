import { AppRegistry } from 'react-native';
import { registerRootComponent } from 'expo';
import TrackPlayer from 'react-native-track-player';
import { PlaybackService } from './src/services/PlaybackService';
import App from './App';



// registerRootComponent calls AppRegistry.registerComponent('main', () => App);
// It also ensures that whether you load the app in Expo Go or in a native build,
// the environment is set up appropriately

const appName = "troott: sermon streaming app"

AppRegistry.registerComponent(appName, () => App);
registerRootComponent(App);

TrackPlayer.registerPlaybackService(() => PlaybackService);