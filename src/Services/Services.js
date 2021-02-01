import React from 'react'
import styled from 'styled-components';
import Icon1 from '../images/dev-1.jpg';
import Icon2 from '../images/dev-2.jpg';
import Icon3 from '../images/dev-3.jpg';

const ServicesContainer=styled.div`
  height:800px;
  display:flex;
  flex-direction:column;
  justify-content:center;
  align-items:center;
  background:#010606;

  @media screen and (max-width:768px){
      height:1100px;
  }
  @media screen  and (max-width:480px)
  {
      height:1300px;
  }
`;
const ServicesWrapper=styled.div`
   max-width:1000px;
   margin:0 auto ;
   display:grid;
   grid-template-columns:1fr 1fr 1fr;
   align-items:center;
   grid-gap:26px;
  transform:translate(-10%,-5%);

   @media screen and (max-width:1000px){
       grid-template-columns:1fr 1fr;
   }
   @media screen and (max-width:768px){
       grid-template-columns:1fr;
       padding:0 20px;
       transform:translate(0%,-5%);

   }
`;
const ServicesCard=styled.div`
  background:#fff;
   display:flex;
   flex-direction:flex-start;
   align-items:center;
   border-radius:10px;
   max-height:340px;
   padding:30px;
   box-shadow:0 1px 3px rgba(0,0,0,0.2);
   transition:all 0.2s ease-in-out;

   &:hover{
       transform:scale(1.02);
       transition:all 0.2s ease-in-out;
       cursor:pointer;
   }

`;
const ServicesH1=styled.h1`
   font-size:2.5rem;
   color:#fff;
   margin-bottom:64px;

   @media screen and (max-width:400px){
       font-size:2rem;
   }

`;
const ServicesIcon=styled.img`
  height:160px;
  width:160px;
  margin-bottom:10px;
  margin-right:10px;
`;

const ServicesH2=styled.h2`
     font-size:1rem;
     margin-bottom:10px;
`;
const ServicesP=styled.p`
    font-size:1rem;
    text-align:center;
`;




const Services = () => {
    return (
        <ServicesContainer id="services">
           <ServicesH1>Our Services</ServicesH1>
            <ServicesWrapper>
                <ServicesCard>
                    <ServicesIcon  src={Icon1}/>
                    <ServicesH2>Reduce expenses</ServicesH2>
                    <ServicesP>We help reduce your fess and increase your overall revenue.</ServicesP>
                </ServicesCard>
            
            <ServicesCard>
                <ServicesIcon  src={Icon2}/>
                <ServicesH2>Vitual Offices</ServicesH2>
                <ServicesP>We help reduce your fess and increase online anywhere in the world.</ServicesP>
            </ServicesCard>
            <ServicesCard>
                <ServicesIcon  src={Icon3}/>
                <ServicesH2>Premium Benefits</ServicesH2>
                <ServicesP>Unlock our special membership card that return 5% cash back.</ServicesP>
            </ServicesCard>
        </ServicesWrapper>    
        </ServicesContainer>
    )
}

export default Services
