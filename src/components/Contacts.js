import { Button } from "./Button";
import { Section } from "./Section";
import { ReactComponent as EmailIcon } from "../images/EmailIcon.svg";
import { ReactComponent as LinkedInIcon } from "../images/LinkedInIcon.svg";
import { ReactComponent as GitHubIcon } from "../images/GitHubIcon.svg";

export const Contacts = () => {
  return (
    <Section title="Contacts">
      <div className="flex">
        <Button
          text="Email"
          icon={<EmailIcon />}
          url="mailto:atodorov98@gmail.com"
        ></Button>
        <Button
          text="Github"
          icon={<GitHubIcon />}
          url="https://github.com/atodorov5"
        ></Button>
        <Button
          text="LinkedIn"
          icon={<LinkedInIcon />}
          url="https://www.linkedin.com/in/atanast"
        ></Button>
      </div>
    </Section>
  );
};
