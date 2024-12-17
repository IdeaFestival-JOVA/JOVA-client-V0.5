import { Route, Routes } from "react-router-dom";
import Home from "./page/Home/Home";
import Notion from "./page/Notion/Notion";
import Profil from "./page/Profil/profil";
import JobPage from "./page/JobPage/JobPage";
import Detail from "./page/Detail/Detail";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/jobpage" element={<JobPage />} />
      <Route path="/notion" element={<Notion />} />
      <Route path="/profil" element={<Profil />} />
      <Route path="/notion/detail" element={<Detail />} />
    </Routes>
  );
}

export default App;
