import Home from "./Components/Home";
import About from "./Components/About";
import Contact from "./Components/Contact";
import Greet from "./Components/Greet";

function App() {
  let fname = "Nikhil";
  let age = 22;
  return(
    <div>
       <h1>Destiny</h1>
        <Greet name = {fname}/>
        <Home name1 = {fname} a = {age}/>
        <About />
         <Contact />
        <h1>Thank You</h1>
    </div>
  )
}
export default App;