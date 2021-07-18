import React from 'react';
import { View, Text, Image } from 'react-native';
import Header from '../../components/Header';
import styles from './styles';

const Stock = () => {
    return (
        <View style={styles.container}>
            <Header/> 
            <Image 
            source={{uri: 'https://i.pinimg.com/736x/96/c2/2f/96c22fcb462a28236c330f8d6c2fa9ed.jpg'}}
            style={styles.image}
            /> 
            <View></View>
            <View>
                <Text style={styles.text}>Era uma vez, uma página de cadastro de produtos...</Text>
                <Text style={styles.text}>Fim!</Text>
            </View>
        </View>
    );
}
export default Stock;