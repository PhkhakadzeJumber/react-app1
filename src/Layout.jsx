import React from 'react';
import Navbar from "./Navbar";

import { Outlet, useLocation } from "react-router-dom";


function Layout() {

  const location = useLocation();

  return (

    <>

    {location.pathname !== '/LoginSignup' && location.pathname !== '/Pay' && <Navbar />}

    <main>
      <Outlet/>
    </main>
    
    </>

  );

}

export default Layout