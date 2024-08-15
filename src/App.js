import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Container } from 'react-bootstrap'
import { Header, Footer } from './components'
import './App.css'
import {
  UserListScreen,
  HomeScreen,
  PropertyListScreen,
  CreateUserScreen,
  CreatePropertyScreen,
  PropertyScreen,
} from './screens'

const App = () => {
  return (
    <>
      <Router>
        <Header />
        <main>
          <Container>
            <Routes>
              <Route path='/' element={<HomeScreen />} />
              <Route path='/search' element={<HomeScreen />} />
              <Route path='/users' element={<UserListScreen />} />
              <Route path='/create-user' element={<CreateUserScreen />} />
              <Route
                path='/properties/:propertyId'
                element={<PropertyScreen />}
              />
              <Route path='/properties' element={<PropertyListScreen />} />
              <Route
                path='/create-property'
                element={<CreatePropertyScreen />}
              />
            </Routes>
          </Container>
        </main>
        <Footer />
      </Router>
    </>
  )
}

export default App
