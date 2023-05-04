import './App.css';
import AboutMe from './components/Home/AboutMe/AboutMe';
import Projects from './components/Home/Projects/Projects'
import ProjectShowPage from './components/Home/ProjectShowPage/ProjectShowPage';
import Home from './components/Home/Home';
import Resume from './components/Home/Resume/Resume';
import Navigation from './components/Home/Navigation/Navigation';
import Footer from './components/Home/Footer/Footer';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ChakraProvider } from '@chakra-ui/react'

function App() {
  return (
    <ChakraProvider>
      <BrowserRouter>
      <Navigation />
        <Routes>
          <Route path="/" index element={<Home />}/>
          <Route path="/about_me" element={<AboutMe />}/>
          <Route path="/projects" element={<Projects />}/>
          <Route path="/projects/:id" element={<ProjectShowPage />}/>
          <Route path="/resume" element={<Resume />}/>
        </Routes>
      </BrowserRouter>
      <Footer />
    </ChakraProvider>
  );
}

export default App;
