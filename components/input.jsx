import { StyleSheet, Text, TextInput, View } from 'react-native';

import React from 'react';

const styles = StyleSheet.create({

    input: {
        height: 30,
        borderBottomColor: 'grey',
        borderBottomWidth: 1,
        marginVertical: 20,
    },
    
});
const Input = ({style, ...props}) => {
    return(
        <TextInput {...props} style={{ ...style.input, ... style}}/>
    )
}

export default Input;

