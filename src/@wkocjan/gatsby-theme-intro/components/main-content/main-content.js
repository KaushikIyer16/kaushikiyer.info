import React from "react"
import About from "@wkocjan/gatsby-theme-intro/src/components/about/about"
import Projects from "../projects/projects"
import Skills from "../skills/skills"
import Summary from "../summary/summary"
import Tools from "../tools/tools"
import WorkHistory from "@wkocjan/gatsby-theme-intro/src/components/work-history/work-history"

const MainContent = ({ formspreeEndpoint, history, projects, profile }) => {
  return (
    <main className="lg:w-2/3 lg:pl-8 xl:pl-12">
      <Summary profile={profile} />

      <div className="flex flex-wrap">
        <div className="md pb-12 md:pr-8 lg:pr-12 xl:pr-20">
          {profile.skills && <Skills skills={profile.skills} />}
        </div>
      </div>
      {profile.tools && <Tools tools={profile.tools} />}

      {profile.about && <About about={profile.about} />}
      <Projects projects={projects} />
      <WorkHistory history={history} />
    </main>
  )
}

export default MainContent