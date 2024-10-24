import './App.css'
import Calculator from './components/Calculator'
import Navbar from './components/Navbar'
import GetStart from './components/GetStart'

function App() {

  return (
    <>
      <Navbar/>
     <div className='cal-start'>
     <Calculator/>
     <GetStart/>
     </div>
    </>
  )
}

export default App
