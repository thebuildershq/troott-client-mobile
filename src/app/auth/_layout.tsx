import { Slot, Stack } from 'expo-router'

const AuthLayout = () => {
  return (
    <Stack screenOptions={{
      headerShown:false,
      contentStyle:{
        backgroundColor:'black'
      }
    }}>
      <Stack.Screen name='create-account' options={{
        presentation:'formSheet'
      }}/>
    </Stack>
  )
}

export default AuthLayout