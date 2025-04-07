import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import Accueil from './pages/Accueil'
import Infos from './pages/Infos'
import Menu from './pages/Menu'
import Quiz from './pages/Quiz'
import Duos from './pages/Duos'
import Galerie from './pages/Galerie'
import LivreOr from './pages/LivreOr'

export default function App() {
  return (
    <Router>
      <div style={{ backgroundColor: '#e2ac96', minHeight: '100vh', color: '#c16140', fontFamily: "'Playfair Display', serif", padding: '1rem' }}>
        <h1 style={{ textAlign: 'center' }}>💞 Maéva & Grégoire 💞</h1>
        <nav style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '1rem', marginBottom: '2rem' }}>
          <Link to="/">Accueil</Link>
          <Link to="/infos">Infos</Link>
          <Link to="/menu">Menu</Link>
          <Link to="/quiz">Quiz</Link>
          <Link to="/duos">Jeu des duos</Link>
          <Link to="/galerie">Galerie</Link>
          <Link to="/livreor">Livre d’or</Link>
        </nav>
        <Routes>
          <Route path="/" element={<Accueil />} />
          <Route path="/infos" element={<Infos />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/quiz" element={<Quiz />} />
          <Route path="/duos" element={<Duos />} />
          <Route path="/galerie" element={<Galerie />} />
          <Route path="/livreor" element={<LivreOr />} />
        </Routes>
      </div>
    </Router>
  )
}
