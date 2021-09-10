import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Login from "./LoginOrRegistration/Login";
import Registration from './LoginOrRegistration/Registration';
import Habits from './Habits/Habits';
import UserImageContext from './Contexts/UserImageContext';
import { useState } from 'react';
import TokenContext from './Contexts/Token';

export default function App() {

  const [userImage, setUserImage] = useState('');
  const [token, setToken] = useState('');

  return (
    <>
    <TokenContext.Provider value={token}>
    <UserImageContext.Provider value={userImage}>
    <BrowserRouter>
      <Switch>
        <Route path="/" exact>
          <Login></Login>
        </Route>
        <Route path="/cadastro" exact>
          <Registration></Registration>
        </Route>
        <Route path="/habitos" exact>
          <Habits></Habits>
        </Route>
      </Switch>
    </BrowserRouter>
    </UserImageContext.Provider>
    </TokenContext.Provider>
    </>
  );
}

