
import React from 'react';
import Button from '@material-ui/core/Button';

import AddTag from './Addtag';
// const useStyles = makeStyles({
//   avatar: {
//     backgroundColor: blue[100],
//     color: blue[600],
//   },
// });



export default function SimpleDialogDemo(props) {
  const [open, setOpen] = React.useState(false);
  const [selectedValue, setSelectedValue] = React.useState('');

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = (value) => {
    setOpen(false);
    setSelectedValue(value);
  };

  return (
    <div>
      {/* <Typography variant="subtitle1">Selected: {selectedValue}</Typography>
      <br /> */}
      <Button variant="outlined" color="primary" onClick={handleClickOpen}>
      THÊM THẺ MỚI
      </Button>
      <AddTag selectedValue={selectedValue} add={props.add} change={props.change} open={open} onClose={handleClose} board_id={props.board_id} category={props.category} />
    </div>
  );
}
