import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import PageNotFound from "./pages/404";

function App() {
  return (
    <>
      <BrowserRouter>
        <main style={{ minHeight: "80vh" }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/*" element={<PageNotFound />} />
          </Routes>
        </main>
      </BrowserRouter>
    </>
  );
}

export default App;
