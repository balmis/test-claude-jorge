import { Link } from 'react-router-dom'
import {
  Monitor,
  ArrowRight,
  ArrowLeft,
  CheckCircle2,
  Apple,
  FolderOpen,
  MousePointer,
  Download,
  LogIn,
  Lightbulb,
} from 'lucide-react'

const pasos = [
  {
    num: 1,
    title: 'Descarga Claude para Mac',
    description: 'Ve a claude.ai desde tu navegador y busca el enlace de descarga de la app para macOS.',
    code: '→ claude.ai → Descargar app para Mac',
  },
  {
    num: 2,
    title: 'Instala e inicia sesión',
    description:
      'Abre el archivo .dmg descargado, arrastra Claude a Aplicaciones e inicia la app. Inicia sesión con tu cuenta de claude.ai.',
    code: null,
  },
  {
    num: 3,
    title: 'Abre la pestaña "Claude Code"',
    description:
      'Una vez dentro de la app, busca la pestaña o sección "Claude Code" en la barra de navegación superior o lateral.',
    code: null,
  },
  {
    num: 4,
    title: 'Selecciona o crea una sesión local',
    description:
      'Crea una nueva sesión de tipo "Local" que trabajará con los archivos de tu ordenador. Esto permite a Claude leer tu proyecto.',
    code: null,
  },
  {
    num: 5,
    title: 'Navega a tu carpeta de proyecto',
    description:
      'Usa el explorador de archivos de la app para abrir la carpeta de tu proyecto. Claude tendrá acceso al contexto completo.',
    code: null,
  },
]

const ventajas = [
  'Interfaz visual y cómoda, sin configuración técnica',
  'Acceso rápido desde la barra de menú de macOS',
  'Sesiones guardadas para retomar el trabajo donde lo dejaste',
  'No requiere instalar Node.js ni herramientas adicionales',
  'Integración nativa con el sistema de archivos de Mac',
  'Historial de conversaciones organizado por proyecto',
]

const comparacion = [
  {
    aspecto: 'Integración con editor',
    vscode: 'Directa (dentro de VS Code)',
    macApp: 'Separada (ventana aparte)',
  },
  {
    aspecto: 'Sistemas operativos',
    vscode: 'Windows, Mac, Linux',
    macApp: 'Solo macOS',
  },
  {
    aspecto: 'Configuración inicial',
    vscode: 'Instalar extensión (2 min)',
    macApp: 'Descargar app (5 min)',
  },
  {
    aspecto: 'Flujo de trabajo',
    vscode: 'Sin salir del editor',
    macApp: 'Alt+Tab entre ventanas',
  },
  {
    aspecto: 'Historial de chats',
    vscode: 'Por sesión de VS Code',
    macApp: 'Persistente entre sesiones',
  },
  {
    aspecto: 'Ideal para',
    vscode: 'Desarrollo diario',
    macApp: 'Exploración y aprendizaje',
  },
]

const consejos = [
  'Abre la app desde la barra de menú (ícono en la barra superior de Mac) para acceso rápido en cualquier momento.',
  'Usa la función de "Compartir pantalla" de la app para que Claude vea literalmente lo que estás viendo.',
  'Organiza tus proyectos del IES en sesiones separadas para mantener el contexto limpio.',
  'La app es perfecta para aprender: puedes chatear sobre conceptos sin tener un proyecto abierto.',
]

export default function ClaudeMacApp() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Header */}
      <div className="mb-12">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-14 h-14 rounded-2xl bg-claude-orange/15 border border-claude-orange/30 flex items-center justify-center">
            <Monitor className="w-7 h-7 text-claude-orange" />
          </div>
          <div>
            <div className="flex items-center gap-3 mb-1">
              <h1 className="text-3xl font-bold text-claude-warm">App Claude para Mac</h1>
              <span className="badge bg-blue-500/15 text-blue-400 border border-blue-500/30">
                <Apple className="w-3 h-3" /> Solo Mac
              </span>
            </div>
            <p className="text-claude-muted">Forma 2 de 3 — Aplicación nativa para macOS</p>
          </div>
        </div>

        <div className="card">
          <h2 className="text-xl font-semibold text-claude-warm mb-3">¿Qué es la app de Claude para Mac?</h2>
          <p className="text-claude-muted leading-relaxed">
            La aplicación oficial de Claude para macOS incluye acceso a Claude Code con una interfaz visual limpia y
            cómoda. A diferencia de la extensión de VS Code, funciona como una app independiente que puedes tener
            siempre disponible en la barra de menú. Es ideal si quieres explorar Claude Code sin modificar tu entorno
            de VS Code, o si buscas una interfaz más visual para aprender.
          </p>
        </div>
      </div>

      {/* Pasos */}
      <section className="mb-14">
        <h2 className="section-title">Acceder a Claude Code desde la app</h2>
        <p className="section-subtitle">Guía de instalación y configuración inicial.</p>

        <div className="space-y-4">
          {pasos.map((paso, i) => {
            const icons = [Download, LogIn, MousePointer, FolderOpen, FolderOpen]
            const Icon = icons[i]
            return (
              <div key={paso.num} className="card flex gap-4">
                <span className="step-number mt-0.5">{paso.num}</span>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1.5">
                    <Icon className="w-4 h-4 text-claude-orange" />
                    <h3 className="text-claude-warm font-semibold">{paso.title}</h3>
                  </div>
                  <p className="text-claude-muted text-sm mb-3">{paso.description}</p>
                  {paso.code && (
                    <pre className="code-block text-claude-orange">{paso.code}</pre>
                  )}
                </div>
              </div>
            )
          })}
        </div>
      </section>

      {/* Ventajas */}
      <section className="mb-14">
        <h2 className="section-title">Ventajas de la app</h2>
        <p className="section-subtitle">Por qué elegir la app nativa de Mac.</p>

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

      {/* Comparación */}
      <section className="mb-14">
        <h2 className="section-title">Comparación con la extensión VS Code</h2>
        <p className="section-subtitle">¿Cuál es mejor para ti?</p>

        <div className="overflow-x-auto rounded-2xl border border-claude-border">
          <table className="w-full">
            <thead>
              <tr className="border-b border-claude-border bg-claude-card">
                <th className="text-left px-5 py-3.5 text-claude-muted text-sm font-semibold">Aspecto</th>
                <th className="text-left px-5 py-3.5 text-claude-orange text-sm font-semibold">Extensión VS Code</th>
                <th className="text-left px-5 py-3.5 text-blue-400 text-sm font-semibold">App Mac</th>
              </tr>
            </thead>
            <tbody>
              {comparacion.map((row, i) => (
                <tr
                  key={i}
                  className={`border-b border-claude-border last:border-0 ${
                    i % 2 === 0 ? 'bg-claude-bg/30' : ''
                  }`}
                >
                  <td className="px-5 py-3.5 text-claude-warm text-sm font-medium">{row.aspecto}</td>
                  <td className="px-5 py-3.5 text-claude-muted text-sm">{row.vscode}</td>
                  <td className="px-5 py-3.5 text-claude-muted text-sm">{row.macApp}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Consejos */}
      <section className="mb-14">
        <h2 className="section-title">Consejos de uso</h2>
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
        <Link to="/vscode" className="btn-secondary">
          <ArrowLeft className="w-4 h-4" /> VS Code
        </Link>
        <Link to="/terminal" className="btn-primary">
          Siguiente: Terminal <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </div>
  )
}
