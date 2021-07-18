import { StyleSheet } from "react-native";

const styles = StyleSheet.create({

    capa: {
        backgroundColor: "#222",
        flex: 1,
        height: 400,
        width: '100%',
        alignSelf: 'center'
    },

    container: {
        backgroundColor: "#222",
        flex: 1,
        backgroundColor: '#222'
    },

    bgDark: {
        backgroundColor: '#CD853F',
        flex: 1,
        justifyContent: 'center',
        padding: 20,
    },

    logo: {
        alignSelf: "center"
    },

    marginBottom: {
        marginBottom: 20,
        marginHorizontal: '5%'
    },

    buttom: {
        justifyContent: "center",
        alignItems: "center",
        marginHorizontal: '5%',
        marginVertical: '3%'
    },

    text: {
        alignSelf: "center",
        color: "#fff",
        fontSize: 23
    },

    textSmall: {
        color: '#fff',
        textAlign: 'center',
        marginTop: 0,
        marginBottom: 50
    }    
});
export default styles;