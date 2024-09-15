import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Layout from "./pages/Layout";
import Anasayfa from "./pages/Anasayfa";
import Blog from "./pages/Blog";
import Iletisim from "./pages/Iletisim";
import NoPage from "./pages/NoPage";


function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Anasayfa/>} />
            <Route path="blog" element={<Blog />} />
            <Route path="iletisim" element={<Iletisim />} />
            <Route path="*" element={<NoPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
