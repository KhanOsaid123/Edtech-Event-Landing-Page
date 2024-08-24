import React from "react";
import Header from "./components/Header";
import Content from "./components/Content";
import Card from "./components/Card";
import Subscription from "./components/Subscription";
import Footer from "./components/Footer";
import Feature from "./components/Feature";

const App = () => {
  return (
    <div>
      <Header />
      <Content />
      <Card />
      <Subscription />
      <Feature />
      <Footer />
    </div>
  );
};

export default App;
