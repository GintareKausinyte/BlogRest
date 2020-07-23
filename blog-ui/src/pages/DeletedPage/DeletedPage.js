import React from 'react'
import { Link } from "react-router-dom";
import './DeletedPage.css'


export default ()=>{
    return (
    <div className="height align-center">
       <div className="submit-text">Your article has been succesfully deleted</div> 
       <Link to="/userArticles">Go back to your articles list</Link>
    </div>        
    )
}