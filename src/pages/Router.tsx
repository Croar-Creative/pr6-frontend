import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import GNB from "components/gnb/GNB";
import Home from "./home/Home";
import Footer from "components/footer/Footer";
import Login from "./user/login/Login";

import NotFound from "./error/NotFound";
import UnderConstruction from "./error/UnderConstruction";
import Agreements from "./user/sign-up/Agreements";
import Inputs from "./user/sign-up/Inputs";
import Success from "./user/sign-up/Success";

// import { useRecoilValue } from "recoil";
// import { loginState } from "recoil/LoginState";

function Router() {
   // const isLoggedIn = useRecoilValue(loginState);

   return (
      <BrowserRouter>
         <GNB />
         <Routes>
            <Route path="/" element={<Home />} />

            <Route path="login">
               <Route index element={<Login />} />
            </Route>

            <Route path="sign-up">
               <Route path="agreements" element={<Agreements />} />
               <Route path="inputs" element={<Inputs />} />
               <Route path="success" element={<Success />} />
               <Route path="" element={<Navigate to="/sign-up/agreements" />} />
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
