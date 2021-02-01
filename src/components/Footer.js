import React from 'react'
import styled from 'styled-components';
import { Link } from 'react-router-dom'
import {FaFacebook,FaInstagram,FaLinkedin,FaYoutube,FaTwitter} from "react-icons/fa";
const FooterContainer=styled.footer`
 background-color:#101522;
`;
const FooterWrap=styled.div`
 padding:48px 24px;
 display:flex;
 flex-direction:column;
 justify-content:center; 
 align-items:center;
 max-width:1100px;
 margin:0 auto;


`;
const FooterLinksContainer=styled.div`
  display:flex;
  justify-content:center;

  @media screen and (max-width:820px){
      padding-top:32px;
  }
`;
const FooterLinkWapper=styled.div`
   display:flex;

   @media screen and (max-width:820px){
       flex-direction:column;
   }
`;
const FooterLinkItems=styled.div`
      display:flex;
      flex-direction:column;
      align-items:flex-start;
      margin:16px;
      text-align:left;
      width:160px;
      box-sizing:border-box;
      color:#fff;


      @media screen and (max-width:420px){
          margin:0;
          padding:10px;
          width:100%;

      }
`;
const FooterLinkTitle=styled.h1`
    font-size:14px;
    margin-bottom:16px;
`;
const FooterLink=styled(Link)`
  color:#fff;
  text-decoration:none;
  margin-bottom:0.5rem;
  font-size:14px;
  cursor:pointer;
  &::hover{
      color:#01bf71;
      transition:0.3s ease-out
  }

`;


const SocialMedia=styled.div`

max-width:1000px;
width:100%;
`;
const SocialMediaWrap=styled.div`

display:flex;
justify-content:space-between;
align-items:center;
max-width:1100px;
margin:40px auto 0 auto;

@media screen and (max-width:820px){
    flex-direction:column;
}
`;
const SocialLogo=styled.div`
    color:#fff;
    justify-self:start;
    cursor:pointer;
    text-direction:none;
    font-size:1.5rem;
    display:flex;
    align-items:center;
    margin-bottom:16px;
    font-weight:bold;
`;
const WebsiteRight=styled.small`
color:#fff;
margin-bottom:16px;
 
`;
const SocialIcons=styled.img`
   display:flex;
   justify-content:space-between;
   align-items:center;
   width:240px;

`;
const SocialIconLink=styled.a`
color:#fff;
font-size:24px;




`;




const Footer = () => {
    return (
        <FooterContainer>
            <FooterWrap>
                <FooterLinksContainer>
                    <FooterLinkWapper>
                        <FooterLinkItems>
                            <FooterLinkTitle>About Us</FooterLinkTitle>
                            <FooterLink to='/'>How it Works</FooterLink>
                            <FooterLink to='/'>Testimonials</FooterLink>
                            <FooterLink to='/'>Careers</FooterLink>
                            <FooterLink to='/'>Investors</FooterLink>
                            <FooterLink to='/'>Terms of Service</FooterLink>

                        </FooterLinkItems>

                        <FooterLinkItems>
                            <FooterLinkTitle>Contact Us</FooterLinkTitle>
                            <FooterLink to='/'>How it Works</FooterLink>
                            <FooterLink to='/'>Testimonials</FooterLink>
                            <FooterLink to='/'>Careers</FooterLink>
                            <FooterLink to='/'>Investors</FooterLink>
                            <FooterLink to='/'>Terms of Service</FooterLink>

                        </FooterLinkItems>

                        <FooterLinkItems>
                            <FooterLinkTitle>Videos</FooterLinkTitle>
                            <FooterLink to='/'>How it Works</FooterLink>
                            <FooterLink to='/'>Testimonials</FooterLink>
                            <FooterLink to='/'>Careers</FooterLink>
                            <FooterLink to='/'>Investors</FooterLink>
                            <FooterLink to='/'>Terms of Service</FooterLink>

                        </FooterLinkItems>

                        <FooterLinkItems>
                            <FooterLinkTitle>Social Media</FooterLinkTitle>
                            <FooterLink to='/'>Instagram</FooterLink>
                            <FooterLink to='/'>facebook</FooterLink>
                            <FooterLink to='/'>linkdin</FooterLink>
                            <FooterLink to='/'>hulu</FooterLink>
                            <FooterLink to='/'>skype</FooterLink>

                        </FooterLinkItems>
                    </FooterLinkWapper>
                </FooterLinksContainer>
                <SocialMedia>
                    <SocialMediaWrap>
                        <SocialLogo  to="/">
                           A.A Suns Company
                        </SocialLogo>
                        <WebsiteRight>
                            Wajid @ {new Date().getFullYear()}All rights reserved
                        </WebsiteRight>
                        <SocialIconLink href="/" target="_blank" aria-label="Facebook">
                            <FaFacebook />
                        </SocialIconLink>

                        <SocialIconLink href="/" target="_blank" aria-label="Instagram">
                            <FaInstagram />
                        </SocialIconLink>

                        <SocialIconLink href="/" target="_blank" aria-label="Youtube">
                            <FaYoutube />
                        </SocialIconLink>

                        <SocialIconLink href="/" target="_blank" aria-label="Twitter">
                            <FaTwitter />
                        </SocialIconLink>

                        <SocialIconLink href="/" target="_blank" aria-label="Linkedin">
                            <FaLinkedin />
                        </SocialIconLink>
                    </SocialMediaWrap>
                </SocialMedia>
            </FooterWrap>
        </FooterContainer>
    )
}

export default Footer
