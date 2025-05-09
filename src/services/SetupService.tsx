import TrackPlayer, {
  Capability,
  AppKilledPlaybackBehavior,
  RepeatMode,
} from 'react-native-track-player';


export const setupTrackPlayer = async (): Promise<boolean> => {
  try {

    if (!Capability) {
      console.error("TrackPlayer.Capability is null or undefined. Check native linking and build cache.");
      // Throw an error or return false to indicate setup failure
      // throw new Error("TrackPlayer.Capability is not available.");
      return false; // Or handle the error as appropriate for your app
    }

    let isSetup = false;

    // Try to check if player is already active
    try {
      await TrackPlayer.getActiveTrackIndex();
      isSetup = true;
    } catch {
      const setup = async (): Promise<boolean | string> => {
        try {
          await TrackPlayer.setupPlayer({ autoHandleInterruptions: true });
          return true;
        } catch (error) {
          return (error as Error & { code?: string }).code || false;
        }
      };

      // Retry if specific Android error is encountered
      while ((await setup()) === 'android_cannot_setup_player_in_background') {
        await new Promise((resolve) => setTimeout(resolve, 1));
      }

      isSetup = true;
    }

    // Apply track player options
    await TrackPlayer.updateOptions({
      android: {
        appKilledPlaybackBehavior:
          AppKilledPlaybackBehavior.StopPlaybackAndRemoveNotification,
      },
      stoppingAppPausesPlayback: true,
      capabilities: [
        Capability.Play,
        Capability.Pause,
        Capability.SkipToNext,
        Capability.SkipToPrevious,
        Capability.SeekTo,
        Capability.Stop,
      ],
      compactCapabilities: [
        Capability.Play,
        Capability.Pause,
        Capability.SkipToNext,
      ],
      notificationCapabilities: [
        Capability.Play,
        Capability.Pause,
        Capability.SkipToNext,
        Capability.SkipToPrevious,
        Capability.SeekTo,
      ],
      progressUpdateEventInterval: 2,
    });

    await TrackPlayer.setRepeatMode(RepeatMode.Queue);
    console.log('TrackPlayer successfully initialized');

    return isSetup;
  } catch (error) {
    console.error('Error setting up TrackPlayer:', error);
    return false;
  }
};
