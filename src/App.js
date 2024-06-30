import Navbar from "./Component/Navbar";
// import Nav from './Component/Nav'
import Intro from "./Component/Intro";
import './App.css';
import Services from "./Component/Services";
import Experience from "./Component/Experience";
import Work from "./Component/Work";
import Contact from "./Component/Contact";
import Footer from "./Component/Footer";
import { themeContext } from "./Context";
import { useContext } from "react";
import Portfolio from "./Component/Portfolio";
import Skill from "./Component/Skills"

function App() {
  const theme=useContext(themeContext)
  const darkMode =theme.state.darkMode;

  return (
    <div className="App"
    style={{
    background:darkMode? 'black':'',
    color:darkMode? 'white':''}}
    
    >
    {/* <Nav/> */}
     <Navbar/>
     <Intro/>
     <Services/>
     <Experience/>
     <Work/>
     <Skill/>
     <Portfolio/>
     <Contact/>
     <Footer/>
    

    </div>
  );
}
export default App;
