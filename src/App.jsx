import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Quantity from './Quantity'
import UpdateQuantity from './UpdateQuantity'
import { useSelector } from 'react-redux'
// import './App.css'

function App() {


  return (
    <>
      <Quantity />
      <UpdateQuantity />

    </>
  )
}

export default App
