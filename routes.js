import React from 'react';
import Login from './src/screens/login';
import Home from './src/screens/Home';
import Contact from './src/screens/Contact';
import Detail from './src/screens/Detail';
import Stock from './src/screens/Stock';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';


const Stack = createStackNavigator();
const Tab =  createMaterialBottomTabNavigator()

const HomeTabs = () =>{
    return (
        <Tab.Navigator 
        initialRouteName='Home'
        activeColor={'#fff'}
        shifting={false}
        barStyle={{backgroundColor:'#141414'}}
        >
            <Tab.Screen 
            name='Home' 
            component={Home}
            options={{
                tabBarLabel:'Início',
                tabBarIcon: ({color}) => (
                    <Icon name='home' color={color} size={22} />
                )
            }}
            />
            <Tab.Screen 
            name='Login' 
            component={Login}
            options={{
                tabBarLabel:'Adimin',
                tabBarIcon: ({color}) => (
                    <Icon name='account-outline' color={color} size={22} />
                )
            }}
            />
            <Tab.Screen 
            name='Contact' 
            component={Contact}
            options={{
                tabBarLabel:'Contatos',
                tabBarIcon: ({color}) => (
                    <Icon name='email-edit-outline' color={color} size={22} />
                )
            }}
            />  
        </Tab.Navigator>
    );
}

const Routes = () => {
    return(
        <NavigationContainer>
            <Stack.Navigator initialRouteName='Home'>

                <Stack.Screen 
                options={{headerShown: false}} 
                name='Home' 
                component={HomeTabs}/>

                <Stack.Screen 
                name='Detail' 
                component={Detail}/>
                
                <Stack.Screen 
                options={{headerShown: false}} 
                name='Stock' 
                component={Stock}/>

            </Stack.Navigator>
        </NavigationContainer>
    );
}
export default Routes;