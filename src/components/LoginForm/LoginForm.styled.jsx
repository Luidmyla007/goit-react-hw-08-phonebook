import styled from 'styled-components';

export const LogForm = styled.form`
  padding: 30px; 
`;

export const LoginTitle = styled.h2`
  margin - bottom: 15px;
  text-align: center;
`;

export const FormContainer = styled.div`
padding-top:30px;
padding-left: 30px;
padding-bottom: 30px;
border-radius: 5px;
background: rgba(74, 136, 143, 1);;
box-shadow: 10px 10px 8px 2px rgba(0, 0, 0, 0.3);
flex: 1;
flex-grow: 1;
`;

export const LoginFormWrapper = styled.div` 
display: flex;
 justify-content: space-around;
 align-items: stretch;
 flex-wrap: nowrap;

 @media screen and (min-width: 320px) {
    gap: 10px;
    flex-wrap: wrap;
  }
  @media screen and (min-width: 768px) {
  gap: 15px;
  }
  @media screen and (min-width: 1200px) {
   gap: 20px;
  }
`;


export const LoginImg = styled.img`
 border-radius: 5px;
  box-shadow: 10px 10px 8px 2px rgba(0, 0, 0, 0.3);
 flex-grow: 1;
   flex: 1;
`;