import { StyleSheet } from "react-native";

const styles = StyleSheet.create({

    container: {
        flex: 1,
        width: '100%',
        backgroundColor: '#EBB75F'   
    },

    image: {
        width: '100%',
        height: 400,
        alignSelf: 'center',
        marginBottom: 20   
    },

    text: {
        color: '#000',
        fontSize: 23,
        fontFamily: 'sans-serif-medium',
        marginHorizontal: '8%',
        marginVertical: '15%'   
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