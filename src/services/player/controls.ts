/**
 * UTILS for Player Controls
 * * This module provides utility functions for controlling the player,
 * * including play, pause, skip, and seek functionalities.
 *
 *
 *
 */

import TrackPlayer from "react-native-track-player";
import { Event, State, PlaybackState } from "react-native-track-player";

export async function playButton() {
  try {
    const playbackState = (await TrackPlayer.getPlaybackState()).state;
    if (playbackState === State.Playing) {
      await pause();
      return;
    }
    await TrackPlayer.play();
  } catch (error) {
    console.error("Error playing track:", error);
  }
}

export async function getPlaybackState() {
  try {
    const playbackState = await TrackPlayer.getPlaybackState();
    return playbackState.state;
  } catch (error) {
    console.error("Error getting playback state:", error);
    return null;
  }
}

export async function isTrackPlaying() {
  try {
    const playbackState = (await TrackPlayer.getPlaybackState()).state;
    return playbackState === State.Playing;
  } catch (error) {
    console.error("Error checking playback state:", error);
    return false;
  }
}

export async function isTrackPaused() {
  try {
    const playbackState = (await TrackPlayer.getPlaybackState()).state;
    return playbackState === State.Paused;
  } catch (error) {
    console.error("Error checking playback state:", error);
    return false;
  }
}

export async function getTrackState(){
    try {
        const playbackState = await TrackPlayer.getPlaybackState();
        return playbackState.state;
    } catch (error) {
        console.error("Error getting track state:", error);
        return null;
    }
}

export async function pause() {
  try {
    console.log(await TrackPlayer.getPlaybackState(), "state");
    await TrackPlayer.pause();
  } catch (error) {
    console.error("Error pausing track:", error);
  }
}
export async function skipToNext() {
  try {
    await TrackPlayer.skipToNext();
    await TrackPlayer.play();
  } catch (error) {
    console.error("Error skipping to next track:", error);
  }
}
export async function skipToPrevious() {
  try {
    await TrackPlayer.skipToPrevious();
    await TrackPlayer.play();
  } catch (error) {
    console.error("Error skipping to previous track:", error);
  }
}
export async function seekTo(position: number) {
  try {
    await TrackPlayer.seekTo(position);
  } catch (error) {
    console.error("Error seeking to position:", error);
  }
}
export async function getCurrentTrack() {
  try {
    const trackIndex = await TrackPlayer.getActiveTrackIndex();

    const track = await TrackPlayer.getTrack(trackIndex || 0);
    return track;
  } catch (error) {
    console.error("Error getting current track:", error);
    return null;
  }
}
