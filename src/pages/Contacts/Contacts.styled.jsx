import styled from 'styled-components';

export const ContactContainer = styled.div`
  margin: 20px auto;
  @media screen and (min-width: 320px) {  
     width: calc(100% - 10px);
  }
  @media screen and (min-width: 768px) {
    width: calc(100% - 50px);
  }
  @media screen and (min-width: 1280px) {  
    padding: 25x 42px;
    width: calc(100% - 760px);    
  }
`;