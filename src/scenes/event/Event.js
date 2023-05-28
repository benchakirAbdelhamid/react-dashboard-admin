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

const Event = () => {
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

  const [stateEvent, setstateEvent] = useState([
    {
      id: "1",
      eventName: "test eventName",
      eventPrice: "test eventPrice",
      description_event: "test description_event",
      dateEvent: "test dateEvent",
      locationEvent: "test locationEvent",
      imageEvent: "test imageEvent",
      statusEvent: "test statusEvent",
      placesNumber: "test placesNumber",
      typeEvenement: "test typeEvenement",
      idOrganizer: "test idOrganizer",
    },
    {
      id: "2",
      eventName: "test eventName",
      eventPrice: "test eventPrice",
      description_event: "test description_event",
      dateEvent: "test dateEvent",
      locationEvent: "test locationEvent",
      imageEvent: "test imageEvent",
      statusEvent: "test statusEvent",
      placesNumber: "test placesNumber",
      typeEvenement: "test typeEvenement",
      idOrganizer: "test idOrganizer",
    },
  ]);

  const handleInputChange = (e, id, field) => {
    const updatedTableData = stateEvent.map((item) =>
      item.id === id ? { ...item, [field]: e.target.value } : item
    );
    setstateEvent(updatedTableData);
  };

  const handleDeleteUser = () => {
    // console.log('deleted')
    console.log("===> deleted ===> ", idUserDeleted);
    setOpen(false);
  };

  const handleNewDataUpdated = (id) => {
    // console.log(id)
    stateEvent.forEach((itemData) => {
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
            <th>eventName</th>
            <th>eventPrice</th>
            <th>imageEvent</th>
            <th>locationEvent</th>
            <th>placesNumber</th>
            <th>statusEvent</th>
            <th>typeEvenement</th>
            <th>idOrganizer</th>
            <th>description_event</th>
            <th>Delete</th>
            <th>Update</th>
          </tr>
        </thead>
        <tbody>
          {stateEvent.map((item) => (
            <tr key={item.id}>
              <td component="th" scope="row">
                <input
                  type="text"
                  value={item.eventName}
                  onChange={(e) => handleInputChange(e, item.id, "eventName")}
                />
              </td>
              <td component="th" scope="row">
                <input
                  type="text"
                  value={item.eventPrice}
                  onChange={(e) => handleInputChange(e, item.id, "eventPrice")}
                />
              </td>
              <td>
                <input
                  type="text"
                  value={item.imageEvent}
                  onChange={(e) => handleInputChange(e, item.id, "imageEvent")}
                />
              </td>
              <td>
                <input
                  type="text"
                  value={item.locationEvent}
                  onChange={(e) =>
                    handleInputChange(e, item.id, "locationEvent")
                  }
                />
              </td>
              <td>
                <input
                  type="text"
                  value={item.placesNumber}
                  onChange={(e) =>
                    handleInputChange(e, item.id, "placesNumber")
                  }
                />
              </td>
              <td>
                <input
                  type="text"
                  value={item.statusEvent}
                  onChange={(e) => handleInputChange(e, item.id, "statusEvent")}
                />
              </td>
              <td>
                <input
                  type="text"
                  value={item.typeEvenement}
                  onChange={(e) =>
                    handleInputChange(e, item.id, "typeEvenement")
                  }
                />
              </td>
              <td>
                <input
                  type="text"
                  value={item.idOrganizer}
                  onChange={(e) => handleInputChange(e, item.id, "idOrganizer")}
                />
              </td>
              <td>
                <input
                  type="text"
                  value={item.description_event}
                  onChange={(e) =>
                    handleInputChange(e, item.id, "description_event")
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

export default Event;
