import { useEffect, useRef, useState } from "react";
import { Routes, Route, Link, useLocation } from "react-router-dom";
import {
  ArrowRight,
  Megaphone,
  BarChart3,
  GraduationCap,
  Users,
  Rocket,
  CheckCircle2,
  FileText,
  ShieldCheck,
  BadgeHelp,
  Mail,
  Menu,
  X,
  Send,
  School,
  Building2,
  BookOpen,
  BriefcaseBusiness,
  Layers3,
  Phone,
} from "lucide-react";

const trustItems = [
  "Performance Ads",
  "Admissions Growth",
  "Lead Generation",
  "Conversion Funnels",
  "Growth Reporting",
  "Creative Systems",
];

const whoWeWorkWith = [
  {
    icon: School,
    title: "Coaching Institutes",
    desc: "Lead generation, campaign systems, and funnel refinement for coaching-driven admissions.",
  },
  {
    icon: Building2,
    title: "Schools & Academies",
    desc: "Positioning, inquiry capture, and performance campaigns for growth-focused institutions.",
  },
  {
    icon: BookOpen,
    title: "Colleges & Higher Education",
    desc: "Structured marketing systems designed for clarity, reach, and admissions intent.",
  },
  {
    icon: BriefcaseBusiness,
    title: "Training Institutes",
    desc: "Campaign and landing systems built to improve inquiry quality and conversion flow.",
  },
  {
    icon: Layers3,
    title: "Education Startups",
    desc: "Growth support for brands building new education offers, funnels, and acquisition systems.",
  },
  {
    icon: GraduationCap,
    title: "Skill-Based Programs",
    desc: "Sharper messaging and ad systems for courses, certifications, and outcome-driven programs.",
  },
];

const services = [
  {
    icon: Megaphone,
    title: "Lead Generation",
    desc: "We structure campaigns to attract stronger-fit prospects instead of low-quality volume.",
    includes: ["Audience targeting", "Inquiry strategy", "Lead quality improvement"],
  },
  {
    icon: BarChart3,
    title: "Performance Ads",
    desc: "Meta and Google campaigns built for reach, inquiry quality, and scalable performance.",
    includes: ["Campaign setup", "Budget structure", "Weekly optimization"],
  },
  {
    icon: GraduationCap,
    title: "Admission Funnels",
    desc: "Landing journeys designed to convert attention into inquiries, calls, and admissions.",
    includes: ["Landing flow planning", "Conversion structure", "Funnel refinement"],
  },
  {
    icon: Users,
    title: "Creative Strategy",
    desc: "Clear hooks, messaging, and visual direction designed for serious campaign performance.",
    includes: ["Offer positioning", "Creative direction", "Message testing"],
  },
];

const caseStudies = [
  {
    title: "Institute Admissions Campaign",
    challenge: "Lead quality was inconsistent and the campaign structure lacked clarity.",
    solution: "We rebuilt targeting, simplified the campaign setup, and improved the inquiry path.",
    result: "Stronger lead quality and a cleaner path from click to inquiry.",
  },
  {
    title: "Landing Funnel Optimization",
    challenge: "Traffic was coming in, but conversion flow was weak and user intent was leaking.",
    solution: "We restructured the landing experience, improved messaging hierarchy, and tightened CTA flow.",
    result: "A more focused journey built around admissions intent.",
  },
  {
    title: "Creative System Refresh",
    challenge: "Campaign creative lacked clarity and did not match audience intent.",
    solution: "We refined creative direction, improved messaging hooks, and aligned visuals with performance goals.",
    result: "More consistent communication and better campaign alignment.",
  },
];

const whyPoints = [
  "Strategy before execution",
  "Campaigns built for lead quality",
  "Funnels designed for conversion clarity",
  "Creative aligned with performance goals",
];

const processItems = [
  {
    icon: Rocket,
    title: "Discover",
    desc: "We understand your institute, audience, admissions cycle, and current growth bottlenecks before launch.",
  },
  {
    icon: BarChart3,
    title: "Build",
    desc: "We shape campaign structure, funnel direction, creative system, and tracking around the outcome you need.",
  },
  {
    icon: CheckCircle2,
    title: "Scale",
    desc: "We improve performance with real numbers, better quality control, and continuous optimization.",
  },
];

const team = [
  { name: "Gaurav Modi", role: "Founder", tags: ["Leadership", "Strategy"] },
  { name: "Ayush Pandey", role: "Co-Founder", tags: ["Operations", "Growth"] },
  { name: "Sarthak Singh", role: "Developer & Head Executive", tags: ["Development", "Execution"] },
  { name: "Kaushal Yadav", role: "HR Head Manager", tags: ["People", "Management"] },
  { name: "Rahul", role: "IT Support Manager & Sales Manager", tags: ["Support", "Sales"] },
  { name: "Shivam", role: "Architect Designer & Head Editor", tags: ["Design", "Editing"] },
];

const stats = [
  { value: "25+", label: "Campaigns managed" },
  { value: "10+", label: "Institutes supported" },
  { value: "1.25K+", label: "Leads generated" },
  { value: "24/7", label: "Optimization rhythm" },
];

const flowRows = [
  { from: "Meta Ads", to: "Lead Capture", result: "Sharper inquiry quality" },
  { from: "Google Ads", to: "Admissions Funnel", result: "Cleaner conversion path" },
  { from: "Creative", to: "Growth System", result: "Measured scale" },
];

const marqueeWords = [
  "Performance Ads",
  "Admissions Growth",
  "Lead Generation",
  "Conversion Funnels",
  "Creative Strategy",
  "Tracking Systems",
];

const privacySections = [
  {
    title: "Information We Collect",
    text: "We may collect your name, email address, phone number, institute details, and any message submitted through this website.",
  },
  {
    title: "How We Use Information",
    text: "We use submitted information to respond to inquiries, discuss services, improve communication, and support our business operations.",
  },
  {
    title: "Sharing of Information",
    text: "We do not sell personal information. We may use trusted tools or service providers only where necessary to operate our services.",
  },
];

const termsSections = [
  {
    title: "Website Usage",
    text: "By using this website, you agree not to misuse its content, forms, branding, or services.",
  },
  {
    title: "Service Scope",
    text: "All service descriptions on this website are general. Final pricing, deliverables, scope, and timelines depend on direct agreement.",
  },
  {
    title: "Ownership",
    text: "The branding, design, layout, and original content of this website belong to Katalyst Rise unless stated otherwise.",
  },
];

const disclaimerSections = [
  {
    title: "No Guaranteed Results",
    text: "Marketing performance depends on many factors. We do not guarantee a fixed number of leads, admissions, or revenue.",
  },
  {
    title: "Third-Party Platforms",
    text: "This website may mention platforms such as Google and Meta. We are not responsible for their policy or product changes.",
  },
  {
    title: "General Information",
    text: "The content on this website is for informational purposes and should not be treated as legal, financial, or regulatory advice.",
  },
];

function useReveal(rootRef) {
  useEffect(() => {
    if (!rootRef.current) return;

    const nodes = rootRef.current.querySelectorAll(".reveal");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.14 }
    );

    nodes.forEach((node) => observer.observe(node));
    return () => observer.disconnect();
  }, [rootRef]);
}

function BrandLockup({ footer = false }) {
  return (
    <div className={`brand-lockup ${footer ? "footer" : ""}`}>
      <div className="brand-mark-shell">
        <img src="/logo-mark.png" alt="Katalyst Rise mark" className="brand-mark" />
      </div>

      <div className="brand-copy">
        <span className="brand-name">Katalyst Rise</span>
        <span className="brand-tag">Growth systems for institutes</span>
      </div>
    </div>
  );
}

function SectionTitle({ eyebrow, title, copy, left = false }) {
  return (
    <div className={`section-title reveal ${left ? "left" : ""}`}>
      <p className="section-eyebrow">{eyebrow}</p>
      <h2>{title}</h2>
      <p>{copy}</p>
    </div>
  );
}

function HeroVisual() {
  const items = [...marqueeWords, ...marqueeWords];

  return (
    <div className="hero-visual intro intro-4">
      <div className="hero-visual-shell">
        <div className="marquee-strip top">
          <div className="marquee-track">
            {items.map((item, index) => (
              <span key={`top-${index}`} className="marquee-item">
                {item}
              </span>
            ))}
          </div>
        </div>

        <div className="flow-board">
          <div className="flow-board-head">
            <p>Admissions engine</p>
            <h3>Campaign flow, tracked clearly</h3>
          </div>

          <div className="flow-list">
            {flowRows.map((row, index) => (
              <div key={row.from} className={`flow-row flow-row-${index + 1}`}>
                <div className="flow-side left">
                  <span className="flow-label">{row.from}</span>
                </div>

                <div className="flow-track">
                  <span className="track-node start" />
                  <span className="track-line" />
                  <span className="track-node end" />
                  <span className={`track-packet packet-${index + 1}`} />
                </div>

                <div className="flow-side right">
                  <span className="flow-label">{row.to}</span>
                </div>
              </div>
            ))}
          </div>

          <div className="hero-mini-grid">
            {flowRows.map((row) => (
              <div key={row.result} className="hero-mini-card">
                <p>Result</p>
                <h4>{row.result}</h4>
              </div>
            ))}
          </div>
        </div>

        <div className="marquee-strip bottom">
          <div className="marquee-track reverse">
            {items.map((item, index) => (
              <span key={`bottom-${index}`} className="marquee-item">
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function SiteShell({ children }) {
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const isHome = location.pathname === "/";
  const sectionLink = (id) => (isHome ? `#${id}` : `/#${id}`);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 10);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname, location.hash]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <div className="site-shell">
      <div className="site-bg" aria-hidden="true">
        <div className="bg-grid" />
        <div className="bg-glow glow-a" />
        <div className="bg-glow glow-b" />

        <div className="bg-lane lane-a">
          <span className="bg-dot dot-a" />
        </div>
        <div className="bg-lane lane-b">
          <span className="bg-dot dot-b" />
        </div>
        <div className="bg-lane lane-c">
          <span className="bg-dot dot-c" />
        </div>
      </div>

      <header className={`site-header ${isScrolled ? "scrolled" : ""}`}>
        <div className="container-shell header-shell">
          <Link to="/" className="brand-link" aria-label="Katalyst Rise home">
            <BrandLockup />
          </Link>

          <nav className="top-nav">
            <a href={sectionLink("services")}>Services</a>
            <a href={sectionLink("who-we-work-with")}>Who We Work With</a>
            <a href={sectionLink("case-studies")}>Case Studies</a>
            <a href={sectionLink("process")}>Process</a>
            <a href={sectionLink("team")}>Team</a>
            <a href={sectionLink("contact")}>Contact</a>
            <Link to="/privacy">Privacy</Link>
            <Link to="/terms">Terms</Link>
            <Link to="/disclaimer">Disclaimer</Link>
          </nav>

          <button
            type="button"
            className="menu-toggle"
            aria-label="Open menu"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen(true)}
          >
            <Menu size={20} />
          </button>
        </div>
      </header>

      <div className={`menu-overlay ${menuOpen ? "open" : ""}`} onClick={() => setMenuOpen(false)} />

      <aside className={`mobile-drawer ${menuOpen ? "open" : ""}`}>
        <div className="mobile-drawer-top">
          <div className="mobile-drawer-title">Menu</div>
          <button
            type="button"
            className="menu-close"
            aria-label="Close menu"
            onClick={() => setMenuOpen(false)}
          >
            <X size={18} />
          </button>
        </div>

        <div className="mobile-drawer-links">
          <a href={sectionLink("services")} onClick={() => setMenuOpen(false)}>Services</a>
          <a href={sectionLink("who-we-work-with")} onClick={() => setMenuOpen(false)}>Who We Work With</a>
          <a href={sectionLink("case-studies")} onClick={() => setMenuOpen(false)}>Case Studies</a>
          <a href={sectionLink("process")} onClick={() => setMenuOpen(false)}>Process</a>
          <a href={sectionLink("team")} onClick={() => setMenuOpen(false)}>Team</a>
          <a href={sectionLink("contact")} onClick={() => setMenuOpen(false)}>Contact</a>
          <Link to="/privacy" onClick={() => setMenuOpen(false)}>Privacy</Link>
          <Link to="/terms" onClick={() => setMenuOpen(false)}>Terms</Link>
          <Link to="/disclaimer" onClick={() => setMenuOpen(false)}>Disclaimer</Link>
        </div>

        <div className="mobile-drawer-footer">
          <a href={sectionLink("contact")} className="primary-btn" onClick={() => setMenuOpen(false)}>
            Start a Project <ArrowRight size={18} />
          </a>
        </div>
      </aside>

      {children}

      <footer className="site-footer">
        <div className="container-shell footer-grid">
          <div>
            <BrandLockup footer />
            <p className="footer-copy">
              Lead generation and ad campaigns for institutes with sharper strategy,
              stronger creative, and admissions-focused execution.
            </p>
          </div>

          <div>
            <p className="footer-label">Basic help</p>
            <div className="footer-links">
              <a href="mailto:contact@risekatalyst.com" className="footer-mail">
                <Mail size={15} />
                <span className="footer-mail-text">contact@risekatalyst.com</span>
              </a>
            </div>
          </div>

          <div>
            <p className="footer-label">Partnerships</p>
            <div className="footer-links">
              <a href="mailto:partnerships@risekatalyst.com" className="footer-mail">
                <Mail size={15} />
                <span className="footer-mail-text">partnerships@risekatalyst.com</span>
              </a>
            </div>

            <div className="footer-nav">
              <Link to="/privacy">Privacy Policy</Link>
              <Link to="/terms">Terms & Conditions</Link>
              <Link to="/disclaimer">Disclaimer</Link>
            </div>
          </div>
        </div>

        <div className="footer-bottom">© 2026 Katalyst Rise. All rights reserved.</div>
      </footer>
    </div>
  );
}

function HomePage() {
  const scope = useRef(null);
  const [form, setForm] = useState({
    name: "",
    email: "",
    institute: "",
    phone: "",
    service: "",
    budget: "",
    contactMethod: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [done, setDone] = useState("");

  useReveal(scope);

  async function submitForm(e) {
    e.preventDefault();
    setLoading(true);
    setDone("");

    try {
      const payload = {
        name: form.name,
        email: form.email,
        message: [
          `Institute / Organization: ${form.institute || "-"}`,
          `Phone / WhatsApp: ${form.phone || "-"}`,
          `Service needed: ${form.service || "-"}`,
          `Monthly ad budget: ${form.budget || "-"}`,
          `Preferred contact method: ${form.contactMethod || "-"}`,
          "",
          form.message,
        ].join("\n"),
      };

      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const text = await res.text();
      let data = {};

      try {
        data = text ? JSON.parse(text) : {};
      } catch {
        data = {};
      }

      if (!res.ok) {
        throw new Error(data.error || "Form backend is not available in preview yet.");
      }

      setDone(data.message || "Thanks — your inquiry has been received. We’ll get back to you soon.");
      setForm({
        name: "",
        email: "",
        institute: "",
        phone: "",
        service: "",
        budget: "",
        contactMethod: "",
        message: "",
      });
    } catch (err) {
      setDone(err.message || "Something went wrong.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <SiteShell>
      <main ref={scope}>
        <section className="hero-section">
          <div className="container-shell hero-grid">
            <div className="hero-copy-col">
              <div className="hero-kicker intro intro-1">Performance growth for institutes</div>

              <h1 className="hero-title">
                <span className="line-wrap"><span className="hero-line intro intro-2">We build campaigns,</span></span>
                <span className="line-wrap"><span className="hero-line intro intro-3">funnels, and systems</span></span>
                <span className="line-wrap"><span className="hero-line accent-text intro intro-4">that drive admissions.</span></span>
              </h1>

              <p className="hero-copy intro intro-5">
                Katalyst Rise helps institutes generate stronger inquiries, improve conversion flow,
                and scale performance with clear strategy, sharper creative, and measurable execution.
              </p>

              <div className="hero-actions intro intro-6">
                <a href="#contact" className="primary-btn">
                  Start a Project <ArrowRight size={18} />
                </a>
                <a href="#services" className="secondary-btn">
                  View Services
                </a>
              </div>

              <div className="hero-proof intro intro-7">
                {["Meta Ads", "Google Ads", "Funnel Systems", "Creative Strategy"].map((item) => (
                  <span key={item} className="hero-proof-item">{item}</span>
                ))}
              </div>
            </div>

            <HeroVisual />
          </div>
        </section>

        <section className="trust-strip-section">
          <div className="container-shell">
            <div className="trust-strip reveal">
              {trustItems.map((item) => (
                <span key={item} className="trust-strip-item">{item}</span>
              ))}
            </div>
          </div>
        </section>

        <section className="proof-section standard-section">
          <div className="container-shell">
            <SectionTitle
              eyebrow="Proof"
              title="Built for measurable growth"
              copy="Clear numbers, cleaner execution, and systems designed to support performance over noise."
            />

            <div className="stats-rail">
              {stats.map((item) => (
                <div key={item.label} className="stat-card reveal">
                  <h3>{item.value}</h3>
                  <p>{item.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="who-we-work-with" className="standard-section">
          <div className="container-shell">
            <SectionTitle
              eyebrow="Who we work with"
              title="Built for institutes that want clearer growth."
              copy="We work with education-focused brands that need better inquiry quality, cleaner conversion flow, and stronger admissions-focused execution."
            />

            <div className="who-grid">
              {whoWeWorkWith.map((item) => {
                const Icon = item.icon;

                return (
                  <div key={item.title} className="who-card reveal">
                    <div className="icon-box">
                      <Icon size={22} />
                    </div>
                    <div className="who-card-copy">
                      <h3>{item.title}</h3>
                      <p>{item.desc}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        <section id="services" className="standard-section">
          <div className="container-shell">
            <SectionTitle
              eyebrow="Services"
              title="What we actually build"
              copy="From campaign setup to admissions-focused funnels, we build the systems that turn marketing movement into better inquiry quality and stronger conversion."
            />

            <div className="services-grid">
              {services.map((service, index) => {
                const Icon = service.icon;

                return (
                  <div key={service.title} className={`service-card reveal ${index === 0 ? "feature" : ""}`}>
                    <div className="icon-box">
                      <Icon size={24} />
                    </div>

                    <div className="service-content">
                      <h3>{service.title}</h3>
                      <p>{service.desc}</p>

                      <div className="service-list">
                        {service.includes.map((item) => (
                          <div key={item} className="service-list-item">
                            <CheckCircle2 size={16} />
                            <span>{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        <section id="case-studies" className="standard-section">
          <div className="container-shell">
            <SectionTitle
              eyebrow="Case Studies"
              title="Work built around results"
              copy="A look at how we think, structure, and improve growth systems for institutes and education-focused brands."
            />

            <div className="case-grid">
              {caseStudies.map((study) => (
                <div key={study.title} className="case-card reveal">
                  <div className="case-top">
                    <p className="case-chip">Project Snapshot</p>
                    <h3>{study.title}</h3>
                  </div>

                  <div className="case-block">
                    <span>Challenge</span>
                    <p>{study.challenge}</p>
                  </div>

                  <div className="case-block">
                    <span>What we changed</span>
                    <p>{study.solution}</p>
                  </div>

                  <div className="case-block result">
                    <span>Outcome</span>
                    <p>{study.result}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="standard-section">
          <div className="container-shell">
            <div className="why-shell reveal">
              <div className="why-grid">
                <div className="why-copy">
                  <p className="section-eyebrow">Why Katalyst Rise</p>
                  <h2>Structured thinking. Cleaner execution.</h2>
                  <p>
                    We do not rely on random marketing activity. We build around systems,
                    measurement, and outcomes that matter.
                  </p>
                </div>

                <div className="why-points">
                  {whyPoints.map((point) => (
                    <div key={point} className="why-point">
                      <CheckCircle2 size={18} />
                      <span>{point}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="process" className="standard-section">
          <div className="container-shell">
            <SectionTitle
              eyebrow="Process"
              title="A clear path from attention to admission"
              copy="No filler. Just a focused operating model that turns marketing into measurable progress."
            />

            <div className="process-grid">
              {processItems.map((item, index) => {
                const Icon = item.icon;

                return (
                  <div key={item.title} className="process-card reveal">
                    <div className="process-index">0{index + 1}</div>
                    <div className="icon-box">
                      <Icon size={24} />
                    </div>
                    <h3>{item.title}</h3>
                    <p>{item.desc}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        <section id="team" className="standard-section">
          <div className="container-shell">
            <SectionTitle
              eyebrow="Team"
              title="People behind Katalyst Rise"
              copy="Meet the people driving strategy, execution, and growth at Katalyst Rise."
            />

            <div className="team-grid">
              {team.map((member) => (
                <div key={member.name} className="team-card reveal">
                  <div className="team-top">
                    <div className="team-mark">{member.name.charAt(0)}</div>
                    <div>
                      <h3>{member.name}</h3>
                      <p className="team-role">{member.role}</p>
                    </div>
                  </div>

                  <div className="team-tags">
                    {member.tags.map((tag) => (
                      <span key={tag} className="team-tag">{tag}</span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="standard-section">
          <div className="container-shell">
            <div className="contact-shell reveal">
              <div className="contact-header">
                <SectionTitle
                  eyebrow="Contact"
                  title="Tell us what you need"
                  copy="Share your institute, service requirement, and current goal. We’ll understand the requirement and respond with the right next step."
                  left
                />
              </div>

              <div className="contact-grid">
                <form onSubmit={submitForm} className="contact-form">
                  <div className="contact-form-grid">
                    <input
                      className="form-field"
                      placeholder="Full name"
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                    />
                    <input
                      className="form-field"
                      placeholder="Email address"
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                    />
                    <input
                      className="form-field"
                      placeholder="Institute / organization"
                      value={form.institute}
                      onChange={(e) => setForm({ ...form, institute: e.target.value })}
                    />
                    <input
                      className="form-field"
                      placeholder="Phone / WhatsApp"
                      value={form.phone}
                      onChange={(e) => setForm({ ...form, phone: e.target.value })}
                    />

                    <select
                      className="form-field select-field"
                      value={form.service}
                      onChange={(e) => setForm({ ...form, service: e.target.value })}
                    >
                      <option value="">Service needed</option>
                      <option value="Lead Generation">Lead Generation</option>
                      <option value="Performance Ads">Performance Ads</option>
                      <option value="Admission Funnels">Admission Funnels</option>
                      <option value="Creative Strategy">Creative Strategy</option>
                      <option value="Full Growth System">Full Growth System</option>
                      <option value="Not sure yet">Not sure yet</option>
                    </select>

                    <select
                      className="form-field select-field"
                      value={form.budget}
                      onChange={(e) => setForm({ ...form, budget: e.target.value })}
                    >
                      <option value="">Monthly ad budget</option>
                      <option value="Below ₹25,000">Below ₹25,000</option>
                      <option value="₹25,000 – ₹50,000">₹25,000 – ₹50,000</option>
                      <option value="₹50,000 – ₹1,00,000">₹50,000 – ₹1,00,000</option>
                      <option value="₹1,00,000+">₹1,00,000+</option>
                      <option value="Prefer to discuss">Prefer to discuss</option>
                    </select>

                    <select
                      className="form-field select-field"
                      value={form.contactMethod}
                      onChange={(e) => setForm({ ...form, contactMethod: e.target.value })}
                    >
                      <option value="">Preferred contact method</option>
                      <option value="Email">Email</option>
                      <option value="Phone call">Phone call</option>
                      <option value="WhatsApp">WhatsApp</option>
                    </select>
                  </div>

                  <textarea
                    rows="6"
                    className="form-field"
                    placeholder="Your goal / current challenge"
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                  />

                  <button type="submit" disabled={loading} className="primary-btn full-btn">
                    <Send size={18} />
                    {loading ? "Sending..." : "Send Message"}
                  </button>

                  {done ? <p className="form-message">{done}</p> : null}
                </form>

                <div className="contact-side">
                  <div className="contact-benefit-card reveal">
                    <p className="section-eyebrow small-left">Support channels</p>

                    <div className="support-card-list">
                      <a href="mailto:contact@risekatalyst.com" className="support-card">
                        <div className="contact-meta-icon">
                          <Mail size={18} />
                        </div>
                        <div className="support-copy">
                          <p className="meta-label">Basic knowledge & help</p>
                          <p className="meta-value email-value">contact@risekatalyst.com</p>
                        </div>
                      </a>

                      <a href="mailto:partnerships@risekatalyst.com" className="support-card">
                        <div className="contact-meta-icon">
                          <Mail size={18} />
                        </div>
                        <div className="support-copy">
                          <p className="meta-label">Partnerships</p>
                          <p className="meta-value email-value">partnerships@risekatalyst.com</p>
                        </div>
                      </a>
                    </div>
                  </div>

                  <div className="contact-meta-grid">
                    <div className="contact-meta-card reveal">
                      <div className="contact-meta-icon">
                        <CheckCircle2 size={18} />
                      </div>
                      <div>
                        <p className="meta-label">Response focus</p>
                        <p className="meta-value">Growth systems, ads, funnels, execution</p>
                      </div>
                    </div>

                    <div className="contact-meta-card reveal">
                      <div className="contact-meta-icon">
                        <Phone size={18} />
                      </div>
                      <div>
                        <p className="meta-label">Preferred contact support</p>
                        <p className="meta-value">Email, phone, or WhatsApp based on your preference</p>
                      </div>
                    </div>

                    <div className="contact-meta-card reveal">
                      <div className="contact-meta-icon">
                        <ShieldCheck size={18} />
                      </div>
                      <div>
                        <p className="meta-label">Support style</p>
                        <p className="meta-value">Clear, direct, and admissions-focused</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </SiteShell>
  );
}

function LegalPage({ title, icon: Icon, sections }) {
  return (
    <SiteShell>
      <main className="standard-section">
        <div className="container-shell">
          <div className="legal-panel">
            <div className="legal-head">
              <div className="icon-box">
                <Icon size={22} />
              </div>
              <h1>{title}</h1>
            </div>

            <div className="legal-content">
              {sections.map((section) => (
                <div key={section.title}>
                  <h2>{section.title}</h2>
                  <p>{section.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
    </SiteShell>
  );
}

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route
        path="/privacy"
        element={<LegalPage title="Privacy Policy" icon={ShieldCheck} sections={privacySections} />}
      />
      <Route
        path="/terms"
        element={<LegalPage title="Terms & Conditions" icon={FileText} sections={termsSections} />}
      />
      <Route
        path="/disclaimer"
        element={<LegalPage title="Disclaimer" icon={BadgeHelp} sections={disclaimerSections} />}
      />
    </Routes>
  );
}
