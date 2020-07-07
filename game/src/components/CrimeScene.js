import React from "react";
import styled from "styled-components";
import floorplan from "../images/Edited Floorplan.png";
import placeholder from "../images/150.png";
import Evidence_BedlightFP from "../images/Evidence_Bedlight FP.png";
import Evidence_HeadboardFP from "../images/Headboard button.png";
import Evidence_DoorHandleFP from "../images/DoorHandle Button.png";
import Evidence_LiquorBottleFP from "../images/Liquor Bottle body button.png";

import Bloodstain from "../images/Bloodstain button.png";
import Bedlight from "../images/Bedlight Button.png";
import BedroomCondom from "../images/Bedroom unopened condom button..png";
import Shorts from "../images/Crumpled blanket button.png";
import Semen from "../images/Semen traces button.png";
import Plant from "../images/potted plant button.png";
import BottleLid from "../images/Liqour Bottle Tip button.png";
import Tissue from "../images/Tissues with Semen button.png";
import ToiletCondom from "../images/Master Room- Box condom button.png";

import NextButton from "../images/Next - Arrow Button.png";
import "../stylesheets/imagebutton.css";

var dict = {
  Clue1: "False",
  Clue2: "False",
  Clue3: "False",
  Clue4: "False",
  Clue5: "False",
  Clue6: "False",
  Clue7: "False",
  Clue8: "False",
  Clue9: "False",
  Clue10: "False",
  Clue11: "False",
  Clue12: "False",
  Clue13: "False",
};

var seconds = 0;

var start = Date.now();
setInterval(function () {
  var delta = Date.now() - start; // milliseconds elapsed since start
  seconds = Math.floor(delta / 1000);
  console.log(seconds);
}, 1000); // update about every second

const buttonStyleContainer = styled.div`
  flex: 1;
  flexdirection: "row";
  marginhorizontal: 20;
  margintop: 5;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;
//liquor bottle fp
const Popup_Image_1 = styled.img`
  position: absolute;
  top: 62%;
  left: 53%;
  transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  display: None;
  width: 10%;
`;
//headboard fp
const Popup_Image_2 = styled.img`
  position: absolute;
  top: 50%;
  left: 94%;
  transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  display: None;
  width: 10%;
`;
//bedlight
const Popup_Image_3 = styled.img`
  position: absolute;
  top: 65%;
  left: 94%;
  transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  display: None;
  width: 10%;
`;
//doorhandle fp
const Popup_Image_4 = styled.img`
  position: absolute;
  top: 86%;
  left: 70%;
  transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  display: None;
  width: 10%;
`;

//bloodstain
const Popup_Image_5 = styled.img`
  position: absolute;
  top: 50%;
  left: 110%;
  transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  display: None;
  width: 10%;
`;

//bedlight
const Popup_Image_6 = styled.img`
  position: absolute;
  top: 70%;
  left: 94%;
  transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  display: None;
  width: 10%;
`;

//bedroom condom
const Popup_Image_7 = styled.img`
  position: absolute;
  top: 30%;
  left: 94%;
  transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  display: None;
  width: 10%;
`;

//shorts
const Popup_Image_8 = styled.img`
  position: absolute;
  top: 30%;
  left: 110%;
  transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  display: None;
  width: 10%;
`;

//semen
const Popup_Image_9 = styled.img`
  position: absolute;
  top: 70%;
  left: 110%;
  transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  display: None;
  width: 10%;
`;

//plant
const Popup_Image_10 = styled.img`
  position: absolute;
  top: 30%;
  left: 61%;
  transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  display: None;
  width: 10%;
`;

//bottlelid
const Popup_Image_11 = styled.img`
  position: absolute;
  top: 30%;
  left: 50%;
  transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  display: None;
  width: 10%;
`;

//tissue
const Popup_Image_12 = styled.img`
  position: absolute;
  top: 30%;
  left: 30%;
  transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  display: None;
  width: 10%;
`;

//toilet condom
const Popup_Image_13 = styled.img`
  position: absolute;
  top: 64%;
  left: 21%;
  transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  display: None;
  width: 10%;
`;

const B_FingerprintSet_1_DoorHandle = styled.button`
  width: 4%;
  height: 5%;
  background-color: blue;
  color: white;
  margin-left: 1000;
  margin-right: 50;
  position: absolute;
  top: 63%;
  left: 68%;
  transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  background: transparent;
  border: none !important;
  font-size: 0;
`;

const B_BedsheetBloodstains = styled.button`
  width: 3%;
  height: 5%;
  background-color: red;
  color: white;
  margin-left: 1000;
  margin-right: 50;
  position: absolute;
  top: 49%;
  left: 76%;
  transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  background: transparent;
  border: none !important;
  font-size: 0;
`;

const B_BedsheetSemenTraces = styled.button`
  width: 2%;
  height: 5%;
  background-color: purple;
  color: white;
  margin-left: 1000;
  margin-right: 50;
  position: absolute;
  top: 49%;
  left: 78%;
  transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  background: transparent;
  border: none !important;
  font-size: 0;
`;

const B_ShortsFoundInBlanket = styled.button`
  width: 7%;
  height: 10.5%;
  background-color: blue;
  color: white;
  margin-left: 1000;
  margin-right: 50;
  position: absolute;
  top: 41%;
  left: 76%;
  transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  background: transparent;
  border: none !important;
  font-size: 0;
`;

const B_FingerprintSet_2_Headboard = styled.button`
  width: 2%;
  height: 10%;
  background-color: purple;
  color: white;
  margin-left: 1000;
  margin-right: 50;
  position: absolute;
  top: 49%;
  left: 87%;
  transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  background: transparent;
  border: none !important;
  font-size: 0;
`;

const B_BoyfriendUnopenedCondom = styled.button`
  width: 2.5%;
  height: 3.5%;
  background-color: grey;
  color: white;
  margin-left: 1000;
  margin-right: 50;
  position: absolute;
  top: 50%;
  left: 17.5%;
  transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  background: transparent;
  border: none !important;
  font-size: 0;
`;

const B_FingeprintSet_3_Bedlight = styled.button`
  width: 3%;
  height: 4%;
  background-color: green;
  color: white;
  margin-left: 1000;
  margin-right: 50;
  position: absolute;
  top: 61%;
  left: 74%;
  transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  background: transparent;
  border: none !important;
  font-size: 0;
`;

const L_LiquorBottle_SalivaDNA = styled.button`
  width: 1.5%;
  height: 2%;
  background-color: purple;
  color: black;
  margin-left: 1000;
  margin-right: 50;
  position: absolute;
  top: 53.5%;
  left: 45.5%;
  transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  background: transparent;
  border: none !important;
  font-size: 0;
`;

const L_FingerprintSet_4_LiquourBottle = styled.button`
  width: 2%;
  height: 2%;
  background-color: purple;
  color: black;
  margin-left: 1000;
  margin-right: 50;
  position: absolute;
  top: 53.5%;
  left: 43%;
  transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  background: transparent;
  border: none !important;
  font-size: 0;
`;

const L_FallenPottedPlant = styled.button`
  width: 6%;
  height: 7%;
  background-color: purple;
  color: black;
  margin-left: 1000;
  margin-right: 50;
  position: absolute;
  top: 48.5%;
  left: 61%;
  transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  background: transparent;
  border: none !important;
  font-size: 0;
`;

const M_TissuesWithSemen = styled.button`
  width: 3%;
  height: 5%;
  background-color: purple;
  color: black;
  margin-left: 1000;
  margin-right: 50;
  position: absolute;
  top: 57%;
  left: 28%;
  transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  background: transparent;
  border: none !important;
  font-size: 0;
`;

const M_CheekopekUnopenedCondom = styled.button`
  width: 2.5%;
  height: 5%;
  background-color: pink;
  color: black;
  margin-left: 1000;
  margin-right: 50;
  position: absolute;
  top: 40%;
  left: 70.5%;
  transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  background: transparent;
  border: none !important;
  font-size: 0;
`;

const ArrowToNextPage = styled.a`
  width: 10%;

  color: white;
  margin-left: 1000px;
  margin-right: 50px;
`;

function send(dict) {
  var subject = encodeURIComponent(
    "Data Collection - Interactive Web Phase 2 "
  );
  var name = "Friend!";
  var message = encodeURIComponent(
    "Hello " +
      name +
      "\n\nInstructions:\nPlease input your name and faculty, make sure your email address is correct before sending it.\nKindly also copy the clues {data collection thread} and send it personally via chat.\n" +
      "\nName:\nFaculty: Nursing/Forensic\n\n" +
      JSON.stringify(dict)
  );
  var link =
    "mailto:clydiatan@gmail.com?subject=" + subject + "&body=" + message;
  console.log("sending");
  console.log(dict);
  window.location.href = link;
  window.location.href = "/Evidence";
}

function bfCondom(dict) {
  if (dict["Clue1"] === "False") {
    dict["Clue1"] = seconds;
  }
  console.log(dict);
  document.getElementById("Popup_Image_13").style.display = "flex";
}

function tissue(dict) {
  if (dict["Clue2"] === "False") {
    dict["Clue2"] = seconds;
  }
  console.log(dict);
  document.getElementById("Popup_Image_12").style.display = "flex";
}

function alcoholFp(dict) {
  if (dict["Clue3"] === "False") {
    dict["Clue3"] = seconds;
  }
  console.log(dict);
  document.getElementById("Popup_Image_1").style.display = "flex";
}

function victimDNA(dict) {
  if (dict["Clue4"] === "False") {
    dict["Clue4"] = seconds;
  }
  console.log(dict);
  document.getElementById("Popup_Image_11").style.display = "flex";
}

function pottedPlant() {
  if (dict["Clue5"] === "False") {
    dict["Clue5"] = seconds;
  }
  console.log("Here");
  console.log(dict);
  document.getElementById("Popup_Image_10").style.display = "flex";
}

function doorHandleFp(dict) {
  if (dict["Clue6"] === "False") {
    dict["Clue6"] = seconds;
  }
  console.log(dict);
  document.getElementById("Popup_Image_4").style.display = "flex";
}

function ckpCondom(dict) {
  if (dict["Clue7"] === "False") {
    dict["Clue7"] = seconds;
  }
  console.log(dict);
  document.getElementById("Popup_Image_7").style.display = "flex";
}

function shorts(dict) {
  if (dict["Clue8"] === "False") {
    dict["Clue8"] = seconds;
  }
  console.log(dict);
  document.getElementById("Popup_Image_8").style.display = "flex";
}

function blood(dict) {
  if (dict["Clue9"] === "False") {
    dict["Clue9"] = seconds;
  }
  console.log(dict);
  document.getElementById("Popup_Image_5").style.display = "flex";
}

function semenTraces(dict) {
  if (dict["Clue10"] === "False") {
    dict["Clue10"] = seconds;
  }
  console.log(dict);
  document.getElementById("Popup_Image_9").style.display = "flex";
}

function bedlight(dict) {
  if (dict["Clue11"] === "False") {
    dict["Clue11"] = seconds;
  }
  console.log(dict);
  //document.getElementById("Popup_Image_3").style.display = "flex";
  document.getElementById("Popup_Image_6").style.display = "flex";
}

function headboard(dict) {
  if (dict["Clue12"] === "False") {
    dict["Clue12"] = seconds;
  }
  console.log(dict);
  document.getElementById("Popup_Image_2").style.display = "flex";
}

const Contact = () => {
  return (
    <div>
      <div
        style={{
          display: "inline-block",
          width: "14%",
          paddingLeft: "1%",
          verticalAlign: "top",
        }}
      >
        <p>
          <h1
            style={{
              textAlign: "left",
              paddingLeft: 0,
              fontSize: "44px",
              letterSpacing: "2px",
              color: "grey",
              textDecoration: "underline",
              marginBottom: 0,
            }}
          >
            CRIME SCENE
          </h1>
          <br />
          <br />
          Collect and note down evidence according to its usefulness and
          relevance.
          <br />
          <br /> Click on the evidences to collect them or to find out more.
          <br />
          <br />
          *This section has a data collection prompt. Kindly wait for email
          prompt after pressing the "Next" button and click send.
        </p>
      </div>
      <div
        className="img-wrapper"
        style={{ width: "70%", display: "inline-block", position: "relative" }}
      >
        <img
          className="img-responsive"
          src={floorplan}
          style={{ width: "100%" }}
        />
        <div className="img-overlay">
          <Popup_Image_1 src={Evidence_LiquorBottleFP} id="Popup_Image_1" />
          <Popup_Image_2 src={Evidence_HeadboardFP} id="Popup_Image_2" />
          <Popup_Image_3 src={Evidence_BedlightFP} id="Popup_Image_3" />
          <Popup_Image_4 src={Evidence_DoorHandleFP} id="Popup_Image_4" />
          <Popup_Image_5 src={Bloodstain} id="Popup_Image_5" />
          <Popup_Image_6 src={Bedlight} id="Popup_Image_6" />
          <Popup_Image_7 src={BedroomCondom} id="Popup_Image_7" />
          <Popup_Image_8 src={Shorts} id="Popup_Image_8" />
          <Popup_Image_9 src={Semen} id="Popup_Image_9" />
          <Popup_Image_10 src={Plant} id="Popup_Image_10" />
          <Popup_Image_11 src={BottleLid} id="Popup_Image_11" />
          <Popup_Image_12 src={Tissue} id="Popup_Image_12" />
          <Popup_Image_13 src={ToiletCondom} id="Popup_Image_13" />

          <B_FingerprintSet_1_DoorHandle
            className="B_FingerprintSet_1_DoorHandle"
            href="http://localhost:3000/contact"
            target="_blank"
            rel="noopener norefferer"
            onClick={doorHandleFp.bind(this, dict)}
          >
            B_FingerprintSet_1_DoorHandle
            <br /> 4 Fingerprints were found on the victim's room door handle.
          </B_FingerprintSet_1_DoorHandle>

          <B_BedsheetBloodstains
            className="B_BedsheetBloodstains"
            href="http://localhost:3000/contact"
            target="_blank"
            rel="noopener norefferer"
            onClick={blood.bind(this, dict)}
          >
            B_BedsheetBloodstains
            <br /> Suspected traces of bloodstains on bedsheet
          </B_BedsheetBloodstains>

          <B_BedsheetSemenTraces
            className=""
            href="http://localhost:3000/contact"
            target="_blank"
            rel="noopener norefferer"
            onClick={semenTraces.bind(this, dict)}
          >
            B_BedsheetSemenTraces
            <br /> Suspected traces of semen found under UV light, on the
            bedsheet.
          </B_BedsheetSemenTraces>

          <B_ShortsFoundInBlanket
            className="B_ShortsFoundInBlanket "
            href="http://localhost:3000/contact"
            target="_blank"
            rel="noopener norefferer"
            onClick={shorts.bind(this, dict)}
          >
            B_ShortsFoundInBlanket
            <br /> A small pair of small size pink short was found inside the
            blanket
          </B_ShortsFoundInBlanket>

          <B_FingerprintSet_2_Headboard
            className="B_FingerprintSet_2_Headboard"
            href="http://localhost:3000/contact"
            target="_blank"
            rel="noopener norefferer"
            onClick={headboard.bind(this, dict)}
          >
            B_FingerprintSet_2_Headboard
            <br /> A dent in the headboard cushion was noted. 4 Fingeprints were
            found behind the headboard.
          </B_FingerprintSet_2_Headboard>

          <B_BoyfriendUnopenedCondom
            className="B_BoyfriendUnopenedCondom"
            href="http://localhost:3000/contact"
            target="_blank"
            rel="noopener norefferer"
            onClick={bfCondom.bind(this, dict)}
          >
            B_BoyfriendUnopenedCondom
            <br /> An Unopened Condom. Brand: Durex
          </B_BoyfriendUnopenedCondom>

          <B_FingeprintSet_3_Bedlight
            className="B_FingeprintSet_3_Bedlight"
            href="http://localhost:3000/contact"
            target="_blank"
            rel="noopener norefferer"
            onClick={bedlight.bind(this, dict)}
          >
            B_FingeprintSet_3_Bedlight
            <br /> 3 fingerprints were found on the sides of the bedlight.
          </B_FingeprintSet_3_Bedlight>

          <L_LiquorBottle_SalivaDNA
            className="L_LiquorBottle_SalivaDNA"
            href="http://localhost:3000/contact"
            target="_blank"
            rel="noopener norefferer"
            onClick={victimDNA.bind(this, dict)}
          >
            L_LiquorBottle_SalivaDNA
            <br /> Opened Liquor Bottle. Cap is missing. A small amount of
            residual liquid is noted.
          </L_LiquorBottle_SalivaDNA>
          <br />
          <L_FingerprintSet_4_LiquourBottle
            className="L_FingerprintSet_4_LiquourBottle"
            href="http://localhost:3000/contact"
            target="_blank"
            rel="noopener norefferer"
            onClick={alcoholFp.bind(this, dict)}
          >
            L_FingerprintSet_4_LiquourBottle
            <br /> 6 individual prints found on the body and neck of the liquor
            bottle.
          </L_FingerprintSet_4_LiquourBottle>

          <L_FallenPottedPlant
            className="L_FallenPottedPlant"
            href="http://localhost:3000/contact"
            target="_blank"
            rel="noopener norefferer"
            onClick={pottedPlant.bind(this, dict)}
          >
            L_FallenPottedPlant
            <br /> Just a potted plant...
          </L_FallenPottedPlant>

          <M_TissuesWithSemen
            className="M_TissuesWithSemen"
            href="http://localhost:3000/contact"
            target="_blank"
            rel="noopener norefferer"
            onClick={tissue.bind(this, dict)}
          >
            M_TissuesWithSemen
            <br /> Crumpled tissues found in empty dustbin. UV light reveals
            possible semen traces on tissues.
          </M_TissuesWithSemen>

          <M_CheekopekUnopenedCondom
            className="M_CheekopekUnopenedCondom "
            href="http://localhost:3000/contact"
            target="_blank"
            rel="noopener norefferer"
            onClick={ckpCondom.bind(this, dict)}
          >
            M_CheekopekUnopenedCondom
            <br />A box of condom was found. Brand: Trojan
          </M_CheekopekUnopenedCondom>
        </div>
      </div>

      <buttonStyleContainer>
        <ArrowToNextPage
          className="Next-Page"
          href="https://currypug.github.io/Remote-Interactive-Web/#/Evidence"
          target="_self"
          rel="noopener norefferer"
          onClick={send.bind(this, dict)}
          style={{ position: "absolute", bottom: "0%", right: "0%" }}
        >
          <img src={NextButton} style={{ width: "70%", float: "right" }} />
        </ArrowToNextPage>
      </buttonStyleContainer>
    </div>
  );
};
export { dict };
export default Contact;
