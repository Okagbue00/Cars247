import React from 'react';
import {View, Text, Pressable} from 'react-native';
import styles from './styles';

const StyledButton = (props) => {

  const type = props.type; // primary, secondary, tertiary
  const content = props.content; // "Custom Order" or "Existing Inventory"
  const onPress = props.onPress; // this is the function that will be called when the button is pressed

  const backgroundColor = type === 'primary' ? 'black' : '#FFFFFFA6'; // black or white
  const textColor = type === 'primary' ? '#FFFFFF' : '#171A20'; // black or white

  return (
    <View style={styles.container}>
      <Pressable
        style={[styles.button, {backgroundColor: backgroundColor}]}
        onPress={() => onPress()}
      >
        <Text style={[styles.text, {color: textColor}]}>{content}</Text>
      </Pressable>
    </View>
  );
};

export default StyledButton;