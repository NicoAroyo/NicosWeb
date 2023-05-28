import "./App.css";
import Button from "./components/button/Button";
import Navbar from "./components/navbar/Navbar";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import HomeView from "./views/home/Home.js";
import SkillsView from "./views/skills/Skills.js";
import ContactView from "./views/contact/Contact.js";

function App() {
  return (
    <>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<HomeView />}></Route>
        <Route path="/skills" element={<SkillsView />}></Route>
        <Route path="/contact" element={<ContactView />}></Route>
      </Routes>
    </>
  );
}

export default App;
