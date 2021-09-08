import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Login from "./LoginOrRegistration/Login";
import Registration from './LoginOrRegistration/Registration';

export default function App() {
  return (
    <>
    <BrowserRouter>
      <Switch>
        <Route path="/" exact>
          <Login></Login>
        </Route>
        <Route path="/cadastro" exact>
          <Registration></Registration>
        </Route>
      </Switch>
    </BrowserRouter>
    </>
  );
}

