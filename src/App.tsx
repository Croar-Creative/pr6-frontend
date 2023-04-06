import { ThemeProvider } from "styled-components";

import Router from "pages/Router";
import { GlobalStyle } from "assets/styles/GlobalStyle";
import theme from "assets/styles/theme";
import { googleAuth } from "./firebase";
import { onAuthStateChanged } from "firebase/auth";
import { useSetRecoilState } from "recoil";
import { loginState } from "recoil/LoginState.atom";
import { useEffect } from "react";

function App() {
   const setIsLoggedIn = useSetRecoilState(loginState);

   useEffect(() => {
      onAuthStateChanged(googleAuth, (user) => {
         if (user) {
            console.log("user", user);
            setIsLoggedIn(true);
         } else {
            console.log("user is not logged in");
            setIsLoggedIn(false);
         }
      });
   }, [setIsLoggedIn]);

   return (
      <ThemeProvider theme={theme}>
         <Router />
         <GlobalStyle />
      </ThemeProvider>
   );
}

export default App;
