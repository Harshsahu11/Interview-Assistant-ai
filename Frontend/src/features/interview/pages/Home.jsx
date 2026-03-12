import React , {useState,useRef } from "react";
import "../style/home.scss";
import { useInterview } from "../hooks/useInterview";
import { useNavigate } from "react-router";

const Home = () => {
  const { loading, generateReport } = useInterview();
  const [jobDescription,setJobDescription] = useState("");
  const [selfDescription,setSelfDescription] = useState("");
  const resumeInputRef = useRef();

  const navigate = useNavigate();

  const handleGenerateReport = async ()=>{
    e.preventDefault();

    const resumeFile = resumeInputRef.current.files[0];
    const data = await generateReport({jobDescription,selfDescription,resumeFile});

    navigate(`/interview/${data._id}`);



  }

  return (
    <main className="home">
      <h1>Interview Master</h1>
      <div className="left">
        <textarea
          onChange={(e)=>{setJobDescription(e.target.value)}}
          name="jobDescription"
          id="jobdescription"
          placeholder="Enter job Description here"
        ></textarea>
      </div>
      <div className="right">
        <div className="input-group">
          <label htmlFor="resume">Upload Resume</label>
          <input ref={resumeInputRef} type="file" name="resume" id="resume" accept=".pdf" />
        </div>
        <div className="input-group">
          <label htmlFor="selfDescription">Self Description</label>
          <textarea
            onChange={(e)=>{setSelfDescription(e.target.value)}}
            name="selfDescription"
            id="selfDescription"
            placeholder="Describe Yourself "
          ></textarea>
        </div>
        <button 
        onClick={handleGenerateReport}
        className="generate-btn">Generate Interview Report</button>
      </div>
    </main>
  );
};

export default Home;
