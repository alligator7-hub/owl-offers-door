import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Layout } from "./components/Layout";
import { routerBasename } from "./lib/site";
import { Home } from "./pages/Home";
import { NotFound } from "./pages/NotFound";
import { Sample } from "./pages/Sample";
import { Start } from "./pages/Start";

export function App() {
  return (
    <BrowserRouter basename={routerBasename()}>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="sample" element={<Sample />} />
          <Route path="start" element={<Start />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
