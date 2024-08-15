import React, { useState } from 'react'
import { Form, Button } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'

export const SearchBox = () => {
  const [keyword, setKeyword] = useState('')

  const navigate = useNavigate()

  const submitHandler = (e) => {
    e.preventDefault()
    if (keyword) {
      navigate(`/search?keyword=${keyword}`)
    } else {
      navigate('/')
    }
  }
  return (
    <Form onSubmit={submitHandler} inline = 'true' className='d-flex'>
      <Form.Control
        type='text'
        name='q'
        onChange={(e) => setKeyword(e.target.value)}
        placeholder='Search Properties...'
        className='mr-sm-2 ml-sm-5'
      ></Form.Control>
      <Button type='submit' variant='outline-success' className='p-2'>
        Search
      </Button>
    </Form>
  )
}
