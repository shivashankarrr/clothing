import {Routes,Route, BrowserRouter} from 'react-router-dom'
import Home from './pages/Home'
import Header from './components/Header'
import User from './pages/User'
import Cart from './pages/Cart'
import Footer from './components/Footer'
import './App.css'
import PaginationProvider from './contexts/PaginationContext'

function App() {

  return (
    <PaginationProvider>
    
      <BrowserRouter>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/User" element={<User></User>}></Route>
        <Route path="/cart" element={<Cart></Cart>}></Route>
      </Routes></BrowserRouter>
      <Footer></Footer>
    </PaginationProvider>
  )
}

export default App
