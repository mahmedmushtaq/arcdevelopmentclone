import React from 'react';
import Header from "./ui/Header";
import {ThemeProvider} from "@material-ui/core/styles";
import theme from "./ui/Theme";

function App() {
  return (
   <ThemeProvider theme={theme}>
      <Header/>
      Hello World
    </ThemeProvider>
  );
}

export default App;
