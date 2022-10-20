import { Button, Keyboard, StyleSheet, Text, TouchableWithoutFeedback, View } from "react-native";

import Card from "../components/card";
import Input from "../components/input";
import NumberContainer from "../components/numberContainer";
import React from "react";

const styles = StyleSheet.create({
    container: {
        width: '100%',
        flex: 1,
        alignItems: 'center',
        marginTop: 20,
    },
    title: {
        fontSize: 20,
        fontWeight: "bold",
        textAlign: "center",
    },
    label: {
        fontSize: 14,
        color: '#212121',
        textAlign: 'center',
    },
    inputContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 5,
        marginHorizontal: 20,
    },
    input: {
        width: '100%',
        borderBottomColor: '#2292A4',
        borderBottomWidth: 1,
        minWidth: 90,
        fontSize: 25,
        paddingVertical: 10,
        textAlign: 'center',
    },
    buttonContainer: {
        width: '80%',
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginTop: 20,
        marginHorizontal: 20,
    },
    button: {
        paddingHorizontal: 100,
    },
    summaryContainer: {
        width: '80%',
        height: 150,
        marginHorizontal: 20,
        alignItems: 'center',
        paddingVertical: 10,
        marginTop: 20,
    },
    summaryText: {
        fontSize: 18,
    },
})


const StartGameScreen = ({onStartGame}) => {
    const [number, setNumber] = useState('');
    const [confirmed, setConfirmed] = useState(false);
    const [selectedNumber, setSelectedNumber] = useState(0);
    const onHandleChange = (text) => {
        setNumber(text.replace(/[^0-9]/g, ''));
    };

    const onReset = (text) => {
        setNumber('');
        setSelectedNumber(0);
        setConfirmed(false);
        Keyboard.dismiss()
    };
    const onConfirm = () => {
        const chosenNumber = parseInt(number, 10);
        if(isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber >= 99) return;
        setConfirmed(true);
        setSelectedNumber(chosenNumber);
        setNumber('');
    };

    onHandleStartGame = () => {
        onStartGame(selectedNumber);
    };
    const confirmedOutput = () => confirmed && (
        <Card style={style.summaryContainer}>
            <Text style={style.summaryText}></Text>
            <NumberContainer style={style.numberSelected}>{selectedNumber}</NumberContainer>
            <Button
                title="Start Game"
                onPress={onHandleStartGame}
                color={color.primary}
            />
        </Card>
    )
    return(
        <TouchableWithoutFeedback onPress={() => Keyboard.dismiss}>
        <View style={styles.container}>
            <Text>Start Game Screen</Text>
            <Card style={styles.interactiveContainer}>
                <View style={styles.inputContainer}>
                    <Text style={styles.label}>Choose a number</Text>
                    <Input
                    style={styles.input}
                    keyBoardTyle='numeric'
                    maxLength='2'
                    blurOnSubmit
                    autoCapitalize='none'
                    autoCorrect={false}
                    value={number}
                    onChangeText={(text) => onHandleChange(text)}
                    />
                </View>
                <View style={styles.buttonContainer}>
                        <Button
                        style={styles.button}
                        title="Clean"
                        onPress={onReset}
                        color="#2292A4"
                        />
                        <Button
                        style={styles.button}
                        title="Confirm"
                        onPress={onConfirm}
                        color="#2292A4"
                        />
                </View>
            </Card>
            {confirmedOutput}
        </View>
        </TouchableWithoutFeedback>
    ) 
            
}

export default StartGameScreen;
