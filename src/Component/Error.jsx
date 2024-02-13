import React from "react";
import "../Style/Error.css"
import { Link } from "react-router-dom";
const Error = () => {
  return (
    <>
    <div class="error-container"> 
        <h1> 404 </h1> 
        <p> 
            Oops! The page you're 
            looking for is not here. 
        </p> 
       <Link to={"/"}>Go Back To Home</Link>
    </div> 
    </>
  );
};

export default Error;
