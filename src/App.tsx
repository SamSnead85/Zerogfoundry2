import { Routes, Route } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import Navigation from './components/layout/Navigation'
import Footer from './components/layout/Footer'
import CinematicBackground from './components/ui/CinematicBackground'
import { ScrollProgress } from './components/ui/ScrollProgress'
import HomePage from './pages/HomePage'
import CareersPage from './pages/CareersPage'
import VenturesPage from './pages/VenturesPage'
import ApproachPage from './pages/ApproachPage'
import InsightsPage from './pages/InsightsPage'
import ContactPage from './pages/ContactPage'
import WorkPage from './pages/WorkPage'
import AboutPage from './pages/AboutPage'


function App() {
  return (
    <>
      <Helmet>
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "Zero G Foundry",
            "description": "We engineer intelligence that transforms enterprises. Enterprise AI consulting.",
            "url": "https://zerogfoundry.com",
            "logo": "https://zerogfoundry.com/logo.png",
            "sameAs": [
              "https://linkedin.com/company/zerogfoundry",
              "https://twitter.com/zerogfoundry",
              "https://github.com/zerogfoundry"
            ]
          })}
        </script>
      </Helmet>
      <CinematicBackground />
      <ScrollProgress />
      <div className="min-h-screen flex flex-col relative z-10">
        <Navigation />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/careers" element={<CareersPage />} />
            <Route path="/ventures" element={<VenturesPage />} />
            <Route path="/approach" element={<ApproachPage />} />
            <Route path="/insights" element={<InsightsPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/work" element={<WorkPage />} />
            <Route path="/about" element={<AboutPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </>
  )
}

export default App

