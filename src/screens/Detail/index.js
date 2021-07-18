import React from 'react';
import { View, Text, Image, ScrollView, TouchableOpacity } from 'react-native';
import styles from './styles';
import Dot from '../../components/Dot';

const Detail = ({navigation}) => {

    navigation.setOptions({
        headerTitle: "Sofá 2 lugares"
    })

    return (
        <ScrollView style={styles.container}>
            <Image 
            source={require('../../assets/imgs/sofa2.png')}
            style={styles.image}
            resizeMode='cover'
            />

            <View>
                <View>
                    <Text style={styles.price}>R$3.599,00</Text>
                </View>
                <View opacity={0.5}>
                    <Text style={styles.title}>Sofá Judith 2 lugares</Text>
                </View>
                <View style={styles.dotContainer}>
                    <Dot color="#000"/>
                    <Dot color="#000039"/>
                    <Dot color="#573D0A"/>
                    <Dot color="#F0D275"/>    
                </View>
                
                <View style={styles.texContent}>
                    <Text style={styles.texTitle}>Descrição</Text>
                    <Text style={styles.textDes}>
                    Sofá 2 Lugares feito com madeira reflorestada e base em madeira. A almofada do encosto é preenchida com manta siliconada que garante a maciez perfeita para envolver as costas do usuário.
                    </Text>
                    <Text style={styles.texTitle}>Dimensões</Text>
                    <Text style={styles.textDimen}>Altura</Text>
                    <Text style={styles.dimen}>95 cm</Text>
                    <Text style={styles.textDimen}>Largura</Text>
                    <Text style={styles.dimen}>230 cm</Text>
                    <Text style={styles.textDimen}>Profundidade</Text>
                    <Text style={styles.dimen}>85 cm</Text>
                </View>
                <View style={styles.line}/>
            </View>
        </ScrollView>
    );
}
export default Detail;