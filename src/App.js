import React from "react";
import './App.css'
import Header from "./components/Header";
import Body from "./components/Body";
import Util from "./components/Util";
import Roadmap from "./components/Roadmap";
import Team from "./components/Team";
import FAQ from "./components/FAQ";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <Header />
      <Body />
      <Util />
      <Roadmap />
      <Team />
      <FAQ />
      <Footer />
    </div>
  );
}

export default App;