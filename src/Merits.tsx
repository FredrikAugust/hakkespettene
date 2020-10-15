import React from "react";

import {
  SectionContainer,
  SectionTitle,
  SectionEntryContainer,
  SectionEntryTitle
} from "./Members";

import styled from "styled-components";

const nth = (n: number) =>
  ["st", "nd", "rd"][((((n + 90) % 100) - 10) % 10) - 1] || "th";

interface Merit {
  title: string;
  year: number;
  placement: number;
}

const MERITS: Array<Merit> = [
  {
    title: "Deloitte CTF Qualifier Trondheim",
    placement: 1,
    year: 2019
  },
  {
    title: "Deloitte CTF National Finale",
    placement: 1,
    year: 2019
  },
  {
    title: "Kodekampen BEKK Qualifier Trondheim",
    placement: 3,
    year: 2019
  },
  {
    title: "Deloitte CTF Qualifier Trondheim",
    placement: 2,
    year: 2020
  },
  {
    title: "Kodekampen BEKK Qualifier Trondheim",
    placement: 1,
    year: 2020
  },
  {
    title: "Bouvet Battle Royale Trondheim",
    placement: 1,
    year: 2020
  },
  {
    title: "Norwegian Cyber Security Challenge (Qualifiers, Senior -- Fredrik)",
    placement: 6,
    year: 2020
  },
  {
    title: "Deloitte CTF National Finale",
    placement: 1,
    year: 2020
  },
];

const Ranking = styled.span`
  & strong {
    font-size: 1em;
    font-weight: 800;
  }
`;

const Merit: React.FC<Merit> = props => (
  <SectionEntryContainer>
    <SectionEntryTitle>
      <strong>{props.title}</strong> {props.year}
    </SectionEntryTitle>
    <Ranking>
      <strong>
        {props.placement}
        {nth(props.placement)}
      </strong>{" "}
      place
    </Ranking>
  </SectionEntryContainer>
);

const Merits: React.FC = () => (
  <SectionContainer>
    <SectionTitle>Merits</SectionTitle>
    {MERITS.sort((a, b) => b.year - a.year).map(e => (
      <Merit key={`${e.title}-${e.year}`} {...e} />
    ))}
  </SectionContainer>
);

export default Merits;
