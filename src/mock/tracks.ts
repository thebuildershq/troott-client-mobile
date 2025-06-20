import { TrackCardProps } from "@/components/tracks/types";

export const tracks: Partial<TrackCardProps>[] = [
  {
    track_url: require("@/assets/audio/how_to_ask_god_for_anything_in_prayer_apostle_joshua_selman_apostlejoshuaselman_motivation_pray_aac_58818.mp4"),
    title: "How to ask God for anything in prayer",
    preacher: "Aps. Joshua Selman",
    duration: 60,
    image: require("@/assets/images/cover3.jpg"),
  },
  {
    track_url: require("@/assets/audio/it_doesn_39_t_matter_what_you_are_going_through_motivational_pastor_chris_aac_58743.mp4"),
    title: "Motivation Quote",
    preacher: "Pst. Chris Oyakhilome",
    duration: 183,
    image: require("@/assets/images/cover.jpg"),
  },
  {
    track_url: require("@/assets/audio/life_is_short_live_every_day_for_god_billy_graham_inspirational_amp_motivational_video_aac_58991.mp4"),
    title: "Life is very short",
    preacher: "Billy Graham",
    duration: 266,
    image: require("@/assets/images/cover2.jpg"),
  },
];

