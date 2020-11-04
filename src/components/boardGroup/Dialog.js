
import React from 'react';
import Button from '@material-ui/core/Button';

import AddBoard from './AddBoard';
const emails = ['username@gmail.com', 'user02@gmail.com'];
// const useStyles = makeStyles({
//   avatar: {
//     backgroundColor: blue[100],
//     color: blue[600],
//   },
// });



export default function SimpleDialogDemo(pros) {
  const [open, setOpen] = React.useState(false);
  const [selectedValue, setSelectedValue] = React.useState(emails[1]);

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
      THÊM BẢNG MỚI
      </Button>
      <AddBoard selectedValue={selectedValue} open={open} onClose={handleClose} />
    </div>
  );
}
