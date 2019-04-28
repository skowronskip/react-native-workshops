import React from 'react';
import {StyleSheet, Text, TextInput, TouchableOpacity, View} from 'react-native';
const RadioButtons = (props) => {
    return (
        <View style={styles.buttonsWrapper}>
            <Text style={styles.label}>{props.label}</Text>
            <TouchableOpacity onPress={() => props.onSexPress('male')} style={styles.singleButtonWrapper}>
                <View style={styles.iconBorder}>
                    <View style={[styles.icon, props.sex === 'male' ? {backgroundColor: '#0080FF'} : {backgroundColor: 'transparent'}]}/>
                </View>
                <Text style={styles.text}>Male</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => props.onSexPress('female')} style={styles.singleButtonWrapper}>
                <View style={styles.iconBorder}>
                    <View style={[styles.icon, props.sex === 'female' ? {backgroundColor: '#0080FF'} : {backgroundColor: 'transparent'}]}/>
                </View>
                <Text style={styles.text}>Female</Text>
            </TouchableOpacity>
        </View>
    )
};


const styles = StyleSheet.create({
    buttonsWrapper: {
        alignSelf: 'flex-start',
        marginVertical: 20,
    },
    singleButtonWrapper: {
        height: 35,
        flexDirection: 'row',
        alignItems: 'center'
    },
    icon: {
        width: 12,
        height: 12,
        borderRadius: 6

    },
    iconBorder: {
        width: 20,
        height: 20,
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 20,
        borderRadius: 10,
        borderWidth: 2,
        borderColor: '#0080FF'
    },
    label: {
        textTransform: 'uppercase',
        color: '#0080FF',
        fontWeight: 'bold'
    },
    text: {
        fontWeight: 'bold'
    }
});
export default RadioButtons;
