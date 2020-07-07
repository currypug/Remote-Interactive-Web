import React from "react";
import styled from "styled-components";
import LabResultsVector from "../images/Lab Results Vector.png";
import MedicalReportVector from "../images/Medical Report Vector.png";
import MedicalReportOnSarah from "../images/Medical Report on Sarah.png";
import FingerprintResultsVector from "../images/Fingerprint Results Vector.png";
import NextButton from "../images/Next - Arrow Button.png";
import "../stylesheets/imagebutton.css";

const buttonStyleContainer = styled.div`
  flex: 1;
  flexdirection: "row";
  marginhorizontal: 20;
  margintop: 5;
`;

const LabResultStatement = styled.button`
  width: 40%;
  background-color: #e4baa0;
  color: black;
  margin-left: 60px;
  margin-right: 50px;
  display: None;
  border: None;
`;

const MedicalReportStatement = styled.button`
  width: 35%;
  background-color: #e4baa0;
  color: black;
  margin-left: 50px;
  margin-right: 50px;
  display: None;
  border: None;
`;

const FingerprintResultStatement = styled.button`
  width: 35%;
  background-color: #e4baa0;
  color: black;
  margin-left: 50px;
  margin-right: 50px;
  display: None;
  border: none;
`;

const ArrowToNextPage = styled.a`
  width: 10%;
  color: white;
  margin-left: 1000px;
  margin-right: 50px;
`;

function LabResultDisplay(LabResultsInfo) {
  if (document.getElementById("LabResultStatement").style.display == "inline") {
    document.getElementById("LabResultStatement").style.display = "None";
  } else {
    document.getElementById("LabResultStatement").style.display = "inline";
  }
}

function MedicalReportDisplay(MedicalReportOnSarah) {
  if (
    document.getElementById("MedicalReportStatement").style.display == "inline"
  ) {
    document.getElementById("MedicalReportStatement").style.display = "None";
  } else {
    document.getElementById("MedicalReportStatement").style.display = "inline";
  }
}

function FingerprintResultDisplay(FingerprintResultStatement) {
  if (
    document.getElementById("FingerprintResultStatement").style.display ==
    "inline"
  ) {
    document.getElementById("FingerprintResultStatement").style.display =
      "None";
  } else {
    document.getElementById("FingerprintResultStatement").style.display =
      "inline";
  }
}

const Extra1 = () => {
  return (
    <div>
      <h1
        style={{
          paddingLeft: "30px",
          textAlign: "left",
          marginBottom: 0,
          color: "grey",
          textDecoration: "underline",
        }}
      >
        EVIDENCE ANALYSIS
      </h1>
      <p style={{ paddingLeft: "30px", fontSize: "30px" }}>
        While the victim was sent to the hospital for treatment, <br />
        evidence collection was done. Click on the respective vectors to find
        out more.
      </p>
      <div
        className="img-wrapper"
        style={({ position: "relative" }, { width: "90vw" }, { heigt: "90vh" })}
      >
        <img
          src={LabResultsVector}
          style={{ width: "33%" }}
          onClick={LabResultDisplay.bind(LabResultStatement)}
        />
        <img
          src={MedicalReportVector}
          style={{ width: "33%" }}
          onClick={MedicalReportDisplay.bind(MedicalReportOnSarah)}
        />
        <img
          src={FingerprintResultsVector}
          style={{ width: "33%" }}
          onClick={FingerprintResultDisplay.bind(FingerprintResultStatement)}
        />
      </div>

      <buttonStyleContainer>
        <LabResultStatement
          className="Click-Box"
          id="LabResultStatement"
          target="_blank"
          style={{ position: "absolute", top: "32%", width: "25%" }}
          onClick={LabResultDisplay.bind(LabResultStatement)}
        >
          <p style={{ fontSize: "20px", padding: "20px" }}>
            <h2 style={{ fontSize: "30px", marginBottom: 0 }}>
              Laboratory Analysis
            </h2>
            <hr style={{ border: "1px solid grey" }} />
            <br />
            <br /> 1. DNA_Bedsheet_Bloodstains:
            <br /> Matches of that to Sarah's DNA profile
            <br />
            <br /> 2. DNA_Bedsheet_Semen Traces:
            <br /> Matches of that to Mr Chee's DNA profile
            <br />
            <br /> 3. DNA_Rim of Opened Liquor Bottle:
            <br /> Matches of that to Sarah's DNA profile
            <br />
            <br /> 4. DNA_Tissues_Semen Traces:
            <br /> Matches of that to Mr Chee's DNA profile
            <br />
          </p>
        </LabResultStatement>

        <MedicalReportStatement
          className="Click-Box"
          id="MedicalReportStatement"
          target="_blank"
          style={{
            position: "absolute",
            top: "32%",
            left: "26.5%",
            width: "38%",
            padding: 0,
            marginBottom: "30px",
          }}
          onClick={MedicalReportDisplay.bind(MedicalReportOnSarah)}
        >
          <img
            src={MedicalReportOnSarah}
            style={{
              width: "110%",
              height: "auto",
              margin: 0,
              marginTop: "30px",
              paddingBottom: "30px",
            }}
          />
        </MedicalReportStatement>

        <FingerprintResultStatement
          className="Click-Box"
          id="FingerprintResultStatement"
          target="_blank"
          style={{
            position: "absolute",
            top: "32%",
            left: "66.5%",
            width: "27%",
          }}
          onClick={FingerprintResultDisplay.bind(FingerprintResultStatement)}
        >
          <p style={{ fontSize: "20px", padding: "20px" }}>
            <h2 style={{ fontSize: "30px", marginBottom: 0 }}>
              Fingerprint analysis
            </h2>
            <hr style={{ border: "1px solid grey" }} />
            <br />
            Several Fingerprint sets was found on the crime scene.
            <br />
            <br />
            Proceed to the second component of the Interactive Web Experience,
            by clicking the "Next" button, to analyze the fingerprints.
            <br />
            <br />
          </p>
        </FingerprintResultStatement>

        <ArrowToNextPage
          className="Next-Page"
          href="https://tinyurl.com/FS---Interactive-Web"
          target="_blank"
          rel="noopener norefferer"
          style={{ position: "absolute", bottom: "0%", right: "0%" }}
        >
          <img src={NextButton} style={{ width: "70%", float: "right" }} />
        </ArrowToNextPage>
      </buttonStyleContainer>
    </div>
  );
};

export default Extra1;
