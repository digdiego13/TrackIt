import './Logo.svg';
import L from './LogoSpace.svg';
import { LogoClass, Input } from '../SharedStyles';
import { Content, LoginButton, LinkLogin } from './LoginClasses';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { tryLogin } from '../Service';
import { useHistory } from 'react-router';
import { useContext } from 'react';
import TokenContext from '../Contexts/Token';

export default function Login () {
    const [login, setLogin] = useState({});
    const history = useHistory()
    const {setToken} = useContext(TokenContext);

    function signIn () {
        //devo colocar um if... se token === '', carregamento
        tryLogin(login)
        .then((res)=> {setToken(res.data.token)
            history.push("/hoje")
        ;
        } )
        .catch(()=> alert('Login ou senha incorretos'))

    }
    return(
        <Content>
            <LogoClass src={L}alt="Logo"></LogoClass>
            <Input placeholder="E-mail" type="email" value={login.email} onChange={(e) => setLogin({...login, email: e.target.value})}></Input>
            <Input placeholder="Senha" type="password" value={login.passWord} onChange={(e) => setLogin({...login, password: e.target.value})}></Input>
            <LoginButton onClick={signIn}>Entrar</LoginButton>
            <Link to='/cadastro'><LinkLogin><p>Não tem uma conta? Cadastre-se!</p></LinkLogin></Link>
        </Content> 
        
        
    )
}