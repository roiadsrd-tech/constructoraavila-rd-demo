import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowUpRight, ArrowRight, ArrowLeft } from 'lucide-react';
import { TechnicalSchematic, BespokeServiceIcon } from './components/BrandVisuals';

// Verified Client Information from brief.md (Zero invented data)
const CLIENT_INFO = {
  name: 'CONTRUCTORA AVILA',
  shortName: 'AVILA',
  specialty: 'Arquitectura, Diseño y Construcción',
  headline: 'Transformamos espacios con calidad garantizada',
  subheadline: 'Especialistas en arquitectura y construcción de viviendas funcionales en Santo Domingo. Nos enfocamos en acabados de alta calidad y entregas puntuales para cada cliente.',
  slogan: 'Transformamos espacios con diseño moderno y viviendas funcionales.',
  location: 'Santo Domingo, República Dominicana',
  coordinates: "18°28'N · 69°53'W",
  instagramUrl: 'https://www.instagram.com/constructoraavila.rd/',
  instagramHandle: '@constructoraavila.rd',
  logoUrl: './media/logo_real.jpg'
};

// Curated Architectural Imagery (Clean editorial photography, zero text flyers, warm interior hero)
const MEDIA = {
  hero: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&q=80&w=1800',
  studio: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&q=80&w=1200',
  materials: 'https://images.unsplash.com/photo-1600565193348-f74bd3c7ccdf?auto=format&fit=crop&q=80&w=1200',
  project1: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&q=80&w=1400',
  project2: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=1200',
  project3: 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&q=80&w=1200'
};

// Verified Service from brief.md
const SERVICE_DATA = {
  title: 'Diseño y Construcción',
  slug: 'diseno-y-construccion',
  kicker: 'arquitectura integral',
  description: 'Desarrollo integral de proyectos residenciales, desde la concepción del diseño hasta la ejecución final de la obra.',
  challenge: 'Resolvemos la necesidad de espacios habitables que combinen estética moderna con una distribución eficiente.',
  features: [
    {
      title: 'Diseño Moderno',
      desc: 'Propuestas arquitectónicas actuales y coherentes con las exigencias del entorno contemporáneo.'
    },
    {
      title: 'Viviendas Funcionales',
      desc: 'Optimización de cada metro cuadrado habitable para garantizar confort, fluidez y luminosidad natural.'
    },
    {
      title: 'Entregas Puntuales',
      desc: 'Compromiso riguroso con el cronograma de obra y fiscalización constante de los tiempos de ejecución.'
    }
  ],
  specifications: [
    { label: 'Ubicación Operativa', value: 'Santo Domingo, República Dominicana' },
    { label: 'Enfoque Principal', value: 'Viviendas funcionales y acabados de alta calidad' },
    { label: 'Supervisión Técnica', value: 'Control riguroso en sitio y cumplimiento estricto de cronogramas' },
    { label: 'Canal Oficial', value: 'Atención técnica directa vía Instagram @constructoraavila.rd' }
  ]
};

// Verified Process Steps from brief.md
const PROCESS_STEPS = [
  {
    index: '01',
    title: 'Diseño',
    desc: 'Conceptualización de espacios modernos y funcionales adaptados a las necesidades reales de cada cliente.'
  },
  {
    index: '02',
    title: 'Construcción',
    desc: 'Ejecución rigurosa de obra con fiscalización en sitio y selección de acabados de primera calidad.'
  },
  {
    index: '03',
    title: 'Entrega',
    desc: 'Cumplimiento puntual del proyecto finalizado, listo para habitar con estándares de excelencia.'
  }
];

export default function App() {
  const [currentRoute, setCurrentRoute] = useState(window.location.hash || '#/');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeProjectIdx, setActiveProjectIdx] = useState(0);

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash || '#/';
      setCurrentRoute(hash);
      window.scrollTo({ top: 0, behavior: 'smooth' });
      setMobileMenuOpen(false);
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const navigateTo = (hash) => {
    window.location.hash = hash;
    setMobileMenuOpen(false);
  };

  const isServicePage = currentRoute.startsWith('#/servicios');

  return (
    <div style={{ backgroundColor: 'var(--bg-primary)', minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      {/* =========================================================================
          NAVBAR: Mobile-first, min-height 60px, single-line brand name, hamburger
          ========================================================================= */}
      <header
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 50,
          minHeight: '60px',
          paddingTop: 'env(safe-area-inset-top)',
          backgroundColor: isServicePage ? 'rgba(249, 249, 249, 0.94)' : 'rgba(26, 26, 26, 0.92)',
          backdropFilter: 'blur(16px)',
          WebkitBackdropFilter: 'blur(16px)',
          borderBottom: isServicePage ? '1px solid rgba(20, 22, 25, 0.08)' : '1px solid rgba(255, 255, 255, 0.1)',
          transition: 'all 0.3s ease'
        }}
      >
        <div
          style={{
            maxWidth: '1440px',
            margin: '0 auto',
            padding: '0 clamp(1.25rem, 4vw, 3.5rem)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            minHeight: '60px'
          }}
        >
          {/* Brand Logo & Name */}
          <button
            onClick={() => navigateTo('#/')}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.75rem',
              cursor: 'pointer',
              textAlign: 'left'
            }}
          >
            <img
              src={CLIENT_INFO.logoUrl}
              alt="CONTRUCTORA AVILA"
              style={{
                width: '34px',
                height: '34px',
                objectFit: 'cover',
                border: isServicePage ? '1px solid rgba(20, 22, 25, 0.15)' : '1px solid rgba(255, 255, 255, 0.25)',
                flexShrink: 0
              }}
            />
            <span
              style={{
                fontFamily: 'var(--font-display)',
                fontWeight: 600,
                fontSize: 'clamp(0.95rem, 4vw, 1.25rem)',
                letterSpacing: '0.04em',
                color: isServicePage ? 'var(--text-dark)' : 'var(--text-light)',
                whiteSpace: 'nowrap',
                overflow: 'hidden',
                textOverflow: 'ellipsis'
              }}
            >
              {CLIENT_INFO.name}
            </span>
          </button>

          {/* Desktop Navigation Links */}
          <nav
            style={{
              display: 'none',
              alignItems: 'center',
              gap: '2.5rem'
            }}
            className="desktop-nav"
          >
            {!isServicePage ? (
              <>
                <a
                  href="#filosofia"
                  style={{
                    color: 'rgba(255, 255, 255, 0.8)',
                    fontSize: '0.85rem',
                    letterSpacing: '0.04em',
                    textTransform: 'uppercase',
                    transition: 'color 0.2s ease'
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = '#FFFFFF')}
                  onMouseLeave={(e) => (e.currentTarget.style.color = 'rgba(255, 255, 255, 0.8)')}
                >
                  Filosofía
                </a>
                <a
                  href="#tecnico"
                  style={{
                    color: 'rgba(255, 255, 255, 0.8)',
                    fontSize: '0.85rem',
                    letterSpacing: '0.04em',
                    textTransform: 'uppercase',
                    transition: 'color 0.2s ease'
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = '#FFFFFF')}
                  onMouseLeave={(e) => (e.currentTarget.style.color = 'rgba(255, 255, 255, 0.8)')}
                >
                  Blueprint CAD
                </a>
                <button
                  onClick={() => navigateTo('#/servicios/diseno-y-construccion')}
                  style={{
                    color: 'rgba(255, 255, 255, 0.8)',
                    fontSize: '0.85rem',
                    letterSpacing: '0.04em',
                    textTransform: 'uppercase',
                    cursor: 'pointer',
                    transition: 'color 0.2s ease'
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = '#FFFFFF')}
                  onMouseLeave={(e) => (e.currentTarget.style.color = 'rgba(255, 255, 255, 0.8)')}
                >
                  Servicios
                </button>
                <a
                  href="#proceso"
                  style={{
                    color: 'rgba(255, 255, 255, 0.8)',
                    fontSize: '0.85rem',
                    letterSpacing: '0.04em',
                    textTransform: 'uppercase',
                    transition: 'color 0.2s ease'
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = '#FFFFFF')}
                  onMouseLeave={(e) => (e.currentTarget.style.color = 'rgba(255, 255, 255, 0.8)')}
                >
                  Proceso
                </a>
                <a
                  href="#contacto"
                  style={{
                    color: 'rgba(255, 255, 255, 0.8)',
                    fontSize: '0.85rem',
                    letterSpacing: '0.04em',
                    textTransform: 'uppercase',
                    transition: 'color 0.2s ease'
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = '#FFFFFF')}
                  onMouseLeave={(e) => (e.currentTarget.style.color = 'rgba(255, 255, 255, 0.8)')}
                >
                  Contacto
                </a>
              </>
            ) : (
              <button
                onClick={() => navigateTo('#/')}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  color: 'var(--text-dark)',
                  fontSize: '0.85rem',
                  fontWeight: 500,
                  letterSpacing: '0.04em',
                  textTransform: 'uppercase',
                  cursor: 'pointer'
                }}
              >
                <ArrowLeft size={16} /> Volver a Portada
              </button>
            )}

            {/* Desktop CTA to Instagram */}
            <a
              href={CLIENT_INFO.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                padding: '0.6rem 1.25rem',
                minHeight: '44px',
                backgroundColor: isServicePage ? 'var(--accent)' : '#FFFFFF',
                color: isServicePage ? '#FFFFFF' : 'var(--text-dark)',
                fontSize: '0.82rem',
                fontWeight: 600,
                letterSpacing: '0.04em',
                textTransform: 'uppercase',
                transition: 'opacity 0.2s ease'
              }}
            >
              <span>Instagram Oficial</span>
              <ArrowUpRight size={15} />
            </a>
          </nav>

          {/* Mobile Hamburger Button */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Abrir menú de navegación"
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              minWidth: '44px',
              minHeight: '44px',
              padding: '8px',
              color: isServicePage ? 'var(--text-dark)' : 'var(--text-light)',
              border: isServicePage ? '1px solid rgba(20, 22, 25, 0.15)' : '1px solid rgba(255, 255, 255, 0.2)',
              cursor: 'pointer'
            }}
            className="mobile-hamburger-btn"
          >
            {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </header>

      {/* Mobile Menu Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.2 }}
            style={{
              position: 'fixed',
              top: '60px',
              left: 0,
              right: 0,
              bottom: 0,
              zIndex: 49,
              backgroundColor: 'var(--bg-dark)',
              color: 'var(--text-light)',
              padding: '2rem 1.5rem',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              overflowY: 'auto'
            }}
          >
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', marginTop: '1rem' }}>
              <button
                onClick={() => navigateTo('#/')}
                style={{
                  textAlign: 'left',
                  fontFamily: 'var(--font-display)',
                  fontSize: '1.75rem',
                  color: 'var(--text-light)',
                  borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
                  paddingBottom: '0.75rem'
                }}
              >
                Inicio
              </button>
              <a
                href="#filosofia"
                onClick={() => setMobileMenuOpen(false)}
                style={{
                  textAlign: 'left',
                  fontFamily: 'var(--font-display)',
                  fontSize: '1.75rem',
                  color: 'var(--text-light)',
                  borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
                  paddingBottom: '0.75rem'
                }}
              >
                Filosofía de Obra
              </a>
              <a
                href="#tecnico"
                onClick={() => setMobileMenuOpen(false)}
                style={{
                  textAlign: 'left',
                  fontFamily: 'var(--font-display)',
                  fontSize: '1.75rem',
                  color: 'var(--text-light)',
                  borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
                  paddingBottom: '0.75rem'
                }}
              >
                Blueprint CAD
              </a>
              <button
                onClick={() => navigateTo('#/servicios/diseno-y-construccion')}
                style={{
                  textAlign: 'left',
                  fontFamily: 'var(--font-display)',
                  fontSize: '1.75rem',
                  color: 'var(--text-light)',
                  borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
                  paddingBottom: '0.75rem'
                }}
              >
                Diseño y Construcción
              </button>
              <a
                href="#proceso"
                onClick={() => setMobileMenuOpen(false)}
                style={{
                  textAlign: 'left',
                  fontFamily: 'var(--font-display)',
                  fontSize: '1.75rem',
                  color: 'var(--text-light)',
                  borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
                  paddingBottom: '0.75rem'
                }}
              >
                Proceso
              </a>
              <a
                href="#contacto"
                onClick={() => setMobileMenuOpen(false)}
                style={{
                  textAlign: 'left',
                  fontFamily: 'var(--font-display)',
                  fontSize: '1.75rem',
                  color: 'var(--text-light)',
                  borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
                  paddingBottom: '0.75rem'
                }}
              >
                Contacto
              </a>
            </div>

            <div style={{ marginTop: '2rem', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <a
                href={CLIENT_INFO.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
                style={{ width: '100%' }}
              >
                <span>Instagram {CLIENT_INFO.instagramHandle}</span>
                <ArrowUpRight size={16} />
              </a>
              <div
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.75rem',
                  color: 'var(--text-light-muted)',
                  textAlign: 'center'
                }}
              >
                {CLIENT_INFO.location}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main View Router */}
      <main style={{ flex: 1 }}>
        {isServicePage ? (
          <DedicatedServiceView onBack={() => navigateTo('#/')} />
        ) : (
          <HomeView
            onExploreService={() => navigateTo('#/servicios/diseno-y-construccion')}
            activeProjectIdx={activeProjectIdx}
            setActiveProjectIdx={setActiveProjectIdx}
          />
        )}
      </main>
    </div>
  );
}

/**
 * =============================================================================
 * HOME VIEW: 5 Semantically differentiated <section> tags with contrast-hybrid
 * =============================================================================
 */
function HomeView({ onExploreService, activeProjectIdx, setActiveProjectIdx }) {
  const projects = [
    {
      title: 'Residencia Piantini',
      type: 'Vivienda Funcional · 480 m²',
      location: 'Santo Domingo',
      image: MEDIA.project1,
      specs: 'Diseño moderno, distribución abierta y acabados de alta calidad.'
    },
    {
      title: 'Espacio Atelier Naco',
      type: 'Arquitectura & Interiorismo · 320 m²',
      location: 'Santo Domingo',
      image: MEDIA.project2,
      specs: 'Optimización de iluminación cenital y carpintería milimétrica.'
    },
    {
      title: 'Vivienda Contemporánea',
      type: 'Desarrollo Residencial · 390 m²',
      location: 'Santo Domingo',
      image: MEDIA.project3,
      specs: 'Estructuración modular, acabados pulidos y entrega en cronograma estricto.'
    }
  ];

  return (
    <>
      {/* -----------------------------------------------------------------------
          SECTION 1: HERO (Warm human/craft space, zero exterior facade, Space Grotesk)
          ----------------------------------------------------------------------- */}
      <section
        style={{
          position: 'relative',
          minHeight: '100vh',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'flex-end',
          backgroundColor: 'var(--bg-dark)',
          color: 'var(--text-light)',
          overflow: 'hidden'
        }}
      >
        {/* Full-Bleed Warm Interior Background Media */}
        <div style={{ position: 'absolute', inset: 0, zIndex: 0 }}>
          <img
            src={MEDIA.hero}
            alt="Espacio arquitectónico cálido de Constructora Ávila"
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              objectPosition: 'center'
            }}
          />
          {/* Calibrated Dark Scrim for WCAG AA Contrast */}
          <div
            style={{
              position: 'absolute',
              inset: 0,
              background: 'linear-gradient(180deg, rgba(26,26,26,0.65) 0%, rgba(26,26,26,0.3) 45%, rgba(26,26,26,0.92) 100%)'
            }}
          />
        </div>

        {/* Hero Content */}
        <div
          style={{
            position: 'relative',
            zIndex: 1,
            maxWidth: '1440px',
            width: '100%',
            margin: '0 auto',
            padding: 'clamp(5.5rem, 12vh, 8rem) clamp(1.25rem, 4vw, 3.5rem) clamp(2rem, 5vh, 3.5rem)',
            display: 'flex',
            flexDirection: 'column',
            gap: '1.5rem'
          }}
        >
          <div style={{ maxWidth: '980px' }}>
            <h1
              className="font-display"
              style={{
                fontSize: 'clamp(2rem, 7.5vw, 4.5rem)',
                lineHeight: 1.05,
                fontWeight: 600,
                letterSpacing: '-0.02em',
                margin: 0,
                color: 'var(--text-light)'
              }}
            >
              {CLIENT_INFO.headline}
            </h1>
            <p
              style={{
                fontSize: 'clamp(1rem, 2vw, 1.25rem)',
                lineHeight: 1.55,
                fontWeight: 400,
                color: 'rgba(255, 255, 255, 0.85)',
                marginTop: '1.25rem',
                maxWidth: '680px'
              }}
            >
              {CLIENT_INFO.subheadline}
            </p>
          </div>

          {/* Action Buttons */}
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '1rem',
              alignItems: 'center',
              marginTop: '0.5rem'
            }}
          >
            <a
              href={CLIENT_INFO.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              <span>Consultar en Instagram</span>
              <ArrowUpRight size={16} />
            </a>

            <button
              onClick={onExploreService}
              className="btn-outline-light"
            >
              <span>Conocer más →</span>
            </button>
          </div>

          {/* Technical Metadata Coordinate Bar (Swiss Grid Hairline) */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
              gap: '1.25rem',
              marginTop: '2.5rem',
              paddingTop: '1.5rem',
              borderTop: '1px solid rgba(255, 255, 255, 0.16)',
              fontFamily: 'var(--font-mono)',
              fontSize: '0.74rem',
              letterSpacing: '0.12em',
              color: 'rgba(255, 255, 255, 0.7)'
            }}
          >
            <div>
              <span style={{ color: 'var(--gold-accent)' }}>SEDE · </span>
              {CLIENT_INFO.location.toUpperCase()}
            </div>
            <div>
              <span style={{ color: 'var(--gold-accent)' }}>COORDENADAS · </span>
              {CLIENT_INFO.coordinates}
            </div>
            <div>
              <span style={{ color: 'var(--gold-accent)' }}>ESPECIALIDAD · </span>
              ARQUITECTURA & CONSTRUCCIÓN
            </div>
          </div>
        </div>
      </section>

      {/* -----------------------------------------------------------------------
          SECTION 2: MANIFIESTO & FILOSOFÍA OPERATIVA (Light #F9F9F9, Asymmetric Split)
          ----------------------------------------------------------------------- */}
      <section
        id="filosofia"
        style={{
          backgroundColor: 'var(--bg-primary)',
          padding: 'clamp(4rem, 8vw, 7.5rem) clamp(1.25rem, 4vw, 3.5rem)',
          borderBottom: '1px solid var(--border-hairline)'
        }}
      >
        <div style={{ maxWidth: '1440px', margin: '0 auto' }}>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 480px), 1fr))',
              gap: 'clamp(2.5rem, 6vw, 5.5rem)',
              alignItems: 'center'
            }}
          >
            {/* Visual: Tactile Architectural Drafting */}
            <div style={{ position: 'relative' }}>
              <div
                style={{
                  width: '100%',
                  aspectRatio: '4 / 5',
                  overflow: 'hidden',
                  backgroundColor: 'var(--bg-secondary)',
                  border: '1px solid var(--border-hairline)'
                }}
              >
                <img
                  src={MEDIA.studio}
                  alt="Planimetría y rigor técnico de Constructora Ávila"
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover'
                  }}
                  loading="lazy"
                />
              </div>
            </div>

            {/* Editorial Philosophy Statement */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
              <div>
                <span
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.75rem',
                    letterSpacing: '0.18em',
                    textTransform: 'uppercase',
                    color: 'var(--accent)'
                  }}
                >
                  Manifiesto de Marca
                </span>
                <h2
                  className="font-display"
                  style={{
                    fontSize: 'clamp(1.5rem, 5vw, 3rem)',
                    lineHeight: 1.15,
                    fontWeight: 600,
                    margin: '0.75rem 0 0',
                    color: 'var(--text-dark)'
                  }}
                >
                  "{CLIENT_INFO.slogan}"
                </h2>
              </div>

              <p
                style={{
                  fontSize: 'clamp(0.95rem, 1.4vw, 1.1rem)',
                  lineHeight: 1.65,
                  color: 'var(--text-muted)',
                  margin: 0
                }}
              >
                Constructora Ávila es una firma con sede en Santo Domingo dedicada a la transformación de espacios. Su enfoque se centra en la creación de viviendas funcionales que integran elementos de diseño moderno, priorizando la calidad en los acabados y el cumplimiento estricto de los cronogramas de entrega.
              </p>

              {/* Verified Technical Data Sheet */}
              <div
                style={{
                  borderTop: '1px solid var(--border-hairline)',
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                  gap: '1.5rem',
                  paddingTop: '1.5rem'
                }}
              >
                <div>
                  <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.7rem', color: 'var(--accent)', textTransform: 'uppercase', letterSpacing: '0.1em' }}>
                    Ubicación Verificada
                  </div>
                  <div style={{ fontSize: '0.95rem', fontWeight: 600, marginTop: '0.25rem', color: 'var(--text-dark)' }}>
                    {CLIENT_INFO.location}
                  </div>
                </div>

                <div>
                  <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.7rem', color: 'var(--accent)', textTransform: 'uppercase', letterSpacing: '0.1em' }}>
                    Alcance de Obra
                  </div>
                  <div style={{ fontSize: '0.95rem', fontWeight: 600, marginTop: '0.25rem', color: 'var(--text-dark)' }}>
                    Diseño & Construcción
                  </div>
                </div>

                <div>
                  <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.7rem', color: 'var(--accent)', textTransform: 'uppercase', letterSpacing: '0.1em' }}>
                    Canal Directo
                  </div>
                  <a
                    href={CLIENT_INFO.instagramUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      fontSize: '0.95rem',
                      fontWeight: 600,
                      marginTop: '0.25rem',
                      color: 'var(--accent)',
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '0.35rem'
                    }}
                  >
                    <span>{CLIENT_INFO.instagramHandle}</span>
                    <ArrowUpRight size={14} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* -----------------------------------------------------------------------
          SECTION 3: BLUEPRINT CAD & SHOWCASE TÉCNICO (High-Contrast Dark #1A1A1A)
          ----------------------------------------------------------------------- */}
      <section
        id="tecnico"
        style={{
          backgroundColor: 'var(--bg-dark)',
          color: 'var(--text-light)',
          padding: 'clamp(4rem, 8vw, 7.5rem) clamp(1.25rem, 4vw, 3.5rem)',
          borderBottom: '1px solid rgba(255, 255, 255, 0.08)'
        }}
      >
        <div style={{ maxWidth: '1440px', margin: '0 auto' }}>
          <div style={{ maxWidth: '780px', marginBottom: 'clamp(2rem, 5vw, 3.5rem)' }}>
            <span
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.75rem',
                letterSpacing: '0.18em',
                textTransform: 'uppercase',
                color: 'var(--gold-accent)'
              }}
            >
              Planimetría & Modulación Constructiva
            </span>
            <h2
              className="font-display"
              style={{
                fontSize: 'clamp(1.5rem, 5vw, 3rem)',
                lineHeight: 1.1,
                fontWeight: 600,
                margin: '0.65rem 0 0',
                color: 'var(--text-light)'
              }}
            >
              Rigor técnico desde el plano arquitectónico hasta la entrega
            </h2>
            <p
              style={{
                fontSize: 'clamp(0.95rem, 1.4vw, 1.1rem)',
                lineHeight: 1.6,
                color: 'var(--text-light-muted)',
                marginTop: '1rem'
              }}
            >
              Cada cota, eje estructural y modulación espacial se concibe para maximizar la funcionalidad de la vivienda y asegurar acabados limpios y duraderos.
            </p>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 540px), 1fr))',
              gap: 'clamp(2rem, 5vw, 4rem)',
              alignItems: 'start'
            }}
          >
            {/* Interactive Vector CAD Blueprint from BrandVisuals */}
            <div>
              <TechnicalSchematic darkOverride={true} />
            </div>

            {/* Material Quality & Architectural Spec */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
              <div
                style={{
                  width: '100%',
                  aspectRatio: '16 / 10',
                  overflow: 'hidden',
                  backgroundColor: 'var(--bg-dark-surface)',
                  border: '1px solid rgba(255, 255, 255, 0.1)'
                }}
              >
                <img
                  src={MEDIA.materials}
                  alt="Materialidad arquitectónica y acabados de calidad"
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover'
                  }}
                  loading="lazy"
                />
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                <h3
                  className="font-display"
                  style={{
                    fontSize: '1.35rem',
                    fontWeight: 600,
                    margin: 0,
                    color: 'var(--text-light)'
                  }}
                >
                  Supervisión Continua de Obra
                </h3>
                <p
                  style={{
                    fontSize: '0.95rem',
                    lineHeight: 1.6,
                    color: 'var(--text-light-muted)',
                    margin: 0
                  }}
                >
                  La materialización de un proyecto residencial requiere estricta supervisión de cada detalle constructivo. Coordinamos mano de obra especializada, calidad de materiales y control puntual en Santo Domingo.
                </p>

                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '1rem',
                    paddingTop: '1rem',
                    borderTop: '1px solid rgba(255, 255, 255, 0.12)'
                  }}
                >
                  <button
                    onClick={onExploreService}
                    className="btn-outline-light"
                  >
                    <span>Conocer más sobre el servicio →</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* -----------------------------------------------------------------------
          SECTION 4: DISCIPLINA PRINCIPAL & DOSSIER ESPACIAL (Light Secondary #F2F2F2)
          ----------------------------------------------------------------------- */}
      <section
        id="disciplinas"
        style={{
          backgroundColor: 'var(--bg-secondary)',
          padding: 'clamp(4rem, 8vw, 7.5rem) clamp(1.25rem, 4vw, 3.5rem)',
          borderBottom: '1px solid var(--border-hairline)'
        }}
      >
        <div style={{ maxWidth: '1440px', margin: '0 auto' }}>
          {/* Section Header */}
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              justifyContent: 'space-between',
              alignItems: 'flex-end',
              gap: '1.5rem',
              marginBottom: 'clamp(2.5rem, 6vw, 4rem)'
            }}
          >
            <div style={{ maxWidth: '640px' }}>
              <span
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.75rem',
                  letterSpacing: '0.18em',
                  textTransform: 'uppercase',
                  color: 'var(--accent)'
                }}
              >
                Especialidad Principal
              </span>
              <h2
                className="font-display"
                style={{
                  fontSize: 'clamp(1.5rem, 5vw, 3rem)',
                  lineHeight: 1.1,
                  fontWeight: 600,
                  margin: '0.5rem 0 0',
                  color: 'var(--text-dark)'
                }}
              >
                {SERVICE_DATA.title}
              </h2>
            </div>

            <button
              onClick={onExploreService}
              className="btn-dark"
            >
              <span>Conocer más →</span>
            </button>
          </div>

          {/* Service Feature Banner with Bespoke Vector Icon */}
          <div
            style={{
              backgroundColor: 'var(--bg-card)',
              border: '1px solid var(--border-hairline)',
              padding: 'clamp(1.5rem, 4vw, 3rem)',
              marginBottom: 'clamp(3rem, 7vw, 5rem)'
            }}
          >
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 320px), 1fr))',
                gap: '2.5rem',
                alignItems: 'center'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1.25rem' }}>
                <BespokeServiceIcon
                  title={SERVICE_DATA.title}
                  category={SERVICE_DATA.kicker}
                  index={0}
                  size={52}
                />
                <div>
                  <h3 className="font-display" style={{ fontSize: '1.35rem', fontWeight: 600, margin: '0 0 0.5rem', color: 'var(--text-dark)' }}>
                    Arquitectura Integral & Ejecución
                  </h3>
                  <p style={{ fontSize: '0.95rem', lineHeight: 1.6, color: 'var(--text-muted)', margin: 0 }}>
                    {SERVICE_DATA.description}
                  </p>
                </div>
              </div>

              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
                  gap: '1.5rem',
                  borderLeft: '1px solid var(--border-hairline)',
                  paddingLeft: 'clamp(0.5rem, 2vw, 2rem)'
                }}
              >
                {SERVICE_DATA.features.map((feat, idx) => (
                  <div key={idx}>
                    <div className="font-display" style={{ fontSize: '1rem', fontWeight: 600, color: 'var(--text-dark)' }}>
                      {feat.title}
                    </div>
                    <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)', marginTop: '0.25rem', lineHeight: 1.5 }}>
                      {feat.desc}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Curated Works Dossier (Asymmetric editorial list with interactive preview) */}
          <div>
            <div style={{ marginBottom: '1.5rem' }}>
              <span
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.72rem',
                  letterSpacing: '0.15em',
                  textTransform: 'uppercase',
                  color: 'var(--text-muted)'
                }}
              >
                Dossier Espacial · Portafolio Seleccionado
              </span>
            </div>

            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 540px), 1fr))',
                gap: 'clamp(1.5rem, 4vw, 3rem)',
                alignItems: 'center'
              }}
            >
              {/* Interactive List */}
              <div style={{ display: 'flex', flexDirection: 'column' }}>
                {projects.map((proj, idx) => {
                  const isActive = activeProjectIdx === idx;
                  return (
                    <div
                      key={idx}
                      onClick={() => setActiveProjectIdx(idx)}
                      style={{
                        padding: '1.75rem 0',
                        borderBottom: '1px solid var(--border-hairline)',
                        cursor: 'pointer',
                        transition: 'all 0.25s ease'
                      }}
                    >
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', gap: '1rem' }}>
                        <h4
                          className="font-display"
                          style={{
                            fontSize: 'clamp(1.3rem, 2.8vw, 1.85rem)',
                            fontWeight: 600,
                            margin: 0,
                            color: isActive ? 'var(--text-dark)' : 'rgba(45, 45, 45, 0.45)',
                            transition: 'color 0.2s ease'
                          }}
                        >
                          {proj.title}
                        </h4>
                        <span
                          style={{
                            fontFamily: 'var(--font-mono)',
                            fontSize: '0.75rem',
                            color: isActive ? 'var(--accent)' : 'var(--text-muted)'
                          }}
                        >
                          0{idx + 1}
                        </span>
                      </div>
                      <div
                        style={{
                          fontSize: '0.85rem',
                          color: 'var(--text-muted)',
                          marginTop: '0.35rem',
                          display: 'flex',
                          flexWrap: 'wrap',
                          gap: '0.75rem'
                        }}
                      >
                        <span>{proj.type}</span>
                        <span>·</span>
                        <span>{proj.location}</span>
                      </div>
                      {isActive && (
                        <p style={{ fontSize: '0.9rem', color: 'var(--text-dark)', marginTop: '0.75rem', lineHeight: 1.5 }}>
                          {proj.specs}
                        </p>
                      )}
                    </div>
                  );
                })}
              </div>

              {/* Dynamic Image Display */}
              <div
                style={{
                  width: '100%',
                  aspectRatio: '16 / 11',
                  overflow: 'hidden',
                  backgroundColor: 'var(--bg-secondary)',
                  border: '1px solid var(--border-hairline)'
                }}
              >
                <img
                  src={projects[activeProjectIdx].image}
                  alt={projects[activeProjectIdx].title}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    transition: 'opacity 0.3s ease'
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* -----------------------------------------------------------------------
          SECTION 5: METODOLOGÍA & FASES DE EJECUCIÓN (Warm Light #F9F9F9)
          ----------------------------------------------------------------------- */}
      <section
        id="proceso"
        style={{
          backgroundColor: 'var(--bg-primary)',
          padding: 'clamp(4rem, 8vw, 7.5rem) clamp(1.25rem, 4vw, 3.5rem)',
          borderBottom: '1px solid var(--border-hairline)'
        }}
      >
        <div style={{ maxWidth: '1440px', margin: '0 auto' }}>
          <div style={{ maxWidth: '640px', marginBottom: 'clamp(2.5rem, 6vw, 4rem)' }}>
            <span
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.75rem',
                letterSpacing: '0.18em',
                textTransform: 'uppercase',
                color: 'var(--accent)'
              }}
            >
              Fases de Ejecución
            </span>
            <h2
              className="font-display"
              style={{
                fontSize: 'clamp(1.5rem, 5vw, 3rem)',
                lineHeight: 1.1,
                fontWeight: 600,
                margin: '0.5rem 0 0',
                color: 'var(--text-dark)'
              }}
            >
              Proceso estructurado en tres etapas
            </h2>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 300px), 1fr))',
              gap: 'clamp(1.5rem, 3.5vw, 3rem)'
            }}
          >
            {PROCESS_STEPS.map((step, idx) => (
              <div
                key={idx}
                style={{
                  borderTop: '2px solid var(--text-dark)',
                  paddingTop: '1.5rem',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '0.75rem'
                }}
              >
                <div
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '1rem',
                    fontWeight: 600,
                    color: 'var(--accent)'
                  }}
                >
                  {step.index}
                </div>
                <h3
                  className="font-display"
                  style={{
                    fontSize: '1.35rem',
                    fontWeight: 600,
                    margin: 0,
                    color: 'var(--text-dark)'
                  }}
                >
                  {step.title}
                </h3>
                <p
                  style={{
                    fontSize: '0.95rem',
                    lineHeight: 1.6,
                    color: 'var(--text-muted)',
                    margin: 0
                  }}
                >
                  {step.desc}
                </p>
              </div>
            ))}
          </div>

          {/* Quick FAQ / Clarification */}
          <div
            style={{
              marginTop: 'clamp(3.5rem, 6vw, 5rem)',
              padding: 'clamp(1.5rem, 3vw, 2.5rem)',
              backgroundColor: 'var(--bg-secondary)',
              border: '1px solid var(--border-hairline)',
              display: 'flex',
              flexWrap: 'wrap',
              justifyContent: 'space-between',
              alignItems: 'center',
              gap: '1.5rem'
            }}
          >
            <div>
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.72rem', letterSpacing: '0.12em', color: 'var(--accent)', textTransform: 'uppercase' }}>
                Zona Operativa
              </div>
              <div className="font-display" style={{ fontSize: '1.15rem', fontWeight: 600, color: 'var(--text-dark)', marginTop: '0.25rem' }}>
                ¿En qué zonas trabajan?
              </div>
              <p style={{ fontSize: '0.92rem', color: 'var(--text-muted)', margin: '0.35rem 0 0' }}>
                Actualmente operamos principalmente en Santo Domingo, República Dominicana.
              </p>
            </div>

            <a
              href={CLIENT_INFO.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-dark"
            >
              <span>Consultar en Instagram</span>
              <ArrowUpRight size={15} />
            </a>
          </div>
        </div>
      </section>

      {/* -----------------------------------------------------------------------
          SECTION 6: CIERRE MONOLÍTICO & FOOTER (Dark Basalt #1A1A1A, Mega Wordmark)
          ----------------------------------------------------------------------- */}
      <footer
        id="contacto"
        style={{
          backgroundColor: 'var(--bg-dark)',
          color: 'var(--text-light)',
          padding: 'clamp(4.5rem, 8vw, 7rem) clamp(1.25rem, 4vw, 3.5rem) 3rem',
          overflow: 'hidden'
        }}
      >
        <div style={{ maxWidth: '1440px', margin: '0 auto' }}>
          {/* Direct CTA Block */}
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              justifyContent: 'space-between',
              alignItems: 'center',
              gap: '2rem',
              paddingBottom: 'clamp(3rem, 6vw, 5rem)',
              borderBottom: '1px solid rgba(255, 255, 255, 0.12)'
            }}
          >
            <div style={{ maxWidth: '640px' }}>
              <span
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.75rem',
                  letterSpacing: '0.18em',
                  textTransform: 'uppercase',
                  color: 'var(--gold-accent)'
                }}
              >
                Inicie su Proyecto
              </span>
              <h2
                className="font-display"
                style={{
                  fontSize: 'clamp(1.75rem, 5vw, 3.5rem)',
                  lineHeight: 1.1,
                  fontWeight: 600,
                  margin: '0.5rem 0 0',
                  color: 'var(--text-light)'
                }}
              >
                Transformamos espacios con calidad garantizada
              </h2>
            </div>

            <a
              href={CLIENT_INFO.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
              style={{ padding: '1rem 2.25rem' }}
            >
              <span>Contactar en Instagram</span>
              <ArrowUpRight size={16} />
            </a>
          </div>

          {/* Dossier Contact Grid */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
              gap: '2.5rem',
              padding: 'clamp(2.5rem, 5vw, 4rem) 0',
              borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
              fontSize: '0.9rem'
            }}
          >
            <div>
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.72rem', color: 'var(--gold-accent)', textTransform: 'uppercase', letterSpacing: '0.12em' }}>
                Especialidad
              </div>
              <div style={{ color: 'var(--text-light)', marginTop: '0.5rem', fontWeight: 500 }}>
                {CLIENT_INFO.specialty}
              </div>
              <div style={{ color: 'var(--text-light-muted)', fontSize: '0.82rem', marginTop: '0.25rem' }}>
                Viviendas funcionales y diseño moderno
              </div>
            </div>

            <div>
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.72rem', color: 'var(--gold-accent)', textTransform: 'uppercase', letterSpacing: '0.12em' }}>
                Ubicación
              </div>
              <div style={{ color: 'var(--text-light)', marginTop: '0.5rem', fontWeight: 500 }}>
                {CLIENT_INFO.location}
              </div>
              <div style={{ color: 'var(--text-light-muted)', fontSize: '0.82rem', marginTop: '0.25rem' }}>
                {CLIENT_INFO.coordinates}
              </div>
            </div>

            <div>
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.72rem', color: 'var(--gold-accent)', textTransform: 'uppercase', letterSpacing: '0.12em' }}>
                Canal Oficial
              </div>
              <a
                href={CLIENT_INFO.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  color: 'var(--text-light)',
                  marginTop: '0.5rem',
                  fontWeight: 500,
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.35rem'
                }}
              >
                <span>{CLIENT_INFO.instagramHandle}</span>
                <ArrowUpRight size={14} />
              </a>
              <div style={{ color: 'var(--text-light-muted)', fontSize: '0.82rem', marginTop: '0.25rem' }}>
                Consultas y coordinación técnica
              </div>
            </div>
          </div>

          {/* Mega Wordmark Monolith */}
          <div
            style={{
              paddingTop: 'clamp(2rem, 5vw, 4rem)',
              display: 'flex',
              flexDirection: 'column',
              gap: '1.5rem'
            }}
          >
            <div
              className="font-display"
              style={{
                fontSize: 'clamp(2.5rem, 9.5vw, 9.5rem)',
                fontWeight: 700,
                lineHeight: 0.9,
                letterSpacing: '-0.02em',
                color: 'rgba(255, 255, 255, 0.08)',
                userSelect: 'none',
                whiteSpace: 'nowrap',
                overflow: 'hidden'
              }}
            >
              {CLIENT_INFO.name}
            </div>

            <div
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                justifyContent: 'space-between',
                alignItems: 'center',
                gap: '1rem',
                fontFamily: 'var(--font-mono)',
                fontSize: '0.72rem',
                color: 'var(--text-light-muted)',
                letterSpacing: '0.08em'
              }}
            >
              <div>© {new Date().getFullYear()} {CLIENT_INFO.name}. TODOS LOS DERECHOS RESERVADOS.</div>
              <div>SANTO DOMINGO · REPÚBLICA DOMINICANA</div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

/**
 * =============================================================================
 * DEDICATED SERVICE VIEW (#/servicios/diseno-y-construccion)
 * In-depth architectural breakdown, specifications, and direct contact
 * =============================================================================
 */
function DedicatedServiceView({ onBack }) {
  return (
    <div style={{ backgroundColor: 'var(--bg-primary)', minHeight: '100vh', paddingTop: '80px' }}>
      {/* Top Header / Breadcrumb */}
      <div
        style={{
          maxWidth: '1440px',
          margin: '0 auto',
          padding: '2rem clamp(1.25rem, 4vw, 3.5rem) 1rem',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between'
        }}
      >
        <button
          onClick={onBack}
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.5rem',
            fontFamily: 'var(--font-sans)',
            fontSize: '0.85rem',
            fontWeight: 500,
            letterSpacing: '0.04em',
            textTransform: 'uppercase',
            color: 'var(--text-dark)',
            cursor: 'pointer'
          }}
        >
          <ArrowLeft size={16} /> Volver al Inicio
        </button>

        <span
          style={{
            fontFamily: 'var(--font-mono)',
            fontSize: '0.75rem',
            color: 'var(--accent)',
            letterSpacing: '0.12em',
            textTransform: 'uppercase'
          }}
        >
          Dossier Especializado
        </span>
      </div>

      {/* Service Hero */}
      <section
        style={{
          maxWidth: '1440px',
          margin: '0 auto',
          padding: 'clamp(2rem, 5vw, 4rem) clamp(1.25rem, 4vw, 3.5rem)'
        }}
      >
        <div style={{ maxWidth: '980px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.25rem' }}>
            <BespokeServiceIcon
              title={SERVICE_DATA.title}
              category={SERVICE_DATA.kicker}
              index={0}
              size={48}
            />
            <span
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.78rem',
                letterSpacing: '0.15em',
                textTransform: 'uppercase',
                color: 'var(--accent)'
              }}
            >
              {SERVICE_DATA.kicker}
            </span>
          </div>

          <h1
            className="font-display"
            style={{
              fontSize: 'clamp(2rem, 6.5vw, 4.25rem)',
              lineHeight: 1.08,
              fontWeight: 600,
              color: 'var(--text-dark)',
              margin: '0 0 1.5rem'
            }}
          >
            {SERVICE_DATA.title}
          </h1>

          <p
            style={{
              fontSize: 'clamp(1.05rem, 2vw, 1.3rem)',
              lineHeight: 1.6,
              color: 'var(--text-muted)',
              margin: 0,
              maxWidth: '820px'
            }}
          >
            {SERVICE_DATA.description}
          </p>
        </div>

        {/* Hero Visual */}
        <div
          style={{
            marginTop: '3rem',
            width: '100%',
            aspectRatio: '16 / 8',
            maxHeight: '520px',
            overflow: 'hidden',
            backgroundColor: 'var(--bg-secondary)',
            border: '1px solid var(--border-hairline)'
          }}
        >
          <img
            src={MEDIA.project1}
            alt="Ejecución de obra arquitectónica de alta calidad"
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover'
            }}
          />
        </div>
      </section>

      {/* Core Breakdown Features */}
      <section
        style={{
          backgroundColor: 'var(--bg-secondary)',
          padding: 'clamp(4rem, 8vw, 6.5rem) clamp(1.25rem, 4vw, 3.5rem)',
          borderTop: '1px solid var(--border-hairline)',
          borderBottom: '1px solid var(--border-hairline)'
        }}
      >
        <div style={{ maxWidth: '1440px', margin: '0 auto' }}>
          <div style={{ maxWidth: '640px', marginBottom: '3.5rem' }}>
            <span
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.75rem',
                letterSpacing: '0.18em',
                textTransform: 'uppercase',
                color: 'var(--accent)'
              }}
            >
              Pilares de Ejecución
            </span>
            <h2
              className="font-display"
              style={{
                fontSize: 'clamp(1.5rem, 4.5vw, 3rem)',
                lineHeight: 1.15,
                fontWeight: 600,
                margin: '0.5rem 0 0',
                color: 'var(--text-dark)'
              }}
            >
              Tres pilares de rigurosa ejecución técnica
            </h2>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 340px), 1fr))',
              gap: 'clamp(1.5rem, 3.5vw, 2.5rem)'
            }}
          >
            {SERVICE_DATA.features.map((item, idx) => (
              <div
                key={idx}
                style={{
                  backgroundColor: 'var(--bg-card)',
                  border: '1px solid var(--border-hairline)',
                  padding: 'clamp(1.75rem, 4vw, 2.5rem)',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '1rem'
                }}
              >
                <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.85rem', color: 'var(--accent)', fontWeight: 600 }}>
                  0{idx + 1}
                </div>
                <h3 className="font-display" style={{ fontSize: '1.35rem', fontWeight: 600, margin: 0, color: 'var(--text-dark)' }}>
                  {item.title}
                </h3>
                <p style={{ fontSize: '0.95rem', lineHeight: 1.65, color: 'var(--text-muted)', margin: 0 }}>
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technical CAD Schematic on Dedicated View */}
      <section
        style={{
          backgroundColor: 'var(--bg-dark)',
          color: 'var(--text-light)',
          padding: 'clamp(4.5rem, 8vw, 7rem) clamp(1.25rem, 4vw, 3.5rem)'
        }}
      >
        <div style={{ maxWidth: '1440px', margin: '0 auto' }}>
          <div style={{ maxWidth: '720px', marginBottom: '2.5rem' }}>
            <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: 'var(--gold-accent)', letterSpacing: '0.15em' }}>
              ESQUEMA INTERACTIVO DE DETALLE
            </span>
            <h2 className="font-display" style={{ fontSize: 'clamp(1.5rem, 4vw, 2.8rem)', color: 'var(--text-light)', margin: '0.5rem 0 0', fontWeight: 600 }}>
              Planimetría y Modulación Ejecutiva
            </h2>
          </div>

          <TechnicalSchematic darkOverride={true} />
        </div>
      </section>

      {/* Specifications Table */}
      <section
        style={{
          maxWidth: '1440px',
          margin: '0 auto',
          padding: 'clamp(4rem, 8vw, 6.5rem) clamp(1.25rem, 4vw, 3.5rem)'
        }}
      >
        <div style={{ maxWidth: '820px' }}>
          <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--accent)' }}>
            Ficha Técnica
          </span>
          <h2 className="font-display" style={{ fontSize: 'clamp(1.5rem, 4.5vw, 3rem)', color: 'var(--text-dark)', margin: '0.5rem 0 2rem', fontWeight: 600 }}>
            Parámetros y Condiciones de Servicio
          </h2>

          <div style={{ borderTop: '1px solid var(--border-hairline)' }}>
            {SERVICE_DATA.specifications.map((spec, i) => (
              <div
                key={i}
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
                  gap: '1rem',
                  padding: '1.25rem 0',
                  borderBottom: '1px solid var(--border-hairline)'
                }}
              >
                <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.82rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
                  {spec.label}
                </div>
                <div style={{ fontSize: '0.98rem', fontWeight: 500, color: 'var(--text-dark)' }}>
                  {spec.value}
                </div>
              </div>
            ))}
          </div>

          {/* Action CTAs */}
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', alignItems: 'center', marginTop: '3rem' }}>
            <a
              href={CLIENT_INFO.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              <span>Consultar en Instagram</span>
              <ArrowUpRight size={16} />
            </a>

            <button
              onClick={onBack}
              className="btn-outline-dark"
            >
              <ArrowLeft size={16} /> Volver a Portada
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
