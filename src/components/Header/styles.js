import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    text: {
        color: 'beige',
        fontSize: 16,
        fontFamily: 'sans-serif'   
    },
    
    header: {
        position: 'absolute',
        top: 8,
        zIndex: 999,
        marginBottom:8
    },

    headerSafeAreaView: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
        width: '100%',
        height: 70,   
    }
});

export default styles;