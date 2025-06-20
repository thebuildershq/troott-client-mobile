import { TrackCardProps } from '@/components/tracks/types';
import TrackPlayer, {
  AppKilledPlaybackBehavior,
  Capability,
  RepeatMode,
  Event,
} from 'react-native-track-player';

export async function setupPlayer() {
  let isSetup = false;
  try {
    await TrackPlayer.getActiveTrack();
    isSetup = true;
  }
  catch {
    await TrackPlayer.setupPlayer();
    await TrackPlayer.updateOptions({
      android: {
        appKilledPlaybackBehavior:
          AppKilledPlaybackBehavior.StopPlaybackAndRemoveNotification,
      },
      capabilities: [
        Capability.Play,
        Capability.Pause,
        Capability.SkipToNext,
        Capability.SkipToPrevious,
        Capability.SeekTo,
      ],
      compactCapabilities: [
        Capability.Play,
        Capability.Pause,
        Capability.SkipToNext,
      ],
      progressUpdateEventInterval: 2,
    });
    isSetup = true;
  }
  finally {
    return isSetup;
  }
};




export async function addTrack(track:Partial<TrackCardProps>) {
  console.log(track, "track to add");
  await TrackPlayer.add([
    {
      url: track.track_url || '',
      title: track.title,
      artist: track.preacher,
      artwork: track.image,
      duration: track.duration as number,
    }
  ])
  await TrackPlayer.setRepeatMode(RepeatMode.Queue);

};