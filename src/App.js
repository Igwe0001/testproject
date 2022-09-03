import { Route, Navigate, Routes } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./Pages/Home";
import Form from "./Pages/Form";
import Explore from "./Pages/Explore";
import Readyinfo from "./components/Readyinfo";

function App() {
  return (
    <div className="bg-background min-h-screen">
      <Header />
      <main>
        <Routes>
          <Route path="/Home" element={<Home />} />
          <Route path="/" element={<Navigate replace to="/Home" />} exact />
          <Route path="/Form" element={<Form />} />
          <Route path="/Explore" element={<Explore />} />
        </Routes>
      </main>
      <Readyinfo/>
      <Footer />
    </div>
  );
}

export default App;
