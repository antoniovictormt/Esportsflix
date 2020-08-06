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
`;
