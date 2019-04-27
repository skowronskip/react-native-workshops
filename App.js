import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import Input from "./components/input";
import Button from "./components/button";

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      BMI: ''
    };

    this.onChangeBMI = this.onChangeBMI.bind(this);
    this.onPressButton = this.onPressButton.bind(this);
  }

  onChangeBMI = (value) => {
    this.setState({
      BMI: value
    });
  };

  onPressButton = () => {
    console.log(this.state.BMI);
  };

  render() {
    return (
      <View style={styles.container}>
        <Text style={{fontSize: 30}}>{this.state.BMI}</Text>
        <Input
          onChangeText={this.onChangeBMI}
          keyboardType='numeric'
          value={this.state.BMI}
          label='BMI'
        />
        <Button
          onPress={this.onPressButton}
          text='ADD WEIGHT'
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 20,
  },
  input: {
    width: '100%',
    borderBottomWidth: 3,
    borderColor: '#0080FF',
    height: 40,
    borderRadius: 3,
    fontWeight: 'bold'
  },
  inputWrapper: {
    width: '100%',
  },
  label: {
    color: '#0080FF',
    fontWeight: 'bold'
  },
  buttonWrapper: {
    width: '100%',
    marginTop: 20
  },
  button: {
    backgroundColor: '#0080FF',
    alignItems: 'center',
    height: 40,
    justifyContent: 'center'
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold'
  }
});
