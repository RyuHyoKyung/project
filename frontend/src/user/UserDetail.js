import React from 'react'
import { BrowserRouter as Router, Link } from "react-router-dom"
import styled from 'styled-components';
import Counter from './counter/Counter'
const App = () => {
  return (<Container>
  <Element>
  <nav>

  </nav>
  <Counter/>
 </Element>
  </Container>)
}
const Container = styled.div`
    width: 100%;
    border: 1px solid #D1D8E4;
`
const Element = styled.div`
  width: 400px;  
  margin: 0 auto;
`
export default App