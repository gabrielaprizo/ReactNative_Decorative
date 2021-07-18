import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        backgroundColor: '#FAF5D9'  
    },

    image: {
        width: '100%',
        height: 300,
        alignSelf: 'center',
        marginBottom: 20  
    },

    price: {
        fontSize: 20,
        fontFamily: 'sans-serif',
        marginHorizontal: '2%'
    },

    title: {
        fontSize: 23,
        fontFamily: 'sans-serif-medium',
        marginHorizontal: '2%'   
    },

    dotContainer: {
        flexDirection: 'row'
    },

    texTitle: {
        fontSize: 20,
        fontFamily: 'sans-serif-medium',
        marginHorizontal: '2%',
        marginVertical: '5%'   
    },

    textDes: {
        fontSize: 18,
        fontFamily: 'sans-serif',
        marginHorizontal: '2%'
    },

    textDimen: {
        fontSize: 16,
        fontFamily: 'sans-serif-medium',
        marginHorizontal: '2%',
        marginVertical: '2%'
    },

    dimen: {
        fontSize: 16,
        fontFamily: 'sans-serif',
        marginHorizontal: '2%'
    },

    line: {
        borderBottomColor: '#FABA60',
        borderBottomWidth: 2,
        marginVertical: '8%'
    }
})
export default styles;