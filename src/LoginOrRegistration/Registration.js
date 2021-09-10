import './Logo.svg';
import L from './LogoSpace.svg';
import { LogoClass, Input } from '../SharedStyles';
import { Content, LoginButton, LinkLogin } from './LoginClasses';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { useContext } from 'react';
import { tryRegistration } from '../Service';
import { useHistory } from 'react-router';
import UserImageContext from '../Contexts/UserImageContext';


export default function Registration () {

    const [myRegistration, setMyRegistration] = useState({});
    const history = useHistory()
    const {setUserImage} = useContext(UserImageContext);
    
    function signUp () {
        //colocar as paradas carregando
        tryRegistration(myRegistration)
        .then((res)=> {history.push("/")
        setUserImage(res.data.image)
        
         })
        .catch(() => alert("Algo deu errado, verifique os campos!"))
    }

    return(
        <Content>
            <LogoClass src={L}alt="Logo"></LogoClass>
            <Input placeholder="E-mail" type="email"onChange={(e) => setMyRegistration({...myRegistration, email: e.target.value})}></Input>
            <Input placeholder="Senha" type="password"onChange={(e) => setMyRegistration({...myRegistration, password: e.target.value})}></Input>
            <Input placeholder="Nome"onChange={(e) => setMyRegistration({...myRegistration, name: e.target.value})}></Input>
            <Input placeholder="Foto" value={myRegistration.image} onChange={(e) => setMyRegistration({...myRegistration, image: e.target.value})}></Input>
            <LoginButton onClick= {signUp}>Registrar</LoginButton>
            <Link to='/'><LinkLogin><p>Já tem uma conta? Faça login!</p></LinkLogin></Link>
        </Content>
    )
}