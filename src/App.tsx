import { ThemeProvider } from "styled-components";

import Router from "pages/Router";
import { GlobalStyle } from "assets/styles/GlobalStyle";
import theme from "assets/styles/theme";

function App() {
   return (
      <ThemeProvider theme={theme}>
         <Router />
         <GlobalStyle />
      </ThemeProvider>
   );
}

export default App;
