import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Paper, { PaperProps } from '@mui/material/Paper';
// import Draggable from 'react-draggable';
import Draggable from 'react-draggable';
import './DletePopup.css'
import { Fab } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';




function PaperComponent(props: PaperProps) {
  return (
    <Draggable
      handle="#draggable-dialog-title"
      cancel={'[class*="MuiDialogContent-root"]'}
    >
      <Paper {...props} />
    </Draggable>
  );
}

export default function DraggableDialog(): JSX.Element {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      {/* <Button variant="outlined" onClick={handleClickOpen}>
        Open draggable dialog
      </Button> */}
      <Fab color="secondary" size="small" aria-label="delete" onClick={handleClickOpen}>
  <DeleteIcon />
</Fab>
      <Dialog
        open={open}
        onClose={handleClose}
        PaperComponent={PaperComponent}
        aria-labelledby="draggable-dialog-title"
      >
        <div className='del_popup'>
        <DialogTitle style={{ cursor: 'move' }} id="draggable-dialog-title">
          Alert
        </DialogTitle>
        <DialogContent>
          <DialogContentText>
            Are you sure want to delete?
          </DialogContentText>
        </DialogContent>
        <DialogActions className='action_btn'>
          <Button autoFocus onClick={handleClose}>
            No
          </Button>
          <Button onClick={handleClose}>Yes</Button>
        </DialogActions>
        </div>
      </Dialog>
    </div>
  );
}
