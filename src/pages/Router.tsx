import { BrowserRouter, Route, Routes } from "react-router-dom";
import GNB from "components/gnb/GNB";
import Home from "./home/Home";
import Footer from "components/footer/Footer";
import Login from "./user/login/Login";

import NotFound from "./error/NotFound";
import UnderConstruction from "./error/UnderConstruction";

function Router() {
   return (
      <BrowserRouter>
         <GNB />
         <Routes>
            <Route path="/" element={<Home />} />

            <Route path="login">
               <Route index element={<Login />} />
            </Route>

            <Route path="sign-up">
               <Route index element={<UnderConstruction />} />
            </Route>

            <Route path="find-user">
               <Route index element={<UnderConstruction />} />
               <Route path="email" element={<UnderConstruction />} />
               <Route path="password" element={<UnderConstruction />} />
            </Route>

            <Route path="projects">
               <Route index element={<UnderConstruction />} />
            </Route>

            <Route path="brand">
               <Route index element={<UnderConstruction />} />
            </Route>

            <Route path="portfolio">
               <Route index element={<UnderConstruction />} />
            </Route>

            <Route path="blog">
               <Route index element={<UnderConstruction />} />
            </Route>

            <Route path="contact">
               <Route index element={<UnderConstruction />} />
            </Route>

            <Route path="*" element={<NotFound />} />
         </Routes>
         <Footer />
      </BrowserRouter>
   );
}

export default Router;
