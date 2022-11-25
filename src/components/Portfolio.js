import React from 'react'
import styled from 'styled-components'
import { Projects } from './Data'

const Portfolio = () => {
    return (
        <Section id="portfolio">
            <h1>My Projects</h1>
            <Container >
                {Projects.map((data, i) => {
                    return (
                        <Project key={i} img={data.img}>
                            <div className="details">
                                <h3>{data.title}</h3>
                                <p>{data.desc}</p>
                            </div>
                        </Project>
                    )
                })}
            </Container>
        </Section>
    )
}

export default Portfolio

// stylings for Projects section 

export const Section = styled.section`
    background-color: ${(props) => props.bgcolor ? props.bgcolor : "#101010" };
    h1{
        color:#f9f9f9;
        text-align: center;
        font-size: 3em;
        padding: 1.5em 0;
    }

`

export const Container = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    padding-bottom: 3em;
`

const Project = styled.div`
    display: flex;
    justify-content: center;
    align-items: flex-end;
    height: 18em;
    width: 28em;
    margin: 1em;
    border-radius: 1em;
    position: relative;
    transition: all .5s cubic-bezier(0.25,0.45,0.49,0.50);
    cursor: pointer;

    &:after{
        content: "";
        position: absolute;
        height: 100%;
        width: 100%;
        top: 0;
        left: 0;
        background: url(${props=>props.img}) no-repeat center center/cover;
        z-index: 0;
        opacity: 1;
        transition: all .5s cubic-bezier(0.25,0.45,0.49,0.50);
    }
    .details{
        opacity: 0;
        visibility: hidden;
        transform: scaleX(0);
        transition: all .5s cubic-bezier(0.25,0.45,0.49,0.50);
        text-align: center;
        margin: 2em 1em;
        color: #f9f9f9;
        p{
            margin: .5em;
            font-weight: 300;
        }

    }
    &:hover{
        transform: scale(1.1);
        :after{
            opacity: 0.4;
        }
        .details{
            z-index: 1;
            opacity: 1;
            visibility: visible;
            transform: scale(1);
        }
    }

`

