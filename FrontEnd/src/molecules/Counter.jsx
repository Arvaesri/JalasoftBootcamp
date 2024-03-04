import React,{useReducer}  from 'react'

//Alguem disse que isso funciona

function reducer(state, action){
    switch (action.type) {
        case "increment":
            return {count: state.count + 1}
        case "decrement":
            return {count: state.count - 1}
        default:
            break;
    }
}


export default function Counter({ count, onIncrement, onDecrement }) {
    const [state,dispatch] = useReducer(reducer,{count:0} )
    
    return (
        <div>
            <button onClick={ ()=> {dispatch({type:"increment"})} }>+</button>
            <span> {state.count} </span>
            <button onClick={ () => {dispatch({type:"decrement"})} }>-</button>
            {/* <button onClick={ onIncrement }>+</button> */}
            {/* <button onClick={ onDecrement }>-</button> */}
        </div>
    )
}