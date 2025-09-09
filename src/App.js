import "./App.css";
import { Routes, Route } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import Falafilgy from "./pages/Falafilgy";
function App() {
  return (
    <>
      <Routes>
        <Route path="/falafilgy" element={<Falafilgy />} />
      </Routes>
      <Toaster />
    </>
  );
}

export default App;
