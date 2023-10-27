import React, { useContext } from 'react';
import { ThemeContext } from '../context-api/theme/ThemeContext';
import { THEME_ACTION_TYPES } from '../context-api/theme/ThemeReducer';
import "../styles/style.css";
import ThemedButton from './Button';

const Navbar = () => {  
    const theme = useContext(ThemeContext);
    const darkMode = theme.state.darkMode;
    const changeTheme = () => {
        // TODO: change the theme.
        if (theme.state.darkMode) {
            theme.dispatch({type: THEME_ACTION_TYPES.LIGHT});
        } else {
            theme.dispatch({type: THEME_ACTION_TYPES.DARK});
        }
    }

    return (
        <div className={`navbar ${darkMode ? 'navbar-dark' : 'navbar-light'}`}>
            <ThemedButton action={() => changeTheme()} label="Change Theme" />
        </div>
    )
}

export default Navbar;