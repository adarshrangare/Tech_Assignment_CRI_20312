import React from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setAuth } from "../Redux/AuthReducer/action"; // Adjust import as needed

const Header = () => {
  const { isAuth } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const handleLogout = () => {
    localStorage.removeItem("authToken");
    dispatch(setAuth({ isAuth: false, token: "" }));
    alert("User is logged out");
  };

  return (
    <header className="header">
      <h1>Movie Library</h1>
      <Link to={"/"}>Home</Link>
      {!isAuth ? (
        <Link to={"/login"}>Login</Link>
      ) : (
        <button onClick={handleLogout}>Logout</button>
      )}
    </header>
  );
};

export default Header;
