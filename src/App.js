import React, {Component} from 'react'
import { View } from 'react-native'
import firebase from 'firebase'
import { Header, Spinner } from './components/common'
import LoginForm from './components/LoginForm'
import LogoutForm from './components/LogoutForm'

class App extends Component {

    state = { isLoggedIn: undefined }

    componentWillMount() {
        firebase.initializeApp({
            apiKey: 'AIzaSyD-y-O8MWOW7OWWr1khLfEHK2dODBK1QxQ',
            authDomain: "authentication-e192f.firebaseapp.com",
            databaseURL: "https://authentication-e192f.firebaseio.com",
            projectId: "authentication-e192f",
            storageBucket: "authentication-e192f.appspot.com",
            messagingSenderId: "618652694893"
          })
          
          firebase.auth().onAuthStateChanged((user) => {
            if (user) {
                this.setState({ isLoggedIn: true })
            } else {
                this.setState({ isLoggedIn: false })
            }
          })
    }

    renderContent() {
        switch(this.state.isLoggedIn) {
            case undefined:
            return <Spinner /> 
            
            case true:
            return <LogoutForm />

            case false:
            return <LoginForm />
        }
    }

    render() {
        return (
            <View>
                <Header headerText="Authentication" />
                { this.renderContent() }
            </View>
        )
    }
}


export default App