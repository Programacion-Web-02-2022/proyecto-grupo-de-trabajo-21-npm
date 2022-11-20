import React from "react";
import {
    Routes,
    Route,
    BrowserRouter,
  } from "react-router-dom";

  import Home from '../Pages/NoAuth/Home'; 
  import Login from '../Pages/NoAuth/Login';
  import Register from '../Pages/NoAuth/Register';
  import Events from '../Pages/NoAuth/Events';
  import SocialService from '../Pages/NoAuth/SocialService';
  import NotFound from '../Pages/NotFound';
import About from "../Pages/NoAuth/About";
import Blog from "../Pages/User/Blog";
import Profile from "../Pages/User/Profile";
import MyPost from "../Pages/User/MyPost";
import MyPets from "../Pages/User/MyPets";
import Dates from "../Pages/User/Dates";
import DateHistory from "../Pages/User/DateHistory";
import FavoritePost from "../Pages/User/FavoritePost";
import NewDate from "../Pages/User/NewDate";
import NewPost from "../Pages/User/NewPost";
import PetProfile from "../Pages/User/PetProfile";
import PostComments from "../Pages/User/PostComments";


 

  const UserRouter = () => {

    return(
        <Routes>
        <Route path="/" element={<Home />}>  </Route>
        <Route path="/Blog" element={<Blog />}>  </Route>
        <Route path="/Profile" element={<Profile/>}>  </Route>
        <Route path="/MyPost" element={<MyPost />}>  </Route>
        <Route path="/MyPets" element={<MyPets />}>  </Route>
        <Route path="/Dates" element={<Dates />}>  </Route>
        <Route path="/DateHistory" element={<DateHistory />}>  </Route>
        <Route path="/FavoritePost" element={<FavoritePost />}>  </Route>
        <Route path="/NewDate" element={<NewDate/>}>  </Route>
        <Route path="/NewPost" element={<NewPost />}>  </Route>
        <Route path="/PetProfile" element={<PetProfile />}>  </Route>
        <Route path="/PostComments" element={<PostComments />}>  </Route>
        <Route path="*" element={<NotFound />}>  </Route>
        <Route path="/SocialService" element={<SocialService />}>  </Route>
        <Route path="/About" element={<About />}>  </Route>
      </Routes>

    );
  }

  export default UserRouter;