import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./Components/Header";
import Home from "./Components/Home";
import Login from "./Login/Login";
import Footer from "./Components/Footer";
import { UserStorage } from "./UseContext";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <UserStorage>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login/*" element={<Login />} />
        </Routes>
        <Footer />
        </UserStorage>
      </BrowserRouter>
    </div>
  );
}

export default App;
