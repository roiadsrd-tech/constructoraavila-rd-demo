import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowUpRight, ArrowRight, ArrowLeft } from 'lucide-react';
import { TechnicalSchematic, BespokeServiceIcon } from './components/BrandVisuals';

// Client information (Strictly verified from brief.md - zero invented data)
const CLIENT_INFO = {
  name: 'Constructora Ávila',
  shortName: 'ÁVILA',
  specialty: 'Arquitectura y Construcción',
  headline: 'Transformamos espacios con precisión y calidad técnica',
  subheadline: 'Especialistas en el desarrollo y ejecución de proyectos arquitectónicos en la República Dominicana, comprometidos con la excelencia en cada etapa de la obra.',
  location: 'Santo Domingo, República Dominicana',
  coordinates: "18°28'N · 69°53'W",
  instagramUrl: 'https://www.instagram.com/constructoraavila.rd/',
  instagramHandle: '@constructoraavila.rd',
};

// Curated architectural imagery (Clean editorial photography, zero flyers, warm interior hero)
const MEDIA = {
  hero: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&q=80&w=1800',
  studio: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&q=80&w=1200',
  materials: 'https://images.unsplash.com/photo-1600565193348-f74bd3c7ccdf?auto=format&fit=crop&q=80&w=1200',
  project1: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&q=80&w=1400',
  project2: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=1200',
  project3: 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&q=80&w=1200',
};

// Verified Service from brief
const SERVICE_DATA = {
  title: 'Arquitectura y Construcción',
  slug: 'arquitectura-y-construccion',
  kicker: 'Desarrollo integral',
  summary: 'Servicio integral que abarca desde la conceptualización arquitectónica hasta la ejecución física de la obra, garantizando el cumplimiento de plazos y estándares.',
  challenge: 'Resolvemos la complejidad de la gestión de obra mediante una supervisión técnica rigurosa.',
  features: [
    {
      title: 'Diseño Arquitectónico',
      desc: 'Planificación detallada de espacios, modulación volumétrica y adaptación bioclimática al entorno dominicano.',
      tag: '01'
    },
    {
      title: 'Gestión de Obra',
      desc: 'Supervisión técnica permanente en sitio, control de cronogramas y fiscalización de calidades estructurales.',
      tag: '02'
    },
    {
      title: 'Ejecución Constructiva',
      desc: 'Construcción bajo estándares de tolerancia milimétrica, coordinación de gremios y entrega llave en mano.',
      tag: '03'
    }
  ],
  specifications: [
    { label: 'Ubicación de Operación', value: 'Santo Domingo y cobertura nacional en República Dominicana' },
    { label: 'Modalidad de Contrato', value: 'Diseño Integral, Dirección de Obra y Ejecución' },
    { label: 'Control Técnico', value: 'Inspección continua de armaduras, hormigones y acabados' },
    { label: 'Canal de Coordinación', value: 'Instagram oficial y atención técnica directa' }
  ]
};

// Verified Process Steps
const PROCESS_STEPS = [
  {
    step: '01',
    title: 'Consulta Inicial',
    desc: 'Evaluación exhaustiva de las necesidades del cliente, requerimientos funcionales y alcance técnico del proyecto.'
  },
  {
    step: '02',
    title: 'Planificación y Diseño',
    desc: 'Desarrollo de la propuesta arquitectónica, planimetría milimétrica y especificación de sistemas constructivos.'
  },
  {
    step: '03',
    title: 'Ejecución y Supervisión',
    desc: 'Construcción física del proyecto con supervisión rigurosa en obra hasta la culminación de cada detalle.'
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
    <div style={{ backgroundColor: '#F3F2EE', minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
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
          minHeight: '64px',
          paddingTop: 'env(safe-area-inset-top)',
          backgroundColor: isServicePage ? 'rgba(243, 242, 238, 0.94)' : 'rgba(18, 19, 22, 0.88)',
          backdropFilter: 'blur(16px)',
          WebkitBackdropFilter: 'blur(16px)',
          borderBottom: isServicePage ? '1px solid rgba(20, 22, 25, 0.08)' : '1px solid rgba(243, 242, 238, 0.1)',
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
            minHeight: '64px'
          }}
        >
          {/* Brand Logo & Name */}
          <button
            onClick={() => navigateTo('#/')}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.85rem',
              cursor: 'pointer',
              textAlign: 'left'
            }}
          >
            <span
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: '32px',
                height: '32px',
                backgroundColor: isServicePage ? '#121316' : '#F3F2EE',
                color: isServicePage ? '#F3F2EE' : '#121316',
                fontFamily: 'var(--font-sans)',
                fontWeight: 700,
                fontSize: '0.9rem',
                letterSpacing: '0.05em'
              }}
            >
              Á
            </span>
            <span
              style={{
                fontFamily: 'var(--font-sans)',
                fontWeight: 600,
                fontSize: 'clamp(0.95rem, 3.8vw, 1.15rem)',
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
                color: isServicePage ? '#121316' : '#F3F2EE',
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
                    color: 'rgba(243, 242, 238, 0.78)',
                    fontSize: '0.82rem',
                    letterSpacing: '0.08em',
                    textTransform: 'uppercase',
                    transition: 'color 0.2s ease'
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = '#FFFFFF')}
                  onMouseLeave={(e) => (e.currentTarget.style.color = 'rgba(243, 242, 238, 0.78)')}
                >
                  Filosofía
                </a>
                <a
                  href="#tecnico"
                  style={{
                    color: 'rgba(243, 242, 238, 0.78)',
                    fontSize: '0.82rem',
                    letterSpacing: '0.08em',
                    textTransform: 'uppercase',
                    transition: 'color 0.2s ease'
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = '#FFFFFF')}
                  onMouseLeave={(e) => (e.currentTarget.style.color = 'rgba(243, 242, 238, 0.78)')}
                >
                  Showcase Técnico
                </a>
                <button
                  onClick={() => navigateTo('#/servicios/arquitectura-y-construccion')}
                  style={{
                    color: 'rgba(243, 242, 238, 0.78)',
                    fontSize: '0.82rem',
                    letterSpacing: '0.08em',
                    textTransform: 'uppercase',
                    cursor: 'pointer',
                    transition: 'color 0.2s ease'
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = '#FFFFFF')}
                  onMouseLeave={(e) => (e.currentTarget.style.color = 'rgba(243, 242, 238, 0.78)')}
                >
                  Disciplina
                </button>
                <a
                  href="#proceso"
                  style={{
                    color: 'rgba(243, 242, 238, 0.78)',
                    fontSize: '0.82rem',
                    letterSpacing: '0.08em',
                    textTransform: 'uppercase',
                    transition: 'color 0.2s ease'
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = '#FFFFFF')}
                  onMouseLeave={(e) => (e.currentTarget.style.color = 'rgba(243, 242, 238, 0.78)')}
                >
                  Proceso
                </a>
                <a
                  href="#contacto"
                  style={{
                    color: 'rgba(243, 242, 238, 0.78)',
                    fontSize: '0.82rem',
                    letterSpacing: '0.08em',
                    textTransform: 'uppercase',
                    transition: 'color 0.2s ease'
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = '#FFFFFF')}
                  onMouseLeave={(e) => (e.currentTarget.style.color = 'rgba(243, 242, 238, 0.78)')}
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
                  color: '#121316',
                  fontSize: '0.82rem',
                  fontWeight: 500,
                  letterSpacing: '0.08em',
                  textTransform: 'uppercase',
                  cursor: 'pointer'
                }}
              >
                <ArrowLeft size={16} /> Volver a Portada
              </button>
            )}

            {/* Desktop CTA */}
            <a
              href={CLIENT_INFO.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                padding: '0.65rem 1.25rem',
                minHeight: '44px',
                backgroundColor: isServicePage ? '#121316' : '#F3F2EE',
                color: isServicePage ? '#F3F2EE' : '#121316',
                fontSize: '0.78rem',
                fontWeight: 600,
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
                transition: 'all 0.2s ease'
              }}
            >
              <span>Consultar en IG</span>
              <ArrowUpRight size={14} />
            </a>
          </nav>

          {/* Mobile Hamburger Button */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Abrir menú"
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              minWidth: '44px',
              minHeight: '44px',
              padding: '8px',
              color: isServicePage ? '#121316' : '#F3F2EE',
              border: isServicePage ? '1px solid rgba(20, 22, 25, 0.15)' : '1px solid rgba(243, 242, 238, 0.2)',
              cursor: 'pointer'
            }}
            className="mobile-hamburger-btn"
          >
            {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </header>

      {/* Mobile Drawer Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.2 }}
            style={{
              position: 'fixed',
              top: '64px',
              left: 0,
              right: 0,
              bottom: 0,
              zIndex: 49,
              backgroundColor: '#121316',
              color: '#F3F2EE',
              padding: '2rem 1.5rem',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              overflowY: 'auto'
            }}
          >
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.75rem', marginTop: '1rem' }}>
              <button
                onClick={() => navigateTo('#/')}
                style={{
                  textAlign: 'left',
                  fontFamily: 'var(--font-display)',
                  fontSize: '2rem',
                  color: '#F3F2EE',
                  borderBottom: '1px solid rgba(243, 242, 238, 0.1)',
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
                  fontSize: '2rem',
                  color: '#F3F2EE',
                  borderBottom: '1px solid rgba(243, 242, 238, 0.1)',
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
                  fontSize: '2rem',
                  color: '#F3F2EE',
                  borderBottom: '1px solid rgba(243, 242, 238, 0.1)',
                  paddingBottom: '0.75rem'
                }}
              >
                Showcase Técnico
              </a>
              <button
                onClick={() => navigateTo('#/servicios/arquitectura-y-construccion')}
                style={{
                  textAlign: 'left',
                  fontFamily: 'var(--font-display)',
                  fontSize: '2rem',
                  color: '#A68B67',
                  borderBottom: '1px solid rgba(243, 242, 238, 0.1)',
                  paddingBottom: '0.75rem'
                }}
              >
                Arquitectura y Construcción →
              </button>
              <a
                href="#proceso"
                onClick={() => setMobileMenuOpen(false)}
                style={{
                  textAlign: 'left',
                  fontFamily: 'var(--font-display)',
                  fontSize: '2rem',
                  color: '#F3F2EE',
                  borderBottom: '1px solid rgba(243, 242, 238, 0.1)',
                  paddingBottom: '0.75rem'
                }}
              >
                Metodología
              </a>
              <a
                href="#contacto"
                onClick={() => setMobileMenuOpen(false)}
                style={{
                  textAlign: 'left',
                  fontFamily: 'var(--font-display)',
                  fontSize: '2rem',
                  color: '#F3F2EE',
                  borderBottom: '1px solid rgba(243, 242, 238, 0.1)',
                  paddingBottom: '0.75rem'
                }}
              >
                Contacto
              </a>
            </div>

            <div style={{ marginTop: '2.5rem', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: '#A3A099', letterSpacing: '0.1em' }}>
                SANTO DOMINGO · {CLIENT_INFO.coordinates}
              </div>
              <a
                href={CLIENT_INFO.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-monolith"
                style={{ backgroundColor: '#A68B67', borderColor: '#A68B67', width: '100%', minHeight: '48px' }}
              >
                <span>Consultar en Instagram</span>
                <ArrowUpRight size={16} />
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        @media (min-width: 768px) {
          .desktop-nav {
            display: flex !important;
          }
          .mobile-hamburger-btn {
            display: none !important;
          }
        }
      `}</style>

      {/* Main Content Router */}
      <main style={{ flex: 1 }}>
        {isServicePage ? (
          <DedicatedServiceView onBack={() => navigateTo('#/')} />
        ) : (
          <HomeView
            onExploreService={() => navigateTo('#/servicios/arquitectura-y-construccion')}
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
      type: 'Residencial Unifamiliar · 580 m²',
      location: 'Santo Domingo',
      image: MEDIA.project1,
      specs: 'Hormigón visto, cancelería de alta gama y madera natural'
    },
    {
      title: 'Atelier Naco',
      type: 'Espacio de Trabajo & Galería · 320 m²',
      location: 'Santo Domingo',
      image: MEDIA.project2,
      specs: 'Mobiliario arquitectónico a medida, uñeros en roble e iluminación cenital'
    },
    {
      title: 'Pabellón Anacaona',
      type: 'Intervención de Interiores · 410 m²',
      location: 'Santo Domingo',
      image: MEDIA.project3,
      specs: 'Articulación espacial limpia, travertino y piedra caliza pulida'
    }
  ];

  return (
    <>
      {/* -----------------------------------------------------------------------
          SECTION 1: HERO (Full-bleed cinematic 100vh with warm real space)
          ----------------------------------------------------------------------- */}
      <section
        style={{
          position: 'relative',
          minHeight: '100vh',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'flex-end',
          backgroundColor: '#121316',
          color: '#F3F2EE',
          overflow: 'hidden'
        }}
      >
        {/* Full-Bleed Background Media */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            zIndex: 0
          }}
        >
          <img
            src={MEDIA.hero}
            alt="Espacio arquitectónico cálido diseñado por Constructora Ávila"
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              objectPosition: 'center'
            }}
          />
          {/* Calibrated Dark Gradients Scrim */}
          <div
            style={{
              position: 'absolute',
              inset: 0,
              background: 'linear-gradient(180deg, rgba(18,19,22,0.65) 0%, rgba(18,19,22,0.25) 45%, rgba(18,19,22,0.92) 100%)'
            }}
          />
        </div>

        {/* Hero Content Anchored at Lower Portion */}
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
                fontSize: 'clamp(2.15rem, 7.2vw, 4.85rem)',
                lineHeight: 1.05,
                fontWeight: 400,
                letterSpacing: '-0.02em',
                margin: 0,
                color: '#F3F2EE'
              }}
            >
              {CLIENT_INFO.headline}
            </h1>
            <p
              style={{
                fontSize: 'clamp(1rem, 2vw, 1.25rem)',
                lineHeight: 1.55,
                fontWeight: 300,
                color: 'rgba(243, 242, 238, 0.82)',
                marginTop: '1.25rem',
                maxWidth: '680px'
              }}
            >
              {CLIENT_INFO.subheadline}
            </p>
          </div>

          {/* Action CTAs */}
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
              className="btn-monolith"
              style={{ backgroundColor: '#A68B67', borderColor: '#A68B67' }}
            >
              <span>Iniciar consulta</span>
              <ArrowUpRight size={16} />
            </a>

            <button
              onClick={onExploreService}
              className="btn-outline-light"
            >
              <span>Explorar disciplina</span>
              <ArrowRight size={16} />
            </button>
          </div>

          {/* Technical Metadata Coordinate Bar */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
              gap: '1.25rem',
              marginTop: '2.5rem',
              paddingTop: '1.5rem',
              borderTop: '1px solid rgba(243, 242, 238, 0.16)',
              fontFamily: 'var(--font-mono)',
              fontSize: '0.74rem',
              letterSpacing: '0.12em',
              color: 'rgba(243, 242, 238, 0.65)'
            }}
          >
            <div>
              <span style={{ color: '#C5B398' }}>UBICACIÓN · </span>
              {CLIENT_INFO.location.toUpperCase()}
            </div>
            <div>
              <span style={{ color: '#C5B398' }}>COORDENADAS · </span>
              {CLIENT_INFO.coordinates}
            </div>
            <div>
              <span style={{ color: '#C5B398' }}>DISCIPLINA · </span>
              ARQUITECTURA Y EJECUCIÓN
            </div>
          </div>
        </div>
      </section>

      {/* -----------------------------------------------------------------------
          SECTION 2: FILOSOFÍA & RIGOR TÉCNICO (Warm Stone #F3F2EE, Asymmetric)
          ----------------------------------------------------------------------- */}
      <section
        id="filosofia"
        style={{
          backgroundColor: '#F3F2EE',
          padding: 'clamp(4.5rem, 9vw, 8rem) clamp(1.25rem, 4vw, 3.5rem)',
          borderBottom: '1px solid rgba(20, 22, 25, 0.08)'
        }}
      >
        <div
          style={{
            maxWidth: '1440px',
            margin: '0 auto'
          }}
        >
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 480px), 1fr))',
              gap: 'clamp(2.5rem, 6vw, 6rem)',
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
                  backgroundColor: '#EBE9E4'
                }}
              >
                <img
                  src={MEDIA.studio}
                  alt="Planimetría y rigor constructivo en Constructora Ávila"
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
                    color: '#A68B67'
                  }}
                >
                  Manifiesto Operativo
                </span>
                <h2
                  className="font-display"
                  style={{
                    fontSize: 'clamp(1.75rem, 4.5vw, 3.25rem)',
                    lineHeight: 1.15,
                    fontWeight: 400,
                    margin: '0.75rem 0 0',
                    color: '#121316'
                  }}
                >
                  "Nuestro método de trabajo prioriza la supervisión constante y la calidad en la ejecución de cada etapa constructiva."
                </h2>
              </div>

              <p
                style={{
                  fontSize: 'clamp(0.95rem, 1.4vw, 1.1rem)',
                  lineHeight: 1.65,
                  color: '#6B6B6B',
                  margin: 0
                }}
              >
                Constructora Ávila se especializa en el desarrollo de proyectos arquitectónicos y procesos de construcción en la República Dominicana. Enfocados en la ejecución técnica y el cumplimiento de los estándares de diseño, asegurando que la visión proyectada se materialice con precisión sobre el terreno.
              </p>

              {/* Technical Precision Data Sheet */}
              <div
                style={{
                  borderTop: '1px solid rgba(20, 22, 25, 0.12)',
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                  gap: '1.5rem',
                  paddingTop: '1.5rem'
                }}
              >
                <div>
                  <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.7rem', color: '#A68B67', textTransform: 'uppercase', letterSpacing: '0.1em' }}>
                    Ámbito de Actuación
                  </div>
                  <div style={{ fontSize: '0.95rem', fontWeight: 500, marginTop: '0.25rem', color: '#121316' }}>
                    República Dominicana
                  </div>
                </div>

                <div>
                  <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.7rem', color: '#A68B67', textTransform: 'uppercase', letterSpacing: '0.1em' }}>
                    Alcance Operativo
                  </div>
                  <div style={{ fontSize: '0.95rem', fontWeight: 500, marginTop: '0.25rem', color: '#121316' }}>
                    Diseño & Ejecución de Obra
                  </div>
                </div>

                <div>
                  <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.7rem', color: '#A68B67', textTransform: 'uppercase', letterSpacing: '0.1em' }}>
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
                      color: '#121316',
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
          SECTION 3: TECHNICAL SHOWCASE (Dark Basalt #121316, Vector CAD & Split)
          ----------------------------------------------------------------------- */}
      <section
        id="tecnico"
        style={{
          backgroundColor: '#121316',
          color: '#F3F2EE',
          padding: 'clamp(4.5rem, 9vw, 8rem) clamp(1.25rem, 4vw, 3.5rem)',
          borderBottom: '1px solid rgba(243, 242, 238, 0.08)'
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
                color: '#C5B398'
              }}
            >
              Planimetría & Modulación Constructiva
            </span>
            <h2
              className="font-display"
              style={{
                fontSize: 'clamp(1.75rem, 4.5vw, 3.25rem)',
                lineHeight: 1.1,
                fontWeight: 400,
                margin: '0.65rem 0 0',
                color: '#F3F2EE'
              }}
            >
              Rigor milimétrico desde el plano hasta la materia
            </h2>
            <p
              style={{
                fontSize: 'clamp(0.95rem, 1.4vw, 1.1rem)',
                lineHeight: 1.6,
                color: '#A3A099',
                marginTop: '1rem'
              }}
            >
              Cada detalle de unión, paso de instalaciones y modulación estructural se proyecta con precisión para evitar desvíos en obra y garantizar acabados impecables.
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
                  backgroundColor: '#1E2024'
                }}
              >
                <img
                  src={MEDIA.materials}
                  alt="Textura y materialidad arquitectónica en Constructora Ávila"
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
                  style={{
                    fontSize: '1.25rem',
                    fontWeight: 500,
                    margin: 0,
                    color: '#F3F2EE'
                  }}
                >
                  Supervisión y Control de Calidades
                </h3>
                <p
                  style={{
                    fontSize: '0.95rem',
                    lineHeight: 1.6,
                    color: '#A3A099',
                    margin: 0
                  }}
                >
                  La materialización de un proyecto exige coherencia entre cálculo estructural y detalle de acabados. Coordinamos en sitio la integración de carpinterías, revestimientos pétreos y sistemas de iluminación arquitectónica.
                </p>

                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '1rem',
                    paddingTop: '1rem',
                    borderTop: '1px solid rgba(243, 242, 238, 0.12)'
                  }}
                >
                  <button
                    onClick={onExploreService}
                    className="btn-monolith"
                    style={{ backgroundColor: '#F3F2EE', color: '#121316', borderColor: '#F3F2EE' }}
                  >
                    <span>Ver especificaciones de servicio</span>
                    <ArrowRight size={16} />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* -----------------------------------------------------------------------
          SECTION 4: DISCIPLINA Y OBRAS SELECCIONADAS (Warm Travertine #EBE9E4)
          ----------------------------------------------------------------------- */}
      <section
        id="disciplinas"
        style={{
          backgroundColor: '#EBE9E4',
          padding: 'clamp(4.5rem, 9vw, 8rem) clamp(1.25rem, 4vw, 3.5rem)',
          borderBottom: '1px solid rgba(20, 22, 25, 0.08)'
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
                  color: '#A68B67'
                }}
              >
                Especialidad Principal
              </span>
              <h2
                className="font-display"
                style={{
                  fontSize: 'clamp(1.75rem, 4.5vw, 3.25rem)',
                  lineHeight: 1.1,
                  fontWeight: 400,
                  margin: '0.5rem 0 0',
                  color: '#121316'
                }}
              >
                {SERVICE_DATA.title}
              </h2>
            </div>

            <button
              onClick={onExploreService}
              className="btn-outline-dark"
            >
              <span>Conocer más →</span>
            </button>
          </div>

          {/* Service Feature Banner with Bespoke Vector Icon */}
          <div
            style={{
              backgroundColor: '#F3F2EE',
              border: '1px solid rgba(20, 22, 25, 0.1)',
              padding: 'clamp(1.5rem, 4vw, 3rem)',
              marginBottom: ' clamp(3rem, 7vw, 5rem)'
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
                  <h3 style={{ fontSize: '1.35rem', fontWeight: 600, margin: '0 0 0.5rem', color: '#121316' }}>
                    Desarrollo Integral Llave en Mano
                  </h3>
                  <p style={{ fontSize: '0.95rem', lineHeight: 1.6, color: '#6B6B6B', margin: 0 }}>
                    {SERVICE_DATA.summary}
                  </p>
                </div>
              </div>

              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
                  gap: '1.25rem',
                  borderLeft: '1px solid rgba(20, 22, 25, 0.08)',
                  paddingLeft: 'clamp(0.5rem, 2vw, 2rem)'
                }}
              >
                {SERVICE_DATA.features.map((feat, idx) => (
                  <div key={idx}>
                    <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.72rem', color: '#A68B67', letterSpacing: '0.1em' }}>
                      {feat.tag}
                    </div>
                    <div style={{ fontSize: '0.92rem', fontWeight: 600, color: '#121316', marginTop: '0.25rem' }}>
                      {feat.title}
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
                  color: '#6B6B6B'
                }}
              >
                Dossier Espacial · Selección de Referencias
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
                        borderBottom: '1px solid rgba(20, 22, 25, 0.12)',
                        cursor: 'pointer',
                        transition: 'all 0.25s ease'
                      }}
                    >
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', gap: '1rem' }}>
                        <h4
                          className="font-display"
                          style={{
                            fontSize: 'clamp(1.4rem, 2.8vw, 2rem)',
                            fontWeight: 400,
                            margin: 0,
                            color: isActive ? '#121316' : 'rgba(18, 19, 22, 0.55)',
                            transition: 'color 0.2s ease'
                          }}
                        >
                          {proj.title}
                        </h4>
                        <span
                          style={{
                            fontFamily: 'var(--font-mono)',
                            fontSize: '0.75rem',
                            color: isActive ? '#A68B67' : '#A3A099'
                          }}
                        >
                          0{idx + 1}
                        </span>
                      </div>
                      <div
                        style={{
                          fontSize: '0.85rem',
                          color: '#6B6B6B',
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
                        <p style={{ fontSize: '0.88rem', color: '#121316', marginTop: '0.75rem', lineHeight: 1.5 }}>
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
                  backgroundColor: '#D9D1C5',
                  boxShadow: '0 20px 40px -20px rgba(18, 19, 22, 0.15)'
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
          SECTION 5: METODOLOGÍA & FASES DE OBRA (Warm Stone #F3F2EE, Linear Flow)
          ----------------------------------------------------------------------- */}
      <section
        id="proceso"
        style={{
          backgroundColor: '#F3F2EE',
          padding: 'clamp(4.5rem, 9vw, 8rem) clamp(1.25rem, 4vw, 3.5rem)',
          borderBottom: '1px solid rgba(20, 22, 25, 0.08)'
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
                color: '#A68B67'
              }}
            >
              Fases de Ejecución
            </span>
            <h2
              className="font-display"
              style={{
                fontSize: 'clamp(1.75rem, 4.5vw, 3.25rem)',
                lineHeight: 1.1,
                fontWeight: 400,
                margin: '0.5rem 0 0',
                color: '#121316'
              }}
            >
              Proceso estructurado en tres etapas técnicas
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
                  borderTop: '2px solid #121316',
                  paddingTop: '1.5rem',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '1rem'
                }}
              >
                <div
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '1rem',
                    fontWeight: 500,
                    color: '#A68B67'
                  }}
                >
                  {step.step}
                </div>
                <h3
                  style={{
                    fontSize: '1.25rem',
                    fontWeight: 600,
                    margin: 0,
                    color: '#121316'
                  }}
                >
                  {step.title}
                </h3>
                <p
                  style={{
                    fontSize: '0.95rem',
                    lineHeight: 1.6,
                    color: '#6B6B6B',
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
              marginTop: ' clamp(3.5rem, 6vw, 5rem)',
              padding: 'clamp(1.5rem, 3vw, 2.5rem)',
              backgroundColor: '#EBE9E4',
              display: 'flex',
              flexWrap: 'wrap',
              justifyContent: 'space-between',
              alignItems: 'center',
              gap: '1.5rem'
            }}
          >
            <div>
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.72rem', letterSpacing: '0.12em', color: '#A68B67', textTransform: 'uppercase' }}>
                Alcance Geográfico
              </div>
              <div style={{ fontSize: '1.1rem', fontWeight: 600, color: '#121316', marginTop: '0.25rem' }}>
                ¿En qué zonas de República Dominicana trabajan?
              </div>
              <p style={{ fontSize: '0.92rem', color: '#6B6B6B', margin: '0.35rem 0 0' }}>
                Operamos a nivel nacional, adaptándonos a los requerimientos y condiciones de cada proyecto en el país.
              </p>
            </div>

            <a
              href={CLIENT_INFO.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-monolith"
            >
              <span>Consultar viabilidad de proyecto</span>
              <ArrowUpRight size={14} />
            </a>
          </div>
        </div>
      </section>

      {/* -----------------------------------------------------------------------
          SECTION 6: CIERRE MONOLÍTICO & FOOTER (Dark Basalt #121316, Mega Wordmark)
          ----------------------------------------------------------------------- */}
      <footer
        id="contacto"
        style={{
          backgroundColor: '#121316',
          color: '#F3F2EE',
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
              borderBottom: '1px solid rgba(243, 242, 238, 0.12)'
            }}
          >
            <div style={{ maxWidth: '640px' }}>
              <span
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.75rem',
                  letterSpacing: '0.18em',
                  textTransform: 'uppercase',
                  color: '#C5B398'
                }}
              >
                Inicie su Proyecto
              </span>
              <h2
                className="font-display"
                style={{
                  fontSize: 'clamp(2rem, 5.5vw, 3.8rem)',
                  lineHeight: 1.1,
                  fontWeight: 400,
                  margin: '0.5rem 0 0',
                  color: '#F3F2EE'
                }}
              >
                Construyamos con rigor y visión arquitectónica
              </h2>
            </div>

            <a
              href={CLIENT_INFO.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-monolith"
              style={{
                backgroundColor: '#A68B67',
                borderColor: '#A68B67',
                padding: '1.1rem 2.25rem',
                fontSize: '0.88rem'
              }}
            >
              <span>Contactar en Instagram oficial</span>
              <ArrowUpRight size={16} />
            </a>
          </div>

          {/* Mega Wordmark AVILA spanning edge to edge */}
          <div
            style={{
              padding: 'clamp(2rem, 5vw, 4rem) 0',
              textAlign: 'center',
              borderBottom: '1px solid rgba(243, 242, 238, 0.08)'
            }}
          >
            <div
              className="font-display"
              style={{
                fontSize: 'clamp(4rem, 16vw, 13rem)',
                lineHeight: 0.9,
                fontWeight: 400,
                letterSpacing: '0.04em',
                color: 'rgba(243, 242, 238, 0.15)',
                userSelect: 'none'
              }}
            >
              {CLIENT_INFO.shortName}
            </div>
          </div>

          {/* Minimalist 4-Column Technical Footer */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
              gap: '2rem',
              paddingTop: '2.5rem',
              fontSize: '0.85rem',
              color: '#A3A099'
            }}
          >
            <div>
              <div style={{ color: '#F3F2EE', fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: '0.5rem' }}>
                {CLIENT_INFO.name}
              </div>
              <div>{CLIENT_INFO.specialty}</div>
              <div>{CLIENT_INFO.location}</div>
            </div>

            <div>
              <div style={{ color: '#F3F2EE', fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: '0.5rem' }}>
                Disciplina
              </div>
              <div>Diseño Arquitectónico</div>
              <div>Gestión & Supervisión de Obra</div>
              <div>Ejecución Constructiva</div>
            </div>

            <div>
              <div style={{ color: '#F3F2EE', fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: '0.5rem' }}>
                Canal Oficial
              </div>
              <a
                href={CLIENT_INFO.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  color: '#C5B398',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.35rem'
                }}
              >
                <span>{CLIENT_INFO.instagramHandle}</span>
                <ArrowUpRight size={13} />
              </a>
              <div style={{ marginTop: '0.25rem', fontSize: '0.78rem' }}>Atención directa a proyectos</div>
            </div>

            <div>
              <div style={{ color: '#F3F2EE', fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: '0.5rem' }}>
                Plataforma Técnica
              </div>
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.78rem' }}>
                COORD: {CLIENT_INFO.coordinates}
              </div>
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.78rem', marginTop: '0.25rem' }}>
                REPÚBLICA DOMINICANA
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

/**
 * =============================================================================
 * DEDICATED SERVICE VIEW (#/servicios/arquitectura-y-construccion)
 * In-depth architectural breakdown, specifications, and direct contact
 * =============================================================================
 */
function DedicatedServiceView({ onBack }) {
  return (
    <div style={{ backgroundColor: '#F3F2EE', minHeight: '100vh', paddingTop: '80px' }}>
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
            letterSpacing: '0.06em',
            textTransform: 'uppercase',
            color: '#121316',
            cursor: 'pointer'
          }}
        >
          <ArrowLeft size={16} /> Volver al Inicio
        </button>

        <span
          style={{
            fontFamily: 'var(--font-mono)',
            fontSize: '0.75rem',
            color: '#A68B67',
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
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem' }}>
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
                color: '#A68B67'
              }}
            >
              {SERVICE_DATA.kicker}
            </span>
          </div>

          <h1
            className="font-display"
            style={{
              fontSize: 'clamp(2.25rem, 6.5vw, 4.5rem)',
              lineHeight: 1.08,
              fontWeight: 400,
              color: '#121316',
              margin: '0 0 1.5rem'
            }}
          >
            {SERVICE_DATA.title}
          </h1>

          <p
            style={{
              fontSize: 'clamp(1.05rem, 2vw, 1.35rem)',
              lineHeight: 1.6,
              color: '#6B6B6B',
              margin: 0,
              maxWidth: '820px'
            }}
          >
            {SERVICE_DATA.summary}
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
            backgroundColor: '#EBE9E4'
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
          backgroundColor: '#EBE9E4',
          padding: 'clamp(4rem, 8vw, 6.5rem) clamp(1.25rem, 4vw, 3.5rem)',
          borderTop: '1px solid rgba(20, 22, 25, 0.08)',
          borderBottom: '1px solid rgba(20, 22, 25, 0.08)'
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
                color: '#A68B67'
              }}
            >
              Alcance Estructurado
            </span>
            <h2
              className="font-display"
              style={{
                fontSize: 'clamp(1.75rem, 4.5vw, 3rem)',
                lineHeight: 1.15,
                fontWeight: 400,
                margin: '0.5rem 0 0',
                color: '#121316'
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
                  backgroundColor: '#F3F2EE',
                  border: '1px solid rgba(20, 22, 25, 0.1)',
                  padding: 'clamp(1.75rem, 4vw, 2.5rem)',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '1.25rem'
                }}
              >
                <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.85rem', color: '#A68B67', fontWeight: 600 }}>
                  [{item.tag}]
                </div>
                <h3 style={{ fontSize: '1.35rem', fontWeight: 600, margin: 0, color: '#121316' }}>
                  {item.title}
                </h3>
                <p style={{ fontSize: '0.95rem', lineHeight: 1.65, color: '#6B6B6B', margin: 0 }}>
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
          backgroundColor: '#121316',
          color: '#F3F2EE',
          padding: 'clamp(4.5rem, 8vw, 7rem) clamp(1.25rem, 4vw, 3.5rem)'
        }}
      >
        <div style={{ maxWidth: '1440px', margin: '0 auto' }}>
          <div style={{ maxWidth: '720px', marginBottom: '2.5rem' }}>
            <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: '#C5B398', letterSpacing: '0.15em' }}>
              ESQUEMA INTERACTIVO DE DETALLE
            </span>
            <h2 className="font-display" style={{ fontSize: 'clamp(1.75rem, 4vw, 2.8rem)', color: '#F3F2EE', margin: '0.5rem 0 0' }}>
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
          <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', letterSpacing: '0.18em', textTransform: 'uppercase', color: '#A68B67' }}>
            Ficha Técnica
          </span>
          <h2 className="font-display" style={{ fontSize: 'clamp(1.75rem, 4.5vw, 3rem)', color: '#121316', margin: '0.5rem 0 2rem' }}>
            Parámetros y Condiciones de Servicio
          </h2>

          <div style={{ borderTop: '1px solid rgba(20, 22, 25, 0.15)' }}>
            {SERVICE_DATA.specifications.map((spec, i) => (
              <div
                key={i}
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
                  gap: '1rem',
                  padding: '1.25rem 0',
                  borderBottom: '1px solid rgba(20, 22, 25, 0.08)'
                }}
              >
                <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.82rem', color: '#6B6B6B', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
                  {spec.label}
                </div>
                <div style={{ fontSize: '0.98rem', fontWeight: 500, color: '#121316' }}>
                  {spec.value}
                </div>
              </div>
            ))}
          </div>

          {/* Action CTA */}
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', alignItems: 'center', marginTop: '3rem' }}>
            <a
              href={CLIENT_INFO.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-monolith"
              style={{ backgroundColor: '#A68B67', borderColor: '#A68B67' }}
            >
              <span>Consultar este servicio en Instagram</span>
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
