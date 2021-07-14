import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import styles from '../Products/styles';


const Products = (props) => {

    function filterDesc(desc){
        if(desc.length < 27){
            return desc;
        }
        return `${desc.substring(0, 22)}...`;
    }
    return (
        <TouchableOpacity style={styles.container} onPress={props.onClick}>
            <Image
            source={props.img}
            style={styles.productsImg}
            />
            <Text style={styles.productsText}>
                {filterDesc(props.children)}
            </Text>
            <Text style={styles.productsText}> {props.cost} </Text> 
        </TouchableOpacity>        
    );
}
export default Products;