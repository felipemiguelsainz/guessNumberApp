import { StyleSheet, Text, View } from 'react-native';

import React from 'react';

const styles = StyleSheet.create({
    container: {
        borderWidth: 2,
        padding: 30,
        borderRadius: 10,
        marginVertical: 10,
        alignItems: 'center',
        justifyContent: 'center',
    },
    number: {
        fontSize: 25,
        fontWeight: 'bold',
    },
});

const NumberContainer = ({ children }) => {
    return(
        <View style={styles.container}>
            <Text style={styles.number}>{children}</Text>
        </View>
    )
};

export default NumberContainer;
