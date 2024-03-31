import  { lazy,Suspense } from "react";

import { ThemeProvider } from "styled-components";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";

import "./App.css";


const Header = lazy(() => import("./Header/Header"));
const Footer = lazy(()=>import("./Footer/Footer"))
const Home = lazy(() => import("./Pages/Home/Home"));
const Infos = lazy(() => import("./Pages/Infos/Infos"));
const Contact = lazy(() => import("./Pages/Contact"));
const PrivacyPolicy = lazy(() => import("./Pages/PrivacyPolicy"));
const TermsOfService = lazy(() => import("./Pages/TermsOfService"));

const theme = {
  colors: {
    primary: "#33697d",
    secundary: "#eff0f4",
    third: "#c6dbe3",
    navFontColor: "#d9dadb",
    navDropdownFontColor: "#ffffff",
    navChevronColor: "#ffffff",
    navDropdownBGColor: "#eff0f4",
    burgerFontColor: "#33697d",
    burgerDropdownFontColor: "#ffffff",
    burgerChevronColor: "#ffffff",
    burgerBGColor: "#000000",
    burgerDropdownBGColor: "#ededed",
    lngFontColor: "#ffffff",
    lngLineFontColor: "#33697d",
    lngDropdownColor: "#ffffff",
    lngChevronColor: "#ffffff",
    lngDropdownBGColor: "#f9f9f9",
    inputBorderColor: "#c9c9c9",
    grey: "#787878",
    darkgrey: "#424242",
    middlegrey: "#cccccc",
    lightgrey: "#eff0f4",
    white: "#ffffff",
    red: "#f22e2e",
    black: "#353535",
  },
  typography: {
    fontFamiliy: "Helvetica Neue",
  },
};



const App = () => {
  return (
    <ThemeProvider theme={theme}>

      <BrowserRouter>
        <Suspense fallback={<div>Loading...</div>}>
        <Header />
        <Switch>
          <Route path="/contact" component={Contact} />
          <Route path="/infos" component={Infos} />
          <Route path="/privacypolicy" component={PrivacyPolicy} />
          <Route path="/termsofservice" component={TermsOfService} />
          <Route path="/" component={Home} />
          <Redirect to="/" />
        </Switch>
        <Footer />
        </Suspense>
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;
