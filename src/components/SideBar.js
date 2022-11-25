import React from 'react'
import styled, { keyframes } from 'styled-components'
import { NavBarItems } from './Data'
import { Link } from 'react-scroll'

const SideBar = () => {
    // const [closeSideBar,setCloseSideBar]= useState(false);

    return (
        <Container >
            <NavItems>
                {NavBarItems.map((menu, i) => {
                    return (
                        <Item key={i} >
                            <Link activeClass="active" to={menu.url} spy={true} offset={-30} duration={500} >
                                {menu.name}
                            </Link>
                        </Item>
                    )
                })}
            </NavItems>
        </Container>
    )
}

export default SideBar



const slide = keyframes`
    from{
        transform: scaleX(0);
    }
    to{
        transform: scaleX(1);
    }
`

const Container = styled.div`
    position: fixed;
    top:4em;
    background-color: #181818;
    height: 95vh;
    width: 70vw;
    transition: all .5s ease;
    z-index: 11;
    transform-origin: left ;
    animation:${slide} .5s ease-in-out;
    transition: all .5s ease;
    /* display: ${({isOpen})=> isOpen ? "none" : "block"}; */
   
`
const NavItems = styled.ul`
    height: 50vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

`
const Item = styled.li`
    width:100%;
    list-style: none;
    margin: 1em 1.5em;
    list-style: none;
    cursor: pointer;
    text-align: center;
    
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
        &:after{
            transform: scaleX(1);
            opacity: 1;
            visibility: visible;
            /* background: #f9004d; */
        }
    }


`
