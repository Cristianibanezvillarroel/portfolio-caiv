import React from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { FormContact } from '../components/FormContact';

export const Contact = () => {
  return (
    <>
    <Container>
      <Row>
        <Col md={12} className='mb-4'>
          <h1 style={{textAlign: 'center', marginTop: '10px'}}>¿Quieres contactarme?</h1>
        </Col>
      </Row>
      <Row>
        <Col md={6} className='mb-4'>
          <FormContact />
        </Col>
      </Row>
    </Container>
    </>
  )
}
