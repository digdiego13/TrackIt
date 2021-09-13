import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Login from "./LoginOrRegistration/Login";
import Registration from './LoginOrRegistration/Registration';
import Habits from './Habits/Habits';
import UserImageContext from './Contexts/UserImageContext';
import { useState } from 'react';
import TokenContext from './Contexts/Token';
import Today from './Today/Today';
import ProgressContext from './Contexts/ProgressContext';
import History from './History/History';
export default function App() {

  const [userImage, setUserImage] = useState('');
  const [token, setToken] = useState('');
  const [progress, setProgress] = useState(0)
  return (
    <>
    <ProgressContext.Provider value= {{progress, setProgress}}>
    <TokenContext.Provider value={{token, setToken}}>
    <UserImageContext.Provider value={{userImage, setUserImage}}>
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
        <Route path="/hoje" exact>
          <Today></Today>
        </Route>
        <Route path="/historico" exact>
          <History></History>
        </Route>
      </Switch>
    </BrowserRouter>
    </UserImageContext.Provider>
    </TokenContext.Provider>
    </ProgressContext.Provider>
    </>
  );
}

