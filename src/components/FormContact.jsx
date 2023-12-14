import React, { useEffect, useState } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { db } from '../firebase'
import { getDocs, collection, addDoc } from 'firebase/firestore'
import { Alert, Container } from 'react-bootstrap';

export const FormContact = () => {

    const [message, setMessage] = useState(null)
    const [show, setShow] = useState(false)

    const [email, setEmail] = useState('')
    const handleChangeEmail = (e) => {
        setEmail(e.target.value);
    }

    const [name, setName] = useState('')
    const handleChangeName = (e) => {
        setName(e.target.value);
    }

    const [comments, setComments] = useState('')
    const handleChangeComments = (e) => {
        setComments(e.target.value);
    }
    const [contacts, setContacts] = useState([])
    const contactsCollectionRef = collection(db, 'contacts')
    let arrayContacts = []
    const getContacts = async () => {

        const querySnapshot = await getDocs(contactsCollectionRef)
        querySnapshot.forEach((doc) => {
            //console.log(`${doc.id} => ${doc.data()}`)
            arrayContacts.push(doc.data())
        })
        setContacts(arrayContacts)
    }

    console.log(contacts)

    useEffect(() => {
        getContacts()
    }, [])


    const addContacts = async () => {

        const ListaFiltrada = contacts.filter(content => {
            return content.email == email
        })

        console.log(ListaFiltrada)

        if (ListaFiltrada == '') {
            await addDoc(contactsCollectionRef, { email, name, comments })
            setShow(true)
            setMessage('Tu contacto ha sido guardado con éxito. Te responderé dentro de hoy.')
        } else {
            setShow(true)
            setMessage('Tu contacto ya se encontraba registrado. Te comunicaré a la brevedad.')
        }

        getContacts()
    }

    if (show) {
        return (
            <div className="App">
                <Container className='p-4'>
                    <Alert variant="success" onClose={() => setShow(false)} dismissible >
                        <Alert.Heading>{message}</Alert.Heading>
                        <p>
                            Cierre esta ventana para volver al menu</p>
                    </Alert>
                </Container>
            </div>
        );
    }

    return (
        <Form>
            <Form.Group className="mb-3" name="name">
                <Form.Label>Nombre</Form.Label>
                <Form.Control onChange={handleChangeName} type="text" placeholder="Tu nombre" />
            </Form.Group>

            <Form.Group className="mb-3" name="email">
                <Form.Label>Email</Form.Label>
                <Form.Control onChange={handleChangeEmail} type="email" placeholder="tu email" />
            </Form.Group>

            <Form.Group className="mb-3" name="comments">
                <Form.Label>Comentarios</Form.Label>
                <Form.Control onChange={handleChangeComments} as="textarea"
                    placeholder="Enviame tus comentarios aqui"
                    style={{ height: '100px' }} />
            </Form.Group>
            <Button onClick={addContacts} variant="primary">
                Enviar
            </Button>
        </Form>
    )
}