import { Route, Routes } from 'react-router-dom'
import HomePage from "./pages/HomePage"
import CategoryPage from './pages/CategoryPage'
import Navbar from "./components/Navbar"


function App() {

    return (
      <>
        <Navbar/>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/category/:category' element={<CategoryPage/>}/>
        </Routes>  
        <div>

        <h2>HDASDS</h2>
        </div>
      </>
    )
}

export default App
