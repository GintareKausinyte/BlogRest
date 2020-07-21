import React from 'react'
import './Favourites.css'

export default () => {
    let local = localStorage.getItem("favourites")
 
    return (
        <div>
            {/* {!local.length ? ((<div>{local}</div>))
            :((<div className="nolist">You don't have favourite articles</div>))} */}
            {local.length}
        </div>
    )
}