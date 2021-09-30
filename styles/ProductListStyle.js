import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    shadow: {
        elevation: 4
    },
    container: {
        marginBottom: 20,
        borderRadius: 4,
        backgroundColor: '#FFF',
        overflow: 'hidden'
    },
    groupIMG: {
        marginTop: 5,
        alignItems: 'center'
    },
    imgProduct: {
        height: 150,
        width: 150,
        borderTopLeftRadius: 4,
        borderBottomLeftRadius: 4
    },
    info: {
        padding: 8
    },
    textNameProduct: {
        fontSize: 16,
        marginBottom: 8
    },
    priceRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    price: {
        fontSize: 16,
        color: '#888'
    },
    cartText: {
        textTransform: 'uppercase',
        fontSize: 16,
        color: '#2f95dc'
    }
});

export default styles;