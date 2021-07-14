import React from 'react';
import Login from './src/screens/login';
import Home from './src/screens/Home';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

const Routes = () => {
    return(
        <NavigationContainer>
            <Stack.Navigator initialRouteName='Login'>
                <Stack.Screen 
                options={{headerShown: false}} 
                name='Login' 
                component={Login}/>

                <Stack.Screen 
                options={{headerShown: false}} 
                name='Home' 
                component={Home}/>
            </Stack.Navigator>
        </NavigationContainer>
    );
}
export default Routes;