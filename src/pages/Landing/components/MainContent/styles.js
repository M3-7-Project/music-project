import styled from "styled-components";

export const MainContainer = styled.div`
  width: 85%;
  display: flex;
  justify-content: space-between;
  margin: 90px auto;
  align-items: center;
  position: relative;

  img {
    position: absolute;
    left: 50%;
    margin-left: -201px;
  }
`

export const TextContainer = styled.div`
  width: 50%;
  z-index: 1;
  color: #F8F9FA;
  font-family: 'Roboto';

  h1 {
    font-size: 80px;
    font-weight: 700;
    text-shadow: 4px 4px 5px rgba(0, 0, 0, 0.4);
    line-height: 94px;
  }

  p {
    margin-top: 1.5rem;
    width: 65%;
    font-size: 12px;
    font-weight: 300;
    line-height: 18px;
  }
`

export const BaloonsContainer = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  margin: 0 auto;
  gap: 57px;
  z-index: 1;

  div {
    width: 370px;
    height: 100px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: #4D194D;
    border-radius: 20px;

    color: #F8F9FA;

    padding: 5px;
     
     p {
      font-family: 'Roboto';
      font-size: 22px;
      line-height: 33px;
      text-align: center;
     }   
  }

  button {
    width: 370px;
    height: 100px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: #A76CB2;
    border-radius: 20px;
    color: #F8F9FA;
    border: none;

    cursor: pointer;



    padding: 5px;
     
     p {
      font-family: 'Roboto';
      font-size: 22px;
      line-height: 33px;
      text-align: center;
     }   
  }
  `