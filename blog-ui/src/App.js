import React, { useState } from 'react';
import Header from './components/Header';
import { BrowserRouter as Router } from "react-router-dom";
import Content from './components/Content';
import DropDown from './components/SecondaryHeader'

const UserContext = React.createContext(null)
const FavouritesContext = React.createContext([])

function App() {

  const [user, setUser] = useState(null);
  const [fav, setFavourites] = useState([]);
  const favNumber=fav.length;

  const favouritesContextState = {
    fav,
    favNumber,
    addFav: (article) => {
      if (!fav.some((oldArticle) => oldArticle.articleId === article.articleId)) {
        setFavourites([...fav, article]);
        localStorage.setItem("favourites", JSON.stringify(fav))
        let newList=localStorage.getItem("favourites")
        // setFavourites(newFavorites)
      } else {
        console.log("already exists")
      }
    },

    deleteFav: (id) => {
      setFavourites(fav?.filter((favArticle) => favArticle.articleId !== id));
      localStorage.setItem("favourites", JSON.stringify(fav))
      // setFavourites(newFavorites)
    }
  }

  const userContextState = {
    user,
    login: (user) => setUser(user),
    logout: () => setUser(null),
    loggedIn: () => !!user
    //user!==null
  }
  // console.log(user)
  // console.log(fav)
  return (

    <UserContext.Provider value={userContextState}>
      <FavouritesContext.Provider value={favouritesContextState}>
        <Router>
          <Header />
          <DropDown />
          <Content />
        </Router>
      </FavouritesContext.Provider>
    </UserContext.Provider>
  )
}

export default App
export { UserContext }
export { FavouritesContext }