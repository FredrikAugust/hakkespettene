import React from "react";

import styled from "styled-components";

export const SectionTitle = styled.h2`
  font-size: 3em;
  font-weight: lighter;
`;

export const SectionContainer = styled.div`
  margin-top: 2em;
`;

interface Member {
  firstName: string;
  lastName: string;
  skills: Array<string>;
  email: string;
}

const MEMBERS: Array<Member> = [
  {
    firstName: "Fredrik August",
    lastName: "Madsen-Malmo",
    skills: ["reverse engineering", "web", "crypto"],
    email: "fredrik.malmo@icloud.com"
  },
  {
    firstName: "Tor",
    lastName: "Berre",
    skills: ["web", "leadership", "problem solving"],
    email: ""
  },
  {
    firstName: "Erik",
    lastName: "Skår",
    skills: ["steganography"],
    email: ""
  },
  {
    firstName: "Jonathan",
    lastName: "Brooks",
    skills: ["crypto", "problem solving", "finance"],
    email: ""
  },
  {
    firstName: "Petter Charles",
    lastName: "Redfern",
    skills: ["algorithms", "mathematics"],
    email: ""
  }
];

export const SectionEntryContainer = styled.div`
  padding: 1em 0;
`;

export const SectionEntryTitle = styled.h3`
  & strong {
    font-weight: 800;
    font-size: 1.25em;
  }

  font-weight: 200;
`;

const Member: React.FC<Member> = props => (
  <SectionEntryContainer>
    <SectionEntryTitle>
      <strong>{props.firstName}</strong> {props.lastName}
    </SectionEntryTitle>
    <div>Skills: {props.skills.join(", ")}</div>
    <a href={`mailto:${props.email}`}>{props.email}</a>
  </SectionEntryContainer>
);

const Members: React.FC = () => (
  <SectionContainer>
    <SectionTitle>Members</SectionTitle>
    {MEMBERS.map(e => (
      <Member key={`${e.firstName} ${e.lastName}`} {...e} />
    ))}
  </SectionContainer>
);

export default Members;
