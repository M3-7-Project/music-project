import styled from "styled-components";

export const Container = styled.section`
  width: 85%;
  display: flex;
  margin: 50px auto;

  div {
    width: 100%;
    display: flex;
    justify-content: space-between;
  }
`
export const Title = styled.h3`
  font-family: 'Roboto';
  font-size: 40px;
  font-weight: 700;
  color: #FFFFFF;
`

export const ArrowDiv = styled.span`
  display: flex;
  gap: 15px;

  button {
    background: transparent;
    border: none;
    color: #FFFFFF;
    cursor: pointer;   
  }
`