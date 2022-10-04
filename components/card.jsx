import { StyleSheet, Text, View } from 'react-native';

import React from "react";

const styles = StyleSheet.create({
    container: {
        margin: 5,
        paddingVertical: 40,
        width: '80%',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.23,
        shadowRadius: 2.62,
        borderRadius: 5,
        elevation: 4,
        backgroundColor: '#FFFFFF',
    },
});

const Card = ({children, style}) => {
    return(
        <View style={{ ...styles.container, ...style}}>
            {children}
        </View>
    )
}

export default Card;
