import React from 'react';
import {Text, View, TouchableOpacity, Image, Button} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import styles from './styles';
import { useNavigation } from '@react-navigation/native';

const Header = () => {
    const navigation = useNavigation()

    return (
        <LinearGradient style={styles.header} colors={['rgba(0,0,0,0)', 'rgba(0,0,0,0)']}>
            <View>
                <TouchableOpacity onPress={() => navigation.navigate("Login")}>
                    <Text style= {styles.text} >Entrar</Text>
                </TouchableOpacity>
            </View>
        </LinearGradient>
    );
}
export default Header;