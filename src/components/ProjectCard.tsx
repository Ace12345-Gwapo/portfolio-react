// One reusable card; the variant class preserves the original bento spans.

import type { Project } from '../data/portfolio'

function ProjectCard({ project }: { project: Project }) {
  return (
    <article className={`tile ${project.variant}`}>
      {project.badge && <span className="flagship-badge">{project.badge}</span>}
      <div className="project-body">
        <h3>{project.title}</h3>
        <p>{project.description}</p>
        <div className="tech-tags">
          {project.tags.map((tag) => (
            <span key={tag} className="tech-tag">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </article>
  )
}

export default ProjectCard
