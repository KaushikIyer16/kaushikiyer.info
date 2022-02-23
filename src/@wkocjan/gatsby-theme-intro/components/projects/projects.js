import React from "react"
import Project from "@wkocjan/gatsby-theme-intro/src/components/projects/project"
import { arrayOf, shape, ProjectType } from "@wkocjan/gatsby-theme-intro/src/types"

const Projects = ({ projects }) => (
  <>
    <h4 className="font-header font-bold text-front text-md uppercase mb-3 mt-3">
      Projects
    </h4>
    {projects.map((project, i) => (
      <Project key={`${project.name}_${i}`} {...project} />
    ))}
  </>
)

Projects.propTypes = {
  projects: arrayOf(shape(ProjectType)),
}

export default Projects