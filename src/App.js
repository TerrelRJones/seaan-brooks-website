import SiteLayout from "./components/SiteLayout";
import Home from "./pages/Home";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Merch from "./pages/Merch";
import Music from "./pages/Music";
import Bio from "./pages/Bio";
import Links from "./pages/Links";

const App = () => {
  return (
    <BrowserRouter>
      <SiteLayout>
        <Routes>
          <Route index element={<Home />} />
          <Route path="music" element={<Music />} />
          <Route path="bio" element={<Bio />} />
          <Route path="merch" element={<Merch />} />
          <Route path="links" element={<Links />} />
        </Routes>
      </SiteLayout>
    </BrowserRouter>
  );
};

export default App;
