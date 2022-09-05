import React from "react";
import CreateTeam from "../../components/CreateTeam/CreateTeam";
import Footer from "../../components/Footer/Footer";
import Form from "../../components/Form/Form";
import Navbar from "../../components/Navbar/Navbar";
import Producer from "../../components/Producer/Producer";
import Projects from "../../components/Projects/Projects";

const Home = () => {
  return (
    <div id="home">
      <Navbar />
      <Producer />
      <Projects />
      <CreateTeam />
      <Form />
      <Footer />
    </div>
  );
};

export default Home;
