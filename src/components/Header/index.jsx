import { Link } from 'react-router-dom'


import { RiShutDownLine } from 'react-icons/ri'
import {Container, Profile, Logout} from './styles';



export function Header() {
    return(
        <Container>
            <Profile to="/profile">
                <img src="https://github.com/jei3.png"
                alt="Foto do usuário"
                />
                <div>
                    <span>Bem-vindo</span>
                    <strong>Jabriel Schafer</strong>
                </div>

            </Profile>

            <Logout>
                <RiShutDownLine />
            </Logout>
        </Container>

    )
}