import React from 'react';
import { useForm } from 'react-hook-form';
import { TextInput } from 'react-native-paper';
import { TouchableOpacity, View, Text } from 'react-native';
import styles from './style';


export default function Formulario() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = data => console.log(data);
  const onPress = () => ({alert})
  console.log(errors);
  
  return (
        <View onSubmit={handleSubmit(onSubmit)}>
        <TextInput style={styles.form} type="text" placeholder="Nome" {...register("Nome", {})} />
        <TextInput style={styles.form} type="email" placeholder="Email" {...register("Email", {})} />
        <TextInput style={styles.form} type="text" placeholder="Mensagem" {...register("Mensagem", {})} />
        <TouchableOpacity
        style={styles.button}
        onPress={onPress}
      >
        <Text style={styles.text}>Enviar 
        </Text>
      </TouchableOpacity>
      </View>
  );
}