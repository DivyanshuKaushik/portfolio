import React from 'react'
import styled from 'styled-components'
import { Courses } from './Data'
import { Section, Container } from './Portfolio'

const Coursework = () => {
    return (
        <Section id="coursework" bgcolor="#191919;">
            <h1>Coursework</h1>
            <Container>
                {Courses.map(({ img, course, source }, i) => {
                    return (
                        <Course key={i}>
                            <img src={img} alt="certificate" />
                            <p>{course}</p>
                            <span>{source}</span>
                        </Course>
                    )
                })}
            </Container>
        </Section>
    )
}

export default Coursework

const Course = styled.div`
    display: flex;
    flex-direction: column;
    /* min-width: 18rem; */
    height:12em;
    width: 22rem;
    margin: 1.2em;
    padding: 1em;
    text-align: center;
    border: 2px solid white;
    background-color: #e9e9e9;
    border-radius: 1em;
    box-shadow: 20px 52px -40 10px red;
    color: #191919;
    p{
        margin: 1.2em 0;
    }
    span{
        margin-bottom:0.7em;
        font-weight: 600;
    }
    img{
        height: 2em;
        width:2em;
        margin: auto;
    }
`
