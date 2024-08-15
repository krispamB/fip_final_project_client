import { useParams } from 'react-router-dom'
import React, { useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import { BASE_URL, IMAGES, getRandomNumber } from '../constants'
import { useNavigate } from 'react-router-dom'
import {
  Table,
  Row,
  Col,
  Button,
  Image,
  ListGroup,
  ListGroupItem,
  Card,
} from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'

export const PropertyScreen = () => {
  const { propertyId } = useParams()
  const [property, setProperty] = useState({ owner: {} })

  React.useEffect(() => {
    axios.get(BASE_URL + `/properties/one/${propertyId}`).then((response) => {
      setProperty(response.data)
    })
  }, [])
  console.log(property)

  const addToCartHandler = (e) => {
    e.preventDefault()
  }

  return (
    <>
      <Link to='/' className='btn btn-primary my-3'>
        Go Back
      </Link>
      <Row>
        <Col>
          <Card style={{ width: '50vw' }}>
            <Card.Img variant='top' src={IMAGES[getRandomNumber()]}></Card.Img>
            <Card.Body>
              <Card.Title>{property.title}</Card.Title>
              <Card.Text>{property.description}</Card.Text>
            </Card.Body>
            <Card.Body>
              <ListGroup variant='flush'>
                <ListGroupItem>
                  <Row>
                    <Col>Owner:</Col>
                    <Col>
                      <strong>{property.owner.name}</strong>
                    </Col>
                  </Row>
                </ListGroupItem>

                <ListGroupItem>
                  <Row>
                    <Col>Contact:</Col>
                    <Col>
                      <strong>{property.owner.email}</strong>
                    </Col>
                  </Row>
                </ListGroupItem>
              </ListGroup>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <ListGroup variant='flush'>
            <ListGroupItem>
              <Row>
                <Col>Price:</Col>
                <Col>
                  <strong>${property.price}</strong>
                </Col>
              </Row>
            </ListGroupItem>

            <ListGroupItem>
              <Row>
                <Button
                  onClick={addToCartHandler}
                  className='btn-block btn-primary'
                  type='button'
                  disabled={false}
                >
                  Rent
                </Button>
              </Row>
            </ListGroupItem>
          </ListGroup>
        </Col>
      </Row>
    </>
  )
}
