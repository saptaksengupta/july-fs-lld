import { useState } from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';


const ChooseLanguage = ({onLanguageChange}) => {

    const [language, setLanguage] = useState('All');

    const handleChange = (e) => {
        setLanguage(e.target.value);
        if (onLanguageChange) {
            // uplifting the value from this component to parent.
            onLanguageChange(e.target.value); 
        }
    }

    return (
        <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Language</InputLabel>
            <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={language}
                label="Language"
                onChange={handleChange}
            >   
                <MenuItem value="All">All</MenuItem>
                <MenuItem value="Tamil">Tamil</MenuItem>
                <MenuItem value="Hindi">Hindi</MenuItem>
                <MenuItem value="English">English</MenuItem>
            </Select>
        </FormControl>
    )
}

export default ChooseLanguage;