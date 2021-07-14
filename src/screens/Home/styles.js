import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        backgroundColor: '#FFFAF0',   
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
        flexDirection: 'row',
        marginVertical: '5%',
        marginHorizontal: '5%'
    },

    text: {
        fontFamily: 'sans-serif-light',
        fontSize: 23,
        textAlign: 'center',
        marginLeft: '8%'
    },

    line: {
        borderBottomColor: '#CD853F',
        borderBottomWidth: 2,
    }
});
export default styles;