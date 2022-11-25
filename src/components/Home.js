import React from 'react'
import styled, { keyframes } from 'styled-components'

const Home = () => {
    return (
        <>
            <Container id="home">
                <div className="intro">
                    <h3>Welcome to my world</h3>
                    <h1>Hi, I'm Divyanshu Kaushik</h1>
                    <span>Full Stack Developer</span>
                    <h1>Based In India.</h1>
                </div>
                <div className="img">
                    <img src="/images/Dev.png" alt="loading" />
                </div>
            </Container>
        </>
    )
}

export default Home

const float = keyframes`
    0%{ 
        transform: translate(0,  0px); 
    }
    50%{ 
        transform: translate(0, 15px);
    }
    100%{ 
        transform:translate(0, -0px); 
    }    
`

const Container = styled.main`
    display: flex;
    /* height: calc(100vh-0em); */
    height: 100vh;
    width: 100%;
    &:before{
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        height: 100%;
        width: 100%;
        background-color: #151515;
        background-image: linear-gradient(to right,#000000 0%, #282828 74%);
        z-index: -2;
    }
    div{
        height: 100%;
        max-width: 100%;
        width:100%;
        display: flex;
        justify-content: center;
        flex-direction: column;
        margin: 2em 0;
    }
    .img{
        margin: auto;
        width: 80%;
        animation: ${float} 3s infinite ease-in-out;
    }
    img{
        height: 80%;
        width: 80%;
        object-fit: contain;
    }
    .intro{
        margin: auto;
        padding-left: 2em;
        *{
            margin: 0;
            margin-top: 0.5em;
        }
        
        h3{
            color: rgba(198,201,216,.75);
            text-transform: uppercase;
            letter-spacing: 1.5px;
        }
        h1{
            font-size: 3.5em;
        }
        span{
            font-size: 3.5em;
            font-weight: 700;
            color: #f9004d;
        }
    }
    
    @media screen and (max-width:768px){
        flex-direction: column;
        justify-content: center;
        font-size: 0.4em;
        padding: 15em 0 4em 0;
        height: 100%;
        div{
            align-items: center;
        }
    }
    
    `