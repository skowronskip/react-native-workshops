import React from 'react';
import { StyleSheet, View, Image } from 'react-native';
import Input from "../../components/input";
import Button from "../../components/button";
import { Ionicons } from '@expo/vector-icons';
import avatar from '../../assets/avatar.jpg';
import RadioButtons from "../../components/radioButtons";

export default class ProfileScreen extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            name: 'Pawel',
            height: '185',
            birthDate: '10.04.2019',
            sex: 'male'
        };

        this.onChangeHeight = this.onChangeHeight.bind(this);
        this.onChangeName = this.onChangeName.bind(this);
        this.onChangeBirthDate = this.onChangeBirthDate.bind(this);
        this.onChangeSex = this.onChangeSex.bind(this);
        this.onPressButton = this.onPressButton.bind(this);
    }

    onChangeHeight = (value) => {
        this.setState({
            height: value
        });
    };
    onChangeName = (value) => {
        this.setState({
            name: value
        });
    };
    onChangeBirthDate = (value) => {
        this.setState({
            birthDate: value
        });
    };
    onChangeSex = (value) => {
        this.setState({
            sex: value
        });
    };

    onPressButton = () => {
        console.log(this.state);
    };

    render() {
        return (
            <View style={styles.mainView}>
                <View style={styles.container}>
                    <Image
                        style={styles.avatar}
                        source={avatar}
                    />
                    <Input
                        onChangeText={this.onChangeName}
                        value={this.state.name}
                        label='Name'
                    />
                    <Input
                        onChangeText={this.onChangeHeight}
                        keyboardType='numeric'
                        value={this.state.height}
                        label='Weight'
                    />
                    <Input
                        onChangeText={this.onChangeBirthDate}
                        value={this.state.birthDate}
                        label='Date'
                    />
                    <RadioButtons
                        onSexPress={this.onChangeSex}
                        sex={this.state.sex}
                        label='Gender'
                    />
                    <Button
                        onPress={this.onPressButton}
                        text='SAVE'
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
    avatar: {
        width: 120,
        height: 120,
        marginVertical: 10
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
