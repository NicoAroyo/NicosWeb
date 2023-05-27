import "./App.css";
import Navbar from "./components/navbar/Navbar";
import { Route, BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Navbar></Navbar>
      </Router>
    </>
  );
}

export default App;
