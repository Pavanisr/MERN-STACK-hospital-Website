import React from "react";
import Hero from "../components/Hero";
import AppointmentForm from "../components/AppointmentForm";
import { Link } from "react-router-dom";

const Appointment = () => {
  return (
    <>
      <Hero
        title={"Schedule Your Appointment | PeopleCare International Hospital"}
        imageUrl={"/signin.png"}
      />
      <div
  style={{
    display: "flex", 
    margin: "109px",
    marginTop:"10px"
  }}
>
  <Link
    to="/staffDoctors"
    style={{
      textDecoration: "none",
      backgroundColor: "black",
      color: "white",
      padding: "5px 10px",
      borderRadius: "5px",
      fontWeight: "bold",
    }}
  >
    View Our Doctors
  </Link>
</div>

      <AppointmentForm/>
    </>
  );
};

export default Appointment;
