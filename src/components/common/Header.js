// Import Library to create components
import React from 'react'
import { Text, View } from 'react-native'

// Create Components
const Header = (props) => {
    const { textStyle, viewStyle } = styles
return (
    <View style = { viewStyle }>
        <Text style = { textStyle }> {props.headerText} </Text> 
    </View>
    )
}

const styles = {
    viewStyle: {
        backgroundColor: '#F8F8F8',
        justifyContent: 'center',
        alignItems: 'center',
        height: 80,
        paddingTop: 25,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2
    },
    textStyle: {
        fontSize: 22,
        color: '#000'
    }
}
// Make availabel for other in same project
export { Header }