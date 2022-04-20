import React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import '../Checkbox.css'

export default function SelectAutoWidth() {
  const [children, setChildren] = React.useState('');

  const childrenHendler = (event) => {
    setChildren(event.target.value);
  };

  return (
    <div>
      <FormControl className='formcontrol'>
        <InputLabel id="demo-simple-select-autowidth-label">فرزندان</InputLabel>
        <Select
          labelId="demo-simple-select-autowidth-label"
          id="demo-simple-select-autowidth"
          value={children}
          onChange={childrenHendler}
          autoWidth
          label="children"
          className='select'
        >
          <MenuItem value="">
            <em>هیچ</em>
          </MenuItem>
          <MenuItem className='menuitem' value={10}>یک فرزند</MenuItem>
          <MenuItem className='menuitem' value={21}>دو فرزند</MenuItem>
          <MenuItem className='menuitem' value={22}>سه فرزند</MenuItem>
          <MenuItem className='menuitem' value={23}>چهار فرزند</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
}
