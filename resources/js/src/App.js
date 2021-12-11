import React, { useState } from 'react'
import ReactDOM from 'react-dom'
import Header from '../components/Header/Header'
import {  BrowserRouter,
    Routes,
    Route} from "react-router-dom"
import PersonalLoanProfile from '../components/PLProfiler/PersonalLoanProfile'
import Home from '../components/Home/Home'
function App () {
  const [state, setState] = useState(0)

  const handleClick = () => {
    setState(prevState => prevState + 1)
  }

  return (
   <>
    <BrowserRouter>
    <Header />
    <Routes>
      <Route exact path="/" element={<Home />}></Route>
      <Route exact path="/persoanlLoanProfileing" element={<PersonalLoanProfile />}></Route>
    </Routes>
  </BrowserRouter>
   </>
  )
}

export default App

if (document.getElementById('root')) {
  ReactDOM.render(<App />, document.getElementById('root'))
}
