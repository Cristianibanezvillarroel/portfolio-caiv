import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { CardsProyects } from '../components/CardsProyects'
import { ListaProyectos } from '../components/ListaProyectos'

export const Proyects = () => {
    console.log(ListaProyectos)

    return (
        <Container>
            <Row>
                <Col style={{textAlign: 'center', marginTop: '10px'}} md={12} className='mb-4'>
                <h1>Mis Proyectos</h1>
                </Col>
                
            </Row>
            <Row>
                {ListaProyectos.map(content =>
                    <Col md={6} className='flex-proyects'>

                        <CardsProyects content={content} />

                    </Col>
                )}
            </Row>

        </Container>
    )
}
