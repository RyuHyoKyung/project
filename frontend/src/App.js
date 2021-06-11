import React from 'react'
import { Redirect, Route } from 'react-router-dom'
import { Login, Signup, UserDetail, UserEdit, UserList } from './user'
import { Home, User, Counters, Todos } from './templates'
import { Nav } from './common'
import { BrowserRouter as Router } from 'react-router-dom'
import { todoReducer } from './store'
import { createStore, combineReducers } from 'redux'
import { Provider } from 'react-redux'
import Schedule from 'todos/containers/Schedule'
const rootReducer = combineReducers({todoReducer})

const App = () => {
  return (<div>
    <Router>
      <Provider store = {createStore(rootReducer)}>
        <Nav/>
        <Route exact path='/home' component = {Home}/>
        <Redirect exact from = {'/'} to = {'/home'}/>
        <Route exact path='/counter' component = {Counters}/>
        <Route exact path='/user' component = {User}/>
        <Route exact path='/todos' component = {Schedule}/>
        <Route exact path='/loginform' component = {Login}/>
        <Route exact path='/signupform' component = {Signup}/>
        <Route exact path='/userdetail' component = {UserDetail}/>
        <Route exact path='/useredit' component = {UserEdit}/>
        <Route exact path='/userlist' component = {UserList}/>
        
      </Provider>
    </Router>
  </div>)
}
export default App