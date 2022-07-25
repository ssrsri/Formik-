import React from 'react'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Thankyou from './Thankyou';
import Form from './Form'

export default function App(){
  return(<BrowserRouter>
    <Routes>
    

      <Route path="/" element={<Form/>}/>
      <Route path="/thankyou" element={<Thankyou/>}/>

    </Routes>

    </BrowserRouter>)
}