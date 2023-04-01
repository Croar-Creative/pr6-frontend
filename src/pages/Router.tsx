import { BrowserRouter, Route, Routes } from "react-router-dom";
import GNB from "components/gnb/GNB";
import Home from "./home/Home";
import Footer from "components/footer/Footer";

function Router() {
   return (
      <BrowserRouter>
         <GNB />
         <Routes>
            <Route path="/" element={<Home />} />
         </Routes>
         <Footer />
      </BrowserRouter>
   );
}

export default Router;
