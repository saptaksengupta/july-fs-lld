import { useReducer } from "react"
import { ThemeContext } from "./ThemeContext"
import { initialState, themeReducer } from "./ThemeReducer";

export const ThemeProvider = (props) => {

    const [state, dispatch] = useReducer(themeReducer, initialState); 
    return (
        <ThemeContext.Provider value={{state: state, dispatch: dispatch}} >
            {props.children}
        </ThemeContext.Provider>
    )
}