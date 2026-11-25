// Skill pills sized by how often each technology is used.

import { portfolio } from '../data/portfolio'

function Technologies() {
  const { technologies } = portfolio

  return (
    <section id="skills">
      <div className="wrap">
        <div className="tile skills-tile">
          <div className="head-row">
            <span className="tag-mark tag-violet" />
            <h2>{technologies.title}</h2>
          </div>
          <p className="lede lede-flush">{technologies.lede}</p>
          <div className="pill-cloud">
            {technologies.pills.map((pill) => (
              <span key={pill.label} className={`pill ${pill.size}`}>
                {pill.label}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Technologies
