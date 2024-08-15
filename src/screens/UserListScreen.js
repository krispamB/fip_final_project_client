import React from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import { BASE_URL } from '../constants'
import { useNavigate } from 'react-router-dom'
import { Table, Row, Col, Button } from 'react-bootstrap'

const base_url = BASE_URL + '/users'
export const UserListScreen = () => {
  const navigate = useNavigate()
  const handleCreateUser = () => {
    navigate('/create-user', { replace: true })
  }

  const [users, setUsers] = React.useState([])

  React.useEffect(() => {
    axios.get(base_url).then((response) => {
      setUsers(response.data)
    })
  }, [])

  console.log(users)
  return (
    <>
      <Link to='/' className='btn btn-primary my-3'>
        Go Back
      </Link>
      <Row className='align-items-center'>
        <Col>
          <h1>Users</h1>
        </Col>
        <Col className='d-flex justify-content-end'>
          <Button className='my-3 ' onClick={handleCreateUser}>
            <i className='fas fa-plus'></i> Create User
          </Button>
        </Col>
      </Row>

      <Table striped bordered hover responsive className='table-sm'>
        <thead>
          <tr>
            <th>ID</th>
            <th>NAME</th>
            <th>EMAIL</th>
            <th>PASSWORD</th>
            <th>USER TYPE</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>
                <a href={`mailto: ${user.email}`}>{user.email}</a>
              </td>
              <td>
                <input
                  type='password'
                  value={user.password}
                  readOnly
                  style={{ border: 'none', background: 'transparent' }}
                />
              </td>
              <td>{user.type}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </>
  )
}
