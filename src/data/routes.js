// import files supper admin
import Home from "../scenes/filesSuperAdmin/homePage/Home";
import Form from "../scenes/filesSuperAdmin/addOrganizers/index";
import Users from "../scenes/filesSuperAdmin/users/Users";
import Organizers from "../scenes/filesSuperAdmin/organizers/Organizers";
import Event from "../scenes/filesSuperAdmin/event/Event";
import Ticket from "../scenes/filesSuperAdmin/ticket/Ticket";
import FormAddUsers from "../scenes/filesSuperAdmin/addUsers/index";
import FormAddTicket from "../scenes/filesSuperAdmin/addTicket/Ticket";
import NotFound from "../scenes/filesSuperAdmin/notFound/NotFound";
import Login from "../scenes/filesSuperAdmin/login/login";
import SignUp from "../scenes/filesSuperAdmin/signup/SignUp";
// import files organizer
import HomeOrganizer from "../scenes/filesOrganizer/homePageOrganizer/Home";
import UsersOrganizer from "../scenes/filesOrganizer/usersOrganizer/Users";
import TicketOrganizer from "../scenes/filesOrganizer/ticketOrganizer/Ticket";
import FormAddTicketOrganizer from "../scenes/filesOrganizer/addTicketOrganizer/Ticket";
import NotFoundOrgananizer from "../scenes/filesOrganizer/notFound/NotFound";
import LoginOrganizer from "../scenes/filesOrganizer/loginOrganizer/Login";
import SignUpOrganizer from "../scenes/filesOrganizer/signUpOrgnizer/SignUp";

export const routes = {
  superAdmin: {
    superAdminIsLogin: [
      {
        id: 1,
        path: "/",
        element: <Home/>,
      },
      {
        id: 2,
        path: "/formAddOrganizer",
        element: <Form/>,
      },
      {
        id: 3,
        path: "/users",
        element: <Users/>,
      },
      {
        id: 4,
        path: "/organizers",
        element: <Organizers/>,
      },
      {
        id: 5,
        path: "/event",
        element: <Event/>,
      },
      {
        id: 6,
        path: "/ticket",
        element: <Ticket/>,
      },
      {
        id: 7,
        path: "/formAddUsers",
        element: <FormAddUsers/>,
      },
      {
        id: 8,
        path: "/formAddTicket",
        element: <FormAddTicket/>,
      },
      {
        id: 9,
        path: "*",
        element: <NotFound/>,
      },
    ],
    superAdminIsNotLogin: [
      {
        id: 1,
        path: "/",
        element: <Login/>,
      },
      {
        id: 2,
        path: "/signUp",
        element: <SignUp/>,
      },
    ],
  },
  organizer: {
    organizerIsLogin: [
      {
        id: 1,
        path: "/",
        element: <HomeOrganizer/>,
      },
      {
        id: 2,
        path: "/users",
        element: <UsersOrganizer/>,
      },
      {
        id: 3,
        path: "/ticket",
        element: <TicketOrganizer/>,
      },
      {
        id: 4,
        path: "/formAddTicket",
        element: <FormAddTicketOrganizer/>,
      },
      {
        id: 5,
        path: "*",
        element: <NotFoundOrgananizer/>,
      },
    ],
    organizerIsNotLogin: [
      {
        id: 1,
        path: "/",
        element: <LoginOrganizer/>,
      },
      {
        id: 2,
        path: "/signUp",
        element: <SignUpOrganizer/>,
      },
    ],
  },
};
