import { useState } from "react";
import { Github, Linkedin, ExternalLink, Brain, Activity, Layers, Code2, Briefcase, GraduationCap, FileText, Eye, Database, MessageSquare, Send } from "lucide-react";

export default function Portfolio() {
  const [page, setPage] = useState("home");

  const nav = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "projects", label: "Projects" },
    { id: "experience", label: "Experience" },
    { id: "contact", label: "Contact" },
  ];

  const skills = [
    { category: "Languages", items: ["Python", "SQL", "JavaScript"] },
    { category: "ML / Deep Learning", items: ["TensorFlow", "PyTorch", "Scikit-learn", "YOLOv8", "Grounding DINO", "EfficientNet", "U-Net"] },
    { category: "Cloud & Deployment", items: ["GCP", "Azure (AZ-900, AI-900)", "AWS SageMaker", "FastAPI", "Docker"] },
    { category: "Tools & Research", items: ["Figma", "Overleaf", "Git", "Mininet", "Power BI"] },
  ];

  const metrics = [
    { label: "Custom CNN", accuracy: "87.0%", f1: "0.864", auc: "0.971" },
    { label: "ResNet50", accuracy: "92.65%", f1: "0.926", auc: "0.991" },
    { label: "EfficientNet-B0", accuracy: "96.94%", f1: "0.969", auc: "1.000", best: true },
  ];

  const experience = [
    {
      icon: Eye,
      role: "Data Research Intern",
      org: "UTS Telecom Research Unit (ASTRID Programme)",
      period: "Current",
      points: [
        "Co-authoring an academic paper in Overleaf as a contributing author",
        "Conducting literature reviews on network and infrastructure monitoring",
        "Running network simulations using Mininet from a shared research codebase",
      ],
    },
    {
      icon: Code2,
      role: "ML Engineering Intern",
      org: "Optik Consultancy (for Tiliter)",
      period: "2024",
      points: [
        "Built an AI-powered quality assurance tool for automated visual inspection",
        "Combined YOLOv8 object detection with an SVM classifier, reaching 92% accuracy",
        "Deployed via FastAPI and Docker on GCP; self-taught YOLOv8, Grounding DINO and GCP during the project",
      ],
    },
    {
      icon: Database,
      role: "Data Project | SafeWork NSW",
      org: "Government Research Collaboration",
      period: "2024",
      points: [
        "Automated collection and structuring of agricultural incident data previously done manually",
        "Built an ETL pipeline (GNews API to structured Excel outputs) with validation checks and error logging",
        "Documented a reproducible monthly workflow for a government research context",
      ],
    },
    {
      icon: MessageSquare,
      role: "Industry Project | ACCC",
      org: "Stakeholder Research & Communication",
      period: "2023",
      points: [
        "Conducted 19 stakeholder interviews to understand a complex communication problem",
        "Designed a communication model in Figma and presented it to senior stakeholders",
        "Produced rigorous research documentation with clear methodology and findings",
      ],
    },
  ];

  const futureProjects = [
    { title: "Australian Market Case Study", desc: "Public ACCC / ABS data analysed and written up as a consulting deliverable." },
    { title: "Fraud Detection with Risk Framing", desc: "Predictive model framed around business cost of errors and decision thresholds." },
    { title: "Log-Based Intrusion Detection", desc: "Anomaly detection on UNSW-NB15 with attack pattern visualisation." },
    { title: "Port Scan Detection Lab", desc: "Home lab with Suricata detecting nmap scans, Grafana real-time alerts." },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-slate-100">
      {/* Nav */}
      <nav className="sticky top-0 z-50 backdrop-blur-md bg-slate-950/70 border-b border-slate-800">
        <div className="max-w-5xl mx-auto px-6 py-4 flex justify-between items-center">
          <button onClick={() => setPage("home")} className="font-semibold tracking-tight text-lg">Piya</button>
          <div className="flex gap-1 sm:gap-2 text-sm">
            {nav.map((n) => (
              <button
                key={n.id}
                onClick={() => setPage(n.id)}
                className={`px-3 py-1.5 rounded-full transition ${
                  page === n.id ? "bg-cyan-500 text-slate-950 font-medium" : "text-slate-400 hover:text-white"
                }`}
              >
                {n.label}
              </button>
            ))}
          </div>
        </div>
      </nav>

      <div className="max-w-5xl mx-auto px-6">
        {/* HOME */}
        {page === "home" && (
          <header className="pt-24 pb-28 text-center">
            <p className="text-cyan-400 text-sm font-medium tracking-wide uppercase mb-4">Data Science & Creative Intelligence</p>
            <h1 className="text-4xl sm:text-5xl font-bold tracking-tight mb-6 bg-gradient-to-r from-white via-slate-200 to-slate-400 bg-clip-text text-transparent">
              Building ML systems that solve real problems
            </h1>
            <p className="text-slate-400 max-w-xl mx-auto text-lg leading-relaxed">
              Final-year dual-degree student at UTS, specialising in Data Science and Creative Intelligence.
              Passionate about applied machine learning, deployment, and the research behind it.
            </p>
            <div className="flex justify-center gap-4 mt-8">
              <button onClick={() => setPage("projects")} className="px-5 py-2.5 bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-medium rounded-full text-sm transition">
                View Projects
              </button>
              <button onClick={() => setPage("contact")} className="px-5 py-2.5 border border-slate-700 hover:border-slate-500 rounded-full text-sm transition">
                Get in Touch
              </button>
            </div>

            <div className="grid sm:grid-cols-3 gap-4 mt-20 text-left">
              {[
                { icon: Brain, t: "Applied ML", d: "Computer vision, predictive modelling, and explainable AI" },
                { icon: Layers, t: "Deployment", d: "FastAPI, Docker, and cloud platforms end to end" },
                { icon: FileText, t: "Research", d: "Documentation, stakeholder communication, academic writing" },
              ].map((c, i) => (
                <div key={i} className="bg-slate-900/50 border border-slate-800 rounded-2xl p-6">
                  <c.icon className="text-cyan-400 mb-3" size={22} />
                  <p className="font-semibold mb-1">{c.t}</p>
                  <p className="text-sm text-slate-400 leading-relaxed">{c.d}</p>
                </div>
              ))}
            </div>
          </header>
        )}

        {/* ABOUT */}
        {page === "about" && (
          <section className="py-20 max-w-3xl mx-auto">
            <h2 className="text-sm font-semibold text-cyan-400 uppercase tracking-wide mb-6">About</h2>
            <p className="text-slate-300 leading-relaxed mb-6">
              I'm completing a dual Bachelor of Engineering (Honours) in Data Science and Bachelor of Creative
              Intelligence and Innovation at UTS, graduating in 2026. My work spans computer vision, predictive
              modelling, and research documentation, with hands-on experience across consulting projects, government
              data automation, and academic research.
            </p>
            <p className="text-slate-300 leading-relaxed mb-10">
              I care about building things that are technically sound and genuinely useful, and about communicating
              findings clearly to people who didn't build the model.
            </p>

            <h3 className="text-sm font-semibold text-cyan-400 uppercase tracking-wide mb-6">Skills</h3>
            <div className="grid sm:grid-cols-2 gap-6">
              {skills.map((s, i) => (
                <div key={i}>
                  <p className="text-sm font-medium text-slate-300 mb-2">{s.category}</p>
                  <div className="flex flex-wrap gap-2">
                    {s.items.map((item) => (
                      <span key={item} className="text-xs px-3 py-1 bg-slate-900 border border-slate-800 text-slate-400 rounded-full">
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* PROJECTS */}
        {page === "projects" && (
          <section className="py-16">
            <h2 className="text-sm font-semibold text-cyan-400 uppercase tracking-wide mb-8">Featured Projects</h2>

            <div className="bg-slate-900/60 border border-slate-800 rounded-2xl overflow-hidden">
              <div className="p-8">
                <div className="flex items-start justify-between flex-wrap gap-4 mb-6">
                  <div className="flex items-center gap-3">
                    <div className="p-2.5 bg-cyan-500/10 rounded-xl">
                      <Brain className="text-cyan-400" size={22} />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold">NeuroVision</h3>
                      <p className="text-slate-500 text-sm">Brain tumour classification & segmentation</p>
                    </div>
                  </div>
                  <a href="https://github.com/PiyaJolly/CNN-NeuroVision" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 text-sm text-slate-400 hover:text-white transition">
                    <Github size={16} /> View Code <ExternalLink size={12} />
                  </a>
                </div>

                <p className="text-slate-300 leading-relaxed mb-6">
                  An end-to-end deep learning system for brain tumour detection and analysis. Trained and compared three
                  classifiers on MRI scans across four classes (glioma, meningioma, pituitary, no tumour), then added
                  Grad-CAM explainability and a U-Net segmentation pipeline to localise tumour regions. Deployed as a
                  full-stack application with a FastAPI backend on AWS SageMaker and a React frontend generating
                  downloadable PDF reports.
                </p>

                <div className="grid grid-cols-3 gap-3 mb-6">
                  {metrics.map((m, i) => (
                    <div key={i} className={`rounded-xl p-4 border ${m.best ? "border-cyan-500/50 bg-cyan-500/5" : "border-slate-800 bg-slate-900/40"}`}>
                      <p className="text-xs text-slate-500 mb-1">{m.label}{m.best && " · best"}</p>
                      <p className="text-2xl font-bold text-white">{m.accuracy}</p>
                      <p className="text-xs text-slate-500 mt-1">F1 {m.f1} · AUC {m.auc}</p>
                    </div>
                  ))}
                </div>

                <div className="grid sm:grid-cols-3 gap-4 mb-6">
                  <div className="flex items-start gap-2.5">
                    <Layers className="text-slate-500 mt-0.5 shrink-0" size={16} />
                    <p className="text-sm text-slate-400">U-Net segmentation with EfficientNet-B0 encoder, reaching IoU 0.728 and Dice ≈ 0.842</p>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <Activity className="text-slate-500 mt-0.5 shrink-0" size={16} />
                    <p className="text-sm text-slate-400">Grad-CAM heatmaps for explainability across all four classes</p>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <Code2 className="text-slate-500 mt-0.5 shrink-0" size={16} />
                    <p className="text-sm text-slate-400">FastAPI + AWS SageMaker backend, React/Vite frontend, PDF report generation</p>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2">
                  {["PyTorch", "EfficientNet", "ResNet50", "U-Net", "Grad-CAM", "FastAPI", "AWS SageMaker", "React"].map((tag) => (
                    <span key={tag} className="text-xs px-3 py-1 bg-slate-800 text-slate-300 rounded-full">{tag}</span>
                  ))}
                </div>
              </div>
            </div>

            {/* Financial Market Pipeline */}
            <div className="bg-slate-900/60 border border-slate-800 rounded-2xl overflow-hidden mt-6">
              <div className="p-8">
                <div className="flex items-start justify-between flex-wrap gap-4 mb-6">
                  <div className="flex items-center gap-3">
                    <div className="p-2.5 bg-cyan-500/10 rounded-xl">
                      <Activity className="text-cyan-400" size={22} />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold">Financial Market Pipeline</h3>
                      <p className="text-slate-500 text-sm">Full-stack data pipeline and dashboard</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <a href="https://financial-market-pipeline.vercel.app" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 text-sm text-cyan-400 hover:text-cyan-300 transition">
                      Live demo <ExternalLink size={12} />
                    </a>
                    <a href="https://github.com/PiyaJolly/financial-market-pipeline" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 text-sm text-slate-400 hover:text-white transition">
                      <Github size={16} /> View Code <ExternalLink size={12} />
                    </a>
                  </div>
                </div>

                <p className="text-slate-300 leading-relaxed mb-6">
                  A full-stack service that ingests daily equities data, transforms it, caches it, and serves it through a rate-limited REST API to a React dashboard. The FastAPI backend separates the data, caching, and web layers, with input validation, graceful error handling, and a pytest suite. The dashboard charts price history and surfaces live versus cached responses in the interface.
                </p>

                <div className="grid sm:grid-cols-3 gap-4 mb-6">
                  <div className="flex items-start gap-2.5">
                    <Code2 className="text-slate-500 mt-0.5 shrink-0" size={16} />
                    <p className="text-sm text-slate-400">FastAPI backend with TTL caching, rate limiting, and a mocked pytest suite</p>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <Layers className="text-slate-500 mt-0.5 shrink-0" size={16} />
                    <p className="text-sm text-slate-400">Layered architecture keeping data, cache, and API concerns separate</p>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <Database className="text-slate-500 mt-0.5 shrink-0" size={16} />
                    <p className="text-sm text-slate-400">Deployed end to end: backend on Render, dashboard on Vercel</p>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2">
                  {["Python", "FastAPI", "Docker", "pytest", "React", "Vite", "Recharts", "Render", "Vercel"].map((tag) => (
                    <span key={tag} className="text-xs px-3 py-1 bg-slate-800 text-slate-300 rounded-full">{tag}</span>
                  ))}
                </div>
              </div>
            </div>

            <h2 className="text-sm font-semibold text-cyan-400 uppercase tracking-wide mt-16 mb-6">In Progress</h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {futureProjects.map((p, i) => (
                <div key={i} className="border border-dashed border-slate-800 rounded-xl p-5">
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-medium text-slate-300">{p.title}</span>
                    <span className="text-xs text-slate-600 italic">building</span>
                  </div>
                  <p className="text-sm text-slate-500 leading-relaxed">{p.desc}</p>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* EXPERIENCE */}
        {page === "experience" && (
          <section className="py-16">
            <h2 className="text-sm font-semibold text-cyan-400 uppercase tracking-wide mb-8">Experience</h2>

            <div className="space-y-4">
              {experience.map((e, i) => (
                <div key={i} className="bg-slate-900/50 border border-slate-800 rounded-2xl p-6">
                  <div className="flex items-start gap-4">
                    <div className="p-2.5 bg-slate-800 rounded-xl shrink-0">
                      <e.icon className="text-cyan-400" size={20} />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-start justify-between flex-wrap gap-2 mb-3">
                        <div>
                          <p className="font-semibold">{e.role}</p>
                          <p className="text-sm text-slate-400">{e.org}</p>
                        </div>
                        <span className="text-xs text-slate-500 bg-slate-800 px-3 py-1 rounded-full">{e.period}</span>
                      </div>
                      <ul className="space-y-1.5">
                        {e.points.map((pt, j) => (
                          <li key={j} className="text-sm text-slate-400 leading-relaxed flex gap-2">
                            <span className="text-cyan-500 mt-1.5 shrink-0">·</span>
                            <span>{pt}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* CONTACT */}
        {page === "contact" && (
          <section className="py-24 max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-semibold mb-3">Let's talk</h2>
            <p className="text-slate-400 mb-10">Open to data, ML, cloud, and consulting opportunities. The best way to reach me is via LinkedIn.</p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a href="https://www.linkedin.com/in/piya-jolly-053934276" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 px-6 py-3 bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-medium rounded-full transition">
                <Linkedin size={18} /> Connect on LinkedIn
              </a>
              <a href="https://github.com/PiyaJolly" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 px-6 py-3 border border-slate-700 hover:border-slate-500 rounded-full transition">
                <Github size={18} /> GitHub
              </a>
            </div>
            <p className="text-xs text-slate-600 mt-10">
              Prefer a contact form without exposing an email? A service like Formspree can route messages to your inbox while keeping your address private.
            </p>
          </section>
        )}
      </div>

      <footer className="text-center text-slate-600 text-xs py-8 border-t border-slate-800 mt-10">
        Built with care · {new Date().getFullYear()}
      </footer>
    </div>
  );
}