import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Home from "./Pages/Home.js";
import UserRegister from "./Components/User/Register.js";
import UserProfile from "./Pages/profile/UserProfile.js";
import { AuthorizeUser } from "./middleware/auth.js";
import { useSelector } from "react-redux";
import AdminProfile from "./Pages/profile/AdminProfile.js";
const router = createBrowserRouter([
  {
    path:"/",
    element:<div><Home /></div>
  },
  {
    path:"/register",
    element:<div><UserRegister/></div>
  },
  {
    path:"/userprofile",
    element:<AuthorizeUser><UserProfile /></AuthorizeUser>
  },
  {
    path:"/adminprofile",
    element:<AuthorizeUser><AdminProfile /></AuthorizeUser>
  }
])

function App() {
  const isUserloggedin = useSelector(state => state.user.isLoggedIn);

// For admin slice
const isAdminLoggedin = useSelector(state => state.admin.isLoggedIn);
  console.log("isAdminLoggedin",isAdminLoggedin)
  console.log("isUserloggedin",isUserloggedin)
  return (
    <main>
      <RouterProvider router={router}>

      </RouterProvider>
    </main>
  );
}

export default App;