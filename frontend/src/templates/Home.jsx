import React from 'react'
import { Counter } from '../counter'

export const Home = ({children}) => (<>
    <table className="tab_lay">
        <tr><td><h1>홈</h1></td></tr>
        <tr><td><button>서버 연결 테스트</button></td></tr>
    </table>
    {children}

</>)

export default Home


export const Counters = () => (<>
    <h1>Counter</h1>
    <Counter/>
  
</>)



    
