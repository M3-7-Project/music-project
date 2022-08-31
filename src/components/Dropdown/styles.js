import styled from "styled-components";

export const Dropdown = styled.aside`
  width: 200px;
  height: 100vh;
  background: #212529;
  box-shadow: 8px 3px 22px 10px rgba(0, 0, 0, 0.25);
  z-index: 1;

  position: fixed;
  display: flex;
  flex-direction: column;

  img {
    height: 80px;
    width: 90px;

    position: fixed;
    left: 155px;
    top: 60px;
  }
`

export const AnchorDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-left: 40px;
  margin-top: 120px;
  gap: 30px;

  font-size: 18px;
  font-family: 'Poppins';
  color: #FFFFFF;
  font-weight: 300;

  a {
    
    &:hover{
      cursor: pointer;
      color: rgb(255,255,255,.75);
      text-decoration: underline;
    }
  }
`