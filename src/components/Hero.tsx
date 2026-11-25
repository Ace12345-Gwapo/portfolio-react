// Hero section with the animated avatar frame and orbiting technology badges.

import profileImage from '../assets/profile.png'
import { portfolio } from '../data/portfolio'

function Hero() {
  const { hero } = portfolio

  return (
    <section className="hero" id="home">
      <div className="wrap hero-grid">
        <div className="hero-intro">
          <span className="eyebrow-glow">{hero.eyebrow}</span>
          <h1>
            {hero.headingStart}
            <span className="glow-word">{hero.glowWord}</span>
            {hero.headingEnd}
          </h1>
          <p>{hero.description}</p>
          <div className="hero-ctas">
            <a href={hero.primaryCta.href} className="btn btn-primary">
              {hero.primaryCta.label}
            </a>
            <a href={hero.secondaryCta.href} className="btn btn-outline">
              {hero.secondaryCta.label}
            </a>
          </div>
        </div>

        <div className="hero-photo-tile">
          {hero.orbitIcons.map((icon) => (
            <span key={icon.label} className={`orbit-icon ${icon.className}`}>
              {icon.label}
            </span>
          ))}
          <div className="avatar-frame">
            <div className="avatar-inner">
              <img src={profileImage} alt="Ace F. Dumandagan" />
            </div>
          </div>
          <div className="photo-caption">{hero.caption}</div>
        </div>
      </div>
    </section>
  )
}

export default Hero
