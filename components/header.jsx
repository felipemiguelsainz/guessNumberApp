import { StyleSheet, Text, View } from 'react-native'

import React from 'react';
import { colors } from '../constants/colors'

const styles = StyleSheet.create({
    header: {
        height: 100,
        alignItems: 'center',
        paddingTop: 50,
        paddingBottom: 10,
        backgroundColor: colors.primary,
    },
    title: {
        fontSize: 20,
        color: '#212121',
        fontWeight: 'bold',
    },
})

const Header = ({title}) => {
    return(
        <View style={styles.header}>
            <Text style={styles.title}>{title}</Text>
        </View>
    )
}

export default Header;