import "./style/style.css"
import {Routes, Route} from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Experience from './pages/Experience'
import Education from './pages/Education'
import Skills from './pages/Skills'
import References from './pages/References'

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/Experience' element={<Experience/>}/>
        <Route path='/Education' element={<Education/>}/>
        <Route path='/Skills' element={<Skills/>}/>
        <Route path='/References' element={<References/>}/>     
      </Routes>
    </div>
  );
}

export default App;
