import { Link } from 'react-router-dom'
import {
  Code2,
  ArrowRight,
  ArrowLeft,
  CheckCircle2,
  MessageSquare,
  Wand2,
  FileSearch,
  RefreshCw,
  TestTube2,
  Lightbulb,
  Star,
} from 'lucide-react'

const pasos = [
  {
    num: 1,
    title: 'Abre Visual Studio Code',
    description: 'Inicia VS Code en tu equipo. Si no lo tienes instalado, descárgalo desde code.visualstudio.com.',
    code: null,
  },
  {
    num: 2,
    title: 'Ve al Marketplace de Extensiones',
    description:
      'Haz clic en el icono de extensiones en la barra lateral izquierda (o usa el atajo de teclado).',
    code: 'Ctrl+Shift+X  (Windows/Linux)\nCmd+Shift+X   (macOS)',
  },
  {
    num: 3,
    title: 'Busca "Claude Code"',
    description: 'En el campo de búsqueda del Marketplace, escribe "Claude Code". Busca la extensión de Anthropic.',
    code: null,
  },
  {
    num: 4,
    title: 'Haz clic en "Install"',
    description:
      'Selecciona la extensión oficial de Anthropic y haz clic en el botón azul "Install". La instalación es automática.',
    code: null,
  },
  {
    num: 5,
    title: 'Abre el panel de Claude',
    description: 'Una vez instalada, abre el panel de Claude desde el icono en la barra lateral o con el atajo.',
    code: 'Cmd+Shift+C  (macOS)\nCtrl+Shift+C (Windows/Linux)',
  },
]

const funcionalidades = [
  {
    icon: MessageSquare,
    title: 'Chat en línea',
    description:
      'Chatea con Claude directamente desde VS Code. Pregunta sobre tu código, pide ayuda con errores o solicita explicaciones.',
  },
  {
    icon: Wand2,
    title: 'Autocompletado inteligente',
    description:
      'Claude sugiere completaciones de código teniendo en cuenta el contexto completo de tu proyecto, no solo la línea actual.',
  },
  {
    icon: FileSearch,
    title: 'Explicación de código',
    description:
      'Selecciona cualquier fragmento de código y pide a Claude que lo explique en español con ejemplos claros.',
  },
  {
    icon: RefreshCw,
    title: 'Refactorización',
    description:
      'Mejora la calidad de tu código: Claude sugiere optimizaciones, elimina duplicaciones y aplica patrones de diseño.',
  },
  {
    icon: TestTube2,
    title: 'Generación de tests',
    description:
      'Genera automáticamente tests unitarios para tus funciones y clases. Ideal para aprender TDD en el aula.',
  },
]

const consejos = [
  'Selecciona el código sobre el que tienes dudas antes de preguntar — Claude verá exactamente qué parte te interesa.',
  'Usa el chat para pedir que te explique los errores del compilador o del linter en lenguaje sencillo.',
  'Prueba a pedir "refactoriza esta función para que sea más legible" y compara el resultado con el original.',
  'Para proyectos de clase, pide que Claude genere la documentación JSDoc o Javadoc de tus métodos.',
  'No copies el código directamente — léelo, entiéndelo y luego escríbelo tú. Así aprendes de verdad.',
]

export default function VSCodeExtension() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Header */}
      <div className="mb-12">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-14 h-14 rounded-2xl bg-claude-orange/15 border border-claude-orange/30 flex items-center justify-center">
            <Code2 className="w-7 h-7 text-claude-orange" />
          </div>
          <div>
            <div className="flex items-center gap-3 mb-1">
              <h1 className="text-3xl font-bold text-claude-warm">Extensión VS Code</h1>
              <span className="badge bg-green-500/15 text-green-400 border border-green-500/30">
                <Star className="w-3 h-3" /> Recomendado
              </span>
            </div>
            <p className="text-claude-muted">Forma 1 de 3 — Integración directa en tu editor</p>
          </div>
        </div>

        <div className="card">
          <h2 className="text-xl font-semibold text-claude-warm mb-3">¿Qué es?</h2>
          <p className="text-claude-muted leading-relaxed">
            La extensión oficial de Claude Code para Visual Studio Code integra la IA de Anthropic directamente en tu
            editor. No necesitas cambiar de ventana ni copiar y pegar código — Claude entiende tu proyecto completo y
            te ayuda en tiempo real mientras programas. Es la opción más recomendada para estudiantes de ciclos
            formativos porque se integra perfectamente con el entorno de trabajo habitual.
          </p>
        </div>
      </div>

      {/* Instalación */}
      <section className="mb-14">
        <h2 className="section-title">Instalación paso a paso</h2>
        <p className="section-subtitle">Sigue estos pasos en orden. Todo el proceso tarda menos de 2 minutos.</p>

        <div className="space-y-4">
          {pasos.map((paso) => (
            <div key={paso.num} className="card flex gap-4">
              <span className="step-number mt-0.5">{paso.num}</span>
              <div className="flex-1">
                <h3 className="text-claude-warm font-semibold mb-1.5">{paso.title}</h3>
                <p className="text-claude-muted text-sm mb-3">{paso.description}</p>
                {paso.code && <pre className="code-block">{paso.code}</pre>}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Funcionalidades */}
      <section className="mb-14">
        <h2 className="section-title">Funcionalidades principales</h2>
        <p className="section-subtitle">Todo lo que puedes hacer con la extensión instalada.</p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {funcionalidades.map((f) => {
            const Icon = f.icon
            return (
              <div key={f.title} className="card flex gap-4">
                <div className="w-10 h-10 rounded-xl bg-claude-orange/15 border border-claude-orange/30 flex items-center justify-center flex-shrink-0">
                  <Icon className="w-5 h-5 text-claude-orange" />
                </div>
                <div>
                  <h3 className="text-claude-warm font-semibold text-sm mb-1">{f.title}</h3>
                  <p className="text-claude-muted text-sm leading-relaxed">{f.description}</p>
                </div>
              </div>
            )
          })}
        </div>
      </section>

      {/* Consejos */}
      <section className="mb-14">
        <h2 className="section-title">Consejos para el aula</h2>
        <p className="section-subtitle">Saca el máximo partido a la extensión como estudiante.</p>

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
        <Link to="/" className="btn-secondary">
          <ArrowLeft className="w-4 h-4" /> Inicio
        </Link>
        <Link to="/mac-app" className="btn-primary">
          Siguiente: Mac App <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </div>
  )
}
