import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Ionicons} from '@expo/vector-icons';

export default class ProductScreen extends React.Component {

    render() {
        return (
            <View style={styles.mainView}>
                <View style={styles.container}>
                    <Text>Product</Text>
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
});
