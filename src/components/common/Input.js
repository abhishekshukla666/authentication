import React from 'react'
import { Text, View, TextInput } from 'react-native'

const Input = ({ label, value, onChangeText, placeholder, isSecureInput }) => {
    const { inputStyle, labelStyle, containerStyle } = styles
    return (
        <View style={containerStyle}>
            <Text style={inputStyle}>{ label }</Text>
            <TextInput 
                secureTextEntry={isSecureInput}
                autoCorrect={false}
                placeholder={placeholder}
                value={ value }
                onChangeText={ onChangeText }
                style={inputStyle}
            />
        </View>
    )   
}

const styles = {
    containerStyle: {
        height: 40,
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center'
    },
    labelStyle: {
        fontSize: 18,
        paddingLeft: 5,
        flex: 1
    },
    inputStyle: {
        color: 'black',
        fontSize: 18,
        lineHeight: 23,
        paddingRight: 5,
        paddingLeft: 5,
        flex: 2
    }
}

export { Input }