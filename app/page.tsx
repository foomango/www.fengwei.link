const patents = [
  {
    title: "Synchronized virtual trusted platform modules (VTPM) and virtual machine (VM) rollbacks",
    number: "US 9,275,240 B2",
    issued: "Mar 1, 2016",
    url: "https://patents.google.com/patent/US9275240B2",
    abstract:
      "A method for secured rollback of a virtual Trusted Platform Module (vTPM) that renders available functionalities offered by TPM on a computer to a virtual machine (VM). The method takes and saves a snapshot of the current VM state and corresponding vTPM upon a snapshot request, then converts both snapshots back to current state upon a rollback request.",
  },
];

const education = [
  {
    school: "Huazhong University of Science and Technology",
    degree: "Master of Engineering (MEng)",
    field: "Computer Architecture",
    period: "2011 – 2014",
  },
  {
    school: "Huazhong University of Science and Technology",
    degree: "Bachelor of Science (BS)",
    field: "Computer and Information Systems Security / Information Assurance",
    period: "2007 – 2011",
  },
];

const experience = [
  {
    title: "Principal Software Engineer",
    company: "MicroStrategy",
    type: "Full-time",
    period: "Apr 2024 – Present",
    location: "United States · On-site",
    bullets: [
      "Architected a cloud-agnostic API layer for MicroStrategy Cloud, streamlining deployment of containerized services across GCP, AWS, Azure, and VMware Tanzu — supporting Managed Cloud, Customer Managed Cloud, FedRAMP (AWS GovCloud), and on-premises environments.",
      "Optimized account deployment workflows by identifying pain points and implementing AI-driven automation to dynamically generate CIDRs, enhancing efficiency and accuracy.",
    ],
    skills: ["GCP", "AWS", "Azure", "VMware Tanzu"],
  },
  {
    title: "Senior Software Engineer",
    company: "MicroStrategy",
    type: "Full-time",
    period: "Aug 2021 – Apr 2024",
    location: "United States",
    bullets: [
      "Migrated legacy desktop application to a modern web-based SPA with an abstraction layer ensuring seamless compatibility across web browsers and CEF-based desktop applications.",
      "Led design and implementation of the web GUI for MicroStrategy Cloud Console, delivering resource management, activity history, logging, and user management.",
    ],
    skills: ["React", "Redux", "Saga"],
  },
  {
    title: "Software Engineer II",
    company: "MicroStrategy",
    type: "Full-time",
    period: "Nov 2016 – Aug 2021",
    location: "United States",
    bullets: [
      "Developed Workstation plugins leveraging web technologies integrated with Chromium Embedded Framework (CEF).",
      "Designed and delivered 15+ plugins including job/cube/schedule monitors, user/cube editors, Application Management, and OIDC/LDAP integrations.",
    ],
    skills: ["CEF", "Redux", "JavaScript"],
  },
  {
    title: "Software Engineer",
    company: "MicroStrategy",
    type: "Full-time",
    period: "Apr 2014 – Nov 2016",
    location: "Hangzhou, Zhejiang, China",
    bullets: [
      "Created the Usher Network Manager, a web-based GUI for MicroStrategy's Usher Mobile Identity Platform enabling secure mobile access, tracking, and analytics.",
      "Delivered user management, badge management, gateway administration, and platform configuration.",
    ],
    skills: ["PHP", "JavaScript"],
  },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-white dark:bg-zinc-950 font-sans text-zinc-900 dark:text-zinc-100">
      <div className="mx-auto max-w-3xl px-6 py-20">

        {/* Header */}
        <header className="mb-16">
          <h1 className="text-4xl font-bold tracking-tight mb-2">Fengwei Wang</h1>
          <p className="text-xl text-zinc-500 dark:text-zinc-400 mb-6">Principal Software Engineer</p>
          <p className="text-base leading-7 text-zinc-600 dark:text-zinc-400 max-w-2xl">
            Experienced Principal Software Engineer with expertise in React, cloud-native architecture,
            full-stack development, and API design. Proven track record of leading cross-functional teams
            to deliver scalable, secure, and innovative software solutions.
          </p>
          <div className="mt-6 flex gap-4 text-sm">
            <a
              href="https://www.linkedin.com/in/fewang-hust/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 dark:text-blue-400 hover:underline"
            >
              LinkedIn
            </a>
          </div>
        </header>

        {/* Experience */}
        <section>
          <h2 className="text-xs font-semibold uppercase tracking-widest text-zinc-400 dark:text-zinc-500 mb-8">
            Experience
          </h2>
          <div className="space-y-12">
            {experience.map((job, i) => (
              <div key={i} className="grid grid-cols-[1fr_auto] gap-x-4">
                <div>
                  <div className="flex items-baseline gap-2 flex-wrap">
                    <h3 className="font-semibold text-lg">{job.title}</h3>
                    <span className="text-zinc-500 dark:text-zinc-400">· {job.company}</span>
                  </div>
                  <p className="text-sm text-zinc-400 dark:text-zinc-500 mt-0.5 mb-4">
                    {job.period} · {job.location}
                  </p>
                  <ul className="space-y-2">
                    {job.bullets.map((b, j) => (
                      <li key={j} className="text-sm leading-6 text-zinc-600 dark:text-zinc-400 pl-3 border-l border-zinc-200 dark:border-zinc-800">
                        {b}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {job.skills.map((s) => (
                      <span
                        key={s}
                        className="text-xs px-2 py-0.5 rounded-full bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400"
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Patents */}
        <section className="mt-16">
          <h2 className="text-xs font-semibold uppercase tracking-widest text-zinc-400 dark:text-zinc-500 mb-8">
            Patents
          </h2>
          <div className="space-y-6">
            {patents.map((p, i) => (
              <div key={i}>
                <a
                  href={p.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold hover:underline"
                >
                  {p.title}
                </a>
                <p className="text-sm text-zinc-400 dark:text-zinc-500 mt-0.5 mb-2">
                  {p.number} · Issued {p.issued}
                </p>
                <p className="text-sm leading-6 text-zinc-600 dark:text-zinc-400">{p.abstract}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Education */}
        <section className="mt-16">
          <h2 className="text-xs font-semibold uppercase tracking-widest text-zinc-400 dark:text-zinc-500 mb-8">
            Education
          </h2>
          <div className="space-y-8">
            {education.map((edu, i) => (
              <div key={i}>
                <div className="flex items-baseline gap-2 flex-wrap">
                  <h3 className="font-semibold">{edu.degree}</h3>
                  <span className="text-zinc-500 dark:text-zinc-400">· {edu.field}</span>
                </div>
                <p className="text-sm text-zinc-500 dark:text-zinc-400 mt-0.5">{edu.school}</p>
                <p className="text-sm text-zinc-400 dark:text-zinc-500 mt-0.5">{edu.period}</p>
              </div>
            ))}
          </div>
        </section>

        <footer className="mt-16 pt-8 border-t border-zinc-200 dark:border-zinc-800">
          <p className="text-xs text-zinc-400 dark:text-zinc-600">Last updated: May 2026</p>
        </footer>

      </div>
    </div>
  );
}
