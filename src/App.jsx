import './App.css'
import { Routes, Route } from 'react-router-dom'
import { Home } from './components/Home'
import { SignupForm } from './components/Signup-Form'
import { Dashboard } from './components/Dashboard'
import { NoteFound404 } from './components/Note-Found-404'

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element = {<Home/>}/>
        <Route path='*' element = {<NoteFound404/>} />
        <Route path='/signup' element = {<SignupForm/>}/>
        <Route path='/dashboard' element = {<Dashboard/>}/>
      </Routes>
    </div>
  )
}

export default App
