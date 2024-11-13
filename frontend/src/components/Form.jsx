import React, { useState } from "react";
import './Form.css'

const CareerForm = () => {
  // Initialize state for each question
  const [formData, setFormData] = useState({
    question_1: "",
    question_2: "",
    question_3: "",
    question_4: "",
    question_5: "",
    question_6: "",
    question_7: "",
    question_8: "",
    question_9: "",
    question_10: "",
    question_11: "",
    question_12: "",
    question_13: "",
    question_14: "",
    question_15: "",
    question_16: "",
    question_17: "",
    question_18: "",
    question_19: "",
    question_20: "",
    question_21: "",
  });

  const [prediction, setPrediction] = useState("");
 
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    // Send formData to the backend here
    try {
      const response = await fetch("http://127.0.0.1:8000/api/submit-form/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        const data = await response.json();
        
        console.log("Form submitted successfully");
        if (data && data.prediction) {
          setPrediction(data.prediction);
        } 
        else {
          console.error("Prediction data not found in response");
        }
      }
  
      else {
        console.error("Failed to submit form");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="career-form">
      <h1>Career Prediction Questionnaire</h1>
      
      <label htmlFor="question_1">On a scale of 1 to 9, how would you grade your logical quotient?</label>
      <input type="number" id="question_1" name="question_1" min="1" max="9" value={formData.question_1} onChange={handleChange} required />
      <br></br>

      <label htmlFor="question_2">On a scale of 1 to 9, how would you grade your coding skills?</label>
      <input type="number" id="question_2" name="question_2" min="1" max="9" value={formData.question_2} onChange={handleChange} required />
      <br></br>

      <label htmlFor="question_3">How many hackathons have you participated in (1-6)?</label>
      <input type="number" id="question_3" name="question_3" min="1" max="6" value={formData.question_3} onChange={handleChange} required />
      <br></br>

      <label htmlFor="question_4">On a scale of 1 to 9, how would you grade your public speaking skills?</label>
      <input type="number" id="question_4" name="question_4" min="1" max="9" value={formData.question_4} onChange={handleChange} required />
      <br></br>

      <label>What is your self-learning capability?</label>
      <input type="radio" name="question_5" value="Yes" checked={formData.question_5 === "Yes"} onChange={handleChange}  /> Yes
      <input type="radio" name="question_5" value="No" checked={formData.question_5 === "No"} onChange={handleChange} /> No
      <br></br>

      <label>Have you done any extra-courses</label>
      <input type="radio" name="question_6" value="Yes" checked={formData.question_6 === "Yes"}onChange={handleChange} /> Yes
      <input type="radio" name="question_6" value="No" checked={formData.question_6 === "No"} onChange={handleChange} /> No
      <br></br>

      <label>Has taken inputs from seniors or elders</label>
      <input type="radio" name="question_7" value="Yes" checked={formData.question_7 === "Yes"}onChange={handleChange} /> Yes
      <input type="radio" name="question_7" value="No" checked={formData.question_7 === "No"}onChange={handleChange} /> No
      <br></br>

      
      <label>Have you worked in  a team setting?</label>
      <input type="radio" name="question_8" value="Yes" checked={formData.question_8 === "Yes"}onChange={handleChange} /> Yes
      <input type="radio" name="question_8" value="No" checked={formData.question_8 === "No"}onChange={handleChange} /> No
      <br></br>
        
      
      <label> Are you an Introvert"</label>
      <input type="radio" name="question_9" value="Yes"  checked={formData.question_9 === "Yes"}onChange={handleChange} /> Yes
      <input type="radio" name="question_9" value="No" checked={formData.question_9 === "No"}onChange={handleChange} /> No
      <br></br>

     
      <label>How will you grade your reading and writing skills</label>
      <input type="radio" name="question_10" value="Poor" checked={formData.question_10 === "Poor"}onChange={handleChange} /> Poor
      <input type="radio" name="question_10" value="Medium" checked={formData.question_10 === "Medium"}onChange={handleChange} />Medium
      <input type="radio" name="question_10" value="Excellent" checked={formData.question_10 === "Excellent"}onChange={handleChange} /> Excellent
      <br></br>

      
      <label>"How is your memory capability </label>
      <input type="radio" name="question_11" value="Poor" checked={formData.question_11 === "Poor"} onChange={handleChange} /> Poor
      <input type="radio" name="question_11" value="Medium" checked={formData.question_11 === "Medium"} onChange={handleChange} />Medium
      <input type="radio" name="question_11" value="Excellent"checked={formData.question_11 === "Excellent"} onChange={handleChange} /> Excellent
      <br></br>

      <label>Are you a hard worker</label>
        <input type="radio" name="question_12" value="Yes" checked={formData.question_12 === "Yes"} onChange={handleChange} />  Yes
        <input type="radio" name="question_12" value="No" checked={formData.question_12=== "No"} onChange={handleChange} />  No
        <br></br>

      <label>Are you good a smart worker</label>
        <input type="radio" name="question_13" value="Yes" checked={formData.question_13 === "Yes"} onChange={handleChange} />  Yes
        <input type="radio" name="question_13" value="No" checked={formData.question_13 === "No"} onChange={handleChange} />  No
        <br></br>
      <label>Are you good at handling Management tasks?</label><br></br>
        <input type="radio" name="question_14" value="Yes"checked={formData.question_14 === "Yes"} onChange={handleChange} />  Yes
        <input type="radio" name="question_14" value="No" checked={formData.question_14 === "No"} onChange={handleChange} />  No
        <br></br>

          
       
      <label>Are you good at handling technical tasks?</label>
        <input type="radio" name="question_15" value="Yes" checked={formData.question_15 === "Yes"} onChange={handleChange} /> Yes
        <input type="radio" name="question_15" value="No" checked={formData.question_15 === "No"} onChange={handleChange} /> No 
        <br></br>
        

      <label for="question_16">Whats your Interested subjects</label>
        <select name="question_16" value={formData.question_16} onChange={handleChange}>
          <option  name="question_16" value=" "> </option>
          <option  name="question_16" value="Software Engineering">Software Engineering</option>
          <option name="question_16" value="IOT ">IOT </option>
          <option name="question_16" value="cloud computing ">cloud computing </option>
          <option  name="question_16" value="programming ">programming </option>
          <option  name="question_16" value="networks">networks</option>
          <option name="question_16" value= "Computer Architecture">Computer Architecture</option>
          <option name="question_16" value="data engineering">data engineering</option>
          <option name="question_16" value="hacking">hacking</option>
          <option name="question_16" value= "Management">Management</option>
          <option name="question_16" value="parallel computing ">parallel computing </option>
          </select>
          
         
       <br></br>
       <label for="question_17">Whats your Interested Books</label>
        <select name="question_17" value={formData.question_17} onChange={handleChange}>
          <option name="question_17" value=" "> </option>
          <option name="question_17" value="Guide">Guide</option>
          <option name="question_17" value="Health">Health</option>
          <option name="question_17" value="Self help">Self help</option>
          <option name="question_17" value="Horror">Horror</option>
          <option name="question_17" value="Biographies">Biographies </option>
          <option name="question_17" value= "Science fiction">Science fiction </option>
          <option name="question_17" value="Satire">Satire</option>
          <option name="question_17" value="Childrens">Childrens</option>
          <option name="question_17" value= "Autobiographies">Autobiographies</option>
          <option name="question_17" value="Prayer books">Prayer books</option>
          <option name="question_17" value="Fantasy">Fantasy</option>
          <option name="question_17" value= "Drama">Drama</option>
          <option name="question_17" value="Comics ">Comics</option>
          
        </select>
        <br></br>

      <label>Choose certification done:</label>
      <select name="question_18" value={formData.question_18} onChange={handleChange}>
        <option  name="question_18" value=" "> </option>
        <option  name="question_18" value="R Programming">R Programming</option>
        <option name="question_18" value="Information Security">Information Security</option>
        <option name="question_18" value="Shell Programming">Shell Programming</option>
        <option name="question_18" value="Machine Learning">Machine Learning</option>
        <option name="question_18" value="Full Stack">Full Stack</option>
        <option name="question_18" value="Hadoop">Hadoop</option>
        <option name="question_18" value="Python">Python</option>
        <option name="question_18" value="Distro Making">Distro Making</option>
        <option  name="question_18"value="Application Development">Application Development</option>
      </select>
      <br></br>

      <label for="question_19">Choose workshops attended</label>
        <select name="question_19" value={formData.question_19} onChange={handleChange}>
          <option  name="question_19" value=" "> </option>
          <option  name="question_19" value="Database Security">Database Security</option>
          <option name="question_19" value="System designing">System designing</option>
          <option name="question_19" value="Web Technologies">Web Technologies</option>
          <option  name="question_19" value="Hacking">Hacking</option>
          <option  name="question_19" value="Testing">Testing</option>
          <option name="question_19" value= "Data Science">Data Science</option>
          <option name="question_19" value="Game Developement">Game Developement</option>
          <option name="question_19" value="Cloud Computing">Cloud Computing</option>
         
        </select><br></br>
        
       
       
        <label for="question_20">What type of company you want to settle in?</label>
        <select name="question_20" value={formData.question_20} onChange={handleChange}>
          <option  name="question_20" value=" "> </option>
          <option  name="question_20" value="Service Based">Service Based</option>
          <option name="question_20" value="Web Services">Web Services</option>
          <option name="question_20" value="BPA">BPA</option>
          <option  name="question_20" value="Testing and Maintainance Services">Testing and Maintainance Services</option>
          <option  name="question_20" value="Product based">Product based</option>
          <option name="question_20" value= "Finance">Finance</option>
          <option name="question_20" value="Cloud Services">Cloud Services</option>
          <option name="question_20" value="product development">product developmen</option>
          <option name="question_20" value= "Sales and Marketing">Sales and Marketing</option>
          <option name="question_20" value="SAaS services">SAaS services</option> 

          </select>
          <br></br>

      

       <label>Interested career area </label>
       <select name="question_21" value={formData.question_21} onChange={handleChange}>
       <option  name="question_21" value=" "> </option>
       <option name="question_21" value="System developer">System Developer</option>
       <option name="question_21" value="Security">Security</option>
       <option name="question_21" value="Bussiness process analyst"> Bussiness process analyst</option>
       <option name="question_21" value="Developer"> Developer </option>
       <option name="question_21" value="Testing"> Testing</option>
       <option name="question_21" value="Cloud Computing"> Cloud Computing</option>
       </select>
        <br></br>

    
      

      <button className="submit-button" type="submit" >Submit</button><br></br>
      {prediction && (
        <div className="prediction-result">
          <h2>Prediction Result</h2>
          <p className="prediction-result">{prediction}</p>
        </div>
      )}
    </form>
  );
};

export default CareerForm;

