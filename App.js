import React from 'react';
import {SafeAreaView, View, StyleSheet, Text, TextInput, Alert} from 'react-native';
import { Button } from 'react-native';

const App = () => {
  const [number, setNumber] = React.useState(0);
  const [guesses, setGuesses] = React.useState(0);
  const [vastaus, setVastaus] = React.useState('Guess a number between 1-100');
  const [correctNumber, setCorrectNumber] = React.useState(Math.floor(Math.random() * 100) + 1 );

  const buttonPressed = () => {
    const currentGuesses = guesses + 1
    setGuesses(currentGuesses)
    if(Number(number)>correctNumber){
      setVastaus('Your guess '+ number + ' is too high')
    }else if(Number(number)<correctNumber){
      setVastaus('Your guess '+ number + ' is too low')
    }else{
      Alert.alert('You guessed the number in ' + currentGuesses + ' guesses')
    }
  }
  return (
    <SafeAreaView style={styles.container}>
      <Text>{vastaus}</Text>
      <TextInput
        style={styles.input}
        onChangeText={setNumber}
        value={number}
        placeholder="number1"
        keyboardType="numeric"
      />
      <View style={styles.buttoncontainer}>
        <View style={styles.button}>
          <Button onPress={buttonPressed} title="MAKE A GUESS"/>
        </View>
      </View>
    </SafeAreaView>

  );
};

const styles = StyleSheet.create({
  input: {
    height: 40,
    width: 200,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  buttoncontainer: {
    padding: 16,
    gap: 10,
    justifyContent: 'center',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  container: {
    padding: 16,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  button:{
    marginHorizontal: 10,
  }
});

export default App;