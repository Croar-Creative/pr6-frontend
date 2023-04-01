import { BrowserRouter, Route, Routes } from "react-router-dom";
import GNB from "components/gnb/GNB";
import Home from "./home/Home";
import Footer from "components/footer/Footer";
import NotFound from "./404/NotFound";

function Router() {
   return (
      <BrowserRouter>
         <GNB />
         <Routes>
            <Route path="/" element={<Home />} />
            <Route path="*" element={<NotFound />} />
         </Routes>
         <Footer />
      </BrowserRouter>
   );
}

export default Router;
