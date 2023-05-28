import React, { useState } from "react";
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

const Organizers = () => {
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

  const [stateOrganizers, setstateOrganizers] = useState([
    {
      id: "1",
      FirstName: "test first name",
      LastName: "test Last Name",
      email: "test email",
      password: "test password",
      organizationName: "test organizationName",
    },
    {
      id: "2",
      FirstName: "test first name",
      LastName: "test Last Name",
      email: "test email",
      password: "test password",
      organizationName: "test organizationName",
    },
    {
      id: "3",
      FirstName: "test first name",
      LastName: "test Last Name",
      email: "test email",
      password: "test password",
      organizationName: "test organizationName",
    },
  ]);

  const handleInputChange = (e, id, field) => {
    const updatedTableData = stateOrganizers.map((item) =>
      item.id === id ? { ...item, [field]: e.target.value } : item
    );
    setstateOrganizers(updatedTableData);
  };

  const handleDeleteUser = () => {
    // console.log('deleted')
    console.log("===> deleted ===> ", idUserDeleted);
    setOpen(false);
  };

  const handleNewDataUpdated = (id) => {
    // console.log(id)
    stateOrganizers.forEach((itemData) => {
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
              <th>FirstName</th>
              <th>LastName</th>
              <th>email</th>
              <th>organizationName</th>
              <th>Delete</th>
              <th>Update</th>
            </tr>
          </thead>
          <tbody>
            {stateOrganizers.map((item) => (
              <tr key={item.id}>
                <td component="th" scope="row">
                  <input
                    type="text"
                    value={item.FirstName}
                    onChange={(e) => handleInputChange(e, item.id, "FirstName")}
                  />
                </td>
                <td>
                  <input
                    type="text"
                    value={item.LastName}
                    onChange={(e) => handleInputChange(e, item.id, "LastName")}
                  />
                </td>
                <td>
                  <input
                    type="text"
                    value={item.email}
                    onChange={(e) => handleInputChange(e, item.id, "email")}
                  />
                </td>
                <td>
                  <input
                    type="text"
                    value={item.organizationName}
                    onChange={(e) =>
                      handleInputChange(e, item.id, "organizationName")
                    }
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
                Are you sure you want to delete this organizer !
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

export default Organizers;
