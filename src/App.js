import "./App.css";
import Home from "./Components/Home";
import Orders from "./Global_State_variables_and their_functions/Orders";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Addorder from "./Components/Addorder";
import Tyredetails from "./Global_State_variables_and their_functions/Tyredetails";
import Addtyre from "./Components/Addtyre";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Tyredetails>
          <Orders>
            <Routes>
              <Route exact path="/" element={<Home />} />
              <Route exact path="/addorder" element={<Addorder />} />
              <Route exact path="/addtyre" element={<Addtyre/>} />
            </Routes>
          </Orders>
        </Tyredetails>
      </Router>
    </>
  );
}

export default App;
