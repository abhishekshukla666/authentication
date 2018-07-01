import React, { Component } from 'react'
import { Text } from 'react-native'
import firebase from 'firebase'
import { Button, Card, CardSection, Input, Spinner } from './common'

class LoginForm extends Component {
    state = { email: '', password: '', error: '', isLoading: false, errorColor: '' }

    onButtonPress() {
        const { email, password } = this.state
        this.setState({ error: '', isLoading: true })

        firebase.auth().signInWithEmailAndPassword(email, password)
        .then(this.onLoginSuccess.bind(this))
        .catch(() => {
            firebase.auth().createUserWithEmailAndPassword(email, password)
            .then(this.onLoginSuccess.bind(this))
            .catch(this.onLoginFail.bind(this))    
        })
    }

    onCreateNewUser() {
        firebase.auth().createUserWithEmailAndPassword(email, password)
        .then(this.onLoginSuccess.bind(this))
        .catch(this.onLoginFail.bind(this))
    }

    onLoginFail() {
        this.setState({
            error: 'Authenticatio Failed',
            errorColor: 'red',
            isLoading: false
        })
    }

    onLoginSuccess() {
        this.setState({
            email: '',
            password: '',
            error: 'Login Success!!',
            errorColor: 'green',
            isLoading: false
        })
    }

    renderButton() {
        if (this.state.isLoading) {
            return <Spinner size='small'/>
        }
        return (
            <Button didPress={this.onButtonPress.bind(this)}>
                Log in
            </Button>
        )
    }

    render() {
        return (
            <Card>
                <CardSection>
                    <Input
                        label='Email'
                        placeholder='user@email.com'
                        value = {this.state.email}
                        onChangeText={email => this.setState({ email })}
                    />
                </CardSection>
                <CardSection>
                <Input
                        label='Password'
                        isSecureInput={true}
                        placeholder='password'
                        value = {this.state.password}
                        onChangeText={password => this.setState({ password })}
                    />
                </CardSection>

                <Text style={[styles.errorTextStyle, {color: this.state.errorColor || 'red'}]}>
                    {this.state.error}
                </Text>

                <CardSection>
                    { this.renderButton() }
                </CardSection>
                
            </Card>
        )
    }
}

const styles = {
    errorTextStyle: {
        fontSize: 20,
        alignSelf: 'center',
        paddingTop: 5,
        paddingBottom: 5
    }
}

export default LoginForm