import React from "react";
import CreateTeam from "../../components/CreateTeam/CreateTeam";
import Footer from "../../components/Footer/Footer";
import Form from "../../components/Form/Form";
import Navbar from "../../components/Navbar/Navbar";
import OurWorks from "../../components/OurWorks/OurWork";
import Producer from "../../components/Producer/Producer";

const Home = () => {
  return (
    <div id="home">
      <Navbar />
      <Producer />
      <OurWorks />
      <CreateTeam />
      <Form />
      <Footer />
    </div>
  );
};

export default Home;
