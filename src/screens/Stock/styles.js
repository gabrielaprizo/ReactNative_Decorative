import { StyleSheet } from "react-native";

const styles = StyleSheet.create({

    container: {
        flex: 1,
        width: '100%',
        backgroundColor: '#FAF5D9'   
    },

    image: {
        width: '100%',
        height: 100,
        alignSelf: 'center',
        marginBottom: 20   
    },

    text: {
        color: '#000',
        fontSize: 18,
        fontFamily: 'sans-serif-medium'   
    },
    
    header: {
        position: 'absolute',
        top: 8,
        zIndex: 999,
        marginBottom:8,
        marginLeft: 330,
        marginTop:300
    }   
});

export default styles;