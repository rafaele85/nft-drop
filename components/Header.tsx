import styled from "styled-components";
import {useAddress, useDisconnect, useMetamask} from "@thirdweb-dev/react";

export const Header = () => {
    const connectWithMetamask = useMetamask()
    const disconnect = useDisconnect()
    const address = useAddress()

    const isLoggedIn = !!address

    const handleSignIn = async () => {
        await connectWithMetamask()
    }

    const handleSignOut = async () => {
        await disconnect()
    }

    let jsxLoggedInAs
    if (isLoggedIn) {
        jsxLoggedInAs = (
            <LoggedInAs>
                You are logged in with wallet {address}
            </LoggedInAs>
        )
    }

    const jsxLoginButton = (
        isLoggedIn
        ? (<SignOutButton onClick={handleSignOut}>Sign Out</SignOutButton>)
        : (<SignInButton onClick={handleSignIn}>Sign In</SignInButton>)
    )

    return (
        <Container>
            <Top>
                <Title>
                    The <BAYC>BAYC</BAYC> NFT MarketPlace
                </Title>
                {jsxLoginButton}
            </Top>
            {jsxLoggedInAs}
        </Container>
    )
}

const Container = styled.div`
  width: 100%;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
`

const Top = styled.div`
  width: 100%;
  border-bottom: 1px solid black;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding-bottom: 5px;
`

const Title = styled.div`
  width: 100%;
  white-space: nowrap;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
`
const SignOutButton = styled.button`
  border: 0;
  border-radius: 40px;
  background: lightgray;
  white-space: nowrap;
  font-weight: bold;
  padding: 10px;
  cursor: pointer;
`

const SignInButton = styled.button`
  border: 0;
  border-radius: 40px;
  color: white;
  background: palevioletred;
  white-space: nowrap;
  font-weight: bold;
  padding: 10px;
  cursor: pointer;
`

const BAYC = styled.b`
  font-weight: bold;
  padding-left: 0.3rem;
  padding-right: 0.3rem;
`

const LoggedInAs = styled.span`
  padding-top: 10px;
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  color: red;
`
