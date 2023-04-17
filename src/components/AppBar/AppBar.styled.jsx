import styled from 'styled-components';

export const Header = styled.header`
 padding: 24px 0;
  margin-bottom: 16px;
  border-bottom: 1px solid black;
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

   & a {
    color: #000000;    
   padding: 5px 20px;
    margin-right: 30px;
    transition: border-radius 0.2s ease, background 0.2s ease, color 0.2s ease,
      box-shadow 0.2s ease;

@media screen and (min-width: 320px) {
  font-weight: 300;
    font-size: 15px;
     margin-right: 5px;
  }
  @media screen and (min-width: 768px) {
   font-weight: 400;
    font-size: 18px;
  }
  @media screen and (min-width: 1280px) {
    font-weight: 400;
    font-size: 20px;
  }

  }

  & a.active {
    font-weight: 500;
    font-size: 20px;
   padding: 5px 20px;
    color: #000000;
    border-radius: 5px;
    background: rgb(17, 79, 171);
    box-shadow: 0px 5px 10px rgba(0, 1, 0, 0.1);
  }

font-weight: 400;
    font-size: 15px;
  }
  @media screen and (min-width: 768px) {
   font-weight: 500;
    font-size: 18px;
  }
  @media screen and (min-width: 1280px) {
    font-weight: 500;
    font-size: 20px;
  }

`;