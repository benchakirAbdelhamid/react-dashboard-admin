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

const Ticket = () => {
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

  const [stateTicket, setstateTicket] = useState([
    {
      id: "1",
      date: "test date",
      packId: "test packId",
      eventId: "test eventId",
      userId: "test userId",
      status: "test status",
      note: "test note",
    },
    {
      id: "2",
      date: "test date",
      packId: "test packId",
      eventId: "test eventId",
      userId: "test userId",
      status: "test status",
      note: "test note",
    },
  ]);

  const handleInputChange = (e, id, field) => {
    const updatedTableData = stateTicket.map((item) =>
      item.id === id ? { ...item, [field]: e.target.value } : item
    );
    setstateTicket(updatedTableData);
  };

  const handleDeleteUser = () => {
    // console.log('deleted')
    console.log("===> deleted ===> ", idUserDeleted);
    setOpen(false);
  };

  const handleNewDataUpdated = (id) => {
    // console.log(id)
    stateTicket.forEach((itemData) => {
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
            <th>date</th>
            <th>eventId</th>
            <th>note</th>
            <th>packId</th>
            <th>status</th>
            <th>userId</th>
            <th>Delete</th>
            <th>Update</th>
          </tr>
        </thead>
        <tbody>
          {stateTicket.map((item) => (
            <tr key={item.id}>
              <td component="th" scope="row">
                <input
                  type="text"
                  value={item.date}
                  onChange={(e) => handleInputChange(e, item.id, "date")}
                />
              </td>
              <td component="th" scope="row">
                <input
                  type="text"
                  value={item.eventId}
                  onChange={(e) => handleInputChange(e, item.id, "eventId")}
                />
              </td>
              <td>
                <input
                  type="text"
                  value={item.note}
                  onChange={(e) => handleInputChange(e, item.id, "note")}
                />
              </td>
              <td>
                <input
                  type="text"
                  value={item.packId}
                  onChange={(e) => handleInputChange(e, item.id, "packId")}
                />
              </td>
              <td>
                <input
                  type="text"
                  value={item.status}
                  onChange={(e) => handleInputChange(e, item.id, "status")}
                />
              </td>
              <td>
                <input
                  type="text"
                  value={item.userId}
                  onChange={(e) => handleInputChange(e, item.id, "userId")}
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

export default Ticket;
