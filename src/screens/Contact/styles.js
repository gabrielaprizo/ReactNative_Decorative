import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        backgroundColor: '#FAF7C5',   
    },

    header: {
        marginBottom:8
    },

    image: {
        width: '100%',
        height: 200,
        alignSelf: 'center'
    },

    textContainer: {
        flexDirection: 'column',
        marginVertical: '3%',
        marginHorizontal: '5%'
    },

    contatosText: {
        color: '#222',
        fontFamily: 'sans-serif',
        fontSize: 25,
        textAlign: 'center'
    },
    
    textSubTitle: {
        color: '#222',
        textAlign:'center',
        fontSize: 20
    },

    textDescription: {
        color: '#CD853F',
        fontSize: 14,
        textAlign: 'center'
    },

    line: {
        borderBottomColor: '#CD853F',
        borderBottomWidth: 2
    },
});
export default styles;