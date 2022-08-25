import { useState } from 'react'
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'

import './App.css'
import {Home} from './pages/Home'
import {Congratulations} from './pages/Congratulations'
import {Main} from './pages/Main'
import Suggestion from './pages/Suggestion'
import {Categories} from './pages/Categories'

function App() {  

  return (
    <div className="max-w-xl mx-auto">
     <Router>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/categories' element={<Categories/>}/>
        <Route path='/suggestion' element={<Suggestion/>}/>
        <Route path='/main' element={<Main/>}/>
        <Route path='/congratulations' element={<Congratulations/>}/>
      </Routes>
     </Router>
    </div>
  )
}

export default App
