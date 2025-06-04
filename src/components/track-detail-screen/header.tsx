import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SolidIcons } from '@/assets/icons'
import { theme } from '@/constants/theme'

const TrackDetailsHeader = () => {
  return (
    <View style={styles.container}>
     <Pressable><SolidIcons.ChevronDownIcon size={theme.sizes.spacing.md} color={'#fff'}/></Pressable>
     <Pressable><SolidIcons.EllipsisHorizontalIcon size={theme.sizes.spacing.lg} color={'#fff'}/></Pressable>
    </View>
  )
}

export default TrackDetailsHeader

const styles = StyleSheet.create({
    container:{
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        marginTop:theme.sizes.spacing.md
    }
})