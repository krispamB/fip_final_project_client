import React from 'react'
import { BASE_URL } from '../constants'
import axios from 'axios'
import { Col, Row } from 'react-bootstrap'
import { Property } from '../components'
import { useSearchParams } from 'react-router-dom'

export const HomeScreen = () => {
  let [searchParams] = useSearchParams()
  let keyword = ''
  searchParams.get('keyword')
    ? (keyword = searchParams.get('keyword'))
    : (keyword = '')

  const [properties, setProperties] = React.useState([])

  React.useEffect(() => {
    axios
      .get(BASE_URL + `/properties/search?title=${keyword}&address=`)
      .then((response) => {
        console.log(response.data)
        setProperties(response.data)
      })
  }, [])

  return (
    <>
      <Row>
        {properties.map((property) => (
          <Col key={property.id} sm={12} md={6} lg={4} xl={3}>
            <Property property={property} />
          </Col>
        ))}
      </Row>
    </>
  )
}
