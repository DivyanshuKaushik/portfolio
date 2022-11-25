import React, { useState } from 'react'
import styled from 'styled-components'
import { Link } from 'react-scroll'
import Socials from './Socials'
import { NavBarItems } from './Data'
import SideBar from './SideBar'

const Header = () => {

    // navbar color change on scroll 
    const [colorChange, setColorchange] = useState('transparent');

    const changeNavbarColor = () => {
        if (window.scrollY >= 100) {
            setColorchange("#303030");
        }
        else if (window.scrollY === 0) {
            setColorchange("transparent")
        }
        else if(openMenu){
            setColorchange("#303030");
        }
        else {
            setColorchange('tranparent');
        }
    };
    window.addEventListener('scroll', changeNavbarColor);

    // toggle hamburger icon to 
    const [openMenu, setOpenMenu] = useState(false);
   
    const handleMenuIcon = () => {
        setOpenMenu(!openMenu);
        
    }


    return (
        <>
            <Nav bgcolor={colorChange}>
                {openMenu
                    ? <CloseIcon onClick={handleMenuIcon}> <img src="/images/close.png" alt="" /></CloseIcon>
                    : <MenuIcon onClick={handleMenuIcon}><img src="/images/menu.png" alt="menu" /></MenuIcon>
                }
                <Name>
                    <span>Divyanshu </span><span>Kaushik</span>
                </Name>
                <NavItems>
                    {NavBarItems.map((item, index) => {
                        return (
                            <Item key={index} >
                                <Link activeClass="active" to={item.url} spy={true} offset={-30} duration={500} >
                                    {item.name}
                                </Link>
                            </Item>
                        )
                    })}
                </NavItems>
                <Socials />
            </Nav>
            {openMenu ? <SideBar /> : ""}
        </>
    )
}

export default Header

const MenuIcon = styled.div`
    display: none;
    @media screen and (max-width:768px){
        display: block;
        margin: 0 1em;
        transition: all .24s ease;
        img{
            height: 2em;
            width: 2em;
        }

    }

`
const CloseIcon = styled(MenuIcon)`
     img{
            height: 1.5em;
            width: 1.5em;
        }
`


const Nav = styled.nav`
    display: flex;
    align-items: center;
    height: 4em;
    width:100%;
    position: fixed;
    top: 0;
    z-index: 99;
    transition: all .25s ease;
    background-color: ${(props) => props.bgcolor};
    @media screen and (max-width:768px){
    }
`
const Name = styled.div`
    display: flex;
    flex: 1;
    margin: 1em 2em;
    /* flex: 1; */
    span{
        font-size: 1.8em;
        font-weight: 700;
        display: block;
        margin: 0 0.2em;
    }
    @media screen and (max-width:768px){
        margin-left: 0.5em;
        margin:0 .5em;
        span{
            font-size: 1.1em;
        }
    }
`

const NavItems = styled.ul`
    display: flex;
    align-items: center;
    justify-content: center;
    flex: 2;
    @media screen and (max-width:768px){
        display: none;
    }

`
const Item = styled.li`
    margin: 1em 1.5em;
    list-style: none;
    cursor: pointer;
    
    a{
        position: relative;
        color: #f9f9f9;
        padding:1em 0em;
        text-decoration: none;
        text-transform: capitalize;
        font-weight: 800;
        letter-spacing: .8px;
        transition: all .5s ease;
        :after{
            content: "";
            position: absolute;
            height: 2px;
            width: 100%;
            bottom: 0;
            margin-bottom: 6px;
            left: 0;
            background: #f9f9f9;
            z-index: -1;
            transform: scaleX(0);
            opacity: 0;
            visibility: hidden;
            transition: all 250ms cubic-bezier(0.25,0.45,0.49,0.50);
            transform-origin: left ;
        }
    }
    & > .active{
        color: #f9004d;
    }
    &:hover{
        a:after{
            transform: scaleX(1);
            opacity: 1;
            visibility: visible;
        }
    }

`