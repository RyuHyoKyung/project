import React, { useState } from 'react'
import { useDispatch} from 'react-redux' //리액트값을 파이썬으로 전송하는 라이브러리
import { v4 as uuidv4} from 'uuid'
import { addTodoAction } from '../../store/todo.reducer'

const TodoInput = () => {
    const [todo, setTodo] = useState('')
    const dispatch = useDispatch()

    const submitForm = e => {
    
        e.preventDefault() //바닐라스크립트 때문에 막아줘야함
        console.log(`uuidv4 : ${uuidv4()}`)
        const newTodo = {
            id: uuidv4(),
            name: todo,
            complete: false
        }
        addTodo(newTodo)
        setTodo('')
    }
    const addTodo = todo => dispatch(addTodoAction(todo))
    const handleChange = e => {
        e.preventDefault()
        setTodo(e.target.value)  //이벤트가 타겟한 값
    }
    
    
    return(<>
    <h1>할일 목록</h1>
    <form onSubmit = {submitForm} method="POST"> 
        <div className="row mt-3">
            <div className="form-group col-sm-8">
                <input
                    type="text"
                    placeholder="할일 입력"
                    name="todo"
                    className="form-control"
                    value={todo}
                    onChange={ handleChange }
                />
            </div>
        </div>
    </form>   

    </>)
}

export default TodoInput