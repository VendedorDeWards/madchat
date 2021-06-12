import Head from 'next/head'
import styled from 'styled-components'
import { Button } from '@material-ui/core'
import { auth, provider } from '../firebase'

function login() {

    const signIn = () => {
        auth.signInWithPopup(provider).catch(alert)
    }

    return (
        <Container>
            <Head>
                <title>Login</title>
            </Head>
        
        <LoginContainer>
            <Logo src="https://i.imgur.com/7mGQQ9g.png"/>
            <Button variant="outlined" onClick={signIn}>Sign in with Google</Button>
        
        </LoginContainer>
        </Container>
    )
}

export default login

const Container = styled.div`
    display: grid;
    place-items: center;
    height: 100vh;
`;

const LoginContainer = styled.div`
    padding: 100px;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: white;
    box-shadow: 0 4px 14px -3px rgba(0, 0, 0, 0.7);
`;
const Logo = styled.img`
    height: 100px;
    width: 400px;
    margin-bottom: 50px;
`;