import { Link } from 'react-router-dom'
import {
  Terminal as TerminalIcon,
  ArrowRight,
  ArrowLeft,
  CheckCircle2,
  Globe,
  Lightbulb,
  AlertCircle,
} from 'lucide-react'

const prereqs = [
  {
    req: 'Node.js 18 o superior',
    desc: 'El runtime de JavaScript necesario para instalar Claude Code via npm.',
    check: 'node --version',
  },
  {
    req: 'npm (viene con Node.js)',
    desc: 'El gestor de paquetes que usaremos para instalar Claude Code globalmente.',
    check: 'npm --version',
  },
  {
    req: 'Cuenta en claude.ai',
    desc: 'Necesitas una cuenta activa para autenticarte con el CLI.',
    check: null,
  },
]

const instalacion = [
  {
    num: 1,
    title: 'Verifica Node.js',
    description: 'Comprueba que tienes Node.js 18 o superior instalado.',
    code: 'node --version\n# Debe mostrar v18.0.0 o superior',
  },
  {
    num: 2,
    title: 'Instala Claude Code globalmente',
    description: 'Usa npm para instalar el CLI de Claude Code en tu sistema.',
    code: 'npm install -g @anthropic-ai/claude-code',
  },
  {
    num: 3,
    title: 'Verifica la instalación',
    description: 'Comprueba que Claude Code se ha instalado correctamente.',
    code: 'claude --version',
  },
  {
    num: 4,
    title: 'Inicia sesión en tu cuenta',
    description: 'Autentica el CLI con tu cuenta de claude.ai. Se abrirá el navegador automáticamente.',
    code: 'claude login',
  },
]

const comandosBasicos = [
  { cmd: 'claude', desc: 'Inicia una sesión interactiva de Claude Code en el directorio actual' },
  { cmd: 'claude .', desc: 'Inicia sesión con el contexto del directorio actual cargado' },
  { cmd: 'claude "tu pregunta"', desc: 'Ejecuta una consulta de una sola vez sin entrar en modo interactivo' },
  { cmd: 'claude --version', desc: 'Muestra la versión instalada de Claude Code' },
  { cmd: 'claude login', desc: 'Inicia sesión o renueva la autenticación' },
  { cmd: 'claude logout', desc: 'Cierra la sesión activa' },
]

const ventajas = [
  'Disponible en todos los sistemas operativos: macOS, Linux y Windows',
  'Se puede integrar en scripts de automatización y pipelines de CI/CD',
  'Control total del entorno de ejecución',
  'Ideal para usar Claude Code sin abrir ningún editor',
  'Perfecto para servidores y entornos sin interfaz gráfica',
  'Permite combinar Claude Code con otros comandos de terminal',
]

const consejos = [
  'Navega siempre a la carpeta de tu proyecto antes de ejecutar "claude" para que tenga el contexto correcto.',
  'En proyectos del IES, usa "claude ." al inicio de cada sesión para que Claude lea la estructura del proyecto.',
  'Puedes redirigir la salida de comandos a Claude: "cat error.log | claude" para analizar logs.',
  'Usa "claude --help" para ver todas las opciones disponibles en tu versión instalada.',
]

export default function Terminal() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Header */}
      <div className="mb-12">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-14 h-14 rounded-2xl bg-claude-orange/15 border border-claude-orange/30 flex items-center justify-center">
            <TerminalIcon className="w-7 h-7 text-claude-orange" />
          </div>
          <div>
            <div className="flex items-center gap-3 mb-1">
              <h1 className="text-3xl font-bold text-claude-warm">Terminal / CLI</h1>
              <span className="badge bg-claude-orange/15 text-claude-orange border border-claude-orange/30">
                <Globe className="w-3 h-3" /> Para todos los sistemas
              </span>
            </div>
            <p className="text-claude-muted">Forma 3 de 3 — Línea de comandos multiplataforma</p>
          </div>
        </div>

        <div className="card">
          <h2 className="text-xl font-semibold text-claude-warm mb-3">¿Qué es la versión CLI?</h2>
          <p className="text-claude-muted leading-relaxed">
            La versión de línea de comandos (CLI) de Claude Code es la más versátil: funciona en cualquier terminal de
            macOS, Linux o Windows. Se instala una sola vez con npm y luego está disponible en cualquier carpeta de tu
            sistema. Es la opción preferida para desarrolladores avanzados, pero también es muy accesible para
            estudiantes que ya estén cómodos con la terminal.
          </p>
        </div>
      </div>

      {/* Prerrequisitos */}
      <section className="mb-14">
        <h2 className="section-title">Prerrequisitos</h2>
        <p className="section-subtitle">Asegúrate de tener estas herramientas antes de instalar.</p>

        <div className="space-y-3">
          {prereqs.map((p, i) => (
            <div key={i} className="card flex gap-4">
              <div className="w-9 h-9 rounded-xl bg-claude-orange/15 border border-claude-orange/30 flex items-center justify-center flex-shrink-0">
                <CheckCircle2 className="w-4 h-4 text-claude-orange" />
              </div>
              <div className="flex-1">
                <h3 className="text-claude-warm font-semibold text-sm mb-1">{p.req}</h3>
                <p className="text-claude-muted text-sm mb-2">{p.desc}</p>
                {p.check && (
                  <pre className="code-block text-xs">{p.check}</pre>
                )}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-4 p-4 bg-blue-500/5 border border-blue-500/20 rounded-xl flex gap-3">
          <AlertCircle className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" />
          <div>
            <p className="text-blue-400 text-sm font-semibold mb-1">¿Node.js no instalado?</p>
            <p className="text-claude-muted text-sm">
              Descarga Node.js LTS desde{' '}
              <a
                href="https://nodejs.org"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:underline"
              >
                nodejs.org
              </a>
              . Incluye npm automáticamente.
            </p>
          </div>
        </div>
      </section>

      {/* Instalación */}
      <section className="mb-14">
        <h2 className="section-title">Instalación</h2>
        <p className="section-subtitle">Sigue estos pasos en tu terminal favorita.</p>

        <div className="space-y-4">
          {instalacion.map((paso) => (
            <div key={paso.num} className="card flex gap-4">
              <span className="step-number mt-0.5">{paso.num}</span>
              <div className="flex-1">
                <h3 className="text-claude-warm font-semibold mb-1.5">{paso.title}</h3>
                <p className="text-claude-muted text-sm mb-3">{paso.description}</p>
                <pre className="code-block">{paso.code}</pre>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Primer uso */}
      <section className="mb-14">
        <h2 className="section-title">Primer uso</h2>
        <p className="section-subtitle">Una vez instalado, así es como empiezas.</p>

        <div className="card">
          <p className="text-claude-muted text-sm mb-4">
            Navega a la carpeta de tu proyecto y lanza Claude Code. Verás una interfaz interactiva en la terminal.
          </p>
          <pre className="code-block mb-4">{`cd mi-proyecto
claude

# Claude Code se inicia y puedes empezar a escribir:
> Explícame qué hace este proyecto
> Refactoriza la función calcularTotal en src/utils.js
> Genera tests para el módulo de autenticación`}</pre>
          <p className="text-claude-muted text-sm">
            También puedes hacer una consulta rápida sin entrar en modo interactivo:
          </p>
          <pre className="code-block mt-3">{'claude "¿Cuál es la diferencia entre let, const y var en JavaScript?"'}</pre>
        </div>
      </section>

      {/* Comandos esenciales */}
      <section className="mb-14">
        <h2 className="section-title">Comandos esenciales de inicio</h2>
        <p className="section-subtitle">Los comandos más importantes para empezar.</p>

        <div className="overflow-x-auto rounded-2xl border border-claude-border">
          <table className="w-full">
            <thead>
              <tr className="border-b border-claude-border bg-claude-card">
                <th className="text-left px-5 py-3.5 text-claude-orange text-sm font-semibold">Comando</th>
                <th className="text-left px-5 py-3.5 text-claude-muted text-sm font-semibold">Descripción</th>
              </tr>
            </thead>
            <tbody>
              {comandosBasicos.map((c, i) => (
                <tr
                  key={i}
                  className={`border-b border-claude-border last:border-0 ${i % 2 === 0 ? 'bg-claude-bg/30' : ''}`}
                >
                  <td className="px-5 py-3.5">
                    <code className="font-mono text-sm text-green-400 bg-claude-bg px-2 py-0.5 rounded">{c.cmd}</code>
                  </td>
                  <td className="px-5 py-3.5 text-claude-muted text-sm">{c.desc}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Ventajas */}
      <section className="mb-14">
        <h2 className="section-title">Ventajas del Terminal</h2>
        <div className="card">
          <ul className="space-y-3">
            {ventajas.map((v, i) => (
              <li key={i} className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-claude-orange flex-shrink-0 mt-0.5" />
                <span className="text-claude-muted text-sm">{v}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Consejos */}
      <section className="mb-14">
        <h2 className="section-title">Consejos para el aula</h2>
        <div className="space-y-3">
          {consejos.map((consejo, i) => (
            <div key={i} className="card flex gap-4">
              <div className="w-9 h-9 rounded-xl bg-claude-orange/15 border border-claude-orange/30 flex items-center justify-center flex-shrink-0">
                <Lightbulb className="w-4 h-4 text-claude-orange" />
              </div>
              <p className="text-claude-muted text-sm leading-relaxed self-center">{consejo}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Navigation */}
      <div className="flex items-center justify-between pt-6 border-t border-claude-border">
        <Link to="/mac-app" className="btn-secondary">
          <ArrowLeft className="w-4 h-4" /> Mac App
        </Link>
        <Link to="/comandos" className="btn-primary">
          Ver Comandos <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </div>
  )
}
