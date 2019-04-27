import React from 'react';
import { StyleSheet, View, FlatList, Text, TouchableOpacity } from 'react-native';
import Input from "./components/input";
import Button from "./components/button";
import { Ionicons } from '@expo/vector-icons';
import WeightRow from "./components/weightRow";

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      BMI: '',
      weights: [
        {
          id: 1,
          value: '90',
          date: '12.08.2019'
        },
        {
          id: 2,
          value: '80',
          date: '13.07.2019'
        },
        {
          id: 3,
          value: '85',
          date: '16.01.2019'
        }
      ]
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

  onEditItem = (id) => {
    console.log(`Edit ${id}`);
  };

  onRemoveItem = (id) => {
    console.log(`Remove ${id}`);
  };

  keyExtractor = (item) => {
    return `${item.id}`;
  };

  renderItem = ({item}) => {
    return (
      <WeightRow
        id={item.id}
        value={item.value}
        date={item.date}
        onEditItem={this.onEditItem}
        onRemoveItem={this.onRemoveItem}
      />
    );
  };

  render() {
    return (
        <View style={styles.mainView}>
          <View style={styles.container}>
            <Input
                onChangeText={this.onChangeBMI}
                keyboardType='numeric'
                value={this.state.BMI}
                label='BMI'
            />
            <View style={styles.listContainer}>
              <FlatList
                  data={this.state.weights}
                  renderItem={this.renderItem}
                  keyExtractor={this.keyExtractor}
              />
            </View>
            <Button
                onPress={this.onPressButton}
                text='ADD WEIGHT'
            />
          </View>
        </View>
    );
  }
}

const styles = StyleSheet.create({
  mainView: {
    flex: 1,
    backgroundColor: '#D7EBFF'
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-between',
    marginHorizontal: 20,
    marginVertical: 40,
  },
  listContainer: {
    flex: 1,
    width: '100%',
    marginTop: 20
  },
});
