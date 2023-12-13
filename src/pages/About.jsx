import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import LinkedinImg from '/public/linkedin.png'
import GitHubImg from '/public/github.png'

export const About = () => {
  return (
    <Container>
        <Row>
            <Col md={12} className='mb-4'>
                <h2 style={{margin: '30px'}}>Sobre mi persona</h2>
                <p style={{margin: '30px'}}>
                    Tengo 45 años, casado y 2 hijos. Soy Ingeniero Comercial de la Universidad Adolfo Ibañez, y Magister en Marketing de la misma universidad. Egresado en el año 2002.
                    Actualmente soy CEO y fundador de Facturaenlinea, empresa que formé el año 2010 y que se dedica a la facturación electrónica aquí en Chile.
                    Prontamente lanzo un nuevo emprendimiento llamado DEPPA y también espero poder materializar Foundesk que es el proyecto presentado en tarea número 5 de Full Stack.
                    Desde hace años que programo, pero siempre el aprendizaje habia sido de manera autodidacta. Hasta que me ví en la necesidad de contar con un mayor cuerpo de conocimientos y más ordenado.
                    Fue así como encontré a la UDD con su programa FULL STACK DEVELOPER. No puedo haber tomado una mejor decision.
                    Estoy muy feliz de ser desarrollador desde este lugar. 
                    Me siento afortundado de poder haber aprendido todo lo que se vió este año.
                </p>
                <h3 style={{margin: '30px'}}>Puedes saber más sobre mí en mis redes sociales</h3>
                <p><a href='https://www.linkedin.com'><img className='about-img' src={LinkedinImg}/></a>&nbsp;&nbsp;&nbsp;<a href='https://github.com/Cristianibanezvillarroel'><img className='about-img' src={GitHubImg} /></a></p>
            </Col>
        </Row>
    </Container>
  )
}
