import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  ArrowUpRight, Github, Linkedin, Mail, Download, Menu, X,
  Code2, Database, Globe, Layers, BriefcaseBusiness, GraduationCap,
  ExternalLink, Sparkles, Terminal, Workflow, Bot, MapPin,Phone
} from 'lucide-react';

const nav = ['About', 'Skills', 'Experience', 'Projects', 'Education', 'Contact'];


const skills = [
  {
    title: 'Backend Development',
    items: [
      'PHP',
      'Laravel',
      'MVC Architecture',
      'RESTful API Development',
      'SOAP APIs',
      'JSON',
      'Authentication',
      'CRUD Operations'
    ]
  },
  {
    title: 'Frontend Development',
    items: [
      'React.js',
      'Angular',
      'JavaScript (ES6+)',
      'TypeScript',
      'Next.js',
      'Redux Toolkit',
      'React Hooks',
      'RxJS',
      'HTML5',
      'CSS3',
      'Bootstrap',
      'jQuery',
      'Responsive Web Design'
    ]
  },
  {
    title: 'Database & Querying',
    items: [
      'MySQL',
      'PostgreSQL',
      'SQL Queries',
      'Database Management',
      'Query Optimization'
    ]
  },
  {
    title: 'Tools & Engineering Practices',
    items: [
      'Git',
      'GitHub',
      'Postman',
      'CI/CD',
      'Agile Methodology',
      'Debugging',
      'Code Optimization',
      'Cross-functional Collaboration'
    ]
  },
  {
    title: 'Third-party & Enterprise Integrations',
    items: [
      'Amadeus API',
      'Travelport API',
      'TripJack API',
      'Vickyonline API',
      'TBO API',
      'Rezlive API',
      'SAP System Integration'
    ]
  },
  {
    title: 'Payment & Communication Integrations',
    items: [
      'Payment Gateway Integration',
      'Payment API Integration',
      'WhatsApp API Integration',
      'WhatsApp Business API',
      'Email Integration',
      'SMTP Configuration',
      'Email Notifications',
      'Webhook Integration',
      'Third-party API Integration'
    ]
  },
  {
    title: 'Automation & Backend Processing',
    items: [
      'Workflow Automation',
      'Laravel Queues & Jobs',
      'Cron Jobs',
      'Task Scheduling',
      'Background Processing',
      'Event-driven Processing',
      'API-based Automation'
    ]
  },
  {
    title: 'Automation & Backend Processing',
    items: [
      'Workflow Automation',
      'Laravel Queues & Jobs',
      'Cron Jobs',
      'Task Scheduling',
      'Background Processing',
      'Event-driven Processing',
      'API-based Automation'
    ]
  }

];


const projects = [
  {
    number: '01', name: 'Travel Management & Booking Platform', type: 'Travel Technology',
    description: 'A travel management platform integrating third-party travel services, booking workflows and REST APIs.',
    stack: ['Laravel', 'React.js', 'MySQL', 'REST APIs'],
    note: 'Add verified screenshots, your exact contribution and live/demo link before publishing.'
  },
  {
    number: '02', name: 'CRM & Business Management System', type: 'CRM',
    description: 'CRM features for managing business operations, customer information and sales-related workflows.',
    stack: ['Laravel', 'React.js', 'Angular', 'MySQL'],
    note: 'Replace this summary with a public-safe description of a project you personally worked on.'
  },
  {
    number: '03', name: 'B2B / B2C E-commerce', type: 'E-commerce',
    description: 'E-commerce application workflows including product/catalog management, customer journeys and API integrations.',
    stack: ['PHP', 'Laravel', 'MySQL', 'JavaScript'],
    note: 'Add only features and integrations you can confidently explain in an interview.'
  },
  {
    number: '04', name: 'AI-powered CRM Assistant', type: 'AI Project · Planned',
    description: 'A portfolio project concept to explore AI-assisted customer support, lead classification and document Q&A.',
    stack: ['Laravel', 'React.js', 'LLM API', 'RAG'],
    note: 'Mark as in progress until you have implemented and tested it.'
  },
];


const experience = [
  {
    role: 'Full Stack Developer',
    company: 'CRMtravel™ / CRMTRAVEL IT SOLUTIONS',
    period: 'Apr 2025 – Nov 2026',
    detail:
      'Worked on the development and maintenance of travel management and CRM applications using PHP, Laravel and React.js. Contributed to backend architecture, frontend development, API integrations, database management and business workflow automation.',
    responsibilities: [
      'Developed and maintained backend modules using PHP and Laravel MVC architecture.',
      'Designed, developed and integrated RESTful APIs for frontend and third-party services.',
      'Built responsive and reusable UI components using React.js, JavaScript, HTML and CSS.',
      'Worked on travel API integrations, including Travelport, Travelport Indigo, TripJack, Rezlive, Vickyonline and TravelPlus.',
      'Worked on booking-related workflows, dynamic data handling and application business logic.',
      'Managed database operations, relationships, SQL queries and data synchronization.',
      'Performed debugging, issue resolution, API testing and application maintenance.',
      'Collaborated with team members to understand requirements and deliver business features.'
    ],
    technologies: [
      'PHP', 'Laravel', 'React.js', 'JavaScript',
      'MySQL', 'REST APIs', 'Travel APIs', 'HTML5',
      'CSS3', 'Bootstrap', 'Git', 'Postman'
    ]
  },
  {
    role: 'Web Developer',
    company: 'Cinntra',
    period: '2023 – 2024',
    detail:
      'Worked on CRM-based business applications using Angular and React.js, focusing on frontend development, API integration and business data management. Also worked with integrations involving SAP sales data.',
    responsibilities: [
      'Developed and maintained CRM application modules using Angular and React.js.',
      'Created reusable frontend components and responsive user interfaces.',
      'Integrated backend REST APIs and handled dynamic application data.',
      'Worked on CRM workflows, forms, data tables and business functionality.',
      'Worked with SAP-related sales data integration in CRM applications.',
      'Fixed UI issues, performed debugging and improved application usability.',
      'Coordinated with backend developers to implement business requirements.'
    ],
    technologies: [
      'Angular', 'React.js', 'JavaScript', 'TypeScript',
      'HTML5', 'CSS3', 'Bootstrap', 'REST APIs',
      'SAP Integration', 'Git'
    ]
  },
  {
    role: 'PHP / Laravel Developer',
    company: 'Enterslice',
    period: '2022 – 2023',
    detail:
      'Contributed to the development of B2B and B2C e-commerce web applications using PHP and Laravel. Worked on backend functionality, database operations, frontend integration and business workflows.',
    responsibilities: [
      'Developed backend functionality using PHP and Laravel.',
      'Worked on B2B and B2C e-commerce application modules.',
      'Implemented CRUD operations and business logic.',
      'Created and integrated REST APIs for frontend functionality.',
      'Managed MySQL database operations, tables and relationships.',
      'Worked on product-related features, forms and data management.',
      'Integrated frontend pages with backend services.',
      'Performed debugging, testing and application maintenance.'
    ],
    technologies: [
      'PHP', 'Laravel', 'MySQL', 'JavaScript',
      'HTML5', 'CSS3', 'Bootstrap', 'REST APIs',
      'Git', 'Postman'
    ]
  },
  {
    role: 'Web Developer',
    company: 'SPVAIG',
    period: '2021 – 2022',
    detail:
      'Started my professional journey in web development, gaining practical exposure to website development, frontend technologies, backend concepts and database-driven applications.',
    responsibilities: [
      'Worked on website development and maintenance tasks.',
      'Gained practical experience with web development fundamentals.',
      'Worked on frontend layouts and user interface improvements.',
      'Learned to connect application functionality with database operations.',
      'Worked on debugging and resolving basic development issues.',
      'Improved understanding of application structure and development workflows.'
    ],
    technologies: [
      'PHP', 'HTML', 'CSS', 'JavaScript',
      'MySQL', 'Bootstrap'
    ]
  }
];

function SectionTitle({ eyebrow, title, text }) {
  return <div className="section-title"><span className="eyebrow">{eyebrow}</span><h2>{title}</h2>{text && <p>{text}</p>}</div>;
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const closeMenu = () => setMenuOpen(false);
  return (
    <div className="site-shell">
      <div className="ambient ambient-one" /><div className="ambient ambient-two" />
      <header className="topbar">
        <a className="brand" href="#home" onClick={closeMenu}><span className="brand-mark">AS</span><span>ANKIT<span className="brand-dot">.</span></span></a>
        <button className="mobile-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle navigation">{menuOpen ? <X /> : <Menu />}</button>
        <nav className={menuOpen ? 'nav-links open' : 'nav-links'}>
          {nav.map(item => <a key={item} href={`#${item.toLowerCase()}`} onClick={closeMenu}>{item}</a>)}
          <a className="nav-cta" href="#contact" onClick={closeMenu}>Let’s talk <ArrowUpRight size={15} /></a>
        </nav>
      </header>

      <main>
        <section className="hero section-wrap" id="home">
          <motion.div className="hero-copy" initial={{ opacity: 0, y: 22 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .65 }}>
            <div className="availability"><span className="pulse" /> OPEN TO THE RIGHT OPPORTUNITY</div>
            <p className="hero-kicker">HELLO, I'M</p>
            <h1>Ankit Sharma<span className="accent">.</span></h1>
            <h2>Full Stack Developer building <span>useful digital products.</span></h2>
            <p className="hero-description">5 years of experience building web applications with PHP, Laravel and React.js — across CRM, e-commerce and travel technology.</p>
            <div className="hero-actions">
              <a className="button button-primary" href="#projects">Explore my work <ArrowUpRight size={17} /></a>
              <a className="button button-secondary" href="/Ankit_Sharma_Resume.pdf" download><Download size={16} /> Download CV</a>
            </div>
            <div className="social-row">
              <a href="https://github.com/ankit1603" target="_blank" rel="noreferrer"><Github size={17} /> GitHub</a>
              <a href="https://www.linkedin.com/in/ankit-sharma-5b511a188/" target="_blank" rel="noreferrer"><Linkedin size={17} /> LinkedIn</a>
              <a href="mailto:ankitsharma16031996@gmail.com"><Mail size={17} /> Email</a>
            </div>
          </motion.div>
          <motion.div className="hero-visual" initial={{ opacity: 0, scale: .94 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: .7, delay: .15 }}>
            <div className="portrait-frame">
              <div className="portrait-placeholder"><img className="profile-photo" src="/ankit-profile.jpg" alt="Ankit Sharma" /></div>
              <div className="portrait-caption"><span className="caption-line" /> <span>DEVELOPER / PROBLEM SOLVER</span></div>
            </div>
            <div className="floating-card card-code"><Terminal size={17} /><span>Clean code. Practical solutions.</span></div>
            <div className="floating-card card-stack"><Code2 size={17} /><span>Laravel <b>+</b> React</span></div>
            <div className="hero-orbit orbit-a" /><div className="hero-orbit orbit-b" />
          </motion.div>
          <div className="hero-bottom"><span><MapPin size={14} /> Greater Noida, India</span><span>SCROLL TO EXPLORE <span className="scroll-line" /></span></div>
        </section>


        <section className="section-wrap section-block" id="about">

          <SectionTitle
            eyebrow="01 / ABOUT ME"
            title="Full Stack Developer & Web Application Engineer."
            text="Building scalable web applications, business solutions and seamless digital experiences."
          />

          <div className="about-grid">

            <div className="about-main">

              <p className="large-copy">
                I'm a <strong>Full Stack Developer with 5 years of professional experience</strong>
                specializing in PHP, Laravel, React.js and Angular. I have hands-on
                experience designing, developing and maintaining scalable, secure
                and business-oriented web applications.
              </p>

              <p>
                Throughout my professional journey, I have worked on
                <strong> CRM Systems, B2B/B2C E-commerce Platforms, Travel Management
                  Applications and Enterprise Web Solutions.</strong> I have experience
                converting business requirements into technical solutions,
                developing application modules, implementing business workflows
                and maintaining existing applications.
              </p>

              <h3>Backend Development & API Engineering</h3>
              <p>
                My core backend expertise includes PHP, Laravel, MVC Architecture,
                RESTful API Development, SOAP APIs, Laravel Middleware, Eloquent ORM,
                Database Migrations, Authentication, Authorization, CRUD Operations,
                Queues, Jobs, Cron Jobs and Task Scheduling. I focus on writing
                reusable, maintainable and optimized backend code.
              </p>

              <h3>Frontend Development</h3>
              <p>
                I have hands-on frontend development experience with React.js,
                Angular, JavaScript (ES6+), TypeScript, Redux Toolkit, React Hooks,
                HTML5, CSS3 and Bootstrap. I build responsive user interfaces,
                reusable components, API-connected modules, dynamic forms and
                interactive web applications.
              </p>

              <h3>Third-Party API & Business Integrations</h3>
              <p>
                I have experience integrating third-party services and external
                APIs into business applications, including Travel APIs, Payment
                Gateway Integration, WhatsApp Business API Integration,
                Email Integration, SMTP Configuration, Webhooks and
                automated notification systems.
              </p>

              <h3>Database Management & Automation</h3>
              <p>
                I work with MySQL and SQL Server for database design, relational
                data management, SQL queries, database optimization and application
                performance improvements. I also work with Laravel Queues,
                Background Jobs, Cron Jobs, Workflow Automation and
                automated business processes.
              </p>

              <h3>Generative AI & Emerging Technologies</h3>
              <p>
                I am continuously expanding my knowledge of Generative AI,
                Large Language Models (LLMs), Prompt Engineering, AI Agents
                and AI-powered Workflow Automation. My goal is to combine
                full-stack development with practical AI capabilities to build
                smarter business applications and automate repetitive operations.
              </p>

              <h3>What I Bring to a Development Team</h3>
              <p>
                I can contribute across the complete software development lifecycle,
                from understanding business requirements and designing database
                structures to developing backend APIs, building frontend interfaces,
                integrating external services, debugging issues and maintaining
                production applications. I value clean code, problem-solving,
                teamwork and continuous learning.
              </p>

            </div>

            <div className="about-facts">

              <div>
                <span>01</span>
                <b>5 Years of Experience</b>
                <small>Full Stack Web Development</small>
              </div>

              <div>
                <span>02</span>
                <b>Backend Expertise</b>
                <small>PHP, Laravel, MVC, REST APIs</small>
              </div>

              <div>
                <span>03</span>
                <b>Frontend Development</b>
                <small>React.js, Angular, JavaScript</small>
              </div>

              <div>
                <span>04</span>
                <b>Business Applications</b>
                <small>CRM, ERP, B2B/B2C E-commerce</small>
              </div>

              <div>
                <span>05</span>
                <b>API & Payment Integrations</b>
                <small>Payment, WhatsApp, Email, Webhooks</small>
              </div>

              <div>
                <span>06</span>
                <b>Database & Automation</b>
                <small>MySQL, SQL Server, Queues, Cron Jobs</small>
              </div>

              <div>
                <span>07</span>
                <b>Emerging Technologies</b>
                <small>Generative AI, LLMs, AI Automation</small>
              </div>

            </div>

          </div>
        </section>


        <section className="section-wrap section-block" id="skills">
          <SectionTitle eyebrow="02 / TOOLKIT" title="Technologies I work with." text="A practical toolkit built through hands-on application development." />
          <div className="skills-grid">{skills.map((group, i) => <div className="skill-card" key={group.title}><div className="skill-card-top"><span className="skill-index">0{i + 1}</span>{i === 0 ? <Code2 /> : i === 1 ? <Globe /> : i === 2 ? <Database /> : <Sparkles />}</div><h3>{group.title}</h3><div className="tags">{group.items.map(s => <span key={s}>{s}</span>)}</div></div>)}</div>
        </section>

        <section className="section-wrap section-block" id="experience">
          <SectionTitle eyebrow="03 / EXPERIENCE" title="Where I've made an impact." text="My professional journey in web application development." />
          <div className="timeline">{experience.map((job, i) => <div className="timeline-item" key={job.company}><div className="timeline-marker">{String(i + 1).padStart(2, '0')}</div><div className="timeline-content"><div className="timeline-heading"><div><h3>{job.role}</h3><h4>{job.company}</h4></div><span className="period">{job.period}</span></div><p>{job.detail}</p></div></div>)}</div>
        </section>

        <section className="section-wrap section-block" id="projects">
          <SectionTitle eyebrow="04 / SELECTED WORK" title="Projects & product experience." text="A selection of domains and application types I've worked on. Detailed case studies and public links can be added after verification." />
          <div className="projects-grid">{projects.map(p => <article className="project-card" key={p.number}><div className="project-top"><span>{p.number} / CASE STUDY</span><span className="project-type">{p.type}</span></div><div className="project-icon"><Layers size={25} /></div><h3>{p.name}</h3><p>{p.description}</p><div className="tags">{p.stack.map(s => <span key={s}>{s}</span>)}</div><small className="project-note">{p.note}</small></article>)}</div>
        </section>

        <section className="section-wrap section-block two-col" id="education">
          <div><SectionTitle eyebrow="05 / EDUCATION" title="Education." /><div className="education-card"><GraduationCap /><div><h3>Master of Computer Applications (MCA)</h3><p>NIET, Greater Noida · 74.56%</p></div></div><div className="education-card"><GraduationCap /><div><h3>Bachelor of Computer Applications (BCA)</h3><p>65.32%</p></div></div></div>
          <div className="cert-column"><SectionTitle eyebrow="06 / CONTINUOUS LEARNING" title="Certifications." /><div className="cert-placeholder"><Sparkles /><div><h3>Generative AI & Prompt Engineering</h3><p>Currently learning. Add certificate name, issuer and completion date after earning it.</p><span className="status-label">IN PROGRESS</span></div></div></div>
        </section>

       
<section className="contact-section" id="contact">
  <div className="section-wrap contact-inner">
    <div>
      <span className="eyebrow">07 / GET IN TOUCH</span>

      <h2>
        Have a role or project
        <br />
        in mind? <span>Let's connect.</span>
      </h2>

      <p>
        I'm interested in opportunities where I can build,
        improve and ship useful software.
      </p>
    </div>

    <div className="contact-links">

      <a href="mailto:ankitsharma16031996@gmail.com">
        <Mail />
        ankitsharma16031996@gmail.com
        <ArrowUpRight />
      </a>

      <a href="tel:+919457350029">
        <Phone />
        +91 94573 50029
        <ArrowUpRight />
      </a>

      <a
        href="https://github.com/ankit1603"
        target="_blank"
        rel="noreferrer"
      >
        <Github />
        github.com/ankit1603
        <ArrowUpRight />
      </a>

      <a
        href="https://www.linkedin.com/in/ankit-sharma-5b511a188/"
        target="_blank"
        rel="noreferrer"
      >
        <Linkedin />
        LinkedIn profile
        <ArrowUpRight />
      </a>

    </div>
  </div>
</section>

      </main>
      <footer className="footer section-wrap"><a className="brand" href="#home"><span className="brand-mark">AS</span><span>ANKIT<span className="brand-dot">.</span></span></a><span>Designed & built with care by Ankit Sharma · © {new Date().getFullYear()}</span><a href="#home">Back to top ↑</a></footer>
    </div>
  );
}
export default App;