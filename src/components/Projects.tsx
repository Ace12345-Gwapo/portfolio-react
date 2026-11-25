// Projects section: renders the portfolio data through ProjectCard.

import { portfolio } from '../data/portfolio'
import ProjectCard from './ProjectCard'

function Projects() {
  const { projects } = portfolio

  return (
    <section id="projects">
      <div className="wrap">
        <div className="head-row">
          <span className="tag-mark tag-cyan" />
          <h2>{projects.title}</h2>
        </div>
        <p className="lede">{projects.lede}</p>

        <div className="project-grid">
          {projects.items.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
