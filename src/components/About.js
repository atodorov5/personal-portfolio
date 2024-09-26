import { ABOUTINFO } from "../Data/constants";
import profilepic from "../images/avatar-.png";
import { Section } from "./Section";

export const About = () => {
  return (
    <Section>
      <img className="w-48" src={profilepic} alt="prifile-pic" />
      <p className="text-4xl">Atanas Todorov</p>
      <p className="w-3/5 text-center">{ABOUTINFO}</p>
    </Section>
  );
};
