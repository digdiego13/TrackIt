
import L from './LogoSpace.svg';
import { LogoClass, Input } from '../SharedStyles';
import { Content, LoginButton, LinkLogin, EntrarClass } from './LoginClasses';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { tryLogin } from '../Service';
import { useHistory } from 'react-router';
import { useContext } from 'react';
import TokenContext from '../Contexts/Token';
import UserImageContext from '../Contexts/UserImageContext';
import Loader from 'react-loader-spinner';


export default function Login () {
    const [loading, setLoading] = useState(false);
    const [login, setLogin] = useState({});
    const history = useHistory()
    const {setToken} = useContext(TokenContext);
    const {setUserImage} = useContext(UserImageContext);

    function signIn () {
        setLoading(true)
        tryLogin(login)
        .then((res)=> {setToken(res.data.token)

            history.push("/hoje");
            setUserImage(res.data.image);
            setLoading(false)
        ;
        } )
        .catch(()=> {alert('Login ou senha incorretos');
        setLoading(false)})

    }
    return(
        <Content>
            <LogoClass src={L}alt="Logo"></LogoClass>
            <Input disabled={loading} placeholder="E-mail" type="email" value={login.email} onChange={(e) => setLogin({...login, email: e.target.value})}></Input>
            <Input disabled={loading} placeholder="Senha" type="password" value={login.passWord} onChange={(e) => setLogin({...login, password: e.target.value})}></Input>
            <LoginButton onClick={signIn}>
                <Loader type="ThreeDots" color="white" visible={loading}></Loader>
                <EntrarClass loading={loading}>Entrar</EntrarClass>
            </LoginButton>
            <Link to='/cadastro'><LinkLogin><p>Não tem uma conta? Cadastre-se!</p></LinkLogin></Link>
        </Content> 
        
        
    )
}