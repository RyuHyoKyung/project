import React from 'react'
import { Route } from "react-router-dom"
import { Counter } from 'counter/index'
import { Login, Signup, UserDetail, UserEdit, UserList} from'user/index'
import { Home } from 'common/index'


const App = () => {
  return (<div>
    <Route exact path='/' component={Home}/>
    <Route exact path='/counter' component={Counter}/>
    <Route exact path='/login' component={Login}/>
    <Route exact path='/signup' component={Signup}/>
    <Route exact path='/userdetail' component={UserDetail}/>
    <Route exact path='/useredit' component={UserEdit}/>
    <Route exact path='/userlist' component={UserList}/>
    
  </div>)
}

export default App