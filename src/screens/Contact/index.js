import React from 'react';
import { View, Text, Image } from 'react-native';
import styles from './styles';

const Contact = () => {
    return (
        <View style={styles.container}>
        <View style={styles.header}>
            <Image
            source={require('../../assets/imgs/icon-decorative-com-fundo.png')}
            style={styles.image}
            />
            <View style={styles.textContainer}>
                <Text style={styles.contatosText}>CONTATOS</Text>
                <Text style={styles.contatosText}>Televendas (21) 5555-5555</Text>
                <Text style={styles.contatosText}>WhatsApp (21) 9999-9999</Text>
            </View>
            
            <View style={styles.line}/>
            <View style={styles.textContainer}>
                <Text style={styles.contatosText}>SIGA A DECORATIVE</Text>
            </View>
          </View>
        </View>       
    );
}
export default Contact;