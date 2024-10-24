import './App.css'
import Calculator from './components/Calculator'
import Navbar from './components/Navbar'
import GetStart from './components/GetStart'
import FAQ from './components/FAQ'

function App() {

  return (
    <>
      <Navbar />
      <div className='cal-start'>
        <Calculator />
        <GetStart />
      </div>

      <FAQ />
    </>
  )
}

export default App
