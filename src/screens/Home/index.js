import React from 'react';
import {Text, View, ScrollView, Image} from 'react-native';
import Products from '../../components/Products'
import { useNavigation } from '@react-navigation/native';
import styles from './styles';
import Header from '../../components/Header';


const Home = () => {
    const navigation = useNavigation()

    return(
    <View style={styles.container}>
        <Header/>
        <View style={styles.header}>
            <Image
            source={require('../../assets/imgs/capahome.png')}
            style={styles.image}
            />
            <View style={styles.textContainer}>
                <Text style={styles.favoritosText}>FAVORITOS</Text>
                <Text style={styles.decorativeText}>DECORATIVE</Text>
            </View>
            <View>
                <Text style={styles.subText}> Produtos da coleção Decorative escolhidos a dedo especialmente para você! </Text>
            </View>
        </View>

        <View style={styles.line}/>
        <ScrollView>
            <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
                <Products img={require('../../assets/imgs/sofa2.png')}
                cost="R$3.599,00" onClick={() => navigation.navigate("Detail")}>
                    Sofá 2 lugares
                </Products>
                <Products img={require('../../assets/imgs/abajur.png')}
                cost="R$799,00" onClick={() => alert("Testando")}>
                    Luminária de chão
                </Products>
            </View>

            <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
                <Products img={require('../../assets/imgs/espelho.png')}
                cost="R$199,00" onClick={() => navigation.navigate("Detail")}>
                    Espelho oval
                </Products>
                <Products img={require('../../assets/imgs/bancoalto2.png')}
                cost="R$270,00" onClick={() => alert("Testando")}>
                    Banqueta alta
                </Products>
            </View>

            <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
                <Products img={require('../../assets/imgs/poltronagiratoria.png')}
                cost="R$589,00" onClick={() => alert("Testando")}>
                    Poltrona giratória
                </Products>
                <Products img={require('../../assets/imgs/cadeira2.png')}
                cost="R$899,00" onClick={() => alert("Testando")}>
                    Conjundo de cadeiras
                </Products>
            </View> 
            
            <View>
                <Text style={styles.destaqueText}>PRODUTOS EM DESTAQUE</Text>
            </View>
            <View style={styles.line}/>

            <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
                <Products img={require('../../assets/imgs/luminaria3.png')}
                cost="R$789,00" onClick={() => alert("Testando")}>
                    Luminária com prateleira
                </Products>
                <Products img={require('../../assets/imgs/jogojantar.png')}
                cost="R$3.689,00" onClick={() => alert("Testando")}>
                    Conjunto para sala de jantar
                </Products>
            </View>  

            <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
                <Products img={require('../../assets/imgs/cadeira3.png')}
                cost="R$1.599,00" onClick={() => alert("Testando")}>
                    Conjunto mesa com 2 cadeiras
                </Products>
                <Products img={require('../../assets/imgs/mesinhalateral.png')}
                cost="R$479,00" onClick={() => alert("Testando")}>
                    Mesinha auxiliar lateral
                </Products>
            </View>

            <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
                <Products img={require('../../assets/imgs/cadeira1.png')}
                cost="R$199,00" onClick={() => alert("Testando")}>
                    Cadeira eiffel
                </Products>
                <Products img={require('../../assets/imgs/mesacentro.png')}
                cost="R$799,00" onClick={() => alert("Testando")}>
                    Mesa de centro quadrada
                </Products>
            </View>
        </ScrollView>
    </View>
    );   
}
export default Home;