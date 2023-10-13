import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

export default function SearchBox({onUserSearched}) {

  const onSearch = (e) => {
    const searchKeyword = e.target.value;
    if (onUserSearched && searchKeyword != null) {
      onUserSearched(searchKeyword);
    }
  }

  return (
    <Box
      component="form"
      sx={{
        '& > :not(style)': { width: '50ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <TextField 
      id="outlined-basic" 
      label="Search Movies" 
      variant="outlined" 
      onInput={onSearch}
      />
    </Box>
  );
}