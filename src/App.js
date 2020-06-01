import React, { Component } from 'react'
import Login from './Login/Login'
import { BrowserRouter as Router, Switch,Route,Redirect} from 'react-router-dom'
import HomePage from './Components/Home/HomePage'
export class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <section>

          <Switch>
          <Redirect exact from="/" to="/login" />
          <Route path="/login" exact component={Login}/>
          <Route path="/home" exact component={HomePage}/>
          </Switch>
          </section>
        </Router>
      </div>
    )
  }
}

export default App
