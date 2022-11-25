import React from 'react'
import styled from 'styled-components'
import { SocialIcons } from './Data'
import { Section } from './Portfolio'
import { Social } from './Socials'

const Contact = () => {
    return (
        <Section id="contact">
            <h1>Get In Touch</h1>
            <Wrapper>
                <div><h3>Divyanshu Kaushik</h3></div>
                <div><span><img src="/images/placeholder.png" alt="location" /></span><h3>  Chennai, Tamil Nadu</h3></div>
                <div><span><img src="/images/smartphone.png" alt="phone" /></span><h3>  +91 7974707475</h3></div>
                <div><span><img src="/images/email.png" alt="email" /></span><h3> <a href="mailto:divyanshukaushik44@gmail.com<">divyanshukaushik44@gmail.com</a> </h3></div>
            <Resume > <a target="_black" href="https://drive.google.com/file/d/1KWfLM75KUkZ-GgHMQW24TYAJRjOeWyMM/view?usp=sharing"><button>Download Resume</button> </a></Resume>
            </Wrapper>
            <Handle>
                {SocialIcons.map((icon, index) => {
                    return (
                        <a key={index} href={icon.url} target="_blank" rel="noreferrer">
                            <img src={icon.img} alt="social" />
                        </a>
                    )
                })}
            </Handle>
        </Section>
    )
}

export default Contact

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    div{
        display: flex;
        align-items: center;
        margin: 1em 0;
    }

    h3{
        margin: 0 0.5em;
        font-weight: 400;
        a{
            text-decoration:none;
            color: rgba(198,201,216,.75);
            color:#d9d9d9;
        }
    }
    span img{
        height: 2em;
        width: 2em;
        filter: invert(100%);
    }
`

const Handle = styled(Social)`
    padding: 2em;
    a{
        margin: 2em;
    }
    img{
        height: 2em;
        width:2em;
    }

`
const Resume = styled.div`
    button{
        padding: 1em 1.5em;
        font-size: 1.1em;
        border:2px solid #f9f9f9;
        border-radius: .4em;
        background:none;
        color:#e9e9e9;
        cursor:pointer;
        transition: all .25s ease;
        &:hover{
            background-color:#f9004d;
            color:#fff;
            border:2px solid #f9004d;
        }
    }
`