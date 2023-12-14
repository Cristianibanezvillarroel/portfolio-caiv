import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

export const CardsProyects = ({content}) => {
  return (
    <Card style={{ width: '18rem' }}>
    <Card.Img variant="top" src={content.imagen} />
    <Card.Body className='row-cardbody'>
      <Card.Title>{content.name}</Card.Title>
      <Card.Text>
        {content.resena}
      </Card.Text>
      <Button href={content.despliegue} variant="primary">Despliegue</Button>
      <Button className='button-proyect' href={content.repositorio} variant="success">Repositorio</Button>
    </Card.Body>
  </Card>
  )
}
