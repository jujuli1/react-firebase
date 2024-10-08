
import {Routes, Route} from "react-router-dom"
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import SignUpModal from "./components/SignUpModal";
import SignInModal from "./components/SignInModal"
import Private from './pages/Private/Private'
import PrivateHome from './pages/Private/PrivateHome/PrivateHome'
import Coordonnees from "./components/Coordonnee";
import Competences from "./components/Competences";
import Contact from "./components/Contact/Contact";


function App() {
  return (
    <>
    
    <SignUpModal/>
    <SignInModal/>
    <Navbar/>
    <Routes>

      <Route path="/*" element={<Home/>}/>
      <Route path="/coordonnee" element={<Coordonnees />} />
        <Route path="/competences" element={<Competences />} />
        <Route path="/private/private-home/contact" element={<Contact />} />
      <Route path="/private" element={<Private/>}>
      
      <Route path="/private/private-home" element={<PrivateHome/>}/>
      </Route>
     </Routes>
    </>
     
    
  );
}

export default App;
