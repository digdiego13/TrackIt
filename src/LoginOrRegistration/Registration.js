import './Logo.svg';
import L from './LogoSpace.svg';
import { LogoClass, Input } from '../SharedStyles';
import { Content, LoginButton, LinkLogin } from './LoginClasses';
import { Link } from 'react-router-dom';


export default function Registration () {

    return(
        <Content>
            <LogoClass src={L}alt="Logo"></LogoClass>
            <Input placeholder="E-mail" type="email"></Input>
            <Input placeholder="Senha" type="password"></Input>
            <Input placeholder="Nome"></Input>
            <Input placeholder="Foto"></Input>
            <LoginButton>Entrar</LoginButton>
            <Link to='/'><LinkLogin><p>Já tem uma conta? Faça login!</p></LinkLogin></Link>
        </Content>
    )
}