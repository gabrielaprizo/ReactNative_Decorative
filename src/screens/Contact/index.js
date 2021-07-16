import React from 'react';
import { View, Text, Image, Linking, ScrollView } from 'react-native';
import styles from './styles';
import { FAB, Portal, Provider } from 'react-native-paper';
import Formulario from '../../components/Formulario';


const Contact = () => {
    const [state, setState] = React.useState({ open: false });
    const onStateChange = ({ open }) => setState({ open });
    const { open } = state;

  
    return (
        <ScrollView>
            <View style={styles.container}>
                <View style={styles.header}>
                    <Image
                    source={require('../../assets/imgs/contato.jpg')}
                    style={styles.image}
                    />
                    <View style={styles.textContainer}>
                        <Text style={styles.contatosText}>CONTATOS</Text>
                    </View>
                        <View style={styles.line}/>
                        <View style={styles.textContainer}>
                            <Text style={styles.textSubTitle}>Escreva para a Decorative</Text>
                            <Text style={styles.textDescription}>Contacte-nos por email preenchendo esse formulário</Text>
                        </View>
                </View>
                
                <Formulario/>

            <Provider>
                <Portal>
                    <FAB.Group fabStyle={{backgroundColor: "#222"}}
                        open={open}
                        icon={open ? 'cellphone' : 'cellphone'}
                        actions={[
                            { icon: 'gmail', onPress: () => Linking.openURL('https://www.google.com/intl/pt/gmail/about/#') },
                            {
                            icon: 'whatsapp',
                            onPress: () => Linking.openURL('https://www.whatsapp.com/?lang=pt_br'),
                            },
                            {
                            icon: 'facebook',
                            onPress: () => Linking.openURL('https://www.facebook.com/'),
                            },
                            {
                            icon: 'instagram',
                            onPress: () => Linking.openURL('https://www.instagram.com/'),
                            small: false,
                            },
                        ]}
                            onStateChange={onStateChange}
                            onPress={() => {
                                if (open) {
                                // do something if the speed dial is open
                                }
                            }}
                    />
                </Portal>
            </Provider>
            </View>
        </ScrollView>
    );
}
export default Contact;