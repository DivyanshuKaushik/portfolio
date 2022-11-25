import React from 'react'
import styled from 'styled-components'

const Footer = () => {
    return (
        <Container>
            <span>Copyright {String.fromCharCode(169)} Divyanshu Kaushik </span>
        </Container>
    )
}

export default Footer

const Container = styled.div`
    background-color: #191919;
    padding: 2em ;
    text-align: center;
    color:#d7e8f9;
    letter-spacing: 1.05px;
`
