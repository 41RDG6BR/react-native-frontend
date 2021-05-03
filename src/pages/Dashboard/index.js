import React from 'react'
import { View, Button, Text } from 'react-native'
// import list from '../../services/api'
// import useAuth from '../../hooks/auth'

const styles= {
  container: {flex: 1, justifyContent: 'center'}
}
const Dashboard = () => {

//   const {signOut} = useAuth()

  function handleSignOut() {
  // const res = await signIn()
  //   console.log(res)
    signOut();
  }

return (
  <View>
    <Text>
      {/* {list} */}
      Rodrigo
    </Text>
  <Button
  onPress={handleSignOut}
  title="Sign out"
/>
</View>
)
}

export default Dashboard;