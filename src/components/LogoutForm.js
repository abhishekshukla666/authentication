import React, { Component } from 'react'
import { View } from 'react-native'
import firebase from 'firebase'
import { Card, CardSection, Button } from './common'

class LogoutForm extends Component {

    onUserLogout() {
        firebase.auth().signOut()
    }
    render() {
        return (
            <View>
                <Card>
                    <CardSection>
                        <Button didPress={ this.onUserLogout.bind(this) }>
                            Logout
                        </Button>
                    </CardSection>
                </Card>
            </View>
        )
    }
}

export default LogoutForm