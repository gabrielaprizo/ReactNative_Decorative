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
        height: 350,
        alignSelf: 'center'
    },

    textContainer: {
        flexDirection: 'column',
        marginVertical: '5%',
        marginHorizontal: '5%'
    },

    contatosText: {
        fontFamily: 'sans-serif',
        fontSize: 20,
        textAlign: 'center',
        marginVertical:'3%'    
    },

    line: {
        borderBottomColor: '#CD853F',
        borderBottomWidth: 2
    }
});
export default styles;
