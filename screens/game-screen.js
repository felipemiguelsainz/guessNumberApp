import { StyleSheet, Text, View } from 'react-native';

import React from 'react';

const styles = StyleSheet.create({
    container: {
        flex: 1,
    }
});

const GameScreen = ({ selectedNumber }) => {
    return(
        <View style={styles.container}>
            <Text>Game Screen</Text>
        </View>
    )

}