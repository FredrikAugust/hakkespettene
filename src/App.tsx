import React from "react";

import Members from "./Members";

import styled from "styled-components";
import Merits from "./Merits";

const TeamName = styled.h1`
  font-size: 4em;
`;

const TeamDescription = styled.p`
  font-size: 2em;
`;

const MainContainer = styled.div`
  font-family: "SF Mono";
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 4em 1em;
`;

const App: React.FC = props => (
  <MainContainer>
    <TeamName>Hakkespettene</TeamName>
    <TeamDescription>
      A CTF and Hackathon team based in Trondheim, Norway.
    </TeamDescription>
    <Members />
    <Merits />
  </MainContainer>
);

export default App;
