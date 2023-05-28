import React from "react";
import { Box, useTheme } from "@mui/material";
import { tokens } from "../../theme";
import Grid from "@mui/material/Grid";
import EmailIcon from "@mui/icons-material/Email";
import Header from "../../components/Header";
import StatBox from "../../components/StatBox";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import "./style.css";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import AccessibilityIcon from "@mui/icons-material/Accessibility";
import EventIcon from "@mui/icons-material/Event";
import ConfirmationNumberIcon from "@mui/icons-material/ConfirmationNumber";
import SupervisorAccountIcon from "@mui/icons-material/SupervisorAccount";
import { useSelector } from "react-redux/es/exports";
import { ResponsivePie } from "@nivo/pie";
import { useEffect } from "react";
import { useState } from "react";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const Home = () => {
  const [number, setNumber] = useState(360);
  const topBarData = useSelector((state) => state.topBar);
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const [stateSuperAdmin , setStateSuperAdmin] = useState([
    {
      id : '1',
      lastName:'Abdelhamid',
      firstName:'benchakir',
      password:'test password',
      auth_expiring:'test auth_expiring',
    },
  ])


  let fullName = `Welcome Organizer ${stateSuperAdmin[0].lastName} ${stateSuperAdmin[0].firstName} to your dashboard`;

  return (
    <div>
      <Box m="20px">
        {/* HEADER */}
        <Box display="flex" justifyContent="space-between" alignItems="center">
          {/* <Header title="DASHBOARD" subtitle="Welcome to your dashboard" /> */}
          <Header title="DASHBOARD" subtitle={fullName} />
        </Box>
        {/* {topBarData.super_admin[0].lastName +' ' } */}
        {/* {topBarData.super_admin[0].firstName  } */}
      </Box>

      <Box m="20px" sx={{ flexGrow: 1 }}>

      </Box>

<div class="ag-format-container">
  <div class="ag-courses_box">
    <div class="ag-courses_item">
      <a href="#" class="ag-courses-item_link">
        <div class="ag-courses-item_bg"></div>

        <div class="ag-courses-item_title">
        Clients Information
          <StatBox
                  title="12,361"
                  subtitle="Clients"
                  progress="0.75"
                  increase="+14%"
                  icon={
                    <AccessibilityIcon
                      sx={{ color: colors.greenAccent[600], fontSize: "30px" }}
                    />
                  }
                />
        </div>

        <div class="ag-courses-item_date-box">
          Start:
          <span class="ag-courses-item_date">
            04.11.2022
          </span>
        </div>
      </a>
    </div>

    <div class="ag-courses_item">
      <a href="#" class="ag-courses-item_link">
        <div class="ag-courses-item_bg"></div>

        <div class="ag-courses-item_title">
          Orders Information
          <StatBox
                  title="12,361"
                  subtitle="Orders"
                  progress="0.75"
                  increase="+14%"
                  icon={
                    <AddShoppingCartIcon
                      sx={{ color: colors.greenAccent[600], fontSize: "30px" }}
                    />
                  }
                />
        </div>

        <div class="ag-courses-item_date-box">
          Start:
          <span class="ag-courses-item_date">
            04.11.2022
          </span>
        </div>
      </a>
    </div>

 

    <div class="ag-courses_item">
      <a href="#" class="ag-courses-item_link">
        <div class="ag-courses-item_bg"></div>

        <div class="ag-courses-item_title">
        Tickets Information
          <StatBox
                  title="12,361"
                  subtitle="Ticket"
                  progress="0.75"
                  increase="+19%"
                  icon={
                    <ConfirmationNumberIcon
                      sx={{ color: colors.greenAccent[600], fontSize: "26px" }}
                    />
                  }
                />
          
        </div>

        <div class="ag-courses-item_date-box">
          Start:
          <span class="ag-courses-item_date">
            04.11.2022
          </span>
        </div>
      </a>
    </div>


  </div>
</div>
    
    </div>
  );
};

export default Home;
