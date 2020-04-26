import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, Modal } from 'react-native';

const GoalInput = props => {
    const [enteredGoal, setEnteredGoal] = useState('');

    const goalInputHandler = enteredText => {
        setEnteredGoal(enteredText);
    };

    const addGoalHandler = () => {
      props.onAddGoal(enteredGoal);
      setEnteredGoal('');
    };

    return (
      <Modal visible={props.visible} animationType='slide' >
        <View style={styles.inputContainer}>
          <TextInput 
            placeholder='Enter goal here'
            style={styles.inputBox}
            onChangeText={goalInputHandler}
            value={enteredGoal}
          />
          <View style={styles.buttonContainer}>
            <View style={styles.button}>
              <Button 
                title='Add'
                onPress={addGoalHandler}
              />
            </View>
            <View style={styles.button}>
              <Button 
                title='Cancel'
                color='red'
                onPress={props.onCancel}
              />
            </View>
          </View>
        </View>
      </Modal>
    );
};

const styles = StyleSheet.create({
  inputContainer: {
    flex:1,
    justifyContent:'center',
    alignItems:'center',
  },
  inputBox: {
    width:'80%',
    borderColor:'black',
    borderWidth:1,
    padding:10,
    marginBottom:10,
  },
  buttonContainer: {
    width:'70%',
    flexDirection:'row',
    justifyContent:'space-evenly',
    alignItems:'center'
  },
  button: {
    width:'40%',
    borderWidth:0,
    shadowColor:'blue',
    shadowOffset:{width:1, height:2},
    shadowOpacity:.7,
    shadowRadius:2,
    elevation:1,
    backgroundColor:'white',
  },
});

export default GoalInput;