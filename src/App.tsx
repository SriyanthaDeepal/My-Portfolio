import { useEffect, useState } from 'react';
import { ArrowRight, ArrowUpRight, BookOpen, BriefcaseBusiness, Github, Linkedin, Mail, MapPin, Moon, Sun } from 'lucide-react';
import { experience, projects, skillGroups, type Project } from './data';

const sections = [
  ['about', 'About'], ['experience', 'Experience'], ['projects', 'Projects'],
  ['research', 'Research'], ['contact', 'Contact']
] as const;

function Tags({ tags }: { tags: string[] }) {
  return <div className="tags">{tags.map(tag => <span className="tag" key={tag}>{tag}</span>)}</div>;
}
function SectionTitle({ children }: { children: string }) {
  return <h2 className="section-title">{children}</h2>;
}
function ExternalLink({ href, children, label }: { href: string; children: React.ReactNode; label?: string }) {
  return <a href={href} target="_blank" rel="noopener noreferrer" className="text-link" aria-label={label}>
    {children} <ArrowUpRight size={16} aria-hidden="true"/>
  </a>;
}
function ProjectCard({ project, number }: { project: Project; number: number }) {
  return <article className="project-card">
    <span className="project-number" aria-hidden="true">{String(number).padStart(2, '0')}</span>
    <div className="project-content">
      <p className="eyebrow">{project.category}</p>
      <h3>{project.name}{project.featured && <span className="star" aria-label="Featured project"> ✦</span>}</h3>
      <p className="project-lede">{project.description}</p>
      <p className="project-contribution">{project.contribution}</p>
      <Tags tags={project.tags} />
      <ExternalLink href={project.link} label={project.linkText + ': ' + project.name}>{project.linkText}</ExternalLink>
    </div>
  </article>;
}

export default function App() {
  const [theme, setTheme] = useState<'dark' | 'light'>(() => {
    try { return localStorage.getItem('portfolio-theme') === 'light' ? 'light' : 'dark'; }
    catch { return 'dark'; }
  });
  const [active, setActive] = useState('about');

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    try { localStorage.setItem('portfolio-theme', theme); } catch { /* storage is optional */ }
  }, [theme]);

  useEffect(() => {
    const elements = document.querySelectorAll<HTMLElement>('main section[id]');
    if (!('IntersectionObserver' in window)) return;
    const observer = new IntersectionObserver(entries => {
      const visible = entries.filter(e => e.isIntersecting).sort((a,b) => b.intersectionRatio - a.intersectionRatio);
      if (visible[0]) setActive(visible[0].target.id);
    }, { rootMargin: '-12% 0px -55% 0px', threshold: [0, .25, .5] });
    elements.forEach(element => observer.observe(element));
    return () => observer.disconnect();
  }, []);

  return <>
    <a href="#main" className="skip-link">Skip to main content</a>
    <div className="layout" id="top">
      <aside className="identity">
        <div>
          <a className="brand" href="#top" aria-label="Sriyantha Deepal — back to top">SD<span>.</span></a>
          <header className="hero">
            <p className="eyebrow hero-kicker"><span className="status-dot"/> SOFTWARE · AI · CLOUD</p>
            <h1>Sriyantha<br/><span>Deepal.</span></h1>
            <p className="role">AI/ML Engineer &amp;<br/> Software Developer</p>
            <p className="hero-description">I build intelligent software, explore machine learning through research, and help systems run reliably.</p>
            <div className="hero-actions">
              <a href="#projects" className="primary-button">Explore projects <ArrowUpRight size={17} aria-hidden="true"/></a>
              <a href="#contact" className="secondary-button">Get in touch <ArrowRight size={16} aria-hidden="true"/></a>
            </div>
          </header>
          <nav className="side-nav" aria-label="Page sections">
            {sections.map(([id, label]) =>
              <a key={id} href={'#' + id} className={active === id ? 'current' : ''} aria-current={active === id ? 'location' : undefined}>
                <span className="nav-rule" aria-hidden="true"/>{label}
              </a>
            )}
          </nav>
        </div>
        <div className="identity-footer">
          <div className="socials">
            <a href="https://github.com/SriyanthaDeepal" target="_blank" rel="noopener noreferrer" aria-label="GitHub profile"><Github size={21}/></a>
            <a href="https://www.linkedin.com/in/sriyanthadeepal" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn profile"><Linkedin size={21}/></a>
            <a href="mailto:aasriyanthadeepal@gmail.com" aria-label="Send email"><Mail size={21}/></a>
          </div>
          <button type="button" className="theme-button" aria-label={'Switch to ' + (theme === 'dark' ? 'light' : 'dark') + ' theme'} onClick={() => setTheme(value => value === 'dark' ? 'light' : 'dark')}>
            {theme === 'dark' ? <Sun size={20}/> : <Moon size={20}/>}
          </button>
        </div>
      </aside>
      <main id="main">
        <section id="about" className="section">
          <SectionTitle>About</SectionTitle>
          <div className="prose">
            <p>I'm a <strong>Software Technology honours graduate</strong> working across machine learning, application development and reliable infrastructure.</p>
            <p>I enjoy combining <strong>computer vision and sensor data fusion</strong> with thoughtful software engineering. I've built LLM applications using retrieval-augmented generation and worked with cloud tooling that helps software reach production.</p>
            <p>I'm currently an <strong>Associate DevOps &amp; SRE Intern at Pearson Lanka</strong>, after an Ethical and Responsible AI engineering internship at Ethiksa. I'm also the first author of a Springer Nature research publication.</p>
          </div>
          <div className="facts">
            <span><MapPin size={15} aria-hidden="true"/> Sri Lanka</span>
            <span><BookOpen size={15} aria-hidden="true"/> BICT (Hons), Software Technology</span>
          </div>
          <div className="feature-card education">
            <div className="feature-icon"><BookOpen size={22} aria-hidden="true"/></div>
            <div>
              <p className="eyebrow">EDUCATION</p>
              <h3>University of Sri Jayewardenepura</h3>
              <p>BICT (Honours) in Software Technology · Second Class Upper Division · GPA 3.48</p>
              <p className="fine-print">Also completed a Pearson BTEC HND in Computing (Network Technology) at ESOFT Metro Campus.</p>
            </div>
          </div>
        </section>

        <section id="experience" className="section">
          <SectionTitle>Experience</SectionTitle>
          <div className="experience-list">
            {experience.map(job => <article key={job.organization} className="experience-item">
              <p className="date">{job.dates}</p>
              <div>
                <h3>{job.role} <span className="accent">@</span> {job.organization}</h3>
                <p>{job.description}</p>
                <Tags tags={job.tags}/>
              </div>
            </article>)}
          </div>
          <a href="#contact" className="text-link section-bottom">Let's collaborate <ArrowUpRight size={16} aria-hidden="true"/></a>
        </section>

        <section id="projects" className="section">
          <SectionTitle>Selected Projects</SectionTitle>
          <p className="section-intro">A selection of applied AI, research and software work — with links to the projects where available.</p>
          <div className="projects-list">
            {projects.map((project, i) => <ProjectCard key={project.name} project={project} number={i + 1}/>)}
          </div>
          <ExternalLink href="https://github.com/SriyanthaDeepal?tab=repositories">More projects on GitHub</ExternalLink>
        </section>

        <section id="research" className="section">
          <SectionTitle>Research &amp; Skills</SectionTitle>
          <div className="feature-card publication">
            <div className="feature-icon"><BookOpen size={23} aria-hidden="true"/></div>
            <div>
              <p className="eyebrow">FIRST-AUTHOR PUBLICATION · SPRINGER NATURE</p>
              <h3>Multi-sensor Data Fusion for Day and Night Terrain Type Classification</h3>
              <p>A book chapter in Lecture Notes in Networks and Systems exploring camera and LiDAR sensor fusion for terrain classification.</p>
              <ExternalLink href="https://doi.org/10.1007/978-3-031-90893-4_5">Read the publication</ExternalLink>
            </div>
          </div>
          <div className="skills-grid">
            {skillGroups.map(group => <div key={group.name} className="skill-group">
              <h3>{group.name}</h3>
              <Tags tags={group.skills}/>
            </div>)}
          </div>
        </section>

        <section id="contact" className="section contact">
          <SectionTitle>What's Next?</SectionTitle>
          <p className="eyebrow">LET'S BUILD SOMETHING MEANINGFUL</p>
          <h2>Have a project or opportunity in mind?</h2>
          <p>I'm interested in AI/ML engineering, applied research and intelligent software products. If my work feels relevant, I'd love to connect.</p>
          <a href="mailto:aasriyanthadeepal@gmail.com?subject=Hello%20Sriyantha" className="primary-button">Say hello <Mail size={17} aria-hidden="true"/></a>
          <p className="contact-detail"><BriefcaseBusiness size={16} aria-hidden="true"/> AI/ML · Software Engineering · DevOps</p>
        </section>
        <footer className="footer">
          <p>Designed and built by Sriyantha Deepal.</p>
          <a href="#top">Back to top <ArrowUpRight size={14} aria-hidden="true"/></a>
        </footer>
      </main>
    </div>
  </>;
}
