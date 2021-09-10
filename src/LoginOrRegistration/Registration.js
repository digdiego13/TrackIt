import './Logo.svg';
import L from './LogoSpace.svg';
import { LogoClass, Input } from '../SharedStyles';
import { Content, LoginButton, LinkLogin } from './LoginClasses';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { useContext } from 'react';
import { tryRegistration } from '../Service';
import { useHistory } from 'react-router';


export default function Registration () {

    const [myRegistration, setMyRegistration] = useState({});
    const history = useHistory()
    function signUp () {
        //devo alterar o context da photo e ainda colocar as paradas carregando
        console.log(myRegistration)
        
        tryRegistration(myRegistration)
        .then((res)=> {history.push("/")
        
         })
        .catch(() => alert("Algo deu errado, verifique os campos!"))
    }

    return(
        <Content>
            <LogoClass src={L}alt="Logo"></LogoClass>
            <Input placeholder="E-mail" type="email"onChange={(e) => setMyRegistration({...myRegistration, email: e.target.value})}></Input>
            <Input placeholder="Senha" type="password"onChange={(e) => setMyRegistration({...myRegistration, password: e.target.value})}></Input>
            <Input placeholder="Nome"onChange={(e) => setMyRegistration({...myRegistration, name: e.target.value})}></Input>
            <Input placeholder="Foto"onChange={(e) => setMyRegistration({...myRegistration, image: e.target.value})}></Input>
            <LoginButton onClick= {signUp}>Registrar</LoginButton>
            <Link to='/'><LinkLogin><p>Já tem uma conta? Faça login!</p></LinkLogin></Link>
        </Content>
    )
}