import React, {useContext} from 'react'
import { NavLink } from "react-router-dom";
import SearchIcon from '@material-ui/icons/Search';
import './SecondaryHeader.css'
import { UserContext } from '../../App'

export default () => {
    const {user, loggedIn} = useContext(UserContext)
    const welcomeBlock= loggedIn() ?
        (
            <>
            <div className="wlcm">Hello, {user.name}!</div>
            </>
        ) :
        <>
        </>
   

    return (

        <div className="secondary-header-container">
            <div className="container-header">
                <NavLink to="/blogList/travel" activeClassName="selected-secondary" className="filter float-left" value="travel">Travel</NavLink>
                <NavLink to="/blogList/books" activeClassName="selected-secondary" className="filter float-left">Books</NavLink>
                <NavLink to="/blogList/fashion" activeClassName="selected-secondary" className="filter float-left">Fashion</NavLink>
                <NavLink to="/blogList/food" activeClassName="selected-secondary" className="filter float-left" value="food">Food</NavLink>
                <NavLink to="/blogList/technology" activeClassName="selected-secondary" className="filter float-left">Technology</NavLink>
                <NavLink to="/home" activeClassName="selected-secondary" className="filter float-left">About Us</NavLink>
                {/* <form className="float-left">
                    <input type="text" className="search" placeholder="Search..."></input>
                    <input type="submit" className="search-btn" value="Go"></input>
                </form> */}
            </div>
                {welcomeBlock}
        </div>
    )
}