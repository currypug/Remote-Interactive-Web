import React from "react";
import styled from "styled-components";

import "../stylesheets/menu.css";

import NextButton from "../images/Next - Arrow Button.png";
import Image from "../images/Police Officer + House.png";

const buttonStyleContainer = styled.div`
  flex: 1;
  flexdirection: "row";
  marginhorizontal: 20;
  margintop: 5;
`;

const ArrowToNextPage = styled.a`
  width: 10%;
  color: white;
  margin-left: 1000px;
  margin-right: 50px;
`;

const Home = () => {
  return (
    <div>
      <div id="#IncidentReport" style={{backgroundColor:'#626b63',width:'50vw',fontSize:'30px',padding:"30px",color:'white',marginTop:'30px'}}>
      <h1 class="#IncidentTitle" style={{color:'white'}}>INCIDENT REPORT</h1>


      <p>
        Date: 19 June 2020
        <br />
        Time: 0340hrs
        <br />
        <hr />
        <br /> A call was made by a concerned Landlord.<br />
        <br /> A young woman in her 20s, was found unconscious
and naked in her room. Her room was described as
messy. She was found after her Landlord; Mr Chee
Pek Ko had returned home after his shiftwork
        <br />
        <br /> As the first crime scene investigator to arrive at the
scene, collect and note down what is essential for the
forensic investigation and find out what happened.
      </p>
      <img src={Image} style={{position: 'absolute',top:'10%',left:'55%',width:'40%'}} />

      <buttonStyleContainer>
        <ArrowToNextPage
          className="Next-Page"
          href="/Statements"
          target="_self"
          rel="noopener norefferer"
          style={{position:'absolute',bottom:'0%',right:'0%'}}
        >
          <img src={NextButton} style={{width:'70%',float:'right'}} />
        </ArrowToNextPage>
      </buttonStyleContainer>
      </div>
    </div>
  );
};

export default Home;
