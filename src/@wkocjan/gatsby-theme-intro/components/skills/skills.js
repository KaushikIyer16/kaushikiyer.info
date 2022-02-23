import React from "react"
import Skill from "./skill"
import { ProfileType } from "@wkocjan/gatsby-theme-intro/src/types"

const Skills = ({ skills }) => (
  <>
    <h4 className="font-header font-bold text-front text-mb uppercase mb-3">
      Top skills
    </h4>
    <ul className="flex flex-wrap grid grid-cols-5 gap-2 md:gap-4">
      {skills.map((skill, i) => (
        <Skill skill={skill} key={skill} i={i} />
      ))}
    </ul>
  </>
)

Skills.propTypes = {
  skills: ProfileType.skills,
}

export default Skills