import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./pages/login/login";
import Sidebar from "./components/sidebar/sidebar";
import Home from "./pages/home/home";
import Krs from "./pages/krs/krs";
import KrsResult from "./pages/krsResult/krsResult";
import KrsFinish from "./pages/krsFinish/krsFinish";
import Course from "./pages/course/course";
import Tes from "./pages/tes/tes";

function App() {
  return (
    <section>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/homes" element={<Home />} />
          <Route path="/krs" element={<Krs />} />
          <Route path="/krs-result" element={<KrsResult />} />
          <Route path="/krs-finish" element={<KrsFinish />} />
          <Route path="/course" element={<Course />} />
          <Route path="/tes" element={<Tes />} />
        </Routes>
      </BrowserRouter>
    </section>
  );
}

export default App;
