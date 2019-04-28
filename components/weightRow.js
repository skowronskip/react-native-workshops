import React, {Component} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from "react-native";
import { Ionicons } from '@expo/vector-icons';

class WeightRow extends Component {
    render () {
        return (
            <View style={styles.weightRow}>
                <Text style={styles.weightValue}>{this.props.value}</Text>
                <Text style={styles.weightDate}>{this.props.date.toLocaleDateString()}</Text>
                <TouchableOpacity
                    onPress={() => this.props.onEditItem(this.props.id, this.props.value, this.props.date)}
                    style={styles.iconWrapper}>
                    <Ionicons name='md-create' size={16} color='gray' />
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => this.props.onRemoveItem(this.props.id)}
                    style={[styles.iconWrapper, styles.closeIcon]}>
                    <Ionicons name='md-close' size={16} color='gray' />
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    weightRow: {
        flexDirection: 'row',
        width: '100%',
        height: 40,
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#fff',
        paddingHorizontal: 10
    },
    weightValue: {
        fontWeight: 'bold',
    },
    weightDate: {
        fontWeight: 'bold',
        flex: 1,
        textAlign: 'center'
    },
    iconWrapper: {
        height: 24,
        width: 24,
        borderRadius: 12,
        borderWidth: 1,
        borderColor: 'gray',
        justifyContent: 'center',
        alignItems: 'center'
    },
    closeIcon: {
        marginLeft: 15
    }
});

export default WeightRow;
