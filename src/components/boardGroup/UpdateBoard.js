import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import BoardGroupService from './Service';
export default function Update(props) {
  const [open, setOpen] = React.useState(false);
  const [name, setName] = React.useState("My board");

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleCancel = () => {
    setOpen(false);
  };

    async function handleUpdate(e) {
        e.preventDefault();
        // onClose(e);
        const response = await BoardGroupService.updateBoard(props.board_id,name,false);
        // let body = response.data;
        setOpen(false);
        console.log(response);
    };



  return (
    <div>
      <Button variant="outlined" color="primary" onClick={handleClickOpen}>
      Sửa
      </Button>
      <Dialog open={open} onClose={handleCancel} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Update</DialogTitle>
        <DialogContent>
          <DialogContentText>
          Nhập tên mới cho bảng
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Name"
            type="email"
            fullWidth
            onChange={(e) => setName(e.target.value)}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCancel} color="primary">
            Cancel
          </Button>
          <Button onClick={(e) => handleUpdate(e)} color="primary">
            Update
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
