import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import { Context } from "../main";
import { Navigate } from "react-router-dom";

const Doctors = () => {
  const [doctors, setDoctors] = useState([]);
  const { isAuthenticated } = useContext(Context);

  useEffect(() => {
    const fetchDoctors = async () => {
      try {
        const { data } = await axios.get(
          "http://localhost:4000/api/v1/user/doctors",
          { withCredentials: true }
        );
        setDoctors(data.doctors);
      } catch (error) {
        toast.error(error.response.data.message);
      }
    };
    fetchDoctors();
  }, []);

  const deleteDoctor = async (email) => {
    try {
      const { data } = await axios.delete(
        "http://localhost:4000/api/v1/user/doctor/delete", 
        {
          withCredentials: true,
          data: { email },
        }
      );
      toast.success(data.message);
      setDoctors((prevDoctors) => prevDoctors.filter((doctor) => doctor.email !== email));
    } catch (error) {
      console.error("Error details:", error); // Log the error to the console
      toast.error(error.response ? error.response.data.message : "An error occurred while trying to delete the doctor.");
    }
  };
  
  

  if (!isAuthenticated) {
    return <Navigate to={"/login"} />;
  }

  return (
    <section className="page doctors">
      <h1>DOCTORS</h1>
      <div className="banner">
        {doctors && doctors.length > 0 ? (
          doctors.map((element) => (
            <div key={element.email} className="card">
              <img
                src={element.docAvatar && element.docAvatar.url}
                alt="doctor avatar"
              />
              <h4>{`${element.firstName} ${element.lastName}`}</h4>
              <div className="details">
                <p>
                  Email: <span>{element.email}</span>
                </p>
                <p>
                  Phone: <span>{element.phone}</span>
                </p>
                <p>
                  DOB: <span>{element.dob.substring(0, 10)}</span>
                </p>
                <p>
                  Department: <span>{element.doctorDepartment}</span>
                </p>
                <p>
                  NIC: <span>{element.nic}</span>
                </p>
                <p>
                  Gender: <span>{element.gender}</span>
                </p>
              </div>
              <button
                onClick={() => deleteDoctor(element.email)}
                style={{
                  backgroundColor: "red",
                  color: "white",
                  border: "none",
                  padding: "8px 16px",
                  cursor: "pointer",
                }}
              >
                Delete
              </button>
            </div>
          ))
        ) : (
          <h1>No Registered Doctors Found!</h1>
        )}
      </div>
    </section>
  );
};

export default Doctors;
