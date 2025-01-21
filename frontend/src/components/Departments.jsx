import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const Departments = () => {
  const departmentsArray = [
    {
      name: "Pediatrics",
      imageUrl: "/departments/pedia.jpg",
    },
    {
      name: "Orthopedics",
      imageUrl: "/departments/ortho.jpg",
    },
    {
      name: "Cardiology",
      imageUrl: "/departments/cardio.jpg",
    },
    {
      name: "Neurology",
      imageUrl: "/departments/neuro.jpg",
    },
    {
      name: "Oncology",
      imageUrl: "/departments/onco.jpg",
    },
    {
      name: "Radiology",
      imageUrl: "/departments/radio.jpg",
    },
    {
      name: "Physical Therapy",
      imageUrl: "/departments/therapy.jpg",
    },
    {
      name: "Dermatology",
      imageUrl: "/departments/derma.jpg",
    },
    {
      name: "ENT",
      imageUrl: "/departments/ent.jpg",
    },
    {
      name: "Allergy & Immunology",
      imageUrl: "/departments/Allergy & Immunology.png",
    },
    {
      name: "Gastroenterology",
      imageUrl: "/departments/Gastroenterology.jpg",
    },
    {
      name: "Hepatology",
      imageUrl: "/departments/Hepatology.jpg",
    },
    {
      name: "Osteopathy",
      imageUrl: "/departments/Osteopathy.jpg",
    },
    {
      name: "Endocrinology",
      imageUrl: "/departments/Endocrinology.jpeg",
    },
    {
      name: "Pulmonology",
      imageUrl: "/departments/Pulmonology.jpg",
    },
    {
      name: "Phlebologist",
      imageUrl: "/departments/Phlebologist.jpg",
    },
    {
      name: "Internal Medicine",
      imageUrl: "/departments/Internal Medicine.jpeg",
    },
    {
      name: "General Medicine",
      imageUrl: "/departments/General Medicine.jpg",
    },
    {
      name: "Rheumatology",
      imageUrl: "/departments/Rheumatology.jpg",
    },
    {
      name: "Otolaryngology",
      imageUrl: "/departments/Otolaryngology.jpg",
    },
    {
      name: "Gynecology",
      imageUrl: "/departments/Gynecology.jpg",
    },
    

  ];

  const responsive = {
    extraLarge: {
      breakpoint: { max: 3000, min: 1324 },
      items: 4,
      slidesToSlide: 1, // optional, default to 1.
    },
    large: {
      breakpoint: { max: 1324, min: 1005 },
      items: 3,
      slidesToSlide: 1, // optional, default to 1.
    },
    medium: {
      breakpoint: { max: 1005, min: 700 },
      items: 2,
      slidesToSlide: 1, // optional, default to 1.
    },
    small: {
      breakpoint: { max: 700, min: 0 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
  };

  return (
    <>
      <div className="container departments">
        <h2>Departments</h2>
        <Carousel
          responsive={responsive}
          removeArrowOnDeviceType={[
            // "superLargeDesktop",
            // "desktop",
            "tablet",
            "mobile",
          ]}
        >
          {departmentsArray.map((depart, index) => {
            return (
              <div key={index} className="card">
                <div className="depart-name">{depart.name}</div>
                <img src={depart.imageUrl} alt="Department" />
              </div>
            );
          })}
        </Carousel>
      </div>
    </>
  );
};

export default Departments;
