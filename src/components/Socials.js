import React from 'react'
import styled from 'styled-components'
import { SocialIcons } from './Data'

const Socials = () => {
    return (
        <Social>
            {SocialIcons.map((icon, index) => {
                return (
                    <a key={index} href={icon.url} target="_blank" rel="noreferrer">
                        <img src={icon.img} alt="social" />
                    </a>
                )
            })}
     </Social>
    )
}

export default Socials


export const Social = styled.div`
    display: flex;
    flex: 1;
    align-items: center;
    justify-content: center;
    img{
        height: 1.3em;
        width: 1.3em;
    }
    a{
        transition: all .25s ease;
        margin: 0 0.7em;
        &:hover{
            transform: translateY(-4px);
        }
    }
    @media screen and (max-width:768px){
        img{
            height: 1.3em;
            width: 1.3em;
            /* margin: 0 0.4em; */
        }
    }

`