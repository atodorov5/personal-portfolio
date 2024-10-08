import { Section } from "./Section";
import { SKILLS } from "../Data/constants";
import { Badge } from "./Badge";

export const Skills = () => {
  return (
    <Section title="Skills">
      <div className="flex m-8 flex-wrap justify-center">
        {SKILLS.map((skill, index) => {
          return <Badge key={index} text={skill}></Badge>;
        })}
      </div>
    </Section>
  );
};
