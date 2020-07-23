import React, { useContext } from 'react'
import { NavLink, Link } from "react-router-dom";
import './Header.css'
import { setCredentials } from '../../api'
import FavoriteBorderTwoToneIcon from '@material-ui/icons/FavoriteBorderTwoTone';
import { UserContext } from '../../App'
import { useHistory } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles';
import { FavouritesContext } from '../../App'
import Badge from '@material-ui/core/Badge';


export default () => {
    const { user, logout, loggedIn } = useContext(UserContext)
    const {favNumber} = useContext(FavouritesContext)
    const history = useHistory();
  
    const logoutClick = (e) => {
        e.preventDefault()
        setCredentials(null)
        logout()
        history.push('/blogList')

    }


    const loggedInBlock = loggedIn() ?
        (
            <>
                <NavLink to="/createBlog" className="static-btn" activeClassName="selected">Write New</NavLink>
                <NavLink to="/userArticles" className="static-btn" activeClassName="selected">Your Articles</NavLink>
                <Link to="/logOut" className="static-btn" activeClassName="selected" onClick={logoutClick}>Log Out</Link>
            </>
        ) :
        <>
            <Link to="/logIn" className="static-btn" activeClassName="selected">Write New</Link>
            <NavLink to="/registration" className="static-btn" activeClassName="selected">Register</NavLink>
            <NavLink to="/logIn" className="static-btn" activeClassName="selected">Log In</NavLink>
        </>
    return (
        <div className="header-container">
            <select className="lang-btn float">
                <option lang="en" value="english">EN</option>
                <option lang="lt" value="lithuanian">LT</option>
            </select>
            <div className='container'>
                <div className="float-right">
                    <NavLink to="/blogList" className="static-btn" activeClassName="selected">All Articles</NavLink>
                    {loggedInBlock}
                    <Link to="/favourites" className="static-btn">
                        
                
                            <Badge badgeContent={favNumber} color="primary" fontSize="small">
                            <FavoriteBorderTwoToneIcon fontSize="medium" color="action" />
                            </Badge>
                        

                    </Link>
                </div>
                <div className="float-left">
                    <Link className="main-title" to="/blogList">Blogger</Link>
                </div>
            </div>
        </div>
    )
}