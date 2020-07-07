import React from "react";
import styled from "styled-components";
import LandlordVector from "../images/Landlord Vector.png";
import BoyfriendVector from "../images/Boyfriend Vector.png";
import NextButton from "../images/Next - Arrow Button.png"

import "../stylesheets/imagebutton.css";


const buttonStyleContainer = styled.div`
  flex: 1;
  flexdirection: row;
  display: flex;
  marginhorizontal: 20;
  margintop: 5;
  width: 99vw;
`;

const LandlordStatement = styled.button`
  width: 40%;
  background-color: pink;
  color: black;
  margin-left: 60px;
  margin-right: 50px;
  display: None;
`;

const BoyfriendStatement = styled.button`
  width: 45%;
  background-color: orange;
  color: black;
  margin-left: 50px;
  margin-right: 50px;
  display: None;
`;

const ArrowToNextPage = styled.a`
  width: 10%;
  color: white;
  margin-left: 1000px;
  margin-right: 50px;
`;

function LandlordDisplay() {
  if (document.getElementById("LandlordStatement").style.display == "inline") {
    document.getElementById("LandlordStatement").style.display = "None";
  } else {
    document.getElementById("LandlordStatement").style.display = "inline";
  }
}

function BoyfriendDisplay() {
  if (document.getElementById("BoyfriendStatement").style.display == "inline") {
    document.getElementById("BoyfriendStatement").style.display = "none";
  } else {
    document.getElementById("BoyfriendStatement").style.display = "inline";
  }
}

const About = () => {
  return (
    <>
    <div style={{ padding: "30px" }}>
      <h1
        style={{
          color: "grey",
          textDecoration: "underline",
          textAlign: "left",
          marginBottom: 0,
        }}
      >
        SUSPECTS STATEMENT
      </h1>
      <p style={{ fontSize: "30px" }}>
        An initial investigation was done, two suspects were narrowed down.
      </p>
      <p style={{ fontSize: "30px" }}>
        {" "}
        Click on the each suspect to find out more.{" "}
      </p>
      <div
        className="img-wrapper"
        style={({ position: "relative" }, { width: "90vw" }, { heigt: "90vh" })}
      >
        <img
          src={BoyfriendVector}
          style={{ width: "40%", marginRight: "5%", marginLeft: "5%" }}
          onClick={BoyfriendDisplay.bind(this, BoyfriendStatement)}
        />
        <img
          src={LandlordVector}
          style={{ width: "40%", marginRight: "5%", marginLeft: "5%" }}
          onClick={LandlordDisplay.bind(this, LandlordStatement)}
        />
      </div>
      <buttonStyleContainer>
        <BoyfriendStatement
          className="Click-Box"
          id="BoyfriendStatement"
          target="_blank"
          onClick={BoyfriendDisplay.bind(this, BoyfriendStatement)}
          style={{ position: "absolute", top: "35%", width: "40%"}}
        >
          <p style={{ fontSize: "18px", padding: "30px" }}>
            <img src={BoyfriendVector} style={{ width: "30%" }} />
            <h2 style={{ fontSize: "28px", margin: 0 }}>APPEARANCE</h2>
            <br /> Marcus is neatly groomed young man with a black long sleeve
            and pants.
            <br /> He seems to be in a visible distress upon the news of Sarah.
            <br /> During an interrogation, he seems to be nervous and shifty,
            constantly tapping his legs. A bandage was noted over his left arm
            during the session. When asked, he seems to be a little more
            anxious, physically reaching over to cover the bandage. After
            lamenting for awhile, he had verbalized he owns a cat and it has
            scratched him 2 days prior.
            <br />
            <br />
            <br />
            <h2 style={{ fontSize: "28px", margin: 0 }}>
              STATEMENT FROM MARCUS
            </h2>
            <br /> It was our first anniversary yesterday so we were together
            the whole day. I had prepared a huge surprise for Sarah and it was
            successful. We had a good time together, drinking to celebrate.
            Sarah was a little tipsy but she had wanted to continue for a second
            round at her place. Hence, we had bought several beer bottles and
            headed back to her place just before midnight.
            <br />
            <br /> As a pre-arranged agreement, we were to have consexual sex in
            celebration of our relationship milestone. But Sarah had denied the
            arrangement and feigned ignorance to the agreement.
            <br /> I'm not going to deny, I was angry. We did have an argument,
            but it was not because I was angry about sex. It was because she had
            denied the existence of the conversation even knowing it was
            important to me. I did not want to further escalate the situation,
            so I left her apartment and went home. I have not seen her since
            then.
            <br />
            <br />
          </p>
        </BoyfriendStatement>

        <LandlordStatement
          className="Click-Box"
          id="LandlordStatement"
          target="_blank"
          style={{
            position: "absolute",
            left: "50%",
            top: "35%",
            width: "40%",
            marginBottom:'10%'
          }}
          onClick={LandlordDisplay.bind(this, LandlordStatement)}
        >
          <p style={{ fontSize: "18px", padding: "30px" }}>
            <img src={LandlordVector} style={{ width: "30%" }} />
            <h2 style={{ fontSize: "28px", margin: 0 }}>APPEARANCE</h2>
            <br /> Mr Chee is well-kept man with a collar shirt and a cargo
            shorts.
            <br /> He appeared forlorn and a little nervous when approached. He
            has identified himself as the person whom has called the police and
            was able to recount the incident in details.
            <br />
            <br />
            <br />
            <h2 style={{ fontSize: "28px", margin: 0 }}>
              STATEMENT FROM MR CHEE PEK KO
            </h2>
            <br /> This apartment belongs to me. As I am the only one staying in
            the apartment ever since my wife had passed on, I had rented out the
            spare room to Sarah (the Victim). She has been my tenant for the 8
            months. I have seen Sarah's boyfriend a few times; whenever he
            fetches Sarah back. I don't usually communicate much with Sarah
            unless it involves the house because I work late nights and she
            usually goes out in the day.
            <br />
            <br /> I was working my usual night shift till 12 Midnight and I had
            only reached home this early morning at around 3AM. When I had
            entered the house, I found the living room to be in a mess with
            multiple liquour bottles on the table. Sarah's room was left ajar.
            Afraid that a burglar had broken in, I knocked on her room and there
            was no response. Since I was worried, I went in and found her room
            ransacked and her, passed out on her bed naked. I immediately called
            the police after checking that she was still alive.
            <br />
            <br />
          </p>
        </LandlordStatement>
        </buttonStyleContainer>

    </div>
    <ArrowToNextPage
          className="Next-Page"
          href="/CrimeScene"
          target="_self"
          rel="noopener norefferer"
          style={{alignItems:'flex-start'}}
        >
          <img src={NextButton} style={{position:'-webkit-sticky',position:'absolute',bottom:'-35%',alignSelf:'flex-end',width:"8%",marginTop:"7%",marginLeft:'36.5%'}} />
        </ArrowToNextPage>

      </>
  );
};

export default About;
