import * as React from "react";
import Stack from "@mui/material/Stack";
import SnackbarContent from "@mui/material/SnackbarContent";
import { useSelector } from "react-redux/es/exports";

export default function Notification() {
  const Notif = useSelector((state) => state.topBar.notifications);
  return (
    <Stack
      spacing={2}
      sx={{ maxWidth: 600 }}
      style={{ marginLeft: "20px", marginTop: "20px" }}
    >
      {Notif.map((n) => (
        <SnackbarContent key={n.id} message={`${n.message}`} />
      ))}
    </Stack>
  );
}
