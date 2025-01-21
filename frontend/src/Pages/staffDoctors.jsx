import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import { Context } from "../main";
import { Navigate } from "react-router-dom";
import { FiPhone } from "react-icons/fi";

const StaffDoctors = () => {
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
        toast.error(error.response?.data?.message || "Failed to fetch doctors");
      }
    };
    fetchDoctors();
  }, []);

  if (!isAuthenticated) {
    return <Navigate to={"/login"} />;
  }

  return (
    <section className="container form-component register-form">
      <h1>Registered Doctors</h1>
      <div className="table-container">
        <table className="doctors-table">
          <thead>
            <tr>
              <th>Doctor Name</th>
              <th>Department</th>
              <th>Phone Number</th>
            </tr>
          </thead>
          <tbody>
            {doctors && doctors.length > 0 ? (
              doctors.map((doctor) => (
                <tr key={doctor.email}>
                  <td className="blue-text">{`${doctor.firstName} ${doctor.lastName}`}</td>
                  <td className="blue-text">{doctor.doctorDepartment || "Not Assigned"}</td>
                  <td className="blue-text">
                    <FiPhone className="phone-icon" /> {doctor.phone}
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="3" style={{ textAlign: "center" }}>
                  No Registered Doctors Found!
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default StaffDoctors;
