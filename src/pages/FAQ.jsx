import { useState } from 'react'
import { Link } from 'react-router-dom'
import { ChevronDown, HelpCircle, BookOpen, GraduationCap, Settings, ArrowLeft, MessageCircle } from 'lucide-react'

const faqGroups = [
  {
    id: 'general',
    icon: HelpCircle,
    title: 'General',
    color: 'text-claude-orange',
    bgColor: 'bg-claude-orange/15',
    borderColor: 'border-claude-orange/30',
    items: [
      {
        q: '¿Qué es Claude Code?',
        a: 'Claude Code es una herramienta de programación con inteligencia artificial desarrollada por Anthropic. Se integra directamente en tu entorno de desarrollo (VS Code, terminal, app de Mac) y te ayuda a escribir, entender, depurar y mejorar código. No es solo un chatbot — tiene acceso al contexto completo de tu proyecto.',
      },
      {
        q: '¿Es gratuito?',
        a: 'Claude Code NO es gratuito. Requiere una suscripción de pago de claude.ai: el plan Pro (20 $/mes) es el mínimo necesario. El plan gratuito de claude.ai NO incluye acceso a Claude Code. Para el aula, se recomienda que cada estudiante evalúe si le compensa el coste según el uso que vaya a darle. Anthropic puede cambiar estos precios, así que conviene consultar siempre la página oficial de precios en claude.ai.',
      },
      {
        q: '¿Qué lenguajes de programación soporta?',
        a: 'Claude Code soporta prácticamente todos los lenguajes de programación modernos: JavaScript, TypeScript, Python, Java, C#, C++, PHP, Ruby, Go, Rust, Swift, Kotlin, SQL, HTML/CSS y muchos más. También entiende formatos de configuración como JSON, YAML, XML y lenguajes de marcado como Markdown.',
      },
      {
        q: '¿Necesito conexión a internet para usarlo?',
        a: 'Sí, Claude Code requiere conexión a internet para funcionar, ya que procesa las consultas en los servidores de Anthropic. No existe una versión offline. Asegúrate de tener conexión estable cuando vayas a trabajar con él en el aula o en casa.',
      },
      {
        q: '¿Es seguro? ¿Anthropic guarda mi código?',
        a: 'Anthropic tiene una política de privacidad clara. El código que compartes con Claude se usa para responder tus consultas. Revisa la política de privacidad en anthropic.com. Para proyectos con información sensible o confidencial, es recomendable no compartir datos privados o credenciales.',
      },
    ],
  },
  {
    id: 'estudiantes',
    icon: BookOpen,
    title: 'Para Estudiantes',
    color: 'text-green-400',
    bgColor: 'bg-green-500/15',
    borderColor: 'border-green-500/30',
    items: [
      {
        q: '¿Por dónde empiezo si nunca he usado IA para programar?',
        a: 'Lo más sencillo es empezar con la extensión de VS Code. Instálala, abre un proyecto de clase y prueba a seleccionar una función y pedir "¿puedes explicarme qué hace este código?". Una vez que veas cómo responde, irás descubriendo más posibilidades de forma natural.',
      },
      {
        q: '¿Puedo usar Claude Code en los exámenes?',
        a: 'Depende completamente de las instrucciones de tu profesor para cada evaluación. Hay profesores que lo permiten como una herramienta más (como buscar en Google), y otros que prefieren evaluaciones sin IA. Pregunta siempre antes y sé honesto sobre su uso. Usar IA en un examen donde no está permitido es considerado trampa.',
      },
      {
        q: '¿Claude Code escribe el código por mí? ¿Eso es hacer trampa?',
        a: 'Claude Code puede generar código, pero eso no significa que debas copiarlo sin entenderlo. La clave está en usarlo como un tutor: pide que te explique, modifica el código generado, pregunta por qué lo hace así. Si simplemente copias y pegas sin aprender, no estarás desarrollando las habilidades que necesitarás en el mercado laboral.',
      },
      {
        q: '¿Es útil para aprender, no solo para hacer las prácticas más rápido?',
        a: 'Absolutamente. Puedes pedirle que te explique conceptos que no entiendes, que te ponga ejemplos de un patrón de diseño, que te corrija con explicaciones o que te haga preguntas de repaso. Úsalo como un tutor disponible 24/7 que tiene paciencia infinita para explicar.',
      },
      {
        q: '¿Funciona bien con los proyectos del ciclo formativo?',
        a: 'Sí. Claude Code funciona muy bien con los lenguajes típicos de los ciclos: Java, Python, JavaScript, PHP, SQL, HTML/CSS... También entiende frameworks comunes como Spring, Django, React, Laravel, etc. Para el proyecto final del ciclo, puede ser un compañero muy valioso para revisar el código y generar documentación.',
      },
    ],
  },
  {
    id: 'profesores',
    icon: GraduationCap,
    title: 'Para Profesores',
    color: 'text-blue-400',
    bgColor: 'bg-blue-500/15',
    borderColor: 'border-blue-500/30',
    items: [
      {
        q: '¿Cómo puedo introducir Claude Code en mis clases?',
        a: 'Una buena forma de empezar es con demostraciones en vivo: muestra a los alumnos cómo pedirle a Claude que explique un error del compilador, que refactorice una función o que genere tests. Luego propón ejercicios donde puedan usarlo con guía, y finalmente prácticas donde decidan ellos cuándo y cómo usarlo.',
      },
      {
        q: '¿Puedo detectar si un alumno ha usado IA para hacer una práctica?',
        a: 'La detección de código generado por IA no es perfecta. En lugar de enfocarte en detectar su uso, te recomendamos diseñar evaluaciones que valoren el proceso: pedir que expliquen decisiones de diseño, hacer code reviews orales, o proponer problemas que requieran adaptación de código generado a un contexto específico.',
      },
      {
        q: '¿Cómo integrar Claude Code con el currículo del ciclo?',
        a: 'Puedes usarlo para enriquecer cualquier módulo. En Programación: pedir que genere ejemplos de patrones de diseño. En Bases de Datos: generar consultas SQL complejas y analizarlas. En Desarrollo Web: revisar accesibilidad y rendimiento del código. En el proyecto final: documentación y revisión de código.',
      },
      {
        q: '¿Qué límites debo establecer en su uso?',
        a: 'Recomendamos ser claro en cada actividad: especifica si los alumnos pueden usar IA, en qué partes y de qué forma. Una buena práctica es pedir que documenten cómo usaron Claude Code en sus entregas: qué preguntaron, qué obtuvieron y qué modificaron. Esto fomenta el uso reflexivo en lugar del copia-pega automático.',
      },
      {
        q: '¿Hay riesgos de que los alumnos dependan demasiado de la IA?',
        a: 'Es un riesgo real si el uso no está guiado. Para mitigarlo: diseña actividades que alternen el uso con y sin IA, pide que los alumnos expliquen el código que entregan, y enfatiza que la IA comete errores y que el programador es responsable de lo que produce. El objetivo es que aprendan a colaborar con la IA, no a depender ciegamente de ella.',
      },
    ],
  },
  {
    id: 'tecnico',
    icon: Settings,
    title: 'Técnico',
    color: 'text-claude-muted',
    bgColor: 'bg-claude-border/30',
    borderColor: 'border-claude-border',
    items: [
      {
        q: '¿Qué requisitos técnicos necesito?',
        a: 'Para la extensión VS Code: tener VS Code instalado y una cuenta de claude.ai. Para la app de Mac: macOS y una cuenta de claude.ai. Para el CLI de terminal: Node.js 18+, npm, y una cuenta de claude.ai. En todos los casos necesitas conexión a internet.',
      },
      {
        q: '¿Cómo soluciono el error "claude: command not found"?',
        a: 'Este error aparece cuando el CLI no está instalado o no está en el PATH del sistema. Soluciones: (1) Reinstala con "npm install -g @anthropic-ai/claude-code", (2) Comprueba tu PATH con "echo $PATH", (3) Cierra y vuelve a abrir la terminal después de instalar, (4) En Windows, asegúrate de usar PowerShell como administrador.',
      },
      {
        q: '¿La extensión de VS Code y el CLI son lo mismo?',
        a: 'No exactamente. Ambos usan el mismo modelo de IA (Claude), pero tienen implementaciones diferentes. La extensión está optimizada para integrarse con el editor, mientras que el CLI es más flexible para scripting y automatización. Puedes usar ambas simultáneamente sin conflictos.',
      },
      {
        q: '¿Qué hacer si Claude Code da respuestas incorrectas?',
        a: 'Claude Code puede equivocarse, especialmente en código muy específico o en versiones muy recientes de librerías. Siempre verifica el código que te proporciona antes de ejecutarlo. Puedes indicarle que se ha equivocado y explicarle el error para que corrija su respuesta. Nunca confíes en el código de IA sin revisarlo.',
      },
      {
        q: '¿Cómo actualizo Claude Code CLI a la última versión?',
        a: 'Usa el mismo comando de instalación: "npm install -g @anthropic-ai/claude-code". npm actualizará automáticamente a la versión más reciente. Puedes comprobar la versión actual con "claude --version" y ver si hay actualizaciones disponibles.',
      },
    ],
  },
]

function FAQItem({ item }) {
  const [open, setOpen] = useState(false)

  return (
    <div className="border border-claude-border rounded-xl overflow-hidden">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between px-5 py-4 text-left hover:bg-claude-card transition-colors"
      >
        <span className="text-claude-warm font-medium text-sm pr-4">{item.q}</span>
        <ChevronDown
          className={`w-5 h-5 text-claude-muted flex-shrink-0 transition-transform duration-200 ${
            open ? 'rotate-180' : ''
          }`}
        />
      </button>
      {open && (
        <div className="px-5 pb-5 pt-1 bg-claude-card/50 border-t border-claude-border">
          <p className="text-claude-muted text-sm leading-relaxed">{item.a}</p>
        </div>
      )}
    </div>
  )
}

export default function FAQ() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Header */}
      <div className="text-center mb-14">
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-claude-card border border-claude-border rounded-full text-sm text-claude-muted mb-6">
          <HelpCircle className="w-4 h-4 text-claude-orange" />
          <span>Preguntas frecuentes</span>
        </div>
        <h1 className="text-4xl font-extrabold text-claude-warm mb-4">Preguntas Frecuentes</h1>
        <p className="text-claude-muted text-lg max-w-xl mx-auto">
          Respuestas a las dudas más comunes sobre Claude Code en el contexto educativo del IES Doctor Balmis.
        </p>
      </div>

      {/* FAQ Groups */}
      <div className="space-y-12">
        {faqGroups.map((group) => {
          const Icon = group.icon
          return (
            <section key={group.id}>
              <div className="flex items-center gap-3 mb-5">
                <div
                  className={`w-9 h-9 rounded-xl ${group.bgColor} border ${group.borderColor} flex items-center justify-center`}
                >
                  <Icon className={`w-4 h-4 ${group.color}`} />
                </div>
                <h2 className={`text-xl font-bold ${group.color}`}>{group.title}</h2>
              </div>
              <div className="space-y-2">
                {group.items.map((item, i) => (
                  <FAQItem key={i} item={item} />
                ))}
              </div>
            </section>
          )
        })}
      </div>

      {/* CTA */}
      <div className="mt-16 card text-center">
        <div className="w-12 h-12 rounded-2xl bg-claude-orange/15 border border-claude-orange/30 flex items-center justify-center mx-auto mb-4">
          <MessageCircle className="w-6 h-6 text-claude-orange" />
        </div>
        <h3 className="text-claude-warm font-semibold text-xl mb-2">¿Tienes más preguntas?</h3>
        <p className="text-claude-muted text-sm mb-6 max-w-md mx-auto">
          Si tienes dudas que no están resueltas aquí, consulta con tu profesor o explora la documentación oficial
          de Claude Code en el sitio de Anthropic.
        </p>
        <div className="flex flex-wrap gap-3 justify-center">
          <a
            href="https://docs.anthropic.com/en/docs/claude-code/overview"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
          >
            Documentación oficial
          </a>
          <Link to="/" className="btn-secondary">
            Volver al inicio
          </Link>
        </div>
      </div>

      {/* Navigation */}
      <div className="flex items-center justify-start pt-10 mt-8 border-t border-claude-border">
        <Link to="/comandos" className="btn-secondary">
          <ArrowLeft className="w-4 h-4" /> Comandos
        </Link>
      </div>
    </div>
  )
}
