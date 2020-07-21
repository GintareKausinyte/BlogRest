import React from 'react'
import { Link } from "react-router-dom";
import './SubmittedPage.css'


export default ()=>{
    return (
    <div className="height align-center">
       <div className="submit-text">Your article has been succesfully submitted!</div> 
       <Link to="/blogList">Go back to article list</Link>
    </div>        
    )
}