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
        <Route element={<Layout />}>
          
          <Route path="x-app/about" element={<About/>}/>
          <Route path="x-app/service" element={<Service/>}/>
          <Route path="x-app/contact" element={<Contact/>}/>
        </Route>
        <Route path="/x-app" element={<Home/>}></Route>
        
      </Routes>
    </BrowserRouter>
  </>
  )
}

export default App
