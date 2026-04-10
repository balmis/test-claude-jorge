import { Link } from 'react-router-dom'
import { GraduationCap, Heart, ExternalLink } from 'lucide-react'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-claude-border bg-claude-card mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-9 h-9 rounded-full bg-claude-orange/20 border border-claude-orange/50 flex items-center justify-center">
                <span className="text-claude-orange font-bold text-sm">CC</span>
              </div>
              <span className="font-semibold text-claude-warm text-lg">Claude Code</span>
            </div>
            <p className="text-claude-muted text-sm leading-relaxed">
              Guía educativa para aprender a usar Claude Code en el aula y en proyectos de desarrollo.
            </p>
            <div className="flex items-center gap-2 mt-4 px-3 py-2 bg-claude-bg border border-claude-border rounded-xl w-fit">
              <GraduationCap className="w-4 h-4 text-claude-orange" />
              <span className="text-xs text-claude-muted font-medium">IES Doctor Balmis · Alicante</span>
            </div>
          </div>

          {/* Guías */}
          <div>
            <h4 className="text-claude-warm font-semibold text-sm mb-4">Guías</h4>
            <ul className="space-y-2.5">
              <li>
                <Link to="/vscode" className="text-claude-muted hover:text-claude-orange text-sm transition-colors">
                  Extensión VS Code
                </Link>
              </li>
              <li>
                <Link to="/mac-app" className="text-claude-muted hover:text-claude-orange text-sm transition-colors">
                  App Claude para Mac
                </Link>
              </li>
              <li>
                <Link to="/terminal" className="text-claude-muted hover:text-claude-orange text-sm transition-colors">
                  Terminal / CLI
                </Link>
              </li>
              <li>
                <Link to="/comandos" className="text-claude-muted hover:text-claude-orange text-sm transition-colors">
                  Cheatsheet de Comandos
                </Link>
              </li>
            </ul>
          </div>

          {/* Recursos */}
          <div>
            <h4 className="text-claude-warm font-semibold text-sm mb-4">Recursos</h4>
            <ul className="space-y-2.5">
              <li>
                <a
                  href="https://claude.ai"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-claude-muted hover:text-claude-orange text-sm transition-colors inline-flex items-center gap-1"
                >
                  Claude.ai <ExternalLink className="w-3 h-3" />
                </a>
              </li>
              <li>
                <a
                  href="https://docs.anthropic.com/en/docs/claude-code/overview"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-claude-muted hover:text-claude-orange text-sm transition-colors inline-flex items-center gap-1"
                >
                  Documentación oficial <ExternalLink className="w-3 h-3" />
                </a>
              </li>
              <li>
                <a
                  href="https://marketplace.visualstudio.com/items?itemName=anthropic.claude-vscode"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-claude-muted hover:text-claude-orange text-sm transition-colors inline-flex items-center gap-1"
                >
                  Extensión VS Code <ExternalLink className="w-3 h-3" />
                </a>
              </li>
            </ul>
          </div>

          {/* Sobre el proyecto */}
          <div>
            <h4 className="text-claude-warm font-semibold text-sm mb-4">Sobre el proyecto</h4>
            <ul className="space-y-2.5">
              <li>
                <Link to="/faq" className="text-claude-muted hover:text-claude-orange text-sm transition-colors">
                  Preguntas Frecuentes
                </Link>
              </li>
              <li>
                <Link to="/" className="text-claude-muted hover:text-claude-orange text-sm transition-colors">
                  Para estudiantes
                </Link>
              </li>
              <li>
                <Link to="/" className="text-claude-muted hover:text-claude-orange text-sm transition-colors">
                  Para profesores
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-10 pt-6 border-t border-claude-border flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-claude-subtle text-xs">
            © {year} IES Doctor Balmis · Alicante. Recurso educativo sin fines comerciales.
          </p>
          <p className="text-claude-subtle text-xs flex items-center gap-1.5">
            Hecho con <Heart className="w-3 h-3 text-claude-orange fill-claude-orange" /> usando Claude Code
          </p>
        </div>
      </div>
    </footer>
  )
}
