import counterSlice from "../redux/CounterSlice";
import { useDispatch, useSelector } from "react-redux";

const Counter = () => {

    const {actions} = counterSlice;
    const counterState = useSelector((store) => store.counterSlice);

    const dispatch = useDispatch();
    const handleInc = () => {
        dispatch(actions.increment());
    }

    const handleDec = () => {
        dispatch(actions.decrement());
    }

    return (
        <div className="counter">
            <button onClick={() => handleInc()} >+</button>
            <h3>{counterState.count}</h3> 
            <button onClick={() => handleDec()}>-</button>
        </div>
    )

}

export default Counter;

