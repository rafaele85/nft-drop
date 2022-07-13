import styled from "styled-components";

export const MintButton = () => {
    const handleMint = () => {

    }
    return (
        <Button onClick={handleMint}>Mint NFT (0.01 Eth)</Button>
    )
}

const Button = styled.button`
  width: 100%;
  border: 0;
  border-radius: 30px;
  background: #950202;
  color: white;
  padding: 20px;
  cursor: pointer;
`