import React from "react";
import "./App.css";

import Section1 from "./components/section1/section1.component";
import Section2 from "./components/section2/section2.component";
import Section3 from "./components/section3/section3.component";
import Section4 from "./components/section4/section4.component";
import Section5 from "./components/section5/section5.component";
import Navbar from "./components/navbar/navbar.component";
import Footer1 from "./components/footer/footer.component";
function App() {
  return (
    <div className="App">
      <Navbar />
      <Section1 />
      <Section2 />
      <Section3 />
      <Section4 />
      <Section5 />
      <Footer1 />
    </div>
  );
}

export default App;
