import React, { useState } from 'react'
import { View, Button, Text } from 'react-native'
import  AsyncStorage  from '@react-native-community/async-storage'
// import { signIn } from '../../services/auth'
// import  useAuth  from '../../hooks/auth'
import api from '../../services/api'

const styles= {
  container: {flex: 1, justifyContent: 'center'}
}
const SignIn = () => {
    const [user, setUser] = useState(null)

    async function signIn() {
        const data = await api.post('/auth/login', {
        password: 'rx605hWVVC',
        username: 'user5',
    })
    console.log(response.user);
    setUser(response.user);
    
    //api.defaults.headers['Authorization'] = `Bearer ${response.token}`
    //a partir da auth do user na app, em toda a req para api é enviado header auth e token
    await AsyncStorage.setItem('@RNAuth:user', JSON.stringify(response.user))
    await AsyncStorage.setItem('@RNAuth:token', response.token)
  }

return (
  <View>
  <Text style={styles.title}>
    Adjust the color in a way that looks standard on each platform. On  iOS, the color prop controls the color of the text. On Android, the color adjusts the background color of the button.
  </Text>
  <Button
  onPress={signIn}
  title="Press Me"
/>
</View>
)
}

export default SignIn;