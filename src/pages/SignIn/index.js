import React from 'react'
import { View, Button, Text } from 'react-native'
// import { signIn } from '../../services/auth'
// import  useAuth  from '../../hooks/auth'

const styles= {
  container: {flex: 1, justifyContent: 'center'}
}
const SignIn = () => {

//   const {signIn} = useAuth()

  function handleSignIn() {
  // const res = await signIn()
  //   console.log(res)
    signIn();
  }

return (
  <View>
  <Text style={styles.title}>
    Adjust the color in a way that looks standard on each platform. On  iOS, the color prop controls the color of the text. On Android, the color adjusts the background color of the button.
  </Text>
  <Button
  onPress={handleSignIn}
  title="Press Me"
/>
</View>
)
}

export default SignIn;