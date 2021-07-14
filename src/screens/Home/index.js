import React from 'react';
import {Text, View, ScrollView, Image} from 'react-native';
import Products from '../../components/Products'
import { useNavigation } from '@react-navigation/native';
import styles from './styles';


const Home = () => {

    const navigation = useNavigation()

    return(
    <View style={styles.container}>
        <View style={styles.header}>
            <Image
            source={require('../../assets/imgs/capahome.png')}
            style={styles.image}
            />
            <View style={styles.textContainer}>
                <Text style={styles.text}>PRODUTOS EM DESTAQUE</Text>
            </View>
        </View>
        <View style={styles.line}/>
        <ScrollView>
            <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
                <Products img={{uri: 'https://th.bing.com/th/id/OIP.CtW80KFOHQVifsBKmBH5SAHaFu?pid=ImgDet&rs=1'}}
                cost="R$3.599,00" onClick={() => navigation.navigate("Detail")}>
                    Sofá 2 lugares
                </Products>
                <Products img={{uri: 'https://images.madeiramadeira.com.br/product/images/41071548-mesa-lateral-40cmx40cm-joo-siena-moveis-7899880043091-1_zoom-1500x1500.jpg'}}
                cost="R$499,00" onClick={() => alert("Testando")}>
                    Mesa lateral baixa
                </Products>
                </View>
                <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
                <Products img={{uri: 'https://th.bing.com/th/id/OIP.CtW80KFOHQVifsBKmBH5SAHaFu?pid=ImgDet&rs=1'}}
                cost="R$3.599,00" onClick={() => navigation.navigate("Detail")}>
                    Sofá 2 lugares
                </Products>
                <Products img={{uri: 'https://images.madeiramadeira.com.br/product/images/41071548-mesa-lateral-40cmx40cm-joo-siena-moveis-7899880043091-1_zoom-1500x1500.jpg'}}
                cost="R$499,00" onClick={() => alert("Testando")}>
                    Mesa lateral baixa
                </Products>
                </View>
                <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
                <Products img={{uri: 'https://www.ideastore.com.br/thumbs/produtos/882banqueta_alta_encosto_palha_azul_02thumb_w800.jpg?0.1.i'}}
                cost="R$479,00" onClick={() => alert("Testando")}>
                    Banqueta alta encosto de palha
                </Products>
                <Products img={{uri: 'https://www.ideastore.com.br/thumbs/produtos/882banqueta_alta_encosto_palha_azul_02thumb_w800.jpg?0.1.i'}}
                cost="R$479,00" onClick={() => alert("Testando")}>
                    Banqueta alta encosto de palha
                </Products>
                </View>        
        </ScrollView>
    </View>
    );   
}
export default Home;