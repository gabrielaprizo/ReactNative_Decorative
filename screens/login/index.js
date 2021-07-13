import React, { useState } from 'react';
import { ScrollView, ImageBackground, View, Text } from 'react-native';
import styles from './styles';
import { TextInput, Button } from 'react-native-paper';
import LinearGradient from 'react-native-linear-gradient';
const Login = () => {
    const [credenciais, setCredenciais] = useState({
        emais: '',
        senha: '',
    })

    return (
        <ScrollView style={styles.container}>
            <ImageBackground style={styles.capa}
                source={require('../../src/assets/imgs/capalogin.png')}>
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
                        label="Email ou número de Telefone"
                        style={styles.marginBottom}
                        value={credenciais.email}
                        onChangeText={text => setCredenciais({...credenciais, email: text})}
                    />
                    <TextInput
                        label="Senha"
                        mode="flat"
                        secureTextEntry
                        style={styles.marginBottom}
                        value={credenciais.senha}
                        onChangeText={text => setCredenciais({...credenciais, senha: text})}
                    />
                    <Button 
                      mode="contained"
                      style={styles.marginBottom}
                      onPress={() => console.log('Pressed')}>
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