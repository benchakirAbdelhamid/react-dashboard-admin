import React, { useState } from "react";
import "./style.css";
import { Box } from "@mui/material";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import Backdrop from "@mui/material/Backdrop";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Typography from "@mui/material/Typography";

const useStyles = makeStyles((theme) => ({
  button: {
    backgroundColor: "#7a0ec2cc",
    color: "white",
    "&:hover": {
      backgroundColor: "#60079cc7",
    },
  },
}));

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  borderRadius: "10px",
  boxShadow: 100,
  p: 4,
};

const Users = () => {
  const classes = useStyles();
  // modal
  const [open, setOpen] = React.useState(false);
  const [idUserDeleted, setIdUserDeleted] = React.useState(false);
  const handleOpen = (id) => {
    setOpen(true);
    // console.log('==>',id)
    setIdUserDeleted(id);
  };
  const handleClose = () => setOpen(false);

  const [tableData, setTableData] = useState([
    {
      id: "1",
      userFirstName: "test first name",
      userEmail: "test email",
      userPassword: "test password",
      sexe: "test sexe",
      birthDate: "test birthDate",
      photoURl: "photoURl",
    },
    {
      id: "2",
      userFirstName: "test first name",
      userEmail: "test email",
      userPassword: "test password",
      sexe: "test sexe",
      birthDate: "test birthDate",
      photoURl: "photoURl",
    },
    {
      id: "3",
      userFirstName: "test first name",
      userEmail: "test email",
      userPassword: "test password",
      sexe: "test sexe",
      birthDate: "test birthDate",
      photoURl: "photoURl",
    },
  ]);

  const handleInputChange = (e, id, field) => {
    const updatedTableData = tableData.map((item) =>
      item.id === id ? { ...item, [field]: e.target.value } : item
    );
    setTableData(updatedTableData);
  };

  const handleDeleteUser = () => {
    // console.log('deleted')
    console.log("===> deleted ===> ", idUserDeleted);
    setOpen(false);
  };

  const handleNewDataUpdated = (id) => {
    // console.log(id)
    tableData.forEach((itemData) => {
      if (itemData.id == id) {
        console.log(itemData);
      }
    });
  };

  return (
    <Box m="20px">
      <div class="overflow-x-scroll">
        <table id="customers">
          <thead>
            <tr>
              <th>photoURl</th>
              <th>sexe</th>
              <th>userEmail</th>
              <th>userFirstName</th>
              <th>birthDate</th>
              <th>Delete</th>
              <th>Update</th>
            </tr>
          </thead>
          <tbody>
            {tableData.map((item) => (
              <tr key={item.id}>
                <td component="th" scope="row">
                  <input
                    type="text"
                    value={item.photoURl}
                    onChange={(e) => handleInputChange(e, item.id, "photoURl")}
                  />
                </td>
                <td>
                  <input
                    type="text"
                    value={item.sexe}
                    onChange={(e) => handleInputChange(e, item.id, "sexe")}
                  />
                </td>
                <td>
                  <input
                    type="text"
                    value={item.userEmail}
                    onChange={(e) => handleInputChange(e, item.id, "userEmail")}
                  />
                </td>
                <td>
                  <input
                    type="text"
                    value={item.userFirstName}
                    onChange={(e) =>
                      handleInputChange(e, item.id, "userFirstName")
                    }
                  />
                </td>
                <td>
                  <input
                    type="text"
                    value={item.birthDate}
                    onChange={(e) => handleInputChange(e, item.id, "birthDate")}
                  />
                </td>
                <td>
                  <Button
                    className={classes.button}
                    onClick={(e) => handleOpen(item.id)}
                  >
                    Delete
                  </Button>
                </td>
                <td>
                  <Button
                    className={classes.button}
                    onClick={(e) => handleNewDataUpdated(item.id)}
                  >
                    Update
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>


      {/* modal */}
      <div>
        <Modal
          aria-labelledby="transition-modal-title"
          aria-describedby="transition-modal-description"
          open={open}
          onClose={handleClose}
          closeAfterTransition
          slots={{ backdrop: Backdrop }}
        >
          <Fade in={open}>
            <Box sx={style}>
              <Typography
                id="transition-modal-title"
                variant="h6"
                component="h2"
              >
                Are you sure you want to delete this user!
              </Typography>
              <Typography id="transition-modal-description" sx={{ mt: 2 }}>
                <Button onClick={handleDeleteUser} className={classes.button}>
                  Yes
                </Button>
                <Button onClick={handleClose} className={classes.button}>
                  no
                </Button>
              </Typography>
            </Box>
          </Fade>
        </Modal>
      </div>
      {/* modal */}
    </Box>
  );
};

export default Users;
