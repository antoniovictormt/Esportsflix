import styled from 'styled-components';

export const VideoContainer = styled.div`
  position: relative;
  overflow: hidden;
  width: 100%;
  padding-top: 56.25%;

  @media (max-width: 400px) {    
    width: 250px;
    height: 150px;
  }

  @media (min-width: 401px) and (max-width: 650px) {
    width: 250px;
    height: 150px;
  }

  @media (min-width: 650px) and (max-width: 800px) {
    width: 300px;
    height: 200px;
  }
`;

export const ResponsiveIframe = styled.iframe`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  width: 100%;
  height: 100%;
  
  @media (min-width: 650px) and (max-width: 950px) {
    margin-top: 20px;
  }
`;
