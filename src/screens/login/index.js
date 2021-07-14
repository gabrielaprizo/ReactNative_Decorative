import React, { useState } from 'react';
import { ScrollView, ImageBackground, View, Text } from 'react-native';
import styles from './styles';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { TextInput, Button } from 'react-native-paper';
import LinearGradient from 'react-native-linear-gradient';


    const Login  = ({navigation}) => {
        const [email, setEmail] = useState('');
        const [senha, setSenha] = useState('');

        async function logar() {
            const usuario = {
              email, senha
            }
            await AsyncStorage.setItem("usuario", JSON.stringify(usuario));
          }

    return (
        <ScrollView style={styles.container}>
            <ImageBackground style={styles.capa}
                source={require('../../assets/imgs/capalogin.png')}>
                    {/*<Image  
                    style={styles.logo}
                    resizeMode='contain'
                    source={{uri: 'https://i.imgur.com/4xN7wB8.png'}} />*/}
                    <LinearGradient 
                        style={styles.gradient} 
                        colors={['rgba(0,0,0,1)', 'rgba(0,0,0,1)']} />
            </ImageBackground>
                <View>
                    <TextInput
                        mode="flat"
                        label="Email"
                        style={styles.marginBottom}
                        value={email}
                        onChangeText={text => setEmail(text)}
                    />
                    <TextInput
                        label="Senha"
                        mode="flat"
                        secureTextEntry
                        style={styles.marginBottom}
                        value={senha}
                        onChangeText={text => setSenha(text)}
                    />
                    <Button 
                      mode="contained"
                      style={styles.marginBottom}
                      onPress={(logar) => {
                        navigation.navigate('Home')
                    }}>
                        Entrar
                    </Button>
                    <Button 
                      style={styles.marginBottom}
                      onPress={() => console.log('Pressed')}
                      theme={{ colors: { primary: '#fff'}}}>
                        Esqueci a Senha
                    </Button>
                    <Text style={styles.textSmall}>
                    O acesso está protegido pelo Google reCAPTCHA para garantir que você não é um robo. Saiba mais.
                    </Text>
                </View>
        </ScrollView>
    )
};

export default Login;