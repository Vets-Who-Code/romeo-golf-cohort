import React, { useState } from "react";

import PrevNextButton from "../PrevNextButton/PrevNextButton";
import "./PersonalInfo.css";
//refactored version:
// const initialValues = {
//   firstName: "",
//   middleName: "",
//   lastName: "",
//   email: "",
//   phone: "",
//   location: "",
//   linkedIn: "",
//   gitHub: "",
//   portfolio: "",
//   other: "",
// };

function PersonalInfo() {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [location, setLocation] = useState("");
  const [linkedin, setLinkedin] = useState("");
  const [github, setGitHub] = useState("");
  const [portfolio, setPortfolio] = useState("");
  const [other, setOther] = useState("");

  // const [values, setValues] = useState(initialValues);
  // const handleInputChange = (val) => {
  //   const { name, value } =val.target;
  //   setValues({
  //     ...values,
  //     [name]: value,
  //   });

  // };

  return (
    <>
      <h1>Personal Information</h1>
      <div className="container">
        <form>
          <div className="section">
            <label>Full Name</label>
            <input
              type="text"
              required
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
            />

            <label>Email</label>
            <input
              type="text"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <label>Phone</label>
            <input
              type="text"
              required
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
          </div>
          <div className="section">
          <label>Location</label>
          <input
            type="text"
            required
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          />

         
            <label>LinkedIn Profile</label>
            <input
              type="text"
              value={linkedin}
              onChange={(e) => setLinkedin(e.target.value)}
            />
            <label>GitHub</label>
            <input
              type="text"
              value={github}
              onChange={(e) => setGitHub(e.target.value)}
            />
            <label>Portfolio</label>
            <input
              type="text"
              value={portfolio}
              onChange={(e) => setPortfolio(e.target.value)}
            />
          </div>
          <div className="section">
            <label>Other URL</label>
            <input
              type="text"
              value={other}
              onChange={(e) => setOther(e.target.value)}
            />
          </div>
        </form>
        <PrevNextButton />
        <div className="section">
          <button className="btn btn-gr">Add to Resume</button>
          <div className="doc">
            <h3>{fullName}</h3>
            <p>
              {email} {phone} {location}
            </p>
            <p>
              {linkedin} {github} {portfolio} {other}
            </p>
          </div>
          {/* 
      <form>
        <label>First Name</label>
        <input
          type="text"
          required
          value={values.firstName}
          onChange={handleInputChange}
          name="first name"
          label="First Name"
        />
        <label>Middle Name</label>
        <input
          type="text"
          value={values.middleName}
          onChange={handleInputChange}
          name="middle name"
          label="Middle Name"
        />
        <label>Last Name</label>
        <input
          type="text"
          required
          value={values.lastName}
          onChange={handleInputChange}
          name="last name"
          label="Last Name"
        />
        <label>Email</label>
        <input
          type="text"
          value={values.email}
          onChange={handleInputChange}
          name="email"
          label="email"
        />
        <label>Phone Number</label>
        <input
          type="text"
          value={values.phone}
          onChange={handleInputChange}
          name="phone"
          label="phone"
        />
        <label>Location</label>
        <input
          type="text"
          value={values.location}
          onChange={handleInputChange}
          name="location"
          label="location"
        />
        <label>LinkedIn</label>
        <input
          type="text"
          value={values.linkedIn}
          onChange={handleInputChange}
          name="LinkedIn"
          label="LinkedIn"
        />
        <label>GitHub</label>
        <input
          type="text"
          value={values.gitHub}
          onChange={handleInputChange}
          name="GitHub"
          label="GitHub"
        />
        <label>Portfolio Link</label>
        <input
          type="text"
          value={values.portfolio}
          onChange={handleInputChange}
          name="portfolio"
          label="portfolio"
        />{" "}
        <label>Other Website</label>
        <input
          type="text"
          value={values.other}
          onChange={handleInputChange}
          name="other"
          label="other"
        />
        <button type="submit"> Submit </button>
      </form> */}
        </div>
      </div>
    </>
  );
}

export default PersonalInfo;
