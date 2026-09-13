import { Github, Linkedin, ArrowUp } from "lucide-react";

const socialLinks = [
  { icon: Github, href: "https://github.com/Suhas-S2004", label: "GitHub" },
  {
    icon: Linkedin,
    href: "https://www.linkedin.com/in/suhas-s-b246a0294/",
    label: "LinkedIn",
  },
];

const footerLinks = [
  { href: "#about", label: "About" },
  { href: "#projects", label: "Projects" },
  { href: "#experience", label: "Experience" },
  { href: "#contact", label: "Contact" },
];

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = (e) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="py-12 border-t border-border">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Logo & Copyright */}
          <div className="text-center md:text-left flex items-center gap-3">
            <div className="w-10 h-10 rounded-full glass border border-primary/30 flex items-center justify-center font-bold text-primary shadow-[0_0_15px_rgba(32,178,166,0.3)]">
              SS
            </div>
            <div>
              <p className="font-semibold text-foreground tracking-wide">Suhas S</p>
              <p className="text-sm text-muted-foreground">
                © {currentYear} All rights reserved.
              </p>
            </div>
          </div>

          {/* Links */}
          <nav className="flex flex-wrap justify-center gap-6">
            {footerLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Social Links & Scroll to Top */}
          <div className="flex items-center gap-4">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                aria-label={social.label}
                className="p-2 rounded-full glass hover:bg-primary/10 hover:text-primary transition-all"
              >
                <social.icon className="w-5 h-5" />
              </a>
            ))}
            <button
              onClick={scrollToTop}
              className="p-3 rounded-full bg-primary text-background hover:opacity-90 transition-all duration-300 group cursor-pointer flex items-center justify-center shadow-[0_0_15px_rgba(32,178,166,0.5)]"
              aria-label="Scroll to top"
            >
              <ArrowUp className="w-4 h-4 group-hover:-translate-y-1 transition-transform" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};