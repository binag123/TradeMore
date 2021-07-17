import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import Login from '../Screens/login'
import Dashboard from '../Screens/dashboard'

const Stack = createStackNavigator()

const StackNavigation = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator
             screenOptions={{
                headerShown: false
              }}
            >
                <Stack.Screen name='Login' component={Login} ></Stack.Screen>
                <Stack.Screen name='Dashboard' component={Dashboard} ></Stack.Screen>
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default StackNavigation