import { ImageSourcePropType, ViewStyle } from "react-native"

export interface TrackCardProps{
    title : string
    variant:'small' | 'large'
    preacher:string
    duration:string | number
    image:string,
    cardStyle?:ViewStyle
    track_url?:string
}

export interface PlayListCardProps{
    coverImage?:string | ImageSourcePropType
    title:string
    church:string
    description:string
    tracks:Omit<TrackCardProps,'cardStyle' | 'variant'>[]
    cardStyle?:ViewStyle
}