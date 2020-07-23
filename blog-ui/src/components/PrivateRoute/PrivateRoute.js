import React, { useContext } from 'react'
import { Route, Redirect, useLocation } from 'react-router-dom'
import { UserContext } from '../../App'

export default ({ children, ...props }) => {
    const { loggedIn } = useContext(UserContext)
    const location = useLocation()

    return (
        <Route {...props}>
            {
                loggedIn() ? 
                children : 
                <Redirect 
                to={{
                    pathname: "/logIn",
                    state: {
                        fromPrevPath: location
                    }
                }} 
                />
            }
            </Route>
    )

}