// Bento grid describing the four kinds of work Ace builds.

import { portfolio } from '../data/portfolio'

function WhatIBuild() {
  const { build } = portfolio

  return (
    <section id="build">
      <div className="wrap">
        <div className="head-row">
          <span className="tag-mark tag-pink" />
          <h2>{build.title}</h2>
        </div>
        <p className="lede">{build.lede}</p>

        <div className="build-grid">
          {build.items.map((item) => (
            <article key={item.title} className={`tile ${item.className}`}>
              <span className={`swatch swatch-${item.accent}`} />
              <h3>{item.title}</h3>
              <p className={item.mutedOnDark ? 'muted-on-dark' : undefined}>{item.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default WhatIBuild
