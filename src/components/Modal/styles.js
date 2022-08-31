import styled from "styled-components";

export const ModalStyled = styled.div`
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1;
  background-color: rgba(18, 18, 20, 0.5);

  > div {
    display: flex;
    align-items: center;
    justify-content: center;
    height: inherit;

    > div {
      width: 30rem;
      background-color: #212529;
      border-radius: 0.625rem;

      > div {
        > div {
         position: relative;
          > img{
            width: 4.375rem;
            position: absolute;
            left: -30px;
            top: -28px;
          }

          >button{
            position: absolute;
            right: 0;
            top: 4px;
          }
          display: flex;
        }
      }
    }
  }
`;
