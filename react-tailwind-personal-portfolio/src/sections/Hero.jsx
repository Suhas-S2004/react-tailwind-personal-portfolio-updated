import { Button } from "@/components/Button";
import {
  ArrowRight,
  Github,
  Linkedin,
  Download,
} from "lucide-react";
import { AnimatedBorderButton } from "../components/AnimatedBorderButton";

const skillCategories = [
  {
    title: "LANGUAGES",
    skills: ["Python", "JavaScript", "SQL"],
  },
  {
    title: "FRONTEND",
    skills: ["React.js", "Tailwind CSS"],
  },
  {
    title: "BACKEND",
    skills: ["Node.js", "Express.js", "REST APIs"],
  },
  {
    title: "DATABASES",
    skills: ["PostgreSQL", "MongoDB"],
  },
  {
    title: "AI / DATA",
    skills: ["Machine Learning", "Power BI"],
  },
  {
    title: "TOOLS & VERSION CONTROL",
    skills: ["Git", "GitHub"],
  },
  {
  title: "Design & Tools",
  technologies: ["Figma", "Canva"],
},
];

export const Hero = () => {
  return (
    <section className="relative min-h-[60vh] py-16 flex flex-col justify-center overflow-hidden">
      {/* Bg */}
      <div className="absolute inset-0">
        <img
          src="/hero-bg.jpg"
          alt="Hero image"
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/20 via-background/80 to-background" />
      </div>

      {/* Green Dots */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(30)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1.5 h-1.5 rounded-full opacity-60"
            style={{
              backgroundColor: "#20B2A6",
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `slow-drift ${
                15 + Math.random() * 20
              }s ease-in-out infinite`,
              animationDelay: `${Math.random() * 5}s`,
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="container mx-auto px-6 pt-16 pb-12 relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          {/* Left Column - Text Content */}
          <div className="space-y-6">
            <div className="animate-fade-in">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm text-primary">
                <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                Computer Science Undergraduate • Full-Stack Developer • AI/ML Enthusiast
              </span>
            </div>

            {/* Headline */}
            <div className="space-y-4">
              <p className="text-lg text-muted-foreground max-w-lg animate-fade-in animation-delay-200">
                Hi, I'm <span className="text-primary font-medium">Suhas S</span> — a Computer Science undergraduate specializing
                in full-stack web development and exploring AI/ML. I build
                practical, user-friendly applications with efficient data
                handling.
              </p>
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap gap-4 animate-fade-in animation-delay-300">
              <Button
                size="lg"
                onClick={() =>
                  document
                    .getElementById("contact")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
              >
                Contact Me <ArrowRight className="w-5 h-5" />
              </Button>
              <AnimatedBorderButton
                onClick={() =>
                  window.open(
                   "https://drive.google.com/file/d/15YG2N7AO4PrwWXLb_fo7Y3L7qv6_AXke/view?usp=sharing",
                    "_blank"
                  )
                }
              >
                <Download className="w-5 h-5" />
                Download CV
              </AnimatedBorderButton>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-4 animate-fade-in animation-delay-400">
              <span className="text-sm text-muted-foreground">Follow me: </span>
              {[
                { icon: Github, href: "https://github.com/Suhas-S2004" },
                {
                  icon: Linkedin,
                  href: "https://www.linkedin.com/in/suhas-s-b246a0294/",
                },
              ].map((social, idx) => (
                <a
                  key={idx}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-full glass hover:bg-primary/10 hover:text-primary transition-all duration-300"
                >
                  {<social.icon className="w-5 h-5" />}
                </a>
              ))}
            </div>
          </div>

          {/* Right Column - Profile Image */}
          <div className="relative animate-fade-in animation-delay-300">
            <div className="relative max-w-md mx-auto">
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-primary/30 via-transparent to-primary/10 blur-2xl animate-pulse" />
              <div className="relative glass rounded-3xl p-2 glow-border">
                <img
                  src="/Profile-photo.jpeg"
                  alt="Suhas S"
                  className="w-full aspect-[4/5] object-cover rounded-2xl"
                />

                {/* Floating Badge */}
                <div className="absolute -bottom-4 -right-4 glass rounded-xl px-4 py-3 animate-float">
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
                    <span className="text-sm font-medium">Available for work</span>
                  </div>
                </div>

                {/* Stats Badge */}
                <div className="absolute -top-4 -left-4 glass rounded-xl px-4 py-3 animate-float animation-delay-500">
                  <div className="text-2xl font-bold text-primary">8.7</div>
                  <div className="text-large font-medium text-bold">CGPA</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Structured Skills Categories Box Section - Increased text and title sizes */}
        <div className="mt-32 mb-8 animate-fade-in animation-delay-600 max-w-4xl mx-auto">
          <div className="glass rounded-2xl p-8 glow-border">
            <h3 className="text-lg font-bold text-foreground mb-10 text-center tracking-wide">
              TECHNOLOGIES I WORK WITH
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8">
              {skillCategories.map((category, idx) => (
                <div key={idx} className="space-y-3">
                  <h4 className="text-sm font-bold tracking-wider text-primary uppercase">
                    {category.title}
                  </h4>
                  <div className="flex flex-wrap gap-2.5">
                    {category.skills.map((skill, sIdx) => (
                      <span
                        key={sIdx}
                        className="px-4 py-2 rounded-lg bg-background/40 border border-white/5 text-base font-medium text-muted-foreground hover:text-primary hover:border-primary/50 transition-all duration-300 shadow-sm"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};