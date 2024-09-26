import { EDUCATION } from "../Data/constants";
import { Degree } from "./Degree";
import { Section } from "./Section";

export const Education = () => {
  return (
    <Section title="Education">
      <div className="flex">
        {EDUCATION.map((education, index) => {
          return <Degree key={index} {...education}></Degree>;
        })}
      </div>
    </Section>
  );
};
