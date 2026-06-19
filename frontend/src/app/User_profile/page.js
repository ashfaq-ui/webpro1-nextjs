"use client";
import styles from "./user.module.css";
import { useState } from "react";
import axios from "axios";

export default function UserProfile() {
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    dob: "2000-01-01",
  });

  const [message, setMessage] = useState("");

  // Handle input change
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://127.0.0.1:5000/api/users", formData);
      setMessage(res.data.message);

      // Reset the form after submission
      setFormData({
        firstname: "",
        lastname: "",
        dob: "2000-01-01",
      });
    } catch (err) {
      console.error("Error submitting form:", err);
      setMessage("Failed to submit!");
    }
  };

  return (
    <div className={styles["background-colour"]}>
      <div className={styles["sub-whole-area"]}>
        <h1>User Profile Form</h1>
      </div>

      <form onSubmit={handleSubmit}>
        <fieldset>
          <legend>User Details</legend>
          <br />
          <label htmlFor="firstname">First Name:</label>
          <input
            type="text"
            id="firstname"
            name="firstname"
            size="30"
            placeholder="Enter your First name"
            value={formData.firstname}
            onChange={handleChange}
            required
          />
          <br />
          <br />
          <label htmlFor="lastname">Last Name:</label>
          <input
            type="text"
            id="lastname"
            name="lastname"
            size="30"
            placeholder="Enter your Last name"
            value={formData.lastname}
            onChange={handleChange}
            required
          />
        </fieldset>

        <br />

        <fieldset>
          <legend>Date of Birth</legend>
          <br />
          <label htmlFor="dob">Date Of Birth:</label>
          <input
            type="date"
            id="dob"
            name="dob"
            value={formData.dob}
            onChange={handleChange}
            required
          />
        </fieldset>

        <br />

        <fieldset>
          <br />
          <button
            type="button"
            onClick={() =>
              setFormData({
                firstname: "",
                lastname: "",
                dob: "2000-01-01",
              })
            }
          >
            Reset
          </button>
          <br />
          <br />
          <button type="submit">Send</button>
        </fieldset>
      </form>

      {message && <p style={{ marginTop: "10px", color: "green" }}>{message}</p>}
    </div>
  );
}