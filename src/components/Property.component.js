import React from 'react'
import { Link } from 'react-router-dom'
import { Card } from 'react-bootstrap'
import { IMAGES, getRandomNumber } from '../constants'

export const Property = ({ property }) => {
  const generatedImage = IMAGES[getRandomNumber()]
  return (
    <Card className='my-3 p-3 rounded'>
      <Link to={`/properties/${property.id}`}>
        <Card.Img src={generatedImage} variant='top' />
      </Link>
      <Card.Body>
        <Link to={`/properties/${property.id}`}>
          <Card.Title as='div'>
            <strong>{property.title}</strong>
          </Card.Title>
        </Link>
        <Card.Text as='h3'>${property.price}</Card.Text>
        <Card.Text>
          <h6>POSTED BY</h6>
          <h6>
            <strong>
              <i class='fa-regular fa-user'></i> {property.owner.name}
            </strong>
          </h6>
        </Card.Text>
      </Card.Body>
    </Card>
  )
}
