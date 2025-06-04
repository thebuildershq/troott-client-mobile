import TrackPlayer, {
  AppKilledPlaybackBehavior,
  Capability,
  RepeatMode,
  Event,
} from 'react-native-track-player';

export async function setupPlayer() {
  let isSetup = false;
  try {
    await TrackPlayer.getCurrentTrack();
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




export async function addTracks() {
  await TrackPlayer.add([
    {
      id: '1',
      url: require('@/assets/audio/how_to_ask_god_for_anything_in_prayer_apostle_joshua_selman_apostlejoshuaselman_motivation_pray_aac_58818.mp4'),
      title: 'How to ask God for anything in prayer',
      artist: 'Aps. Joshua Selman',
      duration: 60,
    },
    {
      id: '2',
      url: require('@/assets/audio/it_doesn_39_t_matter_what_you_are_going_through_motivational_pastor_chris_aac_58743.mp4'),
      title: 'Motivation Quote',
      artist: 'Pst. Chris Oyakhilome',
      duration: 183,
    },
    {
      id: '3',
      url: require('@/assets/audio/life_is_short_live_every_day_for_god_billy_graham_inspirational_amp_motivational_video_aac_58991.mp4'),
      title: 'Life is very short',
      artist: 'Billy Graham',
      duration: 266,
    }
  ]);
  await TrackPlayer.setRepeatMode(RepeatMode.Queue);
};