import React from 'react';
import Login from './src/screens/login';
import Home from './src/screens/Home';
import Profile from './src/screens/Profile';
import Cart from './src/screens/Cart';
import Contact from './src/screens/Contact';
import Detail from './src/screens/Detail';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { detailed } from 'yargs-parser';
import Products from './src/components/Products';


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
            name='Detail' 
            component={Detail}
            options={{
                tabBarLabel:'Produtos',
                tabBarIcon: ({color}) => (
                    <Icon name='view-list-outline' color={color} size={22} />
                )
            }}
            />
            <Tab.Screen 
            name='Cart' 
            component={Cart}
            options={{
                tabBarLabel:'Carrinho',
                tabBarIcon: ({color}) => (
                    <Icon name='cart-outline' color={color} size={22} />
                )
            }}
            />
            <Tab.Screen 
            name='Profile' 
            component={Profile}
            options={{
                tabBarLabel:'Perfil',
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
            <Stack.Navigator initialRouteName='Login'>
                <Stack.Screen 
                options={{headerShown: false}} 
                name='Login' 
                component={Login}/>

                <Stack.Screen 
                options={{headerShown: false}} 
                name='Home' 
                component={HomeTabs}/>
                
                <Stack.Screen 
                options={{headerShown: false}} 
                name='Perfil' 
                component={Profile}/>
                
                <Stack.Screen 
                options={{headerShown: false}} 
                name='Carrinho' 
                component={Cart}/>
                
                <Stack.Screen 
                options={{headerShown: false}} 
                name='Produtos' 
                component={Detail}/>
            </Stack.Navigator>
        
        </NavigationContainer>
    );
}
export default Routes;