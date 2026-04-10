import { Link } from 'react-router-dom'
import { ArrowLeft, ArrowRight, Terminal, Hash, GitBranch, Keyboard, Flag } from 'lucide-react'

const sections = [
  {
    id: 'inicio',
    icon: Terminal,
    title: 'Comandos de inicio',
    description: 'Cómo lanzar y gestionar sesiones de Claude Code.',
    commands: [
      { cmd: 'claude', desc: 'Inicia una sesión interactiva en el directorio actual' },
      { cmd: 'claude .', desc: 'Inicia sesión cargando el contexto del directorio actual' },
      { cmd: 'claude "prompt"', desc: 'Ejecuta una consulta en modo no interactivo (one-shot)' },
      { cmd: 'claude --version', desc: 'Muestra la versión instalada de Claude Code' },
      { cmd: 'claude login', desc: 'Autentica el CLI con tu cuenta de claude.ai' },
      { cmd: 'claude logout', desc: 'Cierra la sesión activa' },
      { cmd: 'claude --help', desc: 'Muestra la ayuda con todas las opciones disponibles' },
    ],
  },
  {
    id: 'contexto',
    icon: Hash,
    title: 'Comandos de contexto',
    description: 'Comandos de sesión para gestionar el contexto y la conversación.',
    commands: [
      { cmd: '/help', desc: 'Muestra la ayuda de comandos disponibles dentro de la sesión' },
      { cmd: '/clear', desc: 'Borra el historial de la conversación actual y reinicia el contexto' },
      { cmd: '/status', desc: 'Muestra el estado actual de la sesión (modelo, tokens usados, etc.)' },
      { cmd: '/compact', desc: 'Comprime el historial de conversación para liberar espacio de contexto' },
      { cmd: '/model', desc: 'Muestra o cambia el modelo de IA usado en la sesión actual' },
      { cmd: '/exit', desc: 'Sale de la sesión interactiva de Claude Code' },
      { cmd: '/quit', desc: 'Alias de /exit — cierra la sesión interactiva' },
    ],
  },
  {
    id: 'flujo',
    icon: GitBranch,
    title: 'Comandos de flujo de trabajo',
    description: 'Integración con git y gestión de proyectos.',
    commands: [
      {
        cmd: 'claude "revisa los cambios de git y escribe un commit"',
        desc: 'Genera un mensaje de commit descriptivo basado en el diff de git',
      },
      {
        cmd: 'claude "explica el historial de commits recientes"',
        desc: 'Analiza y resume el historial de commits del proyecto',
      },
      {
        cmd: 'claude "encuentra bugs en los archivos modificados"',
        desc: 'Revisa los archivos cambiados en busca de problemas',
      },
      {
        cmd: 'claude "genera tests para los cambios de esta rama"',
        desc: 'Crea tests automáticos para el código nuevo o modificado',
      },
      {
        cmd: 'git diff | claude "explica estos cambios"',
        desc: 'Pasa el diff de git a Claude para una explicación detallada',
      },
      {
        cmd: 'claude "documenta las funciones nuevas en src/"',
        desc: 'Genera documentación JSDoc/comentarios para funciones del directorio',
      },
    ],
  },
  {
    id: 'atajos',
    icon: Keyboard,
    title: 'Atajos de teclado',
    description: 'Controles de teclado disponibles en la sesión interactiva.',
    commands: [
      { cmd: 'Ctrl + C', desc: 'Cancela la operación actual o interrumpe la generación de respuesta' },
      { cmd: 'Escape', desc: 'Interrumpe la respuesta que Claude está generando' },
      { cmd: 'Ctrl + L', desc: 'Limpia la pantalla del terminal (mantiene el contexto de sesión)' },
      { cmd: 'Flecha Arriba ↑', desc: 'Navega al comando anterior en el historial de la sesión' },
      { cmd: 'Flecha Abajo ↓', desc: 'Navega al siguiente comando en el historial' },
      { cmd: 'Tab', desc: 'Autocompletado de rutas de archivos en los prompts' },
      { cmd: 'Ctrl + D', desc: 'Sale de la sesión (equivale a /exit)' },
    ],
  },
  {
    id: 'flags',
    icon: Flag,
    title: 'Flags útiles',
    description: 'Opciones de línea de comandos para personalizar el comportamiento.',
    commands: [
      { cmd: 'claude --model claude-opus-4-5', desc: 'Especifica el modelo de Claude a usar en la sesión' },
      { cmd: 'claude --model claude-sonnet-4-5', desc: 'Usa Claude Sonnet (más rápido y eficiente)' },
      { cmd: 'claude --no-stream', desc: 'Desactiva el streaming de respuestas (muestra todo de golpe)' },
      { cmd: 'claude --output json', desc: 'Devuelve la respuesta en formato JSON (útil para scripts)' },
      { cmd: 'claude --max-tokens 4096', desc: 'Limita el número máximo de tokens en la respuesta' },
      { cmd: 'claude --temperature 0.7', desc: 'Controla la creatividad de las respuestas (0-1)' },
      { cmd: 'claude --verbose', desc: 'Muestra información detallada sobre la ejecución' },
    ],
  },
]

function CommandRow({ cmd, desc }) {
  return (
    <tr className="border-b border-claude-border last:border-0 hover:bg-claude-bg/30 transition-colors">
      <td className="px-5 py-3.5 align-top w-1/2">
        <code className="font-mono text-sm text-green-400 bg-claude-bg border border-claude-border px-2.5 py-1 rounded-lg whitespace-nowrap">
          {cmd}
        </code>
      </td>
      <td className="px-5 py-3.5 text-claude-muted text-sm align-middle">{desc}</td>
    </tr>
  )
}

export default function Comandos() {
  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Header */}
      <div className="mb-12 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-claude-card border border-claude-border rounded-full text-sm text-claude-muted mb-6">
          <Terminal className="w-4 h-4 text-claude-orange" />
          <span>Referencia rápida de comandos</span>
        </div>
        <h1 className="text-4xl font-extrabold text-claude-warm mb-4">Guía de Comandos</h1>
        <p className="text-claude-muted text-lg max-w-2xl mx-auto">
          Todos los comandos, atajos y flags de Claude Code en un solo lugar. Guarda esta página como referencia
          rápida para tus prácticas.
        </p>
      </div>

      {/* Quick nav */}
      <div className="flex flex-wrap gap-2 mb-12 justify-center">
        {sections.map((s) => {
          const Icon = s.icon
          return (
            <a
              key={s.id}
              href={`#${s.id}`}
              className="flex items-center gap-1.5 px-3 py-1.5 bg-claude-card border border-claude-border rounded-full text-sm text-claude-muted hover:text-claude-orange hover:border-claude-orange/40 transition-all"
            >
              <Icon className="w-3.5 h-3.5" />
              {s.title}
            </a>
          )
        })}
      </div>

      {/* Sections */}
      <div className="space-y-14">
        {sections.map((section) => {
          const Icon = section.icon
          return (
            <section key={section.id} id={section.id}>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-claude-orange/15 border border-claude-orange/30 flex items-center justify-center">
                  <Icon className="w-5 h-5 text-claude-orange" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-claude-warm">{section.title}</h2>
                  <p className="text-claude-muted text-sm">{section.description}</p>
                </div>
              </div>

              <div className="overflow-x-auto rounded-2xl border border-claude-border">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-claude-border bg-claude-card">
                      <th className="text-left px-5 py-3.5 text-claude-orange text-sm font-semibold w-1/2">
                        Comando
                      </th>
                      <th className="text-left px-5 py-3.5 text-claude-muted text-sm font-semibold">Descripción</th>
                    </tr>
                  </thead>
                  <tbody>
                    {section.commands.map((c, i) => (
                      <CommandRow key={i} cmd={c.cmd} desc={c.desc} />
                    ))}
                  </tbody>
                </table>
              </div>
            </section>
          )
        })}
      </div>

      {/* Pro tip */}
      <div className="mt-14 p-6 bg-claude-orange/5 border border-claude-orange/20 rounded-2xl">
        <h3 className="text-claude-warm font-semibold mb-2 flex items-center gap-2">
          <Terminal className="w-5 h-5 text-claude-orange" />
          Consejo profesional
        </h3>
        <p className="text-claude-muted text-sm leading-relaxed">
          Puedes combinar Claude Code con comandos de terminal usando pipes. Por ejemplo:{' '}
          <code className="font-mono text-green-400 bg-claude-bg px-1.5 py-0.5 rounded text-xs">
            cat error.log | claude "¿qué significa este error y cómo lo soluciono?"
          </code>{' '}
          Esto permite analizar logs, archivos de configuración o salidas de otros programas directamente.
        </p>
      </div>

      {/* Navigation */}
      <div className="flex items-center justify-between pt-10 mt-10 border-t border-claude-border">
        <Link to="/terminal" className="btn-secondary">
          <ArrowLeft className="w-4 h-4" /> Terminal
        </Link>
        <Link to="/faq" className="btn-primary">
          Ver FAQ <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </div>
  )
}
