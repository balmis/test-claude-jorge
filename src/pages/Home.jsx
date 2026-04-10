import { Link } from 'react-router-dom'
import {
  ArrowRight,
  Terminal,
  Code2,
  Monitor,
  Zap,
  BookOpen,
  Users,
  GraduationCap,
  CheckCircle2,
  Sparkles,
  Cpu,
  Globe,
} from 'lucide-react'

const formas = [
  {
    to: '/vscode',
    icon: Code2,
    title: 'Extensión VS Code',
    badge: 'Recomendado',
    badgeColor: 'bg-green-500/15 text-green-400 border border-green-500/30',
    description:
      'Integra Claude Code directamente en tu editor favorito. Chat en línea, autocompletado inteligente y refactorización sin salir de VS Code.',
    features: ['Chat integrado', 'Autocompletado IA', 'Explicación de código'],
  },
  {
    to: '/mac-app',
    icon: Monitor,
    title: 'App Claude para Mac',
    badge: 'Solo Mac',
    badgeColor: 'bg-blue-500/15 text-blue-400 border border-blue-500/30',
    description:
      'Usa la aplicación nativa de Claude para Mac con acceso a Claude Code. Interfaz cómoda y acceso rápido desde la barra de menú.',
    features: ['App nativa Mac', 'Interfaz visual', 'Sesiones locales'],
  },
  {
    to: '/terminal',
    icon: Terminal,
    title: 'Terminal / CLI',
    badge: 'Todos los sistemas',
    badgeColor: 'bg-claude-orange/15 text-claude-orange border border-claude-orange/30',
    description:
      'Instala Claude Code como herramienta de línea de comandos. Disponible en Mac, Linux y Windows. Ideal para flujos de trabajo avanzados.',
    features: ['Multi-plataforma', 'Scripting', 'Integración CI/CD'],
  },
]

const beneficios = [
  {
    icon: Zap,
    title: 'Productividad inmediata',
    description: 'Acelera tu flujo de trabajo con sugerencias de código inteligentes y generación automática.',
  },
  {
    icon: BookOpen,
    title: 'Aprende mientras programas',
    description: 'Pide explicaciones del código, entiende errores y descubre mejores patrones de diseño.',
  },
  {
    icon: Cpu,
    title: 'IA de última generación',
    description: 'Basado en Claude 3.5 y Claude 4, los modelos de lenguaje más avanzados de Anthropic.',
  },
]

const requisitos = [
  'Cuenta en claude.ai (gratuita o de pago)',
  'VS Code, Terminal o Mac (según la forma elegida)',
  'Node.js 18+ (solo para instalación CLI)',
  'Conexión a internet',
  'Ganas de aprender',
]

export default function Home() {
  return (
    <div>
      {/* Hero */}
      <section className="relative overflow-hidden px-4 sm:px-6 lg:px-8 pt-20 pb-24">
        {/* Glow background */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-claude-orange/5 rounded-full blur-3xl" />
        </div>

        <div className="max-w-4xl mx-auto text-center relative">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-claude-card border border-claude-border rounded-full text-sm text-claude-muted mb-8">
            <GraduationCap className="w-4 h-4 text-claude-orange" />
            <span>IES Doctor Balmis · Ciclos Formativos de Desarrollo</span>
          </div>

          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold leading-tight mb-6">
            <span className="text-claude-warm">Aprende</span>{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-claude-orange to-claude-orangeLight">
              Claude Code
            </span>
          </h1>

          <p className="text-xl text-claude-muted max-w-2xl mx-auto mb-10 leading-relaxed">
            Tu asistente de programación con inteligencia artificial. Escribe mejor código, entiende proyectos complejos
            y aprende más rápido — todo desde tu entorno de desarrollo habitual.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link to="/vscode" className="btn-primary text-base">
              Empezar con VS Code <ArrowRight className="w-5 h-5" />
            </Link>
            <Link to="/terminal" className="btn-secondary text-base">
              Instalar en Terminal
            </Link>
          </div>
        </div>
      </section>

      {/* ¿Qué es Claude Code? */}
      <section className="px-4 sm:px-6 lg:px-8 py-20 max-w-7xl mx-auto">
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 mb-4">
            <Sparkles className="w-5 h-5 text-claude-orange" />
            <span className="text-claude-orange font-semibold text-sm uppercase tracking-wider">Qué es</span>
          </div>
          <h2 className="section-title">¿Qué es Claude Code?</h2>
          <p className="section-subtitle max-w-2xl mx-auto">
            Claude Code es la herramienta de Anthropic que lleva la IA directamente a tu entorno de programación.
            No es solo un chatbot — es un asistente que entiende tu código, tu proyecto y tu contexto.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {beneficios.map((b) => {
            const Icon = b.icon
            return (
              <div key={b.title} className="card text-center">
                <div className="w-12 h-12 rounded-2xl bg-claude-orange/15 border border-claude-orange/30 flex items-center justify-center mx-auto mb-4">
                  <Icon className="w-6 h-6 text-claude-orange" />
                </div>
                <h3 className="text-claude-warm font-semibold text-lg mb-2">{b.title}</h3>
                <p className="text-claude-muted text-sm leading-relaxed">{b.description}</p>
              </div>
            )
          })}
        </div>
      </section>

      {/* 3 formas */}
      <section className="px-4 sm:px-6 lg:px-8 py-20 bg-claude-card/30 border-y border-claude-border">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <div className="inline-flex items-center gap-2 mb-4">
              <Globe className="w-5 h-5 text-claude-orange" />
              <span className="text-claude-orange font-semibold text-sm uppercase tracking-wider">3 formas de uso</span>
            </div>
            <h2 className="section-title">Elige cómo quieres usarlo</h2>
            <p className="section-subtitle max-w-2xl mx-auto">
              Claude Code se adapta a tu flujo de trabajo. Tanto si prefieres una extensión, una app visual o la
              terminal, hay una opción para ti.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {formas.map((forma) => {
              const Icon = forma.icon
              return (
                <Link
                  key={forma.to}
                  to={forma.to}
                  className="card group hover:bg-claude-cardHover hover:shadow-lg hover:shadow-claude-orange/5 flex flex-col"
                >
                  <div className="flex items-start justify-between mb-5">
                    <div className="w-12 h-12 rounded-2xl bg-claude-orange/15 border border-claude-orange/30 flex items-center justify-center group-hover:bg-claude-orange/20 transition-colors">
                      <Icon className="w-6 h-6 text-claude-orange" />
                    </div>
                    <span className={`badge ${forma.badgeColor}`}>{forma.badge}</span>
                  </div>

                  <h3 className="text-claude-warm font-semibold text-xl mb-3">{forma.title}</h3>
                  <p className="text-claude-muted text-sm leading-relaxed flex-1 mb-5">{forma.description}</p>

                  <ul className="space-y-1.5 mb-5">
                    {forma.features.map((f) => (
                      <li key={f} className="flex items-center gap-2 text-sm text-claude-muted">
                        <CheckCircle2 className="w-4 h-4 text-claude-orange flex-shrink-0" />
                        {f}
                      </li>
                    ))}
                  </ul>

                  <div className="flex items-center gap-1.5 text-claude-orange text-sm font-medium mt-auto">
                    Ver guía <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </Link>
              )
            })}
          </div>
        </div>
      </section>

      {/* Para quién es */}
      <section className="px-4 sm:px-6 lg:px-8 py-20 max-w-7xl mx-auto">
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 mb-4">
            <Users className="w-5 h-5 text-claude-orange" />
            <span className="text-claude-orange font-semibold text-sm uppercase tracking-wider">Para quién es</span>
          </div>
          <h2 className="section-title">Diseñado para el aula</h2>
          <p className="section-subtitle max-w-xl mx-auto">
            Esta guía está pensada para la comunidad del IES Doctor Balmis.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Estudiantes */}
          <div className="card">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-11 h-11 rounded-xl bg-claude-orange/15 border border-claude-orange/30 flex items-center justify-center">
                <BookOpen className="w-5 h-5 text-claude-orange" />
              </div>
              <h3 className="text-claude-warm font-semibold text-xl">Estudiantes</h3>
            </div>
            <ul className="space-y-3">
              {[
                'Entiende código que no habías visto antes',
                'Depura errores con explicaciones detalladas',
                'Genera tests para tus prácticas',
                'Aprende buenas prácticas preguntando',
                'Acelera el desarrollo de proyectos finales',
              ].map((item) => (
                <li key={item} className="flex items-start gap-2.5 text-sm text-claude-muted">
                  <CheckCircle2 className="w-4 h-4 text-claude-orange flex-shrink-0 mt-0.5" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Profesores */}
          <div className="card">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-11 h-11 rounded-xl bg-claude-orange/15 border border-claude-orange/30 flex items-center justify-center">
                <GraduationCap className="w-5 h-5 text-claude-orange" />
              </div>
              <h3 className="text-claude-warm font-semibold text-xl">Profesores</h3>
            </div>
            <ul className="space-y-3">
              {[
                'Demuestra flujos de trabajo modernos en clase',
                'Genera ejercicios y enunciados de prácticas',
                'Explora refactorizaciones en tiempo real',
                'Introduce el concepto de desarrollo asistido por IA',
                'Prepara a los alumnos para el mercado laboral actual',
              ].map((item) => (
                <li key={item} className="flex items-start gap-2.5 text-sm text-claude-muted">
                  <CheckCircle2 className="w-4 h-4 text-claude-orange flex-shrink-0 mt-0.5" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Requisitos */}
      <section className="px-4 sm:px-6 lg:px-8 pb-24 max-w-3xl mx-auto">
        <div className="card">
          <h2 className="text-2xl font-bold text-claude-warm mb-6 flex items-center gap-3">
            <CheckCircle2 className="w-6 h-6 text-claude-orange" />
            Requisitos básicos
          </h2>
          <ul className="space-y-3">
            {requisitos.map((req, i) => (
              <li key={i} className="flex items-center gap-3">
                <span className="step-number text-xs">{i + 1}</span>
                <span className="text-claude-muted">{req}</span>
              </li>
            ))}
          </ul>
          <div className="mt-8 pt-6 border-t border-claude-border flex flex-wrap gap-4">
            <Link to="/vscode" className="btn-primary">
              Comenzar ahora <ArrowRight className="w-4 h-4" />
            </Link>
            <Link to="/faq" className="btn-secondary">
              Ver FAQ
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
