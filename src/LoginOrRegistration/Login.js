import './Logo.svg';
import L from './LogoSpace.svg';
import { LogoClass, Input } from '../SharedStyles';
import { Content, LoginButton, LinkLogin } from './LoginClasses';
import { Link } from 'react-router-dom';


export default function Login () {


    return(
        <Content>
            <LogoClass src={L}alt="Logo"></LogoClass>
            <Input placeholder="E-mail" type="email"></Input>
            <Input placeholder="Senha" type="password"></Input>
            <LoginButton>Entrar</LoginButton>
            <Link to='/cadastro'><LinkLogin><p>Não tem uma conta? Cadastre-se!</p></LinkLogin></Link>
        </Content> 
        
        
    )
}