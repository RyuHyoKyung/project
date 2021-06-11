import React from 'react'
import { Schedule } from 'todos/containers'
import './table.style.css'

const Todos = ({children}) => (<>
    <h1>Todos</h1>
    <Schedule/>
    {children}

</>)

export default Todos