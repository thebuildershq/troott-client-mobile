import { StyleSheet, View } from 'react-native'
import React from 'react'
import ScreenView from '@/components/ui/screenview'
import Text from '@/components/ui/text'
import { theme } from '@/constants/theme'
import { Interests } from '@/components/onboarding'

const SelectInterests = () => {
  return (
    <ScreenView screenStyle={styles.screen}>
      <View style={styles.headerContainer}>
        <Text size="xl" color="white" weight="medium">
          What topics interest you
        </Text>
        <Text size="sm">Pick 5 favorite intersts to customize your home feed</Text>
      </View>
      <Interests/>
      {/* <FavoriteMinisters /> */}

    </ScreenView>
  )
}

export default SelectInterests

const styles = StyleSheet.create({
    screen:{
        marginTop:theme.sizes.spacing["2xl"]
    },
    headerContainer:{
        gap:10
    }
});
