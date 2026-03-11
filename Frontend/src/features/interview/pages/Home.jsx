import React from "react";
import "../style/home.scss";

const Home = () => {
  return (
    <main className="home">
        <h1>Interview Master</h1>
      <div className="left">
        <textarea
          name="jobDescription"
          id="jobdescription"
          placeholder="Enter job Description here"
        ></textarea>
      </div>
      <div className="right">
        <div className="input-group">
          <label htmlFor="resume">Upload Resume</label>
          <input type="file" name="resume" id="resume" accept=".pdf" />
        </div>
        <div className="input-group">
          <label htmlFor="selfDescription">Self Description</label>
          <textarea
            name="selfDescription"
            id="selfDescription"
            placeholder="Describe Yourself "
          ></textarea>
        </div>
        <button className="generate-btn">Generate Interview Report</button>
      </div>
    </main>
  );
};

export default Home;
