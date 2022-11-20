import React from "react";
import {
    Routes,
    Route,
    BrowserRouter,
  } from "react-router-dom";
  import Home from '../Pages/NoAuth/Home'; 
  import Login from '../Pages/NoAuth/Login';
  import NotFound from '../Pages/NotFound';


const AdminRouter = () => {



    return(
        <Routes>
        <Route path="/" element={<Home />}>  </Route>
        <Route path="/Login" element={<Login />}>  </Route>
        <Route path="/Register" element={<NotFound />}>  </Route>
        <Route path="/Events" element={<NotFound />}>  </Route>
        <Route path="/SocialService" element={<NotFound />}>  </Route>
        <Route path="*" element={<NotFound />}>  </Route>
        
      </Routes>
    )

}

export default AdminRouter

