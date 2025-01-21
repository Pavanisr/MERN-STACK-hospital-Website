import React, { useContext } from "react";
import Hero from "../components/Hero";
import Biography from "../components/Biography";
import MessageForm from "../components/MessageForm";
import Departments from "../components/Departments";

const Home = () => {
  return (
    <>
      <Hero
  title={
    <>
      PeopleCare <br />
      International Hospital Service
    </>
  }
  imageUrl={"/hero11 (2).png"}
/>


      <Biography imageUrl={"/hero1.png"} />
      <Departments />
      <MessageForm />
    </>
  );
};

export default Home;
