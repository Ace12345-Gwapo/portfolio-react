// Sticky navigation: local section anchors, a Projects dropdown, and a mobile menu.

import { useEffect, useRef, useState } from 'react'
import type { NavLink } from '../data/portfolio'
import { portfolio } from '../data/portfolio'

function NavAnchor({ link, onNavigate }: { link: NavLink; onNavigate: () => void }) {
  return (
    <a href={link.href} onClick={onNavigate}>
      {link.label}
    </a>
  )
}

function Navbar() {
  const { navbar } = portfolio
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)
  const [isMobileOpen, setIsMobileOpen] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)

  // Both menus close together so mobile users never see overlapping panels.
  const closeMenus = () => {
    setIsDropdownOpen(false)
    setIsMobileOpen(false)
  }

  // Close the dropdown on outside click or Escape, matching the original script.
  useEffect(() => {
    if (!isDropdownOpen) return

    const closeOnOutsideClick = (event: PointerEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsDropdownOpen(false)
      }
    }
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setIsDropdownOpen(false)
    }

    document.addEventListener('pointerdown', closeOnOutsideClick)
    document.addEventListener('keydown', closeOnEscape)
    return () => {
      document.removeEventListener('pointerdown', closeOnOutsideClick)
      document.removeEventListener('keydown', closeOnEscape)
    }
  }, [isDropdownOpen])

  // Escape also closes the mobile panel.
  useEffect(() => {
    if (!isMobileOpen) return

    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setIsMobileOpen(false)
    }

    document.addEventListener('keydown', closeOnEscape)
    return () => document.removeEventListener('keydown', closeOnEscape)
  }, [isMobileOpen])

  return (
    <header>
      <div className="wrap">
        <nav>
          <a className="logo" href="#home" onClick={closeMenus}>
            <span className="logo-mark">AFD</span> Ace F. Dumandagan
          </a>

          <button
            type="button"
            className={`menu-toggle ${isMobileOpen ? 'open' : ''}`}
            aria-label={isMobileOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={isMobileOpen}
            aria-controls="primary-navigation"
            onClick={() => setIsMobileOpen((open) => !open)}
          >
            <span />
            <span />
            <span />
          </button>

          <div id="primary-navigation" className={`nav-links ${isMobileOpen ? 'show' : ''}`}>
            {navbar.primaryLinks.map((link) => (
              <NavAnchor key={link.label} link={link} onNavigate={closeMenus} />
            ))}

            <div className="nav-dropdown" ref={dropdownRef}>
              <button
                type="button"
                className={`dropdown-btn ${isDropdownOpen ? 'open' : ''}`}
                aria-haspopup="true"
                aria-expanded={isDropdownOpen}
                aria-controls="projects-menu"
                onClick={() => setIsDropdownOpen((open) => !open)}
              >
                {navbar.dropdownLabel} <span className="arrow">▼</span>
              </button>
              <ul id="projects-menu" className={`dropdown-menu ${isDropdownOpen ? 'show' : ''}`}>
                {navbar.dropdownLinks.map((link) => (
                  <li key={link.label}>
                    <a href={link.href} onClick={closeMenus}>
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {navbar.secondaryLinks.map((link) => (
              <NavAnchor key={link.label} link={link} onNavigate={closeMenus} />
            ))}

            <a href="#contact" className="btn btn-primary mobile-cta" onClick={closeMenus}>
              {navbar.ctaLabel}
            </a>
          </div>

          <a href="#contact" className="btn btn-primary nav-cta" onClick={closeMenus}>
            {navbar.ctaLabel}
          </a>
        </nav>
      </div>
    </header>
  )
}

export default Navbar
