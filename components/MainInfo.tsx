import styled from "styled-components";
import Image from 'next/image'

export const MainInfo = () => {
    return (
        <Container>
            <BannerImage src={'/assets/banner.png'} width={300} height={130} />
            <Title>The BAYC Ape coding club. | NFT Drop</Title>
            <Claimed>13 / 21 NFTs claimed</Claimed>
        </Container>
    )
}

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

const BannerImage = styled(Image)`
`

const Title = styled.h1`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding-bottom: 0;
  margin-bottom: 0;
`

const Claimed = styled.span`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  color: green;
  padding-top: 0;
  margin-top: 0;
`