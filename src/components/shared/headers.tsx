import { StyleSheet, View } from 'react-native'
import React from 'react'
import Text from '../ui/text'
import Button from '../ui/button'
import { ArrowLeft2 } from 'iconsax-react-nativejs'
import { router } from 'expo-router'
import { theme } from '@/constants/theme'

interface HeaderProps{
    title?:string,
    variant?:"auth" | "home"
}

const Header = ({title,variant}:HeaderProps) => {
  return (
    <View style={styles.container}>
      <Button variant='ghost' onPress={()=>{router.back()}} style={styles.arrow}>
        <ArrowLeft2 color={theme.colors.grey[400]}/>
      </Button>
        <Text weight='semibold' size='md'>
           {title}
        </Text>
    </View>
  )
}
const styles = StyleSheet.create({
  container:{
    height:theme.sizes.spacing['2xl'],
    borderBottomWidth:1,
    borderBottomColor:theme.colors.grey[800],
    alignItems:'center',
    justifyContent:'center',
  },
  arrow:{
    position:'absolute',
    left:0,
    backgroundColor:'transparent',
    width:'0%',
    height:'auto',
  },

})

export default Header