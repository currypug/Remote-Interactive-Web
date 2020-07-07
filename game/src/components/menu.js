import React from "react";
import styled from "styled-components";

import "../stylesheets/menu.css";

import ForensicButton from "../images/Forensic Button.png";
import NursingButton from "../images/Nursing Button.png";
import BodyOutline from "../images/Body outline.png";

const ButtonStyleContainer = styled.div`
  flex: 1;
  flexdirection: row;
  marginhorizontal: 20;
  margintop: 5;
  width: 40vw;
  display: inline-block;
`;

const Row = styled.div`
  flex: 1;
  flexdirection: row;
  marginhorizontal: 20;
  margintop: 5;
`;

const StudentChoice = styled.a`
  width: 30%;
  color: white;
  margin-left: 50px;
  margin-right: 50px;
`;

const Menu = () => {
  return (
    <div className="Menu">
      <header
        className="App-header"
        style={{
          backgroundImage: `url(${BodyOutline})`,
          backgroundColor: "#e2b091",
          height: "50vh",
          marginTop: "10vh",
        }}
      >
        <Row>
          <div id="GameTitle">
            <img
              src={BodyOutline}
              style={{
                position: "absolute",
                top: "12%",
                left: "12%",
                width: "30%",
                height: "62%",
                margin: "0 auto",
              }}
            ></img>
            CRIME SCENE INVESTIGATOR
          </div>
          <div
            id="instructionParagraph"
            style={{
              display: "inline-block",
              width: "40vw",
              textAlign: "center",
              fontSize: "20px",
              padding: "20px",
              backgroundColor: "#e4baa0",
            }}
          >
            <h2 id="InstructionTitle">INSTUCTIONS:</h2>
            Welcome to the Interactive Web.
            <br />
            <br />
            This experience consist of 2 components and it will take 30-40
            minutes of your time for full completion. This experience is best
            viewed at zoom setting: 67%.
            <br />
            <br />
            There will be a component where data will be collected from the page
            itself, based on your user activity. When prompted, kindly, <br />{" "}
            <br /> 1. send the data via email (Auto-Scripted) <br />
            2. send the same data personally to me on chat.
            <br />
            <br />
            Only a one-time completion of this experience is allowed.
            <br />
            You're allowed to take pictures wherever necessary as you will not
            be able to back-page unless prompted.
            <br />
            Please proceed by clicking on your respective faculty.
            <br />
            <br />
            <ButtonStyleContainer>
              <StudentChoice
                className="App-link"
                href="https://currypug.github.io/Remote-Interactive-Web/"
                target="_self"
                rel="noopener noreferrer"
              >
                <img src={ForensicButton} style={{ width: "30%" }} />
              </StudentChoice>
              <StudentChoice
                className="App-link"
                href="https://currypug.github.io/Remote-Interactive-Web/"
                target="_self"
                rel="noopener noreferrer"
              >
                <img src={NursingButton} style={{ width: "30%" }} />
              </StudentChoice>
            </ButtonStyleContainer>
          </div>
        </Row>
      </header>
    </div>
  );
};

export default Menu;
