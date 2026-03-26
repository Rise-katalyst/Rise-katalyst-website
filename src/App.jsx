import { useState } from "react";
import { Routes, Route, Link } from "react-router";
import { motion } from "motion/react";
import {
  Menu,
  X,
  Megaphone,
  BarChart3,
  GraduationCap,
  Users,
  ArrowRight,
  ShieldCheck,
  FileText,
  BadgeHelp,
  Send,
  Mail,
  Phone,
  Sparkles,
  Rocket,
  CheckCircle2,
  LayoutDashboard,
  ChevronRight,
  Quote,
} from "lucide-react";

const services = [
  {
    icon: Megaphone,
    title: "Lead Generation",
    desc: "Qualified student and admission leads for institutes through sharper targeting, messaging, and funnel flow.",
  },
  {
    icon: BarChart3,
    title: "Ad Campaign Management",
    desc: "Meta and Google campaigns planned, launched, and optimized for better inquiry quality and stronger ROI.",
  },
  {
    icon: GraduationCap,
    title: "Admission Funnels",
    desc: "Landing journeys designed to turn attention into inquiries, counseling calls, and admissions growth.",
  },
  {
    icon: Users,
    title: "Creative Strategy",
    desc: "Campaign visuals, hooks, content direction, and creative execution that feel strong and sell clearly.",
  },
];

const process = [
  {
    icon: Rocket,
    title: "Discover",
    desc: "We understand your institute, audience, and admissions goals before anything goes live.",
  },
  {
    icon: LayoutDashboard,
    title: "Build",
    desc: "We create messaging, campaign structure, ad creatives, and conversion flow around those goals.",
  },
  {
    icon: CheckCircle2,
    title: "Scale",
    desc: "We launch, optimize, and improve performance using real numbers, not guesswork.",
  },
];

const team = [
  { name: "Gaurav Modi", role: "Founder", focus: ["Leadership", "Strategy"] },
  { name: "Ayush Pandey", role: "Co-Founder", focus: ["Operations", "Growth"] },
  { name: "Sarthak Singh", role: "Developer & Head Executive", focus: ["Development", "Execution"] },
  { name: "Kaushal Yadav", role: "HR Head Manager", focus: ["People", "Management"] },
  { name: "Rahul Kumar", role: "IT Support Manager & Sales Manager", focus: ["Support", "Sales"] },
  { name: "Shivam", role: "Architect Designer & Head Editor", focus: ["Design", "Editing"] },
];

const testimonials = [
  {
    name: "Education Brand Team",
    quote: "Clear communication, structured execution, and better-quality inquiries than our earlier campaigns.",
  },
  {
    name: "Admissions Team",
    quote: "The strategy felt more focused and performance-driven instead of random marketing activity.",
  },
  {
    name: "Growth Collaboration",
    quote: "The system looked cleaner, worked better on mobile, and gave us a stronger first impression online.",
  },
];

const privacySections = [
  {
    title: "Information We Collect",
    text: "We may collect your name, email address, phone number, institute details, and the message you submit through our contact form.",
  },
  {
    title: "How We Use Information",
    text: "We use this information to respond to inquiries, discuss services, improve communication, and support our business operations.",
  },
  {
    title: "Sharing of Information",
    text: "We do not sell personal information. We may use trusted service providers or tools only when necessary to operate our services.",
  },
];

const termsSections = [
  {
    title: "Website Usage",
    text: "By using this website, you agree not to misuse its content, forms, branding, or services.",
  },
  {
    title: "Service Scope",
    text: "All service descriptions on this website are general. Final pricing, deliverables, timelines, and scope depend on direct agreement.",
  },
  {
    title: "Ownership",
    text: "The branding, layout, design, and original content of this website belong to Katalyst Rise unless stated otherwise.",
  },
];

const disclaimerSections = [
  {
    title: "No Guaranteed Results",
    text: "Marketing outcomes depend on many factors. We do not guarantee a fixed number of leads, admissions, or revenue.",
  },
  {
    title: "Third-Party Platforms",
    text: "This website may mention or use third-party platforms such as Google and Meta. We are not responsible for their policy or product changes.",
  },
  {
    title: "General Information",
    text: "The content on this website is for general informational purposes and should not be treated as legal, financial, or regulatory advice.",
  },
];

function AnimatedBackground() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <div className="absolute inset-0 bg-[#05070b]" />
      <div className="bg-grid absolute inset-0 opacity-35" />

      <motion.div
        className="absolute left-[-12%] top-[8%] h-[28rem] w-[28rem] rounded-full bg-cyan-500/14 blur-[120px]"
        animate={{ x: [0, 40, 0], y: [0, 34, 0], scale: [1, 1.06, 1] }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute right-[-10%] top-[18%] h-[30rem] w-[30rem] rounded-full bg-fuchsia-500/12 blur-[130px]"
        animate={{ x: [0, -34, 0], y: [0, 30, 0], scale: [1, 1.05, 1] }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-[-12%] left-[24%] h-[26rem] w-[26rem] rounded-full bg-blue-500/12 blur-[120px]"
        animate={{ x: [0, 20, 0], y: [0, -28, 0], scale: [1, 1.08, 1] }}
        transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
      />

      <motion.div
        className="absolute inset-x-0 top-[24%] h-px bg-gradient-to-r from-transparent via-cyan-300/40 to-transparent"
        animate={{ opacity: [0.15, 0.45, 0.15], scaleX: [0.92, 1, 0.92] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(5,7,11,0.2)_48%,#05070b_85%)]" />
    </div>
  );
}

function SectionIntro({ tag, title, desc }) {
  return (
    <div className="mx-auto mb-12 max-w-3xl text-center">
      <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.35em] text-cyan-300 sm:text-xs">
        {tag}
      </p>
      <h2 className="text-3xl font-black leading-tight sm:text-4xl md:text-5xl">
        {title}
      </h2>
      <p className="mt-4 text-sm leading-7 text-white/68 md:text-base">
        {desc}
      </p>
    </div>
  );
}

function Shell({ children }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="min-h-screen overflow-x-hidden text-white">
      <AnimatedBackground />

      <header className="sticky top-0 z-50 border-b border-white/10 bg-black/30 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-5 md:px-6">
          <Link to="/" className="text-2xl font-black tracking-tight md:text-3xl">
            Katalyst Rise
          </Link>

          <nav className="hidden items-center gap-7 text-sm text-white/75 md:flex">
            <a href="/#services" className="transition hover:text-white">Services</a>
            <a href="/#process" className="transition hover:text-white">Process</a>
            <a href="/#team" className="transition hover:text-white">Team</a>
            <a href="/#contact" className="transition hover:text-white">Contact</a>
            <Link to="/privacy" className="transition hover:text-white">Privacy</Link>
          </nav>

          <button
            onClick={() => setOpen(true)}
            className="flex h-14 w-14 items-center justify-center rounded-[22px] border border-white/10 bg-white/5 shadow-xl md:hidden"
            aria-label="Open menu"
          >
            <Menu size={28} />
          </button>
        </div>
      </header>

      {open ? (
        <button
          aria-label="Close menu backdrop"
          onClick={() => setOpen(false)}
          className="fixed inset-0 z-[55] bg-black/60 md:hidden"
        />
      ) : null}

      <div
        className={`fixed right-0 top-0 z-[60] h-screen w-[82%] max-w-sm border-l border-white/10 bg-[#0b0d12] p-6 shadow-2xl transition-transform duration-200 ease-out md:hidden ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="mb-8 flex items-center justify-between">
          <span className="text-xl font-bold">Menu</span>
          <button
            onClick={() => setOpen(false)}
            className="rounded-2xl border border-white/10 bg-white/5 p-2"
            aria-label="Close menu"
          >
            <X size={22} />
          </button>
        </div>

        <div className="flex flex-col gap-5 text-base text-white/82">
          <a href="/#services" onClick={() => setOpen(false)}>Services</a>
          <a href="/#process" onClick={() => setOpen(false)}>Process</a>
          <a href="/#team" onClick={() => setOpen(false)}>Team</a>
          <a href="/#contact" onClick={() => setOpen(false)}>Contact</a>
          <Link to="/privacy" onClick={() => setOpen(false)}>Privacy Policy</Link>
          <Link to="/terms" onClick={() => setOpen(false)}>Terms & Conditions</Link>
          <Link to="/disclaimer" onClick={() => setOpen(false)}>Disclaimer</Link>
        </div>
      </div>

      <div className="relative z-10">{children}</div>

      <footer className="border-t border-white/10 px-4 py-10">
        <div className="mx-auto grid max-w-7xl gap-8 md:grid-cols-3 md:px-6">
          <div>
            <h3 className="text-xl font-bold">Katalyst Rise</h3>
            <p className="mt-3 text-sm leading-7 text-white/65">
              Lead generation and paid ads for institutes with a stronger admissions-focused growth system.
            </p>
          </div>

          <div>
            <h4 className="text-xs font-semibold uppercase tracking-[0.3em] text-cyan-300">
              Contact
            </h4>
            <div className="mt-4 space-y-3 text-sm text-white/70">
              <p className="flex items-center gap-2"><Mail size={16} /> Partnerships@risekatalyst.com</p>
              <p className="flex items-center gap-2"><Phone size={16} /> +91 your-number</p>
            </div>
          </div>

          <div>
            <h4 className="text-xs font-semibold uppercase tracking-[0.3em] text-cyan-300">
              Legal
            </h4>
            <div className="mt-4 flex flex-col gap-3 text-sm text-white/70">
              <Link to="/privacy">Privacy Policy</Link>
              <Link to="/terms">Terms & Conditions</Link>
              <Link to="/disclaimer">Disclaimer</Link>
            </div>
          </div>
        </div>

        <div className="mx-auto mt-8 max-w-7xl border-t border-white/10 pt-6 text-center text-sm text-white/45 md:px-6">
          © 2026 Katalyst Rise. All rights reserved.
        </div>
      </footer>
    </div>
  );
}

function HeroVisual() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24, scale: 0.97 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.85 }}
      className="relative lg:ml-auto lg:max-w-[560px]"
    >
      <div className="glass-card hero-ring relative overflow-hidden rounded-[32px] p-5 sm:p-6">
        <div className="soft-line absolute inset-x-10 top-0 h-px" />

        <div className="rounded-[28px] border border-white/10 bg-black/25 p-4 sm:p-5">
          <div className="mb-4 flex items-center justify-between">
            <div>
              <p className="text-[11px] uppercase tracking-[0.28em] text-cyan-300">
                Live Dashboard
              </p>
              <h3 className="mt-2 text-xl font-bold">Admissions Growth View</h3>
            </div>
            <Sparkles className="text-cyan-300" size={20} />
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {[
              ["25+", "Campaigns Managed", 62],
              ["10+", "Institutes Supported", 76],
              ["1.25K+", "Leads Generated", 84],
              ["24/7", "Growth Mindset", 92],
            ].map(([num, label, width], index) => (
              <motion.div
                key={label}
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.12 * index }}
                className="rounded-[24px] border border-white/10 bg-[#090b10] p-5"
              >
                <p className="text-4xl font-black text-cyan-300">{num}</p>
                <p className="mt-2 text-sm text-white/60">{label}</p>
                <div className="mt-4 h-2 overflow-hidden rounded-full bg-white/6">
                  <motion.div
                    className="h-full rounded-full bg-gradient-to-r from-cyan-300 to-fuchsia-300"
                    initial={{ width: 0 }}
                    animate={{ width: `${width}%` }}
                    transition={{ delay: 0.2 * index, duration: 1 }}
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

function HomePage() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [loading, setLoading] = useState(false);
  const [done, setDone] = useState("");

  async function submitForm(e) {
    e.preventDefault();
    setLoading(true);
    setDone("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const text = await res.text();
      let data = {};

      try {
        data = text ? JSON.parse(text) : {};
      } catch {
        data = {};
      }

      if (!res.ok) {
        throw new Error(data.error || "Form backend is not available in Vite preview yet.");
      }

      setDone(data.message || "Message sent successfully.");
      setForm({ name: "", email: "", message: "" });
    } catch (err) {
      setDone(err.message || "Something went wrong.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <Shell>
      <main>
        <section className="mx-auto max-w-7xl px-4 pb-10 pt-10 md:px-6 md:pt-16 lg:min-h-[88vh] lg:pb-16">
          <div className="grid items-center gap-10 lg:grid-cols-[1.05fr_.95fr]">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex max-w-max flex-wrap items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.24em] text-cyan-300 sm:text-xs">
                <Sparkles size={14} />
                Growth Partner for Institutes
              </div>

              <h1 className="mt-6 max-w-3xl text-5xl font-black leading-[0.95] sm:text-6xl lg:text-7xl">
                Growth that feels <span className="text-gradient">premium</span> and performs.
              </h1>

              <p className="mt-6 max-w-xl text-base leading-8 text-white/68 md:text-lg">
                Katalyst Rise helps institutes generate quality leads, run performance campaigns, and scale admissions with stronger strategy, sharper creative, and cleaner execution.
              </p>

              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <a
                  href="#contact"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-7 py-4 text-base font-semibold text-black transition hover:scale-[1.03]"
                >
                  Get Started <ArrowRight size={18} />
                </a>
                <a
                  href="#services"
                  className="inline-flex items-center justify-center rounded-full border border-white/10 bg-white/5 px-7 py-4 text-base font-semibold transition hover:scale-[1.03]"
                >
                  View Services
                </a>
              </div>

              <div className="mt-8 flex flex-wrap gap-3 text-sm text-white/72">
                {["Meta Ads", "Google Ads", "Admission Funnels", "Creative Strategy"].map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-white/10 bg-white/5 px-4 py-2"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>

            <HeroVisual />
          </div>
        </section>

        <section id="services" className="mx-auto max-w-7xl px-4 py-20 md:px-6">
          <SectionIntro
            tag="Services"
            title="What we do"
            desc="We build lead generation systems, ad campaigns, and conversion-focused growth journeys for institutes."
          />

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.08 }}
                  whileHover={{ y: -8, scale: 1.01 }}
                  className="glass-card rounded-[28px] p-6"
                >
                  <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-cyan-400/20 to-fuchsia-400/20">
                    <Icon size={24} className="text-cyan-200" />
                  </div>

                  <h3 className="text-xl font-semibold">{service.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-white/68">{service.desc}</p>

                  <div className="mt-6 flex items-center gap-2 text-sm text-cyan-300">
                    Learn more <ChevronRight size={16} />
                  </div>
                </motion.div>
              );
            })}
          </div>
        </section>

        <section id="process" className="mx-auto max-w-7xl px-4 py-20 md:px-6">
          <SectionIntro
            tag="Process"
            title="How we move from attention to admissions"
            desc="A cleaner process creates a stronger result for your campaigns and a more credible agency presence."
          />

          <div className="grid gap-6 lg:grid-cols-3">
            {process.map((step, index) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={step.title}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="glass-card relative overflow-hidden rounded-[30px] p-6"
                >
                  <div className="absolute right-4 top-4 text-6xl font-black text-white/5">
                    0{index + 1}
                  </div>
                  <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-white/6">
                    <Icon size={24} className="text-cyan-300" />
                  </div>
                  <h3 className="text-2xl font-bold">{step.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-white/68">{step.desc}</p>
                </motion.div>
              );
            })}
          </div>
        </section>

        <section id="team" className="mx-auto max-w-7xl px-4 py-20 md:px-6">
          <SectionIntro
            tag="Team"
            title="People behind Katalyst Rise"
            desc="The team should feel like a real part of the agency, not filler."
          />

          <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
            {team.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.07 }}
                whileHover={{ y: -6 }}
                className="glass-card relative overflow-hidden rounded-[28px] p-5"
              >
                <div className="absolute right-0 top-0 h-24 w-24 rounded-full bg-cyan-400/10 blur-3xl" />

                <div className="flex items-start gap-4">
                  <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-cyan-400/18 to-blue-500/18 text-xl font-bold text-cyan-200">
                    {member.name.charAt(0)}
                  </div>

                  <div className="min-w-0">
                    <h3 className="text-xl font-semibold">{member.name}</h3>
                    <p className="mt-1 text-sm text-cyan-300">{member.role}</p>
                  </div>
                </div>

                <div className="mt-5 flex flex-wrap gap-2">
                  {member.focus.map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/70"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-4 py-20 md:px-6">
          <SectionIntro
            tag="Trust"
            title="Why this site now feels stronger"
            desc="Clearer sections, tighter copy, better rhythm, and a more serious visual tone."
          />

          <div className="grid gap-6 lg:grid-cols-3">
            {testimonials.map((item, index) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08 }}
                className="glass-card rounded-[28px] p-6"
              >
                <Quote size={24} className="text-cyan-300" />
                <p className="mt-4 text-sm leading-8 text-white/72">
                  {item.quote}
                </p>
                <p className="mt-5 text-sm font-semibold text-white">{item.name}</p>
              </motion.div>
            ))}
          </div>
        </section>

        <section id="contact" className="mx-auto max-w-6xl px-4 py-20 md:px-6">
          <div className="glass-card rounded-[32px] p-6 sm:p-8 md:p-10">
            <SectionIntro
              tag="Contact"
              title="Let’s turn attention into admissions"
              desc="Tell us about your institute, goals, or campaign requirements."
            />

            <div className="grid gap-8 lg:grid-cols-[1.08fr_.92fr]">
              <motion.form
                onSubmit={submitForm}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="grid gap-4"
              >
                <input
                  className="rounded-2xl border border-white/10 bg-black/25 px-4 py-4 outline-none"
                  placeholder="Your name"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                />
                <input
                  className="rounded-2xl border border-white/10 bg-black/25 px-4 py-4 outline-none"
                  placeholder="Your email"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                />
                <textarea
                  rows="5"
                  className="rounded-2xl border border-white/10 bg-black/25 px-4 py-4 outline-none"
                  placeholder="Tell us about your institute or campaign goal"
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                />
                <button
                  type="submit"
                  disabled={loading}
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-7 py-4 text-base font-semibold text-black transition hover:scale-[1.02] disabled:opacity-70"
                >
                  <Send size={18} />
                  {loading ? "Sending..." : "Send Message"}
                </button>
                {done ? <p className="text-sm text-cyan-300">{done}</p> : null}
              </motion.form>

              <div className="grid gap-4">
                <div className="rounded-[28px] border border-white/10 bg-black/25 p-5">
                  <p className="text-xs uppercase tracking-[0.3em] text-cyan-300">
                    What you get
                  </p>
                  <div className="mt-4 space-y-4">
                    {[
                      "Lead generation strategy for institutes",
                      "Premium ad campaign planning",
                      "Responsive website and contact funnel",
                      "Creative execution with performance focus",
                    ].map((item) => (
                      <div key={item} className="flex items-start gap-3">
                        <CheckCircle2 size={18} className="mt-1 text-cyan-300" />
                        <p className="text-sm leading-7 text-white/68">{item}</p>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="rounded-[24px] border border-white/10 bg-black/25 p-5">
                    <Mail className="text-cyan-300" size={22} />
                    <p className="mt-3 text-sm text-white/55">Email</p>
                    <p className="mt-1 text-sm font-medium">Partnerships@risekatalyst.com</p>
                  </div>

                  <div className="rounded-[24px] border border-white/10 bg-black/25 p-5">
                    <Phone className="text-cyan-300" size={22} />
                    <p className="mt-3 text-sm text-white/55">Phone</p>
                    <p className="mt-1 text-sm font-medium">+91 your-number</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </Shell>
  );
}

function LegalPage({ icon: Icon, title, sections }) {
  return (
    <Shell>
      <main className="mx-auto max-w-4xl px-4 py-16 md:px-6">
        <div className="glass-card rounded-[32px] p-8 md:p-12">
          <div className="mb-6 flex items-center gap-3">
            <div className="rounded-2xl bg-cyan-400/10 p-3">
              <Icon size={22} className="text-cyan-300" />
            </div>
            <h1 className="text-3xl font-black md:text-4xl">{title}</h1>
          </div>

          <div className="space-y-8 text-white/75">
            {sections.map((section) => (
              <div key={section.title}>
                <h2 className="text-xl font-semibold text-white">{section.title}</h2>
                <p className="mt-3 leading-8">{section.text}</p>
              </div>
            ))}
          </div>
        </div>
      </main>
    </Shell>
  );
}

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route
        path="/privacy"
        element={
          <LegalPage
            icon={ShieldCheck}
            title="Privacy Policy"
            sections={privacySections}
          />
        }
      />
      <Route
        path="/terms"
        element={
          <LegalPage
            icon={FileText}
            title="Terms & Conditions"
            sections={termsSections}
          />
        }
      />
      <Route
        path="/disclaimer"
        element={
          <LegalPage
            icon={BadgeHelp}
            title="Disclaimer"
            sections={disclaimerSections}
          />
        }
      />
    </Routes>
  );
}
