import React from "react";
import styled from "styled-components";

const buttonStyleContainer = styled.div`
  flex: 1;
  flexdirection: "row";
  marginhorizontal: 20;
  margintop: 5;
`;

const ArrowToNextPage = styled.a`
  width: 30%;
  background-color: brown;
  color: white;
  margin-left: 1000px;
  margin-right: 50px;
`;

const Home = () => {
  return (
    <div>
      <h1>Date: 19 June 2020</h1>
      <h1>Time: 0340hrs</h1>

      <p>Incident Report: insert Img instead.</p>

      <buttonStyleContainer>
        <ArrowToNextPage
          className="Next-Page"
          href="http://localhost:3000/about"
          target="_blank"
          rel="noopener norefferer"
        >
          Next
        </ArrowToNextPage>
      </buttonStyleContainer>
    </div>
  );
};

export default Home;
