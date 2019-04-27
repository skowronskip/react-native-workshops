import React from 'react';
import {StyleSheet, Text, TextInput, TouchableOpacity, View} from 'react-native';
const Button = (props) => {
  return (
      <View style={styles.buttonWrapper}>
          <TouchableOpacity
              onPress={props.onPress}
              style={[styles.button, {backgroundColor: props.color}]}>
              <Text style={styles.buttonText}>{props.text}</Text>
          </TouchableOpacity>
      </View>
  )
};

Button.defaultProps = {
    color: '#0080FF'
};

const styles = StyleSheet.create({
    buttonWrapper: {
        width: '100%',
        marginTop: 20
    },
    button: {
        alignItems: 'center',
        height: 40,
        justifyContent: 'center'
    },
    buttonText: {
        color: '#fff',
        fontWeight: 'bold'
    }
});
export default Button;
