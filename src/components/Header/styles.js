import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
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
        marginTop:400
    },

    headerSafeAreaView: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
        width: '100%',
        height: 70,   
    }
});

export default styles;