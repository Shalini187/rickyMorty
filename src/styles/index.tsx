import { Dimensions, StyleSheet } from "react-native";

const { height: windowHeight, width: windowWidth } = Dimensions.get('screen');

export let screen = StyleSheet.create({
    layout: {
        flex: 1,
        height: windowHeight
    },
    text: {
        fontSize: 24,
        color: '#01579B',
        fontWeight: '900',
        textDecorationLine: 'underline'
    },
    container: {
        height: 50,
        flexDirection: 'row',
        marginHorizontal: 16,
        alignItems: 'center',
        maxWidth: windowHeight,
        justifyContent: 'space-between',
    }
});

export const listStyle = StyleSheet.create({
    container: {
        borderColor: '#c3c3c3',
        flexDirection: 'row',
        borderRadius: 20,
        borderWidth: 1,
        padding: 16,
        margin: 4
    },
    status: {
        fontSize: 16,
        paddingVertical: 8,
        fontWeight: 'bold'
    },
    text: {
        fontSize: 18,
        fontWeight: '700'
    },
    left: {
        width: '35%',
        alignSelf: 'center'
    },
    right: {
        width: '65%'
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    }
});

export const detail = StyleSheet.create({
    text: {
        fontSize: 18,
        fontWeight: '900',
        textTransform: 'uppercase',
    },
    divider: {
        borderWidth: 0.75,
        borderColor: '#c3c3c3'
    },
    container: {
        justifyContent: 'space-between',
        alignItems: 'center',
        alignSelf: 'center',
        flexDirection: 'row',
        width: '100%',
        height: 40,
    },
    layout: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 8,
        justifyContent: 'space-between',
    },
    align: {
        flex: 1,
        alignItems: 'center',
        flexDirection: 'row',
        paddingHorizontal: 8,
        justifyContent: 'space-between',
    }
});

export const modalStyle = StyleSheet.create({
    centeredView: {
        padding: 16,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    number: {
        color: '#01579B',
        fontSize: 18,
        top: '40%'
    },
    keys: {
        textTransform: 'uppercase',
        fontSize: 16,
        fontWeight: '900'
    },
    textLayout: {
        width: '85%',
        paddingVertical: 4,
        paddingHorizontal: 8,
        flexDirection: 'row'
    },
    layout: {
        flex: 1,
        flexDirection: 'column'
    },
    modalView: {
        paddingVertical: 16,
        paddingHorizontal: 42,
    },
    sections: {
        paddingVertical: 16,
        paddingBottom: 16
    },
    textStyle: {
        fontWeight: '900',
        color: '#01579B',
        textTransform: 'capitalize',
        fontSize: 24
    },
    heading: {
        fontSize: 24,
        fontWeight: '900',
        paddingBottom: 16,
        textDecorationLine: 'underline',
    },
    modalText: {
        fontWeight: '900',
        fontSize: 18,
        color: 'white',
        paddingHorizontal: 8,
        paddingVertical: 4
    },
    close: {
        borderWidth: 1,
        height: 32,
        width: 32,
        borderRadius: 100,
        borderColor: 'red',
        alignSelf: 'center',
        backgroundColor: 'red'
    },
});

