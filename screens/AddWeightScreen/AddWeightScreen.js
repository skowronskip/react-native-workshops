import React from 'react';
import {StyleSheet, View, DatePickerAndroid, DatePickerIOS } from 'react-native';
import Input from "../../components/input";
import Button from "../../components/button";
import {Ionicons} from '@expo/vector-icons';
import { Platform } from 'expo-core';

export default class AddWeightScreen extends React.Component {
    constructor(props) {
        super(props);
        const { navigation } = this.props;
        this.state = {
            weight: null,
            date: new Date()
        };

        this.onChangeWeight = this.onChangeWeight.bind(this);
        this.onChangeDate = this.onChangeDate.bind(this);
        this.onPressButton = this.onPressButton.bind(this);
        this.handleOpenDatePicker = this.handleOpenDatePicker.bind(this);
    }

    static navigationOptions = ({ navigation }) => {
        return {
            title: navigation.getParam('title', 'Add Weight'),
        };
    };

    static getDerivedStateFromProps(props, state) {
        const weight = props.navigation.getParam('weight');
        const date = props.navigation.getParam('date');
        if(weight && date) {
            return {
                weight,
                date
            }
        }
        return null;
    }

    onChangeWeight = (value) => {
        this.setState({
            weight: value
        });
    };

    handleOpenDatePicker = () => {
        DatePickerAndroid.open({
            date: this.state.date
        }).then(({action, year, month, day}) => {
            if(DatePickerAndroid.dismissedAction !== action) {
                const date = new Date(year, month, day);
                this.onChangeDate(date);
            }

        });
    };

    onChangeDate = (value) => {
        this.setState({
            date: value
        });
    };

    onPressButton = () => {
        console.log(this.state.weight);
        console.log(this.state.date);
    };

    render() {
        return (
            <View style={styles.mainView}>
                <View style={styles.container}>
                    <Input
                        onChangeText={this.onChangeWeight}
                        keyboardType='numeric'
                        value={this.state.weight}
                        label='Weight'
                        placeholder='Enter weight'
                    />
                    <Input
                        onChangeText={this.onChangeDate}
                        value={this.state.date.toLocaleDateString()}
                        label='Date'
                        editable={false}
                    />
                    { Platform.OS === 'android' &&
                        <Button
                            onPress={this.handleOpenDatePicker}
                            text='Set Date'
                        /> }
                    {
                        Platform.OS === 'ios' &&
                        <DatePickerIOS
                            style={styles.datePickerIos}
                            date={this.state.date}
                            onDateChange={this.onChangeDate}
                            mode='date'
                        />
                    }
                    <Button
                        onPress={this.onPressButton}
                        text='Add Weight'
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
        marginHorizontal: 20,
        marginVertical: 40,
    },
    listContainer: {
        flex: 1,
        width: '100%',
        marginTop: 20
    },
    datePickerIos: {
        width: '100%'
    }
});
