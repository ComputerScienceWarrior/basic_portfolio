import './App.css';
import AboutMe from './components/Home/AboutMe/AboutMe';
import Projects from './components/Home/Projects/Projects'
import Home from './components/Home/Home';
import Login from './components/Session/Login/Login'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ChakraProvider } from '@chakra-ui/react'

function App() {
  return (
    <ChakraProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" index element={<Home />}/>
          <Route path="/about_me" element={<AboutMe />}/>
          <Route path="/projects" element={<Projects />}/>
          <Route path="/login" element={<Login />}/>
        </Routes>
      </BrowserRouter>
    </ChakraProvider>
  );
}

export default App;
