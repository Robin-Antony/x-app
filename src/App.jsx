import { BrowserRouter, Routes, Route } from "react-router-dom";

import './App.css'
import Home from './pages/Home'
import Layout from "./components/Layout";
import About from "./pages/About";
import Service from "./pages/Service";
import Contact from "./pages/Contact";



function App() { 
  return(
  <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="about" element={<About/>}/>
          <Route path="service" element={<Service/>}/>
          <Route path="contact" element={<Contact/>}/>
        </Route>
        <Route index element={<Home/>}></Route>
      </Routes>
    </BrowserRouter>
  </>
  )
}

export default App
