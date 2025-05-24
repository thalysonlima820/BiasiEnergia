import './App.css'
import '../public/css/Nav.css'
import '../public/css/Porque.css'
import '../public/css/ComoFunciona.css'
import '../public/css/Video.css'
import Nav from './page/Nav'
import logo from '../public/Biasi_igreen-energy.png'
import Porque from './page/Porque'
import ComoFunciona from './page/ComoFunciona'

function App() {

  return (
    <>
      <div className='logo'>
        <img src={logo} alt="logo" />
      </div>

      <Nav />
      <Porque />
      <ComoFunciona />
    </>
  )
}

export default App
