import styled from 'styled-components';

export const Button = styled.button`
    color: var(--white);
    border: 1px solid var(--white);
    background:  var(--black);
    box-sizing: border-box;
    cursor: pointer;
    padding: 16px 24px;
    font-style: normal;
    font-weight: bold;
    font-size: 16px;
    outline: none;
    border-radius: 5px;
    text-decoration: none;
    display: inline-block;
    transition: opacity .3s;
    text-align: center;
    
    &:hover,
    &:focus {
    opacity: .5;  
  }

  /*@media (max-width: 800px) {
    width: 100%;
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;
    background: var(--primary);
    border-radius: 0;
    border: 0;
    text-align: center;}*/
`;

export const NewButton = styled(Button)`
display:none;
`;

export const ButtonRegister = styled(Button)`
margin-right: 15px;

@media (max-width: 800px){
  margin-top: 15px,
}
`;
