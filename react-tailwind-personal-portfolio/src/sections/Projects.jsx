import { ArrowUpRight, Github } from "lucide-react";
import { AnimatedBorderButton } from "@/components/AnimatedBorderButton";

const projects = [
  {
    title: "AI-Powered Mock Interview Platform",
    description:
      "A full-stack AI Interview Preparation Platform with authentication, interview management, and a responsive UI, integrating 8+ core modules including AI-powered interview generation, resume analysis, and payments.",
    image: "/projects/project1.png",
    tags: ["React.js", "Node.js", "Express.js", "MongoDB"],
    link: "https://interviewiq-1client-1fal.onrender.com",
    github: "https://github.com/Suhas-S2004/InterviewIQ",
  },
  /*
  {
    title: "Doctor Appointment Booking System",
    description:
      "A full-stack Online Doctor Appointment Booking System with secure authentication, doctor/patient management, appointment scheduling, and a responsive UI built using the MERN stack.",
    image: "/projects/project2.png",
    tags: ["React.js", "Node.js", "Express.js", "MongoDB"],
    link: "https://prescripto-frontend-iota-ten.vercel.app/",
    github: "https://github.com/Suhas-S2004/Prescripto",
  },
*/
  {
    title: "IoT-Based Automated Greenhouse Monitoring System",
    description:
      "An IoT-based automated greenhouse monitoring system integrating 5+ sensors and smart modules for real-time monitoring of temperature, humidity, soil moisture, and intrusion detection, with encrypted communication and remote device control.",
    image: "/projects/project3.png",
    tags: ["ESP32", "Blynk Cloud", "Telegram Bot"],
    link: "https://drive.google.com/file/d/1fxf5AFnp7ui2pGLq915yowBwAHBLVicd/view?usp=sharing",
    github: null,
  },
];

export const Projects = () => {
  return (
    <section id="projects" className="py-32 relative overflow-hidden">
      {/* Bg glows */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-0 w-64 h-64 bg-highlight/5 rounded-full blur-3xl" />
      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mx-auto max-w-3xl mb-16">
          <span className="text-secondary-foreground text-3xl font-medium tracking-wider uppercase animate-fade-in">
            Featured Work
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 animate-fade-in animation-delay-100 text-secondary-foreground">
            Projects that
            <span className="font-serif italic font-normal text-white">
              {" "}
              make an impact.
            </span>
          </h2>
          <p className="text-muted-foreground animate-fade-in animation-delay-200">
            A selection of my recent work, from AI-powered web applications
            to IoT-based systems that solve real-world problems.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, idx) => (
            <div
              key={idx}
              className="group glass rounded-2xl overflow-hidden animate-fade-in md:row-span-1 flex flex-col"
              style={{ animationDelay: `${(idx + 1) * 100}ms` }}
            >
              {/* Image */}
              <div className="relative overflow-hidden aspect-video">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 scale-110 group-hover:scale-100 md:group-hover:scale-110"
                />
                
                {/* Always-visible top-right quick action buttons for mobile */}
                <div className="absolute top-3 right-3 flex items-center gap-2 md:hidden z-20">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="View live project"
                    className="p-2.5 rounded-full glass bg-black/60 text-white border border-white/20 shadow-md"
                  >
                    <ArrowUpRight className="w-4 h-4" />
                  </a>
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="View GitHub repository"
                      className="p-2.5 rounded-full glass bg-black/60 text-white border border-white/20 shadow-md"
                    >
                      <Github className="w-4 h-4" />
                    </a>
                  )}
                </div>

                <div
                  className="absolute inset-0 
                bg-gradient-to from-card via-card/50
                  to-transparent opacity-60"
                />

                {/* Desktop Overlay Links */}
                <div className="absolute inset-0 hidden md:flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/40">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="View live project"
                    className="p-3 rounded-full glass hover:bg-primary hover:text-primary-foreground transition-all"
                  >
                    <ArrowUpRight className="w-5 h-5" />
                  </a>
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="View GitHub repository"
                      className="p-3 rounded-full glass hover:bg-primary hover:text-primary-foreground transition-all"
                    >
                      <Github className="w-5 h-5" />
                    </a>
                  )}
                </div>
              </div>

              {/* Content */}
              <div className="p-6 space-y-4 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-start justify-between">
                    <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                    <ArrowUpRight
                      className="w-5 h-5 
                    text-muted-foreground group-hover:text-primary
                      group-hover:translate-x-1 
                      group-hover:-translate-y-1 transition-all"
                    />
                  </div>
                  <p className="text-muted-foreground text-sm mt-2">
                    {project.description}
                  </p>
                </div>
                <div className="flex flex-wrap gap-2 pt-2">
                  {project.tags.map((tag, tagIdx) => (
                    <span
                      key={tagIdx}
                      className="px-4 py-1.5 rounded-full bg-surface text-xs font-medium border border-border/50 text-muted-foreground hover:border-primary/50 hover:text-primary transition-all duration-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All CTA */}
        <div className="text-center mt-12 animate-fade-in animation-delay-500">
          {/*
          <AnimatedBorderButton>
            View All Projects
            <ArrowUpRight className="w-5 h-5" />
          </AnimatedBorderButton>
          */}
        </div>
      </div>
    </section>
  );
};