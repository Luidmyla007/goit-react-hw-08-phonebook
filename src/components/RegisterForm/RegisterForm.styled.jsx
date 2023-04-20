import styled from 'styled-components';

export const RegisterWrapper = styled.div` 
display: flex;
 justify-content: space-around;
 align-items: stretch;
 flex-wrap: nowrap;

 @media screen and (min-width: 320px) { 
    flex-wrap: wrap;
    gap: 10px;
  }
  @media screen and (min-width: 768px) {
  gap: 10px;
  }
  @media screen and (min-width: 1200px) {
   gap: 20px;
  }
`;

export const RegisterTitle = styled.h2`
  margin - bottom: 15px;
  text-align: center;
`;

export const FormContainer = styled.div`
border-radius: 5px;
padding: 30px; 
background: rgba(74, 136, 143, 1);;
 box-shadow: 10px 10px 8px 2px rgba(0, 0, 0, 0.3);
  flex: 1;
 flex-grow: 1;
`;

export const RegisterImg = styled.img`
 border-radius: 5px;
  box-shadow: 10px 10px 8px 2px rgba(0, 0, 0, 0.3);
  flex-grow: 1;
   flex: 1;
`;