import { Container, Nav, Navbar } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'
import { SearchBox } from './Search'

export const Header = () => {
  return (
    <header>
      <Navbar bg='primary' variant='dark' expand='lg' collapseOnSelect>
        <Container>
          <LinkContainer to='/'>
            <Navbar.Brand>Property.io</Navbar.Brand>
          </LinkContainer>

          <SearchBox />

          <Navbar.Toggle aria-controls='basic-navbar-nav' className='m-2' />
          <Navbar.Collapse id='basic-navbar-nav'>
            <Nav className='ms-auto'>
              <LinkContainer to='/properties'>
                <Nav.Link>
                  <i class='fa-solid fa-house'></i> Properties
                </Nav.Link>
              </LinkContainer>
              <LinkContainer to='/users'>
                <Nav.Link>
                  <i class='fa-regular fa-user'></i> Users
                </Nav.Link>
              </LinkContainer>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  )
}
