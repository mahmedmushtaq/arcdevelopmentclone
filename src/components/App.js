import React, {useState} from 'react';
import Header from "./ui/Header";
import {ThemeProvider} from "@material-ui/core/styles";
import theme from "./ui/Theme";
import {BrowserRouter,Route,Switch} from "react-router-dom";
import Footer from "./ui/Footer";
import LandingPage from "./landingPage";
import Services from "./Services";
import CustomSoftware from "./CustomSoftware";
import MobileApps from "./MobileApps";
import Websites from "./websites";
import Revolution from "./Revolution";
import About from "./About";
import Contact from "./Contact";

function App() {
    const [value,setValue] = useState(0);
    const [selectedIndex,setSelectedIndex] = useState(0);
  return (
   <ThemeProvider theme={theme}>
       <BrowserRouter>
          <Header value={value} setValue={setValue} selectedIndex={selectedIndex} setSelectedIndex={setSelectedIndex}/>
          <Switch>
          <Route exact path={"/services"} component={(props)=> <Services {...props} setValue={setValue} setSelectedIndex={setSelectedIndex}/> }/>
          <Route exact path={"/customsoftware"} component={(props)=> <CustomSoftware {...props} setValue={setValue} setSelectedIndex={setSelectedIndex} />}/>
          <Route exact path={"/mobileapps"}  component={(props)=> <MobileApps {...props} setValue={setValue} setSelectedIndex={setSelectedIndex} />}/>
          <Route exact path={"/websites"} component={(props)=> <Websites {...props} setValue={setValue} setSelectedIndex={setSelectedIndex}/>}/>
          <Route exact path={"/revolution"} component={(props)=><Revolution {...props} setValue={setValue} setSelectedIndex={setSelectedIndex}/>}/>
          <Route exact path={"/about"} component={(props)=><About {...props} setValue={setValue} setSelectedIndex={setSelectedIndex}/>}/>
          <Route exact path={"/contact"} component={(props)=><Contact {...props} setValue={setValue} setSelectedIndex={setSelectedIndex}/>}/>
          <Route  path={"/"} component={(props)=> <LandingPage {...props} setValue={setValue} setSelectedIndex={setSelectedIndex} />}/>

          </Switch>
           <Footer value={value} setValue={setValue} selectedIndex={selectedIndex} setSelectedIndex={setSelectedIndex}/>
       </BrowserRouter>


    </ThemeProvider>
  );
}

export default App;
