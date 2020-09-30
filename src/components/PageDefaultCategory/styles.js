import styled, { css } from 'styled-components';

/* eslint-disable import/prefer-default-export */
export const Main = styled.main`
    background-color: var(--black);
    color: var(--white);
    flex: 1;
    padding-top: 25px;
    padding-left: 5%;
    padding-left: 5%;
    padding-bottom: 50px;
    ${({ paddingAll }) => css`
    padding: ${paddingAll};`}
    padding: 1;
`;

export const MenuPage = styled.nav`
  width: 100%;
  height: 94px;
  z-index: 100;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  padding-left: 5%;
  padding-right: 5%;
  background: var(--black);
  border-bottom: 2px solid var(--primary);

  body {
    --bodyPaddingTop: 94px;
    padding-top: var(--bodyPaddingTop);

  }

  .Logo {
    max-width: 168px;

      &:hover {
      opacity: 0.5;
    }
  } 

  @media (max-width: 800px) {    
    height: 40px;
    justify-content: center;

    .Logo {
      max-width: 105px;
    }

    body {
      --bodyPaddingTop: 40px;
      padding-top: var(--bodyPaddingTop);
    }

    a.ButtonLink { 
      position: fixed;
      left: 0;
      right: 0;
      bottom: 0;
      background: var(--primary);
      border-radius: 0;
      border: 0;
      text-align: center;
      /*display: none; Only in the Registers Page*/
    }
  }
`;
