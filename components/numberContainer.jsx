import { StyleSheet, Text, View } from 'react-native';

import React from 'react';

const styles = StyleSheet.create({
    container: {},
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
