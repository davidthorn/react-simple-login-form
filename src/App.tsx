import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios'

interface Props {

}

interface State {
  errors: {
    email?: string,
    password?: string
  }
  email?: string
  password?: string
}

class App extends Component<Props, State> {

  constructor(props: Props, state: State) {
    super(props, state)
    this.state = {
      errors: {
        email: undefined,
        password: undefined
      },
      email: undefined,
      password: undefined
    }
  }

  formSubmitted() {

    /// joi - npm install --save joi 

    // const { email , password , errors } = this.state

    // const passwordValue = password === undefined ? '' : password

    // if(passwordValue.length === 0) {
    //   this.setState({
    //     ...this.state,
    //     errors: {
    //       ...this.state.errors,
    //       password: 'Password is required'
    //     }
    //   })
    // }  else {
    //   this.setState({
    //     ...this.state,
    //     errors: {
    //       ...this.state.errors,
    //       password: undefined
    //     }
    //   })
    // }

    /// validation completed
    const cleanEmail = "david.thornsomewhere.com"
    const cleanPassword = "12345678"
    const data = `email=${cleanEmail}&password=${cleanPassword}`

    axios.post('http://localhost:8080/login' , data , {
      headers: {
        'Content-Type' : 'x-www-form-urlencoded'
      }
    })
    .then(i => {



      console.log('success' , i.status)
    })
    .catch(e => {
      console.log('error' ,e)
    })
     

  }

  render() {
    return (
      <div className="App">
        <h1>
          Login Form
    </h1>
        <ul>
          <li>
            <label>
              Email Address <span className="error">{ this.state.errors.email }</span>
            </label>
            <input onChange={(e) => {
              this.setState({
                email: e.target.value
              })
            }} type="text" />
          </li>
          <li>
            <label>
              Password <span className="error">{ this.state.errors.password }</span>
            </label>
            <input onChange={(e) => {
              this.setState({
                password: e.target.value
              })
            }}
              type="password" />
          </li>
          <li>
            <div onClick={this.formSubmitted.bind(this)} className="button">
              <span>Login</span>
            </div>
          </li>
        </ul>


      </div>
    );
  }
}

export default App;
