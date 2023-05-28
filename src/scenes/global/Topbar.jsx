import { Box, IconButton, useTheme, Typography, Badge } from "@mui/material";
import { useContext } from "react";
import { ColorModeContext, tokens } from "../../theme";
import { Link } from "react-router-dom";
// import InputBase from "@mui/material/InputBase";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import EmailIcon from "@mui/icons-material/Email";
import LogoutIcon from "@mui/icons-material/Logout";
import { useSelector } from "react-redux/es/exports";

const Topbar = () => {
  const topBarData = useSelector((state) => state.topBar);
  // console.log(topBarData);
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const colorMode = useContext(ColorModeContext);

  return (
    <Box display="flex" justifyContent="space-between" p={2}>
      {/* SEARCH BAR */}
      <Box
        display="flex"
        backgroundColor={colors.primary[400]}
        borderRadius="3px"
      ></Box>

      {/* ICONS */}
      <Box display="flex">

        <IconButton onClick={colorMode.toggleColorMode}>
          {theme.palette.mode === "dark" ? (
            <DarkModeOutlinedIcon />
          ) : (
            <LightModeOutlinedIcon />
          )}
        </IconButton>

        <IconButton>
          <LogoutIcon />
        </IconButton>

        

      </Box>
    </Box>
  );
};

export default Topbar;
