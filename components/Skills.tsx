import { GiSkills } from "react-icons/gi";
import Title from "./Title";
import SkillsInput from "./SkillsInput";

const Skills = () => {
  return (
    <div className="wrapper">
      <Title text="Skills" icon={<GiSkills />} />
      <div className="flex gap-4 flex-wrap">
        <SkillsInput
          title="Javascript"
          link="https://developer.mozilla.org/en-US/docs/Web/JavaScript"
        />
        <SkillsInput title="Reactjs" link="https://react.dev/" />
        
        <SkillsInput title="Bootstrap 5" link="https://www.w3schools.com/bootstrap/bootstrap_ver.asp" />
        
        <SkillsInput title="Tailwindcss" link="https://tailwindcss.com/" />
        <SkillsInput
          title="HTML5"
          link="https://developer.mozilla.org/en-US/docs/Glossary/HTML5"
        />
        <SkillsInput
          title="CSS3"
          link="https://developer.mozilla.org/en-US/docs/Web/CSS"
        />
        <SkillsInput title="Git" link="https://git-scm.com/" />
        <SkillsInput title="Django" link="https://git-scm.com/" />
        <SkillsInput title="Django Rest Framework" link="https://git-scm.com/" />
        <SkillsInput title="SQL" link="https://github.com/" />
        <SkillsInput title="Postgresql" link="https://github.com/" />
        <SkillsInput title="Github" link="https://github.com/" />
        <SkillsInput title="Filmora X" link="https://trello.com/en" />
        <SkillsInput title="netlify" link="https://www.netlify.com/" />
      </div>
    </div>
  );
};

export default Skills;
