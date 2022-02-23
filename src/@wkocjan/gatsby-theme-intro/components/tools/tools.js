import React from "react"
import { ProfileType } from "@wkocjan/gatsby-theme-intro/src/types"

const Tools = ({ tools }) => (
  <>
    <h4 className="font-header font-bold text-front text-md uppercase mb-3">
      Main tools
    </h4>
    <ul className="flex-col mt-2">
      {tools.map(tool => (
        <li className="inline-block mb-1 mr-1" key={tool}>
          <span className="inline-block subpixel-antialiased bg-lead px-3 py-1 font-header font-light text-md text-lead-text">
            {tool}
          </span>
        </li>
      ))}
    </ul>
  </>
)

Tools.propTypes = {
  tools: ProfileType.tools,
}

export default Tools