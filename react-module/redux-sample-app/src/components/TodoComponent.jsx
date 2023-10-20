import { useDispatch, useSelector } from "react-redux";
import todoSlice from "../redux/TodoSlice";

const TodoComponent = () => {

    const actions = todoSlice.actions;
    const dispatch = useDispatch();
    const {value, todoList} = useSelector(store => store.todoSlice);


    const handleChange = (e) => {
        const val = e.target.value;
        dispatch(actions.setValue(val));
    }

    const onTodoAdd = (e) => {
        dispatch(actions.addTask(value));
        dispatch(actions.setValue(""));
    }

    console.log(todoList);
    return (
        <>
            <div style={{display: 'flex'}}>
                <div className="inputBox">
                    <input onInput={(e) => handleChange(e)} value={value} />
                    <button onClick={(e) => onTodoAdd(e)} >
                        Add TODO
                    </button>
                </div>

                <div className="list">
                    <ul>
                         {/* read the TODO list and render */}
                         {
                            todoList.map((todo, index) => {
                                return (<li key={index} >{todo}</li>)
                            })
                         }
                    </ul>
                </div>
            </div>
        </>
    )
};

export default TodoComponent;