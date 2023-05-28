import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Topbar from "./scenes/global/Topbar";
import Sidebar from "./scenes/global/Sidebar";
import Contacts from "./scenes/contacts";
import Form from "./scenes/addOrganizers/index";
import FormAddUsers from "./scenes/addUsers/index";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { ColorModeContext, useMode } from "./theme";
import HomeOrganizer from "./scenes/homePageOrganizer/Home";
import Home from "./scenes/homePage/Home";
import Test from "./scenes/TestPage/Test";
import Users from "./scenes/users/Users";
import UsersOrganizer from "./scenes/usersOrganizer/Users";
import Organizers from "./scenes/organizers/Organizers";
import Event from "./scenes/event/Event"; 
import Ticket from "./scenes/ticket/Ticket";
import TicketOrganizer from "./scenes/ticketOrganizer/Ticket";
import NotFound from "./scenes/notFound/NotFound";
import Login from "./scenes/login/login";
import LoginOrganizer from "./scenes/loginOrganizer/Login";
import SignUp from "./scenes/signup/SignUp";
import SignUpOrganizer from "./scenes/signUpOrgnizer/SignUp";
// import "../node_modules/bootstrap/dist/css/bootstrap.css";
import FormAddTicket from "./scenes/addTicket/Ticket";
import FormAddTicketOrganizer from "./scenes/addTicketOrganizer/Ticket";
import SidebarOrganizer from "./scenes/global/SidebarOrganizer";
function App() {
  const [theme, colorMode] = useMode();
  const [isSidebar, setIsSidebar] = useState(true);

  const [isLogin , setIsLogin]= useState(true) // false || true
  // const [isLogin , setIsLogin]= useState(false) // false || true
  const [personRole , setPersonRole] = useState('superAdmin') // superAdmin || organizer
  // const [personRole , setPersonRole] = useState('organizer') // superAdmin || organizer

  return (
    <>

    {
    isLogin === true && personRole === 'superAdmin'
      ? 
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="app">
          <Sidebar isSidebar={isSidebar} />
          <main className="content">
            <Topbar setIsSidebar={setIsSidebar} />
            <Routes>
              <Route path="/" element={<Home />} />
              {/* test get url route */}
              <Route path="/:categoryName" element={<Test />} />
              <Route path="/:categoryName/:nameEvent" element={<Test />} />
              <Route path="/:categoryName/:nameEvent/:cart" element={<Test />} />
              {/*test get url route  */}
              <Route path="/contacts" element={<Contacts />} />
              <Route path="/formAddOrganizer" element={<Form />} />
              <Route path="/users" element={<Users />} />
              <Route path="/organizers" element={<Organizers />} />
              <Route path="/event" element={<Event />} />
              <Route path="/ticket" element={<Ticket />} />
              <Route path="/formAddUsers" element={<FormAddUsers />} />
              <Route path="/formAddTicket" element={<FormAddTicket />} />

              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider> 
     : null
    }
    {
    isLogin === true && personRole === 'organizer'
      ? 
      <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="app">
          <SidebarOrganizer isSidebar={isSidebar} />
          <main className="content">
            <Topbar setIsSidebar={setIsSidebar} />
            <Routes>
              <Route path="/" element={<HomeOrganizer />} />
              <Route path="/users" element={<UsersOrganizer />} />
              <Route path="/ticket" element={<TicketOrganizer />} />
              <Route path="/formAddTicket" element={<FormAddTicketOrganizer />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider> 
     : null
    }
    {
    isLogin === false && personRole === 'superAdmin'
      ? 
      <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/signUp" element={<SignUp />} />
      </Routes> 
     : null
    }
    {
    isLogin === false && personRole === 'organizer'
      ? 
      <Routes>
      <Route path="/" element={<LoginOrganizer />} />
      <Route path="/signUp" element={<SignUpOrganizer />} />
      </Routes> 
     : null
    }



   
    </>
  );
}

export default App;
