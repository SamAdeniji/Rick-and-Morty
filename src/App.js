import "./App.css";
import Header from "./components/Header/Header";
import Homepage from "./components/Homepage";
import About from "./components/About";
import NoPage from "./components/NoPage";
import CharacterDetails from "./components/CharacterDetails";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/About" element={<About />} />
        <Route path="/CharacterDetails" element={<CharacterDetails />} />
        <Route path="/*" element={<NoPage />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;

// https://rickandmortyapi.com/
