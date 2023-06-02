import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Topbar from "./scenes/global/Topbar";
import Sidebar from "./scenes/global/Sidebar";
import Form from "./scenes/filesSuperAdmin/addOrganizers/index";
import FormAddUsers from "./scenes/filesSuperAdmin/addUsers/index";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { ColorModeContext, useMode } from "./theme";
import HomeOrganizer from "./scenes/filesOrganizer/homePageOrganizer/Home";
import Home from "./scenes/filesSuperAdmin/homePage/Home";
import Test from "./scenes/TestPage/Test";
import Users from "./scenes/filesSuperAdmin/users/Users";
import UsersOrganizer from "./scenes/filesOrganizer/usersOrganizer/Users";
import Organizers from "./scenes/filesSuperAdmin/organizers/Organizers";
import Event from "./scenes/filesSuperAdmin/event/Event";
import Ticket from "./scenes/filesSuperAdmin/ticket/Ticket";
import TicketOrganizer from "./scenes/filesOrganizer/ticketOrganizer/Ticket";
import NotFound from "./scenes/filesSuperAdmin/notFound/NotFound";
import Login from "./scenes/filesSuperAdmin/login/login";
import LoginOrganizer from "./scenes/filesOrganizer/loginOrganizer/Login";
import SignUp from "./scenes/filesSuperAdmin/signup/SignUp";
import SignUpOrganizer from "./scenes/filesOrganizer/signUpOrgnizer/SignUp";
import FormAddTicket from "./scenes/filesSuperAdmin/addTicket/Ticket";
import FormAddTicketOrganizer from "./scenes/filesOrganizer/addTicketOrganizer/Ticket";
import NotFoundOrgananizer from "./scenes/filesOrganizer/notFound/NotFound";
import SidebarOrganizer from "./scenes/global/SidebarOrganizer";
import { routes } from "./data/routes";
import { useEffect } from "react";

function App() {
  const [theme, colorMode] = useMode();
  const [isSidebar, setIsSidebar] = useState(true);

  const [isLogin, setIsLogin] = useState(true); // false || true
  // const [isLogin, setIsLogin] = useState(false); // false || true
  const [personRole, setPersonRole] = useState("superAdmin"); // superAdmin || organizer
  // const [personRole, setPersonRole] = useState("organizer"); // superAdmin || organizer

  const [userRoutes, setuserRoutes] = useState([]);

  useEffect(() => {
    if (isLogin === true && personRole === "superAdmin") {
      // console.log('routes superAdmin :==> ',routes.superAdmin.superAdminIsLogin)
      setuserRoutes(routes.superAdmin.superAdminIsLogin);
    } else if (isLogin === true && personRole === "organizer") {
      // console.log('routes organizer :==> ',routes.organizer.organizerIsLogin)
      setuserRoutes(routes.organizer.organizerIsLogin);
    } else if (isLogin === false && personRole === "superAdmin") {
      // console.log('routes superAdmin :==> ',routes.superAdmin.superAdminIsNotLogin)
      setuserRoutes(routes.superAdmin.superAdminIsNotLogin);
    } else if (isLogin === false && personRole === "organizer") {
      // console.log('routes organizer :==> ',routes.organizer.organizerIsNotLogin)
      setuserRoutes(routes.organizer.organizerIsNotLogin);
    }
  }, [isLogin, personRole]);

  // useEffect(() => {
  //   if (userRoutes.length > 0) {
  //     console.log(userRoutes);
  //   }
  // }, [userRoutes]);

  return (
    <>
      {isLogin === true ? (
        userRoutes.length > 0 ? (
          <ColorModeContext.Provider value={colorMode}>
            <ThemeProvider theme={theme}>
              <CssBaseline />
              <div className="app">
                {personRole === "superAdmin" ? (
                  <Sidebar isSidebar={isSidebar} />
                ) : (
                  <SidebarOrganizer isSidebar={isSidebar} />
                )}

                <main className="content">
                  <Topbar setIsSidebar={setIsSidebar} />
                  <Routes>
                    {userRoutes.map((x) => {
                      return (
                        <Route key={x.id} path={x.path} element={x.element} />
                      );
                    })}
                  </Routes>
                </main>
              </div>
            </ThemeProvider>
          </ColorModeContext.Provider>
        ) : null
      ) : null}

      {isLogin === false ? (
        userRoutes.length > 0 ? (
          <Routes>
            {userRoutes.map((x) => {
              return <Route key={x.id} path={x.path} element={x.element} />;
            })}
            <Route path="/signUp" element={<SignUp />} />
          </Routes>
        ) : null
      ) : null}

      {/* {isLogin === true && personRole === "superAdmin" ? (
        <ColorModeContext.Provider value={colorMode}>
          <ThemeProvider theme={theme}>
            <CssBaseline />
            <div className="app">
              <Sidebar isSidebar={isSidebar} />
              <main className="content">
                <Topbar setIsSidebar={setIsSidebar} />
                <Routes>
                 
                  <Route path="/:categoryName" element={<Test />} />
                  <Route path="/:categoryName/:nameEvent" element={<Test />} />
                  <Route
                    path="/:categoryName/:nameEvent/:cart"
                    element={<Test />}
                  />
                 
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
      ) : null} */}
      {/* {isLogin === true && personRole === "organizer" ? (
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
                  <Route
                    path="/formAddTicket"
                    element={<FormAddTicketOrganizer />}
                  />
                  <Route path="*" element={<NotFoundOrgananizer />} />
                </Routes>
              </main>
            </div>
          </ThemeProvider>
        </ColorModeContext.Provider>
      ) : null} */}
      {/* {isLogin === false && personRole === "superAdmin" ? (
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/signUp" element={<SignUp />} />
        </Routes>
      ) : null} */}
      {/* {isLogin === false && personRole === "organizer" ? (
        <Routes>
          <Route path="/" element={<LoginOrganizer />} />
          <Route path="/signUp" element={<SignUpOrganizer />} />
        </Routes>
      ) : null} */}
    </>
  );
}

export default App;
