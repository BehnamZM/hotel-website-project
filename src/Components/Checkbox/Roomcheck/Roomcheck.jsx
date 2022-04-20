import React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import '../Checkbox.css'

export default function SelectAutoWidth() {
  const [room, setRoom] = React.useState('');

  const RoomHendler = (event) => {
    setRoom(event.target.value);
  };

  return (
    <div>
      <FormControl className='formcontrol'>
        <InputLabel id="demo-simple-select-autowidth-label">انتخاب اتاق</InputLabel>
        <Select
          labelId="demo-simple-select-autowidth-label"
          id="demo-simple-select-autowidth"
          value={room}
          onChange={RoomHendler}
          autoWidth
          label="children"
          className='select'
        >
          <MenuItem className='menuitem' value={30}>اتاق یک</MenuItem>
          <MenuItem className='menuitem' value={31}>اتاق دو</MenuItem>
          <MenuItem className='menuitem' value={32}>اتاق سه</MenuItem>
          <MenuItem className='menuitem' value={33}>اتاق چهار</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
}
