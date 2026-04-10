import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { Menu, X, Code2, GraduationCap } from 'lucide-react'

const navLinks = [
  { to: '/', label: 'Inicio', end: true },
  { to: '/vscode', label: 'VS Code' },
  { to: '/mac-app', label: 'Mac App' },
  { to: '/terminal', label: 'Terminal' },
  { to: '/comandos', label: 'Comandos' },
  { to: '/faq', label: 'FAQ' },
]

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-claude-bg/95 backdrop-blur border-b border-claude-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <NavLink to="/" className="flex items-center gap-3 flex-shrink-0">
            <div className="w-9 h-9 rounded-full bg-claude-orange/20 border border-claude-orange/50 flex items-center justify-center">
              <span className="text-claude-orange font-bold text-sm">CC</span>
            </div>
            <span className="font-semibold text-claude-warm text-lg hidden sm:block">Claude Code</span>
          </NavLink>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                end={link.end}
                className={({ isActive }) =>
                  `px-3 py-2 rounded-lg text-sm font-medium transition-all duration-150 ${
                    isActive
                      ? 'text-claude-orange bg-claude-orange/10'
                      : 'text-claude-muted hover:text-claude-warm hover:bg-claude-card'
                  }`
                }
              >
                {link.label}
              </NavLink>
            ))}
          </nav>

          {/* IES Badge + Mobile button */}
          <div className="flex items-center gap-3">
            <div className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 bg-claude-card border border-claude-border rounded-full">
              <GraduationCap className="w-3.5 h-3.5 text-claude-orange" />
              <span className="text-xs text-claude-muted font-medium">IES Doctor Balmis</span>
            </div>
            <button
              className="md:hidden p-2 rounded-lg text-claude-muted hover:text-claude-warm hover:bg-claude-card transition-all"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Abrir menú"
            >
              {menuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden border-t border-claude-border bg-claude-bg">
          <nav className="px-4 py-3 flex flex-col gap-1">
            {navLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                end={link.end}
                onClick={() => setMenuOpen(false)}
                className={({ isActive }) =>
                  `px-4 py-2.5 rounded-xl text-sm font-medium transition-all duration-150 ${
                    isActive
                      ? 'text-claude-orange bg-claude-orange/10'
                      : 'text-claude-muted hover:text-claude-warm hover:bg-claude-card'
                  }`
                }
              >
                {link.label}
              </NavLink>
            ))}
            <div className="flex items-center gap-1.5 px-4 py-2 mt-2 border-t border-claude-border">
              <GraduationCap className="w-3.5 h-3.5 text-claude-orange" />
              <span className="text-xs text-claude-muted font-medium">IES Doctor Balmis · Alicante</span>
            </div>
          </nav>
        </div>
      )}
    </header>
  )
}
