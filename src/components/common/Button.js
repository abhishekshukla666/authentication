import React from 'react'
import { Text, TouchableOpacity } from 'react-native'

const Button = ({ didPress, children }) => {
    const { 
        buttonStyle,
        textStyle
     } = styles;
     
    return (
        <TouchableOpacity 
            onPress={didPress}
            style={buttonStyle}>
            <Text style={textStyle}>
                {children}
            </Text>
        </TouchableOpacity>
    )
}

const styles = {
    textStyle: {
        alignSelf: 'center',
        color: '#007aff',
        fontSize: 16,
        fontWeight: '800',
        paddingTop: 10,
        paddingBottom: 10
    },
    buttonStyle: {
        flex: 1,
        alignSelf: 'stretch',
        backgroundColor: '#fff',
        borderRadius: 8,
        borderWidth: 1,
        borderColor: '#007aff',
        marginLeft: 8,
        marginRight: 8
    }
}

export { Button }