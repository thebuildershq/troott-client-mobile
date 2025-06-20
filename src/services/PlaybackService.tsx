import TrackPlayer, { Event, State } from 'react-native-track-player';

export async function TrackPlayerService() {
  // Remote Controls
  TrackPlayer.addEventListener(Event.RemotePlay, async () => {
    console.log('Event.RemotePlay');
    const { state } = await TrackPlayer.getPlaybackState();
    if (state !== State.Playing) {
      await TrackPlayer.play();
    }
  });

  TrackPlayer.addEventListener(Event.RemotePause, async () => {
    console.log('Event.RemotePause');
    const { state } = await TrackPlayer.getPlaybackState();
    if (state === State.Playing) {
      await TrackPlayer.pause();
    }
  });

  TrackPlayer.addEventListener(Event.RemoteNext, async () => {
    console.log('Event.RemoteNext');
    try {
      await TrackPlayer.skipToNext();
    } catch (e) {
      console.warn('No next track', e);
    }
  });

  TrackPlayer.addEventListener(Event.RemotePrevious, async () => {
    console.log('Event.RemotePrevious');
    try {
      await TrackPlayer.skipToPrevious();
    } catch (e) {
      console.warn('No previous track', e);
    }
  });

  TrackPlayer.addEventListener(Event.RemoteStop, async () => {
    console.log('Event.RemoteStop');
    await TrackPlayer.stop();
  });

  TrackPlayer.addEventListener(Event.RemoteJumpForward, async (event) => {
    console.log('Event.RemoteJumpForward', event);
    await TrackPlayer.seekBy(event.interval);
  });

  TrackPlayer.addEventListener(Event.RemoteJumpBackward, async (event) => {
    console.log('Event.RemoteJumpBackward', event);
    await TrackPlayer.seekBy(-event.interval);
  });

  TrackPlayer.addEventListener(Event.RemoteSeek, async (event) => {
    console.log('Event.RemoteSeek', event);
    await TrackPlayer.seekTo(event.position);
  });

  TrackPlayer.addEventListener(Event.RemoteDuck, async (event) => {
    console.log('Event.RemoteDuck', event);
    // Optional: pause or duck volume here depending on your app logic
  });

  // Playback Events
  TrackPlayer.addEventListener(Event.PlaybackQueueEnded, (event) => {
    console.log('Event.PlaybackQueueEnded', event);
  });

  TrackPlayer.addEventListener(Event.PlaybackActiveTrackChanged, (event) => {
  });

  TrackPlayer.addEventListener(Event.PlaybackProgressUpdated, (event) => {
    console.log('Event.PlaybackProgressUpdated', event);
  });

  TrackPlayer.addEventListener(Event.PlaybackPlayWhenReadyChanged, (event) => {
    console.log('Event.PlaybackPlayWhenReadyChanged', event);
  });

  TrackPlayer.addEventListener(Event.PlaybackState, (event) => {

  });

  // Metadata Events
  TrackPlayer.addEventListener(Event.MetadataChapterReceived, (event) => {
    console.log('Event.MetadataChapterReceived', event);
  });

  TrackPlayer.addEventListener(Event.MetadataTimedReceived, (event) => {
    console.log('Event.MetadataTimedReceived', event);
  });

  TrackPlayer.addEventListener(Event.MetadataCommonReceived, (event) => {
    console.log('Event.MetadataCommonReceived', event);
  });

  // Custom: Update Now Playing Info when Metadata Received
  TrackPlayer.addEventListener(Event.MetadataCommonReceived, async (event) => {
    console.log('Event.MetadataCommonReceived', event);
  
    const activeTrack = await TrackPlayer.getActiveTrack();
    if (activeTrack) {
      await TrackPlayer.updateNowPlayingMetadata({
        title: activeTrack.title,
        artist: event.metadata.artist || activeTrack.artist,
        artwork: activeTrack.artwork,
      });
    }
  });
  
}
