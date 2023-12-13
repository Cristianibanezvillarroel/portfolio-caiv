import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { CardsProyects } from '../components/CardsProyects'
import { ListaProyectos } from '../components/ListaProyectos'

export const Proyects = () => {
    console.log(ListaProyectos)

    return (
        <Container>
            <Row>
                <Col md={6} className='flex-proyects'>
                    {ListaProyectos.map(content =>
                        <CardsProyects content={content}/>
                    )}
                </Col>
            </Row>
        </Container>
    )
}
