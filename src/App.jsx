import "./App.css";

const highlights = [
  "#Operations",
  "#AIWorkflows",
  "#KYCAML",
  "#DataQuality",
  "#ReactVite",
];

const skills = [
  "#KYCAMLCompliance",
  "#AIDataAnnotation",
  "#JSONSchemaReview",
  "#ExcelMISReporting",
  "#PromptEngineering",
  "#HTMLCSSJavaScript",
  "#ReactVite",
  "#WordPressElementor",
];

const experiences = [
  {
    role: "Business Development Officer",
    company: "Muthoot Finance Ltd",
    period: "Feb 2025 - Jul 2025",
    tags: ["#CustomerAcquisition", "#GoldLoanKYC", "#BranchMIS"],
    points: [
      "Managed customer acquisition through field visits, telecalling, and referral programs.",
      "Conducted KYC verification and compliance documentation for gold loan applications.",
      "Created daily and weekly MIS reports for branch performance tracking.",
    ],
  },
  {
    role: "Operations & Sales Executive",
    company: "BPCL Depot, Kanpur",
    period: "Feb 2022 - Sep 2024",
    tags: ["#DepotOperations", "#BillingDocs", "#InventoryTracking"],
    points: [
      "Handled customer service, billing documentation, and daily inventory reconciliation.",
      "Supported sales coordination and prepared operational reports for management review.",
    ],
  },
  {
    role: "Data Operations Executive",
    company: "ParallelDots",
    period: "Oct 2020 - 2022",
    tags: ["#DataCleaning", "#MLAnnotation", "#QualityChecks"],
    points: [
      "Performed data cleaning, labeling, tagging, and quality assurance for ML datasets.",
      "Applied annotation guidelines to text and structured data to improve model accuracy.",
    ],
  },
];

const projects = [
  {
    name: "KYC JSON Annotation Sample",
    tags: ["#JSONReview", "#KYCAnnotation", "#DataQA"],
    description:
      "Structured KYC annotation sample showing nested JSON schema verification, confidence scoring, severity classification, and field-level error flagging.",
    href: "https://github.com/utkarshsingh5499/json-annotation-samples",
  },
  {
    name: "Spotify Clone",
    tags: ["#ReactJS", "#Vite", "#ReactRouter"],
    description:
      "Responsive music player with reusable React components, route-based pages, play controls, active song state, progress bar, and mobile styling.",
    href: "https://utkarshsingh5499.github.io/spotify-clone-v2",
  },
  {
    name: "Netflix Clone",
    tags: ["#HTML", "#CSS", "#JavaScript"],
    description:
      "Responsive Netflix UI clone with sign-in page, localStorage-based authentication, SEO meta tags, and GitHub Pages deployment.",
    href: "https://github.com/utkarshsingh5499/netflix_clone",
  },
];

const certifications = [
  ["#PromptEngineering", "Building LLM Applications with Prompt Engineering - NVIDIA"],
  ["#DataAnalytics", "Data Analytics Job Simulation - Tata Group Forage"],
  ["#ExcelSkills", "Excel Skills for Business Simulation - JP Morgan Chase Forage"],
  ["#FrontendDevelopment", "FrontEnd Web Development Micro Degree - Edyoda"],
  ["#JavaScript", "JavaScript Tutorial - Masai Learn"],
  ["#AIWordPress", "Master AI & WordPress - Udemy"],
];

function App() {
  return (
    <main className="portfolio">
      <header className="site-header">
        <a className="brand" href="#top" aria-label="Utkarsh Singh home">
          US
        </a>
        <nav className="nav-links" aria-label="Primary navigation">
          <a href="#skills">#Skills</a>
          <a href="#experience">#Experience</a>
          <a href="#projects">#Projects</a>
          <a href="#contact">#Contact</a>
        </nav>
      </header>

      <section className="hero" id="top">
        <div className="hero-content">
          <p className="eyebrow">#Kanpur #UttarPradesh</p>
          <h1>Utkarsh Singh</h1>
          <h2>Operations & AI-assisted workflows professional</h2>
          <p className="intro">
            I work across KYC/AML compliance, data annotation, MIS reporting,
            AI-assisted workflows, and frontend web projects using React,
            JavaScript, HTML, and CSS. I also have hands-on experience in JSON
            schema verification and field-level error flagging through structured
            KYC document annotation projects.
          </p>

          <div className="tag-cloud" aria-label="Professional hashtags">
            {highlights.map((tag) => (
              <span key={tag}>{tag}</span>
            ))}
          </div>

          <div className="buttons">
            <a href="#projects">#ViewProjects</a>
            <a href="/Utkarsh_Singh%20CV.pdf" download>
              #DownloadCV
            </a>
          </div>
        </div>

        <aside className="profile-card" aria-label="Quick profile facts">
          <div className="avatar">US</div>
          <div className="metrics">
            <div>
              <strong>4+</strong>
              <span>#YearsExperience</span>
            </div>
            <div>
              <strong>36</strong>
              <span>#KYCFieldsReviewed</span>
            </div>
            <div>
              <strong>6</strong>
              <span>#Certifications</span>
            </div>
          </div>
        </aside>
      </section>

      <section className="section split-section">
        <div>
          <p className="section-tag">#Focus</p>
          <h2>Clean operations, reliable data, practical AI workflows.</h2>
        </div>
        <div>
          <p>
            My strength is joining process discipline with digital execution:
            verifying documents, cleaning data, reviewing structured JSON, and
            using AI tools to make repeatable work faster and more accurate.
          </p>
          <div className="tag-cloud compact">
            <span>#ProcessDiscipline</span>
            <span>#DocumentVerification</span>
            <span>#StructuredData</span>
          </div>
        </div>
      </section>

      <section className="section" id="skills">
        <p className="section-tag">#Capabilities</p>
        <h2>Skills that connect operations with technology</h2>
        <div className="skills-grid">
          {skills.map((skill) => (
            <span key={skill}>{skill}</span>
          ))}
        </div>
      </section>

      <section className="section" id="experience">
        <p className="section-tag">#Experience</p>
        <h2>Recent roles</h2>
        <div className="timeline">
          {experiences.map((item) => (
            <article className="timeline-item" key={item.role}>
              <div className="timeline-top">
                <div>
                  <h3>{item.role}</h3>
                  <p>#{item.company.replaceAll(" ", "")}</p>
                </div>
                <span>#{item.period.replaceAll(" ", "")}</span>
              </div>
              <div className="tag-cloud compact">
                {item.tags.map((tag) => (
                  <span key={tag}>{tag}</span>
                ))}
              </div>
              <ul>
                {item.points.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section className="section" id="projects">
        <p className="section-tag">#Projects</p>
        <h2>Selected work</h2>
        <div className="project-grid">
          {projects.map((project) => (
            <article className="project-card" key={project.name}>
              <div className="project-tags">
                {project.tags.map((tag) => (
                  <span key={tag}>{tag}</span>
                ))}
              </div>
              <h3>{project.name}</h3>
              <p>{project.description}</p>
              <a href={project.href} target="_blank" rel="noreferrer">
                #OpenProject
              </a>
            </article>
          ))}
        </div>
      </section>

      <section className="section">
        <p className="section-tag">#Credentials</p>
        <h2>Certifications</h2>
        <ul className="cert-list">
          {certifications.map(([tag, text]) => (
            <li key={text}>
              <span>{tag}</span>
              {text}
            </li>
          ))}
        </ul>
      </section>

      <section className="contact-section" id="contact">
        <div>
          <p className="section-tag">#Contact</p>
          <h2>Let's build useful, accurate workflows.</h2>
          <p>
            Available for operations, data annotation, AI workflow support, and
            junior web development opportunities.
          </p>
          <div className="tag-cloud compact inverted">
            <span>#AvailableForWork</span>
            <span>#OperationsSupport</span>
            <span>#JuniorWebDeveloper</span>
          </div>
        </div>

        <div className="contact-actions">
          <a href="mailto:utkarsh.singh.5499@gmail.com">
            <span>#Email</span>
            utkarsh.singh.5499@gmail.com
          </a>
          <a href="tel:+918604982980">
            <span>#Phone</span>
            +91 8604982980
          </a>
          <a
            href="https://github.com/utkarshsingh5499"
            target="_blank"
            rel="noreferrer"
          >
            <span>#GitHub</span>
            github.com/utkarshsingh5499
          </a>
        </div>
      </section>
    </main>
  );
}

export default App;
