import styled from "styled-components";
import Image from "next/image";

export const LeftBanner = () => {
    return (
        <Container>
            <LeftImageContainer>
                <LeftImage src={'/assets/bayc-1.png'} width={200} height={200} objectFit={'cover'} />
            </LeftImageContainer>
            <Title>
                BAYC Apes
            </Title>
            <Subtitle>
                A collection of BAYC Apes who live & breathe React!
            </Subtitle>
        </Container>
    )
}


const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: white;
`

const LeftImageContainer = styled.div`
  border: 4px solid yellow;
  border-radius: 10px;
`

const LeftImage = styled(Image)`
  padding: 0;
  margin: 0;
`

const Title = styled.h1`
  width: 100%;
  text-align: center;
`
const Subtitle = styled.span`
  width: 100%;
  text-align: center;
  font-size: 1rem;
  min-width: 400px;
`