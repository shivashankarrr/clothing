import {Routes,Route, BrowserRouter} from 'react-router-dom'
import Home from './components/Home'
import About from './components/About'
import Header from './components/Header'
import Products from './components/ProductList'
import Footer from './components/Footer'
import './App.css'

function App() {

  return (
    <>
    
      <BrowserRouter>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/About" element={<About></About>}></Route>
        <Route path="/Products" element={<Products></Products>}></Route>
      </Routes></BrowserRouter>
      <Footer></Footer>
    </>
  )
}

export default App
