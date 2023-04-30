import styled from 'styled-components';

export const HomeContainer = styled.div`
  margin: 0 auto;
  align-items: center;
  display: flex;  
  justify-content: space-around
  flex-wrap: nowrap;

  @media screen and (min-width: 320px) {
    flex-wrap: wrap;
    gap: 15px;
     width: calc(100% - 10px);
  }
  @media screen and (min-width: 768px) {
     gap: 20px;
    width: calc(100% - 30px);
  }
  @media screen and (min-width: 1280px) {
    gap: 20px;
    padding: 25x 42px;
    width: calc(100% - 60px);    
  }
`;

export const Img = styled.img`
 border-radius: 15px;
  box-shadow: 10px 10px 8px 2px rgba(0, 0, 0, 0.3);
   flex-grow: 1;
   flex: 1;
`;

export const FirstTitle = styled.h1`
 font-weight: 500;
 font-size: 48px;
 text-align: center;
text-shadow: 2px 2px 2px rgba(0, 0, 0, 0.3);
flex-grow: 1;
   flex: 1;

 @media screen and (min-width: 320px) {      
     font-size: 24px;
  }
  @media screen and (min-width: 768px) {      
     font-size: 36px;
  }
`;

export const Footer = styled.footer`
margin-top: 36px;
 padding: 24px 0;
  border-top: 1px solid black;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  z-index: 10000;
  @media screen and (min-width: 320px) {
    flex-wrap: nowrap;
  }
  @media screen and (min-width: 768px) {
    margin-bottom: 36px;
  }
  @media screen and (min-width: 1280px) {
    padding: 24px 42px;
    height: 60px;
  }
`;

export const CopyrightText = styled.p`
  font-size: 12px;
  margin: 0 auto;
  @media screen and (min-width: 320px) {
  
  }
  @media screen and (min-width: 768px) {
 
  }
  @media screen and (min-width: 1280px) {
  
  }
`;