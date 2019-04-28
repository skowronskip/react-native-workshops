import React from 'react';
import {StyleSheet, View} from 'react-native';
import Input from "../../components/input";
import Button from "../../components/button";
import {Ionicons} from '@expo/vector-icons';

export default class AddWeightScreen extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            weight: '90',
            date: '10.04.2019',
        };

        this.onChangeWeight = this.onChangeWeight.bind(this);
        this.onChangeDate = this.onChangeDate.bind(this);
        this.onPressButton = this.onPressButton.bind(this);
    }

    onChangeWeight = (value) => {
        this.setState({
            weight: value
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
                    />
                    <Input
                        onChangeText={this.onChangeDate}
                        value={this.state.date}
                        label='Date'
                    />
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
        marginHorizontal: 20,
        marginVertical: 40,
    },
    listContainer: {
        flex: 1,
        width: '100%',
        marginTop: 20
    },
});
