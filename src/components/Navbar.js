import React from 'react'
import styled,{css} from 'styled-components/macro'
import { Link } from 'react-router-dom'
import { menuData } from '../data/MenuData';
import {Button} from './Button';
import Bars from '../images/bars.svg';
// import {FaBars} from 'react-icons/fa';

const Nav=styled.nav`
   height:60px;
   display:flex;
   justify-content:space-between;
   padding:1rem 2rem;
   z-index:100;
   position:fixed;
   width:100%;
`;
const NavLink=css`
 color:#fff;
 display:flex;
 align-items:center;
 padding:0 1rem;
 height:100%;
 cursor:pointer;
 text-decoration:none;
`;

const Logo=styled(Link)`
   ${NavLink}
   font-style:italic;
`;

const MenuBars=styled.i`
   display:none;

@media screen and (max-width:768px){
    display:block;
    background-image:url(${Bars});
    background-size:contain;
    height:30px;
    width:30px;
    cursor:pointer;
    position:absolute;
    top:0;
    right:0;
    color:#fff;
    transform:translate(-50%,45%);

}
`;
const NavMenu=styled.div`
    display:flex;
    align-items:center;
    margin-right:-48px;

    @media screen and (max-width:786px){
        display:none;
       
        
    }

`;
const NavMenuLinks=styled(Link)`
  ${NavLink}

`;

const NavBtn=styled.div`
  display:flex;
  align-items:center;
  margin-right:24px;
  @media screen and (max-width:786px){
    display:none;
 
}
`;


export const Navbar = () => {
    return (
        <Nav>
            <Logo to="/">RESORT</Logo>
            <MenuBars/>
            <NavMenu>
                {menuData.map((item,index)=>(
                    <NavMenuLinks to={item.link} key={index}>
                        {item.title}
                    </NavMenuLinks>
                ))}    
            </NavMenu>
            <NavBtn>
                <Button to='/contact'  primary='true'>Contact US</Button>
            </NavBtn>
        </Nav>
    
    )
}
