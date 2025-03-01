import React from "react";
import Login from './Login';

const Pages = () => {
  return (
    <BrowserRouter>
    <Routes>
    <Route path="/" element={<Login/>}/>
    <Route path="/Home" element={<Home/>}/>
    </Routes>
    </BrowserRouter>

  );
};

export default Pages;