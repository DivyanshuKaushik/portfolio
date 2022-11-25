import React from 'react'
import styled from 'styled-components'
import AboutTab from './AboutTab'
import { AboutMe } from './Data'


const About = () => {
    return (
        <>
            <Container id="about">
                <Img><img src="/images/me.jpg" alt="loading" /></Img>
                <Wrapper>
                    <h1>about me</h1>
                    <div className="about">
                        <p>{AboutMe[0]}</p>
                        <p>{AboutMe[1]}</p>
                    </div>
                    <AboutTab />
                </Wrapper>
            </Container>
        </>
    )
}

export default About

const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-flow: row wrap;
    padding: 3em 0;
    background-color: #191919;
`

const Img = styled.div`
    height: 40%;
    width: 30%;
    margin:3em;
    img{
        border-radius: 1em;
        height: 100%;
        width: 100%;
        object-fit: cover;
    }

    @media screen and (max-width:768px){
        height: 60%;
        width: 50%;
    }
`

const Wrapper = styled.div`
    width: 62%;
    display: flex;
    flex-direction: column;
    padding:1em;
    h1{
        color: #fff;
        text-transform: capitalize;
        font-size: 3em;
        margin-bottom: .2em;
        padding-top: 1em;
    }
    .about{
        /* padding: 0 3em; */
        width: 80%;
        color: rgba(198,201,216,.75);
        font-weight: 350;
        font-size: 1em;
        line-height: 1.5em;
        p{
            margin:1em 0;   
        }
    }
    @media screen and (max-width:768px){
        width: 100%;
        padding:0 1.2em;
        font-size: 0.75em;
        .about{
            width: 100%;
        }
        
    }
`