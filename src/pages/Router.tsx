import { BrowserRouter, Route, Routes } from "react-router-dom";
import GNB from "components/gnb/GNB";
import Home from "./home/Home";

function Router() {
   return (
      <BrowserRouter>
         <GNB />
         <Routes>
            <Route path="/" element={<Home />} />
         </Routes>
      </BrowserRouter>
   );
}

export default Router;
