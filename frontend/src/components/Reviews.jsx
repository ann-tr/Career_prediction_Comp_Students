import React, { useState } from "react";
import "./Reviews.css"; 

function ReviewForm() {
  const [formData, setFormData] = useState({
    name: "",
    course: "",
    experience: "",
    refer: ""
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name) newErrors.name = "Name is required.";
    if (!formData.course) newErrors.course = "Course is required.";
    if (!formData.experience) newErrors.experience = "Experience is required.";
    if (!formData.refer) newErrors.refer = "Please select if you would refer the test to others.";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      setSubmitted(true);
      console.log("Form submitted:", formData);
    }
  };

  return (
    <div className="form-container">
      <h2 className="form-title">Submit Your Experience</h2>
      <form onSubmit={handleSubmit} className="review-form">
        <label className="form-label">
          Name:
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="form-input"
          />
        </label>
        {errors.name && <p className="error-text">{errors.name}</p>}

        <label className="form-label">
          Course Pursued:
          <input
            type="text"
            name="course"
            value={formData.course}
            onChange={handleChange}
            className="form-input"
          />
        </label>
        {errors.course && <p className="error-text">{errors.course}</p>}

        <label className="form-label">
          Your Experience Attending the Test:
          <textarea
            name="experience"
            value={formData.experience}
            onChange={handleChange}
            rows="4"
            className="form-textarea"
          />
        </label>
        {errors.experience && <p className="error-text">{errors.experience}</p>}

        <label className="form-label">
          Would you recommend this test to others?
          <div className="radio-group">
            <input
              type="radio"
              name="refer"
              value="Yes"
              checked={formData.refer === "Yes"}
              onChange={handleChange}
              className="form-radio"
            />{" "}
            Yes
            <input
              type="radio"
              name="refer"
              value="No"
              checked={formData.refer === "No"}
              onChange={handleChange}
              className="form-radio"
            />{" "}
            No
          </div>
        </label>
        {errors.refer && <p className="error-text">{errors.refer}</p>}

        <button type="submit" className="submit-button">Submit Review</button>
      </form>

      {submitted && (
        <div className="thank-you">
          <h3>Thank you for your review!</h3>
          <p>Name: {formData.name}</p>
          <p>Course: {formData.course}</p>
          <p>Experience: {formData.experience}</p>
          <p>Recommendation: {formData.refer === "Yes" ? "Yes" : "No"}</p>
        </div>
      )}
    </div>
  );
}

export default ReviewForm;
