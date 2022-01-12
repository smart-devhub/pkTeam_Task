import React from 'react'

import Login from './components/Login'
import Signup from './components/Signup'
import {BrowserRouter,Route,Routes} from 'react-router-dom'
import Home from './components/Home'
import Details from './components/Details'
import Header from './components/Header'

function App() {
    return (
        <div>
            
            <BrowserRouter>
             <Header />
               <Routes>
                   <Route path="/" element={<Home />} />
                   <Route path='/login' element={<Login />} />
                   <Route path='/sign' element={<Signup />} />
                   <Route path='/detail/:id' element={<Details />} />
               </Routes>
           
           </BrowserRouter>
        </div>
    )
}

export default App
