import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import VSCodeExtension from './pages/VSCodeExtension'
import ClaudeMacApp from './pages/ClaudeMacApp'
import Terminal from './pages/Terminal'
import Comandos from './pages/Comandos'
import FAQ from './pages/FAQ'

export default function App() {
  return (
    <BrowserRouter basename="/test-claude-jorge">
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/vscode" element={<VSCodeExtension />} />
            <Route path="/mac-app" element={<ClaudeMacApp />} />
            <Route path="/terminal" element={<Terminal />} />
            <Route path="/comandos" element={<Comandos />} />
            <Route path="/faq" element={<FAQ />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  )
}
