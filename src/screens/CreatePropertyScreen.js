import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { FormContainer } from '../components'
import { Form, Button } from 'react-bootstrap'
import { BASE_URL } from '../constants'
import axios from 'axios'

export const CreatePropertyScreen = () => {
  const navigate = useNavigate()

  const [title, setTitle] = React.useState('')
  const [description, setDescription] = React.useState('')
  const [address, setAddress] = React.useState('')
  const [price, setPrice] = React.useState(0.0)
  const [users, setUsers] = React.useState([])
  const [user, setUser] = React.useState(1)

  React.useEffect(() => {
    axios.get(BASE_URL + `/users`).then((response) => {
      setUsers(response.data)
    })
  }, [])

  const handleSubmit = (e) => {
    e.preventDefault()
    const property = {
      title,
      description,
      address,
      price,
    }

    axios.post(BASE_URL + `/properties/${user}`, property).then((response) => {
      console.log(response)
      navigate('/properties', { replace: true })
    })
  }

  return (
    <>
      <Link to='/properties' className='btn btn-primary my-3'>
        Go Back
      </Link>
      <FormContainer>
        <h1>Create Property</h1>
        <Form onSubmit={handleSubmit}>
          <Form.Group controlId='title'>
            <Form.Label>Title</Form.Label>
            <Form.Control
              type='title'
              placeholder='Enter Title'
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            ></Form.Control>
          </Form.Group>

          <Form.Group controlId='description'>
            <Form.Label>Description</Form.Label>
            <Form.Control
              type='description'
              placeholder='Enter Description'
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            ></Form.Control>
          </Form.Group>

          <Form.Group controlId='address'>
            <Form.Label>Address</Form.Label>
            <Form.Control
              type='address'
              placeholder='Enter Address'
              value={address}
              onChange={(e) => setAddress(e.target.value)}
            ></Form.Control>
          </Form.Group>

          <Form.Group controlId='price'>
            <Form.Label>Price</Form.Label>
            <Form.Control
              type='number'
              placeholder='Enter Price'
              value={price}
              onChange={(e) => setPrice(e.target.value)}
            ></Form.Control>
          </Form.Group>

          <Form.Group controlId='user'>
            <Form.Label>user</Form.Label>
            <Form.Select
              aria-label='Default select example'
              onChange={(e) => setUser(e.target.value)}
            >
              {users.map((userFocus) => (
                <option value={userFocus.id}>{userFocus.name}</option>
              ))}
            </Form.Select>
          </Form.Group>

          <Button type='submit' variant='primary' className='my-3'>
            Create
          </Button>
        </Form>
      </FormContainer>
    </>
  )
}
