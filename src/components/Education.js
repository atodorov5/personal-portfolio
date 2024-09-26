import { EDUCATION } from "../Data/constants";
import { Degree } from "./Degree";
import { Section } from "./Section";

export const Education = () => {
  return (
    <Section title="Education">
      <div className="flex">
        {EDUCATION.map((education) => {
          return <Degree {...education}></Degree>;
        })}
      </div>
    </Section>
  );
};
