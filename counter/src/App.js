import { Counter } from 'Components/index'
import { Route } from 'react-router-dom'

const App = () => {
  return (
    <div>
      <Route exact path='/'component={Counter}/>


    </div>)
}
  

export default App
