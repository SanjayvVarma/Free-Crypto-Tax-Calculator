import './App.css'
import Calculator from './components/Calculator'
import Navbar from './components/Navbar'
import GetStart from './components/GetStart'
import FAQ from './components/FAQ'
import Subscribe from './components/Subscribe'
import Footer from './components/Footer'

function App() {

  return (
    <>
      <Navbar />
      <div className='cal-start'>
        <Calculator />
        <GetStart />
      </div>
      <FAQ />
      <Subscribe />
      <Footer />
    </>
  )
}

export default App
