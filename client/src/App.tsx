import { useState } from 'react'

import Header from "./assets/components/Header/Header";
import Main from "./assets/components/Main/Main";
import Footer from "./assets/components/Footer/Footer";

import './App.css'
import Products from './assets/components/Products/Products';

function App() {
  

  return (
    <div>
      <Header />

      <Main />
      <Products />
      <Footer />
   </div>
  )
}

export default App
