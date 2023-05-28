import { useState } from "react";
import { ProSidebar, Menu, MenuItem } from "react-pro-sidebar";
import { Box, IconButton, Typography, useTheme } from "@mui/material";
import { Link } from "react-router-dom";
import "react-pro-sidebar/dist/css/styles.css";
import { tokens } from "../../theme";
import DirectionsRunIcon from "@mui/icons-material/DirectionsRun";
import AssessmentIcon from "@mui/icons-material/Assessment";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import './sidebar.css';
import LogoutIcon from "@mui/icons-material/Logout";
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import DashboardCustomizeIcon from '@mui/icons-material/DashboardCustomize';
import GroupAddIcon from '@mui/icons-material/GroupAdd';
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';
import EventAvailableIcon from '@mui/icons-material/EventAvailable';
import ConfirmationNumberIcon from '@mui/icons-material/ConfirmationNumber';
import GroupIcon from '@mui/icons-material/Group';
import PersonAddAlt1Icon from '@mui/icons-material/PersonAddAlt1';
import DomainAddIcon from '@mui/icons-material/DomainAdd';

const Item = ({ title, to, icon, selected, setSelected }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <MenuItem
      active={selected === title}
      style={{
        color: colors.grey[100],
      }}
      onClick={() => setSelected(title)}
      icon={icon}
    >
      <Typography>{title}</Typography>
      <Link to={to} />
    </MenuItem>
  );
};

const SidebarOrganizer = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [selected, setSelected] = useState("Dashboard");

  return (

    // <div className="sideBa">
    <Box 
      sx={{
        // position: 'fixed', bottom: 0, left: 0, top:0,
        "& .pro-sidebar-inner": {
          background: `${colors.primary[400]} !important`,
        },
        "& .pro-icon-wrapper": {
          backgroundColor: "transparent !important",
        },
        "& .pro-inner-item": {
          padding: "5px 35px 5px 20px !important",
        },
        "& .pro-inner-item:hover": {
          color: "#868dfb !important",
        },
        "& .pro-menu-item.active": {
          color: "#6870fa !important",
        },
      }}
    >
      <ProSidebar collapsed={isCollapsed}>
        <Menu iconShape="square">
          {/* LOGO AND MENU ICON */}
          <MenuItem
            onClick={() => setIsCollapsed(!isCollapsed)}
            icon={isCollapsed ? <MenuOutlinedIcon /> : undefined}
            style={{
              margin: "10px 0 20px 0",
              color: colors.grey[100],
            }}
          >
            {!isCollapsed && (
              <Box
                display="flex"
                justifyContent="space-between"
                alignItems="center"
                ml="15px"
              >
                <Typography variant="h3" color={colors.grey[100]}>
                  Logo
                </Typography>
                <IconButton onClick={() => setIsCollapsed(!isCollapsed)}>
                  <MenuOutlinedIcon />
                </IconButton>
              </Box>
            )}
          </MenuItem>


          <Box paddingLeft={isCollapsed ? undefined : "10%"}>


           
            <Item
              title="DASHBOARD "
              to="/"
              icon={<DashboardCustomizeIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Users"
              to="/users"
              icon={<GroupIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Ticket"
              to="/ticket"
              icon={<ConfirmationNumberIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Add Ticket"
              to="/formAddTicket"
              icon={<DomainAddIcon />}
              selected={selected}
              setSelected={setSelected}
            />


           
          </Box>
        </Menu>
      </ProSidebar>
    </Box>
    // </div>
   
  );
};

export default SidebarOrganizer;
