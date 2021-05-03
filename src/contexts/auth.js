import React, { createContext, useState, useEffect } from 'react'
import  AsyncStorage  from '@react-native-community/async-storage'
// import * as auth from '../services/auth'
import api from '../services/api'

const AuthContext = createContext();

export const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null)
    const [ loading, setLoading] = useState(true)

  useEffect(()=>{
    async function loadStoragedData(){

      const storagedUser = await AsyncStorage.getItem('@RNAuth:user')
      const storagedToken = await AsyncStorage.getItem('@RNAuth:token')

      //Caso o usuario der reload na pagina 
      // api.defaults.headers.Authorization = `Bearer ${storagedToken}`
      
      if(storagedUser && storagedToken) {
        setUser(JSON.parse(storagedUser))
        setLoading(false)
      }
    }

      loadStoragedData()
  }, [])

  const signIn = async () => {
    const response = await api.post('/auth/login', {
        password: 'rx605hWVVC',
        username: 'user5'
    });
    console.log(response.user);
    setUser(response.user);
    
    //api.defaults.headers['Authorization'] = `Bearer ${response.token}`
    //a partir da auth do user na app, em toda a req para api é enviado header auth e token
    await AsyncStorage.setItem('@RNAuth:user', JSON.stringify(response.user))
    await AsyncStorage.setItem('@RNAuth:token', response.token)
  }

  function signOut() {
    AsyncStorage.clear().then(() => {
      setUser(null)
    })
  }
  // const signOut = async () => {
  //   await AsyncStorage.clear()
  //   setUser(null);
  // }

  return (
    <AuthContext.Provider 
      value={{
        signed: !!user, 
        user, 
        loading,
        signIn, 
        signOut
    }}>
      {children}
    </AuthContext.Provider>
  )
}


export default AuthContext;