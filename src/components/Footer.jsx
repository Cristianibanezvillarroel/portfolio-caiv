import React from 'react'

import {
    Box,
    Container,
    Row,
    Column,
    FooterLink,
    Heading,
} from "../FooterStyles";

import EffortImg from '/public/effort.png'

export const Footer = () => {
    return (
        <Box>
            <Container>
                <Row>
                    <Column>
                        <Heading>Hecho con <img src={EffortImg} /> por Cristian Ibañez V.</Heading>
                    </Column>
                </Row>
            </Container>
        </Box>
    );
}
