import styled from 'styled-components';

/* eslint-disable import/prefer-default-export */
export const FooterBase = styled.footer`
  background: var(--black);
  border-top: 2px solid var(--primary);
  padding-left: 16px;
  padding-right: 16px;
  padding-top: 32px;
  padding-bottom: 32px;
  color: var(--white);
  text-align: center;
  
  a {
    text-decoration: none;

      &:hover {
      opacity: 0.5;
    }
  }
  
  
  @media (max-width: 800px) {
    margin-bottom: 50px;
  }
`;
