import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    text: {
        color: '#000',
        fontSize: 23,
        fontFamily: 'sans-serif-medium'   
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