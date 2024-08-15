import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { FormContainer } from '../components'
import { Form, Button } from 'react-bootstrap'
import { BASE_URL } from '../constants'
import axios from 'axios'

const base_url = BASE_URL + '/users'

export const CreateUserScreen = () => {
  const navigate = useNavigate()
  const [name, setName] = React.useState('')
  const [email, setEmail] = React.useState('')
  const [password, setPassword] = React.useState('')
  const [type, setType] = React.useState('ADMIN')

  const handleSubmit = (e) => {
    e.preventDefault()
    const user = {
      name,
      email,
      password,
      type,
    }

    axios.post(base_url, user).then((response) => {
      console.log(response)
      navigate('/users', { replace: true })
    })
  }

  return (
    <>
      <Link to='/users' className='btn btn-primary my-3'>
        Go Back
      </Link>
      <FormContainer>
        <h1>Create User</h1>
        <Form onSubmit={handleSubmit}>
          <Form.Group controlId='name'>
            <Form.Label>Name</Form.Label>
            <Form.Control
              type='name'
              placeholder='Enter Name'
              value={name}
              onChange={(e) => setName(e.target.value)}
            ></Form.Control>
          </Form.Group>

          <Form.Group controlId='email'>
            <Form.Label>Email</Form.Label>
            <Form.Control
              type='email'
              placeholder='Enter Email'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            ></Form.Control>
          </Form.Group>

          <Form.Group controlId='password'>
            <Form.Label>Password</Form.Label>
            <Form.Control
              type='password'
              placeholder='Enter Password'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            ></Form.Control>
          </Form.Group>

          <Form.Group controlId='userType'>
            <Form.Label>User Type</Form.Label>
            <Form.Select
              aria-label='Default select example'
              onChange={(e) => setType(e.target.value)}
            >
              <option defaultValue value='ADMIN'>
                Admin
              </option>
              <option value='OWNER'>Owner</option>
              <option value='CUSTOMER'>Customer</option>
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
