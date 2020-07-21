import React, {useState} from 'react';
import Header from './components/Header';
import { BrowserRouter as Router } from "react-router-dom";
import Content from './components/Content';
import DropDown from './components/SecondaryHeader'

const UserContext = React.createContext(null)

function App() {

  const [user, setUser] = useState(null);
  
  const userContextState = {
    user,
    login: (user) => setUser(user),
    logout: () => setUser(null),
    loggedIn: () => !!user 
    //user!==null
}

  return (
    
    <UserContext.Provider value={userContextState}>
      <Router>
        <Header />
        <DropDown />
        <Content />
      </Router>
    </UserContext.Provider>
  )
}

export default App
export {UserContext}