import styled from 'styled-components';

export const HomeContainer = styled.div`
  min-height: calc(100vh - 50px);
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
    margin-bottom: 36px;
    width: calc(100% - 30px);
  }
  @media screen and (min-width: 1280px) {
    gap: 20px;
    padding: 24px 42px;
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

