import './App.css'
import '../public/css/Nav.css'
import '../public/css/Porque.css'
import '../public/css/ComoFunciona.css'
import '../public/css/Video.css'
import '../public/css/Aplicativo.css'
import '../public/css/Vantagens.css'
import '../public/css/Footer.css'
import Nav from './page/Nav'
import logo from '../public/Conexao-Green.png'
import Porque from './page/Porque'
import ComoFunciona from './page/ComoFunciona'
import Footer from './page/Footer'
import { useEffect } from 'react'

function App() {

    useEffect(() => {
    // Cria a tag <script> para o Google Tag Manager
    const script1 = document.createElement('script');
    script1.async = true;
    script1.src = "https://www.googletagmanager.com/gtag/js?id=AW-972805793";
    document.head.appendChild(script1);

    const script2 = document.createElement('script');
    script2.innerHTML = `
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', 'AW-972805793');
    `;
    document.head.appendChild(script2);

    // Remover scripts se o componente for desmontado
    return () => {
      document.head.removeChild(script1);
      document.head.removeChild(script2);
    };
  }, []);

  return (
    <>
      <div className='logo'>
        <img src={logo} alt="logo" />
      </div>
      <a href="https://api.whatsapp.com/send/?phone=5591984916040&text=Ol%C3%A1%2C%20quero%20mais%20informa%C3%A7%C3%B5es%20sobre%20energia%20Igreen!&type=phone_number&app_absent=0" className="whatsapp-float" target="_blank" rel="noopener noreferrer">
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
