import { ArrowUpRight } from "lucide-react";

const experiences = [
  {
    period: "Jan 2026 — May 2026",
    company: "CSIR - National Aerospace Laboratories (NAL), Bengaluru",
    role: "Intern — Network Infrastructure Monitoring System",
    description:
      "Developed a full-stack Network Infrastructure Monitoring System enabling centralized monitoring and management of 400+ network devices. Implemented 10+ dashboard modules including device monitoring, management devices, live/unknown devices, search, filtering, analytics, and pie charts. Deployed the application on Nginx with a secure, separated frontend-backend architecture.",
    technologies: ["HTML", "CSS", "JavaScript", "PHP", "Flask", "PostgreSQL", "Nginx"],
    current: false,
    certificateLink: "https://drive.google.com/file/d/10CQJaqOyhrgh9GgZS1X6KtGVvD_Sih03/view?usp=sharing",
  },
];

export const Experience = () => {
  return (
    <section id="experience" className="py-16 md:py-24 relative overflow-hidden flex flex-col justify-center">
      <div
        className="absolute top-1/2 left-1/4 w-96
        h-96 bg-primary/5 rounded-full blur-3xl -translate-y-1/2"
      />

      <div className="container mx-auto px-6 relative z-10 max-w-4xl">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span
            className="text-secondary-foreground text-3xl 
            font-medium tracking-wider uppercase animate-fade-in"
          >
            Career Journey
          </span>
          <h2
            className="text-3xl md:text-4xl font-bold
            mt-3 mb-4 animate-fade-in animation-delay-100
             text-secondary-foreground"
          >
            Experience that{" "}
            <span className="font-serif italic font-normal text-white">
              {" "}
              speaks volumes.
            </span>
          </h2>

          <p
            className="text-muted-foreground text-sm md:text-base
            animate-fade-in animation-delay-200"
          >
            My professional experience so far, building real-world systems
            in a hands-on internship environment.
          </p>
        </div>

        {/* Timeline Container Centered */}
        <div className="relative max-w-3xl mx-auto">
          <div className="timeline-glow absolute left-0 top-0 bottom-0 w-[2px] bg-gradient-to-b from-primary/70 via-primary/30 to-transparent shadow-[0_0_25px_rgba(32,178,166,0.8)]" />

          {/* Experience Items */}
          <div className="space-y-8">
            {experiences.map((exp, idx) => (
              <div
                key={idx}
                className="relative animate-fade-in"
                style={{ animationDelay: `${(idx + 1) * 150}ms` }}
              >
                {/* Timeline Dot */}
                <div className="absolute left-0 top-8 w-3 h-3 bg-primary rounded-full -translate-x-1/2 ring-4 ring-background z-10">
                  {exp.current && (
                    <span className="absolute inset-0 rounded-full bg-primary animate-ping opacity-75" />
                  )}
                </div>

                {/* Content */}
                <div className="pl-10">
                  <div
                    className={`glass p-6 sm:p-8 rounded-2xl border border-primary/30 hover:border-primary/50 transition-all duration-500 relative`}
                  >
                    {exp.certificateLink && (
                      <a
                        href={exp.certificateLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="absolute top-4 right-4 p-2 rounded-full bg-surface hover:bg-primary/20 border border-primary/30 hover:border-primary/60 transition-all duration-300 group z-20"
                        aria-label="View certificate"
                      >
                        <ArrowUpRight className="w-4 h-4 text-primary group-hover:scale-110 transition-transform" />
                      </a>
                    )}
                    <span className="text-sm text-primary font-medium block">
                      {exp.period}
                    </span>

                    <p className="text-xl font-bold mt-1">{exp.company}</p>
                    <h3 className="text-foreground font-semibold mt-2">{exp.role}</h3>
                    <p className="text-sm text-muted-foreground mt-4">
                      {exp.description}
                    </p>
                    <div className="flex flex-wrap gap-2 mt-4">
                      {exp.technologies.map((tech, techIdx) => (
                        <span
                          key={techIdx}
                          className="px-3 py-1 bg-surface text-xs rounded-full text-muted-foreground"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};