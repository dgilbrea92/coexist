import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import AttachFileIcon from '@material-ui/icons/AttachFile';
import IconButton from '@material-ui/core/IconButton';
import axios from 'axios';
import Snackbar from '@material-ui/core/Snackbar';
import CloseIcon from '@material-ui/icons/Close';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

export default function SimpleModal(props) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const [selectedFile, changeFile] = React.useState(null);
  const { categories } = props;
  const [openSnack, setOpenSnack] = React.useState(false);

  const handleClick = () => {
    setOpenSnack(true);
  };

  const handleCloseSnack = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpenSnack(false);
  };

  const onFileChange = event => {

    // Update the state
    changeFile(event.target.files[0]);

  };

  // On file upload (click the upload button)
  const onFileUpload = () => {

    // Create an object of formData
    const formData = new FormData();

    // Update the formData object
    formData.append(
      "myFile",
      selectedFile,
      selectedFile.name
    );

    // Details of the uploaded file
    console.log(selectedFile);

    // Request made to the backend api
    // Send formData object
    axios.post("api/uploadfile", formData);
    handleClose();
    handleClick();
  };

  // File content to be displayed after
  // file upload is complete
  const fileData = () => {

    if (selectedFile) {

      return (
        <div>
          <h2>File Details:</h2>
          <p>File Name: {selectedFile.name}</p>
          <p>File Type: {selectedFile.type}</p>
          {/* <p>
            Last Modified:{" "}
            {selectedFile.lastModifiedDate.toDateString()}
          </p> */}
        </div>
      );
    } else {
      return (
        <div>
          <br />
          <h4>Choose before Pressing the Upload button</h4>
        </div>
      );
    }
  };

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const buildOptions = () => {
    const options = [];

    for (let i=0; i < categories.length; i++) {
      options.push(<option value={categories[i]}>{categories[i]}</option>);
    }

    return options;
  }


  const body = (
    <div className={classes.paper}>
      <h2 id="simple-modal-title">Upload File</h2>
      <div>
        <input type="file" onChange={onFileChange} />
        <button onClick={onFileUpload}>
          Upload!
        </button>
      </div>
      {fileData()}
      <label htmlFor="cat-select">Category:</label>
      <select name="category" id="cat-select">
        {buildOptions()}
      </select>
    </div>
  );

  return (
    <div>
      <IconButton onClick={handleOpen}><AttachFileIcon /></IconButton>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
        className={classes.modal}
      >
        {body}
      </Modal>
      <Snackbar
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
        open={openSnack}
        autoHideDuration={6000}
        onClose={handleCloseSnack}
        message="File uploaded successfully"
        action={
          <React.Fragment>
            <Button color="secondary" size="small" onClick={handleCloseSnack}>
              UNDO
            </Button>
            <IconButton size="small" aria-label="close" color="inherit" onClick={handleCloseSnack}>
              <CloseIcon fontSize="small" />
            </IconButton>
          </React.Fragment>
        }
      />
    </div>
  );
}
