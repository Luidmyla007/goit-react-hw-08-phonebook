import { HomeContainer, FirstTitle, Img, Footer, CopyrightText } from "./Home.styled";
import {  TbCopyright  } from "react-icons/tb";

export default function Home() {
  return (<>
    <HomeContainer>   
      <Img src="https://mir-s3-cdn-cf.behance.net/project_modules/disp/bbd43646252567.584db791c363c.gif"
        srcset="https://mir-s3-cdn-cf.behance.net/project_modules/disp/bbd43646252567.584db791c363c.gif 600w"
        sizes="(max-width: 600px) 100vw, 600px" 
        alt="google Trusted Contacts Corgi contact emergency dog pin Onboarding app" loading="lazy"></Img>     
      <FirstTitle>
       Welcome to the PhoneBook! <br></br> Keep your contacts well organized!  
      </FirstTitle>
    </HomeContainer>
     <Footer>       
          <CopyrightText>
            Copyright 
            <TbCopyright size={16} /> 
            2023 <br /> All rights reserved
          </CopyrightText>      
      </Footer>
    </>
  );
}