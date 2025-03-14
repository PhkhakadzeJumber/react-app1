import React from 'react';
import Navbar from "./Navbar";

import { Outlet, useLocation } from "react-router-dom";
import { useState } from 'react';

function Layout() {

  const location = useLocation();
  const [searchQuery, setSearchQuery] = useState("");

  return (

    <>

    {location.pathname !== '/LoginSignup' && location.pathname !== '/Pay' && <Navbar searchQuery={searchQuery} setSearchQuery={setSearchQuery}/>}

    <main>
      <Outlet context={searchQuery}/>
    </main>
    
    </>

  );

}

export default Layout