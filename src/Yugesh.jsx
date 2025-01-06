import React from "react";
import "./App.css";
// import SlamBook from "./components/Slambook/Slambook";
import Home from "./components/Home/Home";
import bookImage from "./assets/tvkFlag.jpg";
import { Link, Route,BrowserRouter as Router, Routes } from "react-router-dom";
// import Usereffun from "./components/Hooks/Usereffun";
// import Namep from "./components/Hooks/Namep";
// import Hen from "./components/Props_drilling/Hen";
// import Chicken from "./components/Props_drilling/Chicken";
import CreateUser from "./userManagement/createUser.jsx";
//import NewUser from "./userManagement/NewUser.jsx";
import DeleteUser from "./userManagement/DeleteUser";
//import RenameUser from "./userManagement/renameUser";
import UpdateUser from "./userManagement/updateUser.jsx";
import User from "./userManagement/User";

function Yugesh() {
  return (
      <><Router>
      <header className="header">
        <div className="logo-container">
          <Link to="/</header>">
            <img src={bookImage} alt="Logo" className="logo" />

          </Link>
          <Link to="/" className="nav-link">XYZ</Link>
        </div>
        <nav className="nav">
          <Link to="/" className="nav-link">Home</Link>
          {/* <Link to="/ContactUs" className="nav-link">Contact Us</Link>
          <Link to="/List" className="nav-link">List</Link>
          <Link to="/Aboutus" className="nav-link">About Us</Link>
          <Link to="/Use" className="nav-link">Use</Link>
          <Link to="/Usereffun" className="nav-link">REF</Link>
          <Link to="/Namep" className="nav-link">Name</Link>
          <Link to="/Hen" className="nav-link">Hen</Link>
          <Link to="/Chicken" className="nav-link">Chicken</Link> 
          <Link to="/newUser" className="nav-link">NewUser</Link>*/}
          <Link to="/createUser" className="nav-link">Create User</Link>
          <Link to="/deleteUser" className="nav-link">Delete User</Link>
          <Link to="/updateUser" className="nav-link">Update User</Link>
          <Link to="/User" className="nav-link">User</Link>
        </nav>
      </header>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/ContactUs" element={<ContactUs />} />
        <Route path="/List" element={<List />} />
        <Route path="/Aboutus" element={<Aboutus />} />
        <Route path="/Use" element={<Use />} />
        <Route path="/Usereffun" element={<Usereffun />} />
        <Route path="/Namep" element={<Namep />} />
        <Route path="/chicken" element={<Chicken />} />
        <Route path="/Hen" element={<Hen name="Food" />} /> 
        <Route path="/newUser" element={<NewUser />} />*/}
        <Route path="/createUser" element={<CreateUser />} />
        <Route path="/deletUser" element={<DeleteUser />} />
        <Route path="/updateUser" element={<UpdateUser />} />
        <Route path="/User" element={<User />} />
      </Routes>
      <footer className="footer">
        &copy; {new Date().getFullYear()} XYZ Private Ltd.. All rights reserved.
      </footer>
    </Router>
    
    </>
    );
  }
export default Yugesh;
