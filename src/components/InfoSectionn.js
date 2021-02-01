import React from 'react'
import styled from 'styled-components';
import { Button } from './Button';

const Section=styled.section`
 width:100%;
 height:100%;
 padding:4rem 0rem;

`;
const Container=styled.div`
 padding:3rem calc((100vw-1300px)/2);
 display:grid;
 grid-template-columns:1fr 1fr;
 grid-template-rows:800px;
 @media screen and (max-width:760px){
     grid-template-columns:1fr;
 }
`;
const ColumnLeft=styled.div`
padding:1rem 2rem;
order:${({reverse})=>(reverse ? '2':'1')};
display:flex;
justify-content:center;
align-items:center;

@media screen from (max-width:768){
    order:${({reverse})=>(reverse ? '1':'2')};
}

img{
    width:100%;
    height:100%;
    object-fit:cover;
    border-radius:20px;
    box-shadow:0px 2px 2px 0px rgba(0,0,0,0.4);
    @media screen and (max-width:768px){
        width:90%;
        height:90%;

  }
}

 
`;
const ColumnRight=styled.div`
  
display:flex;
flex-direction:column;
justify-content:center;
align-items:flex-start;

line-height:1.4;
padding:1rem 2rem;
order:${({reverse})=>(reverse ?'1' :'2')};

 h1{
     margin-bottom:1rem;
     font-size:clamp(1.5rem,6vw,2rem);
 }
 p{
     margin-bottom:2rem;
 }
`;

export const InfoSectionn = ({heading,paragraph,paragraphTwo,buttonLabel,reverse,image}) => {
    return (
        <Section>
           <Container>
               <ColumnLeft>
               <img src={image} alt="home"/>
               </ColumnLeft>
               <ColumnRight reverse={reverse}>
                 <h1>{heading}</h1>
                 <p>{paragraph}</p>
                 <p>{paragraphTwo}</p>
                 <Button to="/homes" primary="true">{buttonLabel}</Button>  
               </ColumnRight>
            </Container> 
        </Section>
    )
}
