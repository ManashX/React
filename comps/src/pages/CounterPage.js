import { useReducer} from "react";
import Button from "../components/Button";

const ACTION = {Increment: 'increment', Decrement: 'decrement', ChangeValue: 'changeValue', AddValue: 'addValueToCount'};

const reducer = (state, action) =>{
    if(action.type === ACTION.Increment){
        return {
            ...state,
            count : state.count + 1
        }
    }
    else if(action.type === ACTION.Decrement){
        return {
            ...state,
            count: state.count - 1
        }
    }
    else if(action.type === ACTION.ChangeValue){
        return {
            ...state,
            valueToAdd: action.payload
        }
    }
    else if(action.type === ACTION.AddValue){
        return {
            ...state,
            count: state.count + state.valueToAdd,
            valueToAdd: 0
        }
    }
    return state;
};
function CounterPage({initialCount}){
    const [state, dispatch] = useReducer(reducer, {
        count: initialCount,
        valueToAdd: 0
    });

   
    const onIncrease = () =>{
        // setNum(num + 1);
        dispatch({
            type: 'increment'
        });
    }
    const onDecrease = () =>{
        // setNum(num - 1);
        dispatch(
            {
                type: 'decrement'
            }
        );
    }
    const handleSubmit = (event) =>{
        event.preventDefault();
        // setNum(num + valueToAdd);
        // setValueToAdd(0);
        dispatch({
            type: 'addValueToCount',
            
        })
    }
    const handleChange = (event) =>{
        const value = parseInt(event.target.value) || 0;
        // setValueToAdd(value);
        dispatch({
            type: 'changeValue',
            payload: value
        })
    };

    return<div>
        <div>current Count: {state.count}</div>
        <div><Button onClick={onIncrease}>Increment</Button>
        <Button onClick={onDecrease}>Decrement</Button></div>
        <form onSubmit={handleSubmit}>
            <label> Add a lot</label>
            <input 
            value={state.valueToAdd || ''} // So that means if we have a value to add peace of state of zero, then don't print out the zero.
            onChange={handleChange}
            type="number"/>
             <Button>Add it!</Button>
        </form>
       
    </div>
}

export default CounterPage;