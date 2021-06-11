
const initialState = {todos: [], todo: {}}  //todos는 저장공간의 이름, todo는 제이슨 객체의 이름
export const addTodoAction = todo => ({type: "ADD_TODO", payload: todo}) //todo가 들어오면 toggle이 작동함, return외의 다른기능이 들어가지 않으면 return은 생략이 가능하다
export const toggleTodoAction = todoId => ({type: "TOGGLE_TODO", payload: todoId}) // todoId는 uuid가 들어와야 작동
export const deleteTodoAction = todoId => ({type: "DELETE_TODO", payload: todoId})  
const todoReducer = (state = initialState, action) => {
    switch(action.type){
        case "ADD_TODO": return {...state, todos: [...state.todos, action.payload]}
        case "TOGGLE_TODO": return {...state, todos: state.todos.map(todo => (todo.id === action.payload) ? {...todo, complete: !todo.complete} : todo)}
        case "DELETE_TODO": return {...state, todos: state.todos.filter(todo => todo.id !== action.payload)}
        default: return state
    }
}
export default todoReducer

