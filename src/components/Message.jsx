import * as React from "react";
import Stack from "@mui/material/Stack";
import SnackbarContent from "@mui/material/SnackbarContent";
import { useSelector } from "react-redux/es/exports";

export default function Message() {
  const Messages = useSelector((state) => state.topBar.messages);
  return (
    <Stack
      spacing={2}
      sx={{ maxWidth: 600 }}
      style={{ marginLeft: "20px", marginTop: "20px" }}
    >
      {Messages.map((m) => (
        <SnackbarContent key={m.id} message={`${m.message}`} />
      ))}
    </Stack>
  );
}
