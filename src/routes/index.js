import React from 'react'
// import { View, ActivityIndicator } from 'react-native'
// import  useAuth  from '../hooks/auth'

// import AuthRoutes from './auth.routes'
import AppRoutes from './app.routes'

const Routes = () => {
//   const {signed, loading} = useAuth()

//   console.log(signed)
  
//   if(loading) {
//     return (
//       <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
//         <ActivityIndicator size='large' color='#666' />
//       </View>
//     )
//   }
    return <AppRoutes />
//   return signed ? <AppRoutes /> : <AuthRoutes />
};

export default Routes