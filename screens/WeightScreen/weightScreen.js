import React from 'react';
import { StyleSheet, View, FlatList, Text, TouchableOpacity } from 'react-native';
import Input from "../../components/input";
import Button from "../../components/button";
import { Ionicons } from '@expo/vector-icons';
import WeightRow from "../../components/weightRow";

export default class WeightScreen extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            BMI: '',
            weights: [
                {
                    id: 1,
                    value: '90',
                    date: new Date(2019, 0, 20)
                },
                {
                    id: 2,
                    value: '80',
                    date: new Date(2019, 1, 5)
                },
                {
                    id: 3,
                    value: '85',
                    date: new Date(2019, 2, 16)
                }
            ]
        };

        this.onChangeBMI = this.onChangeBMI.bind(this);
        this.onPressButton = this.onPressButton.bind(this);
    }

    onAddWeight = () => {
        this.props.navigation.navigate('AddWeightScreen');
    };

    onChangeBMI = (value) => {
        this.setState({
            BMI: value
        });
    };

    onPressButton = () => {
        this.onAddWeight();
    };

    onEditItem = (id, weight, date) => {
        this.props.navigation.navigate('AddWeightScreen', {
            title: 'Edit Weight',
            weight, date
        });
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
