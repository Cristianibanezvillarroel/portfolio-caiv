import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { ImagenPerfil } from '../components/ImagenPerfil'
import { CallPerfil } from '../components/CallPerfil'

export const Home = () => {
  return (
    <Container>
        <Row>
            <Col md={6} className='mb-4'>
                <ImagenPerfil />
            </Col>
            <Col md={6} className='mb-4'>
                <CallPerfil />
            </Col>
        </Row>
    </Container>
  )
}
