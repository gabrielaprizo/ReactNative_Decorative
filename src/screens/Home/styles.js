import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        backgroundColor: '#FAF5D9'   
    },

    header: {
        marginBottom:8
    },

    image: {
        width: '100%',
        height: 100,
        alignSelf: 'center'   
    },

    textContainer: {
        flexDirection: 'row',
        marginVertical: '5%',
        marginHorizontal: '5%'
    },

    favoritosText: {
        fontFamily: 'sans-serif',
        fontSize: 20,
        textAlign: 'center',
        marginLeft: '18%'
    },

    decorativeText: {
        fontFamily: 'sans-serif',
        fontSize: 20,
        textAlign: 'center',
        marginLeft: '4%',
        color: '#CD853F'
    },

    subText: {
        fontFamily: 'sans-serif-light',
        fontSize: 16,
        textAlign: 'center',
        marginBottom: 20         
    },

    destaqueText: {
        fontFamily: 'sans-serif',
        fontSize: 20,
        textAlign: 'center',
        marginLeft: '4%',
        marginVertical: '5%'
    },

    line: {
        borderBottomColor: '#FABA60',
        borderBottomWidth: 2
    }
});
export default styles;