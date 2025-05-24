import './App.css'
import '../public/css/Nav.css'
import '../public/css/Porque.css'
import '../public/css/ComoFunciona.css'
import '../public/css/Video.css'
import '../public/css/Aplicativo.css'
import '../public/css/Vantagens.css'
import '../public/css/Footer.css'
import Nav from './page/Nav'
import logo from '../public/Biasi_igreen-energy.png'
import Porque from './page/Porque'
import ComoFunciona from './page/ComoFunciona'
import Footer from './page/Footer'

function App() {

  return (
    <>
      <div className='logo'>
        <img src={logo} alt="logo" />
      </div>
      <a href="https://api.whatsapp.com/send/?phone=5591984916040&text=Ol%C3%A1%2C+quero+mais+informa%C3%A7%C3%B5es%21%sobre%21%energia%21%Igreen%21%&type=phone_number&app_absent=0" className="whatsapp-float" target="_blank" rel="noopener noreferrer">
        <img src="https://cdn-icons-png.flaticon.com/512/733/733585.png" alt="WhatsApp" />
      </a>

      <Nav />
      <Porque />
      <ComoFunciona />
      <Footer />
    </>
  )
}

export default App
