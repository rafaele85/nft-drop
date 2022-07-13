import styled from "styled-components";
import {LeftBanner} from "../../components/LeftBanner";
import {Header} from "../../components/Header";
import {MainInfo} from "../../components/MainInfo";
import {MintButton} from "../../components/MintButton";
import {useAddress} from "@thirdweb-dev/react";

type Props = {

}

const NftDropPage = () => {

    return (
        <Container>
            <Left>
                <LeftBanner />
            </Left>
            <Right>
                <Top>
                    <Header />
                </Top>
                <Center>
                    <MainInfo />
                </Center>
                <Bottom>
                    <MintButton />
                </Bottom>
            </Right>
        </Container>
    )
}

export default NftDropPage

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
`
const Left = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 30px;
  padding-top: 100px;
  background: linear-gradient(125deg, rgb(0, 0, 255) 0%, rgb(255, 100, 100) 100%)
`

const Right = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding-left: 40px;
  padding-right: 40px;
`
const Top = styled.div`
  width: 100%;
  display: flex;
`

const Center = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
`

const Bottom = styled.div`
  width: 100%;
  display: flex;
  padding-bottom: 20px;
`
