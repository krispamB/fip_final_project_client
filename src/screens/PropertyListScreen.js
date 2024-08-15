import React from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import { BASE_URL } from '../constants'
import { useNavigate } from 'react-router-dom'
import { Table, Row, Col, Button } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'

const base_url = BASE_URL + '/properties'
export const PropertyListScreen = () => {
  const navigate = useNavigate()
  const handleCreateProperty = () => {
    navigate('/create-property', { replace: true })
  }

  const deleteHandler = (id) => {
    axios.delete(base_url + `/${id}`).then((response) => {
      console.log(response)
      window.location.reload()
    })
  }

  const [properties, setProperties] = React.useState([])

  React.useEffect(() => {
    axios.get(base_url).then((response) => {
      setProperties(response.data)
    })
  }, [])

  console.log(properties)

  return (
    <>
      <Link to='/' className='btn btn-primary my-3'>
        Go Back
      </Link>
      <Row className='align-items-center'>
        <Col>
          <h1>Properties</h1>
        </Col>
        <Col className='d-flex justify-content-end'>
          <Button className='my-3 ' onClick={handleCreateProperty}>
            <i className='fas fa-plus'></i> Create Property
          </Button>
        </Col>
      </Row>

      <Table striped bordered hover responsive className='table-sm'>
        <thead>
          <tr>
            <th>ID</th>
            <th>TITLE</th>
            <th>DESCRIPTION</th>
            <th>ADDRESS</th>
            <th>PRICE</th>
            <th>OWNER</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {properties.map((property) => (
            <tr key={property.id}>
              <td>{property.id}</td>
              <td>{property.title}</td>
              <td>{property.description.substring(0, 100)}...</td>
              <td>{property.address}</td>
              <td>${property.price}</td>
              <td>{property.owner.name}</td>
              <td>
                <Button
                  variant='danger'
                  className='btn-sm'
                  onClick={() => deleteHandler(property.id)}
                >
                  <i className='fas fa-trash'></i>
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </>
  )
}
