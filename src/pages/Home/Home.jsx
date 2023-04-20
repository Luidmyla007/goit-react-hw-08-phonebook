import { HomeContainer, FirstTitle, Img } from "./Home.styled";

export default function Home() {
  return (
    <HomeContainer>   
      <Img src="https://mir-s3-cdn-cf.behance.net/project_modules/disp/bbd43646252567.584db791c363c.gif"
        srcset="https://mir-s3-cdn-cf.behance.net/project_modules/disp/bbd43646252567.584db791c363c.gif 600w"
        sizes="(max-width: 600px) 100vw, 600px" 
        alt="google Trusted Contacts Corgi contact emergency dog pin Onboarding app" loading="lazy"></Img>     
      <FirstTitle>
       Welcome to the PhoneBook! <br></br> Keep your contacts well organized!  
      </FirstTitle>
    </HomeContainer>
  );
}