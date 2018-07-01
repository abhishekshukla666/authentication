import React, {Component} from 'react'
import { View } from 'react-native'
import firebase from 'firebase'
import { Header } from './components/common'
import LoginForm from './components/LoginForm'

class App extends Component {

    componentWillMount() {
        firebase.initializeApp({
            apiKey: 'AIzaSyD-y-O8MWOW7OWWr1khLfEHK2dODBK1QxQ',
            authDomain: "authentication-e192f.firebaseapp.com",
            databaseURL: "https://authentication-e192f.firebaseio.com",
            projectId: "authentication-e192f",
            storageBucket: "authentication-e192f.appspot.com",
            messagingSenderId: "618652694893"
          })  
    }

    render() {
        return (
            <View>
                <Header headerText="Authentication" />
                <LoginForm />
            </View>
        )
    }
}


export default App