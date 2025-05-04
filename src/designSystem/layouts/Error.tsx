import React from 'react'
import { SafeAreaView, Text, TouchableOpacity, View } from 'react-native'
import componentStyles from '../../assets/styles/components';

export type Props = { error: Error; resetError: () => void }

const FallbackComponent = (props: Props) => (
  <SafeAreaView style={componentStyles.econtainer}>
    <View style={componentStyles.econtent}>
      <Text style={componentStyles.etitle}>Oops!</Text>
      <Text style={componentStyles.esubtitle}>{"There's an error"}</Text>
      <Text style={componentStyles.eerror}>{props.error.toString()}</Text>
      <TouchableOpacity style={componentStyles.ebutton} onPress={props.resetError}>
        <Text style={componentStyles.ebuttonText}>Try again</Text>
      </TouchableOpacity>
    </View>
  </SafeAreaView>
)

export default FallbackComponent
