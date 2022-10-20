import { StyleSheet, Text, View, Button } from 'react-native';

import Card from '../components/card';
import NumberContainer  from '../components/numberContainer'
import React, { useEffect, useRef, useState } from 'react';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
        alignItems: 'center',
    },
    card: {
        marginTop: 20,
        marginHorizontal: 20,
        width: '80%',
        alignItems: 'center',
        justifyContent: 'center',
    }, 
    buttonContainer: {
        width: '80%',
        justifyContent: 'space-around',
        marginTop: 20,
        flexDirection: 'row',
        marginHorizontal: 20,
    }
});

const generateRandomNumberBetween = (min, max, exclude) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    const randomNumber = (Math.random() * (max - min) + min);
    if (randomNumber === exclude) {
        return generateRandomNumberBetween(min, max, exclude);
    } else {
        return randomNumber;
    }
 }

const GameScreen = ({ selectedNumber }) => {

    const [currentGUess, setCurrentGuess] = useState(generateRandomNumberBetween(1,100, selectedNumber))
    const [rounds, setRounds] = useState(0);
    const currentLow = useRef(1);
    const currentHigh = useRef(100);

    const onHandleNextGuess = (direction) => {

    }
 
    useEffect(() => {
        if(currentGUess === selectedNumber) {
            onGameOver(rounds);
        }
    }, [currentGUess, selectedNumber, onGameOver])

    return(
        <View style={styles.container}>
            <Card style={styles.container}>
                <Text style={styles.title}>La suposicion del oponente</Text>
                <NumberContainer>{currentGUess}</NumberContainer>
                <View style={styles.buttonContainer}>
                    <Button title='Menor' onPress={() => onHandleNextGuess('lower')}/>
                    <Button title='Mayor' onPress={() => onHandleNextGuess('higher')}/>
                </View>
            </Card>
        </View>
    )
}
export default GameScreen;