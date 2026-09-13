import { Button } from "@/components/Button";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

const navLinks = [
  { href: "#about", label: "About" },
  { href: "#projects", label: "Projects" },
  { href: "#experience", label: "Experience" },
];

export const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeTab, setActiveTab] = useState("#about");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 transition-all duration-300 ${
        isScrolled ? "glass-strong py-3 shadow-lg backdrop-blur-md" : "bg-transparent py-5"
      } z-50`}
    >
      <nav className="container mx-auto px-6 flex items-center justify-between">
        <a
          href="#"
          className="flex items-center gap-3 group"
        >
          <div className="w-10 h-10 rounded-full glass border border-primary/30 flex items-center justify-center font-bold text-primary shadow-[0_0_15px_rgba(56,189,248,0.3)]">
            SS
          </div>
          <span className="font-semibold text-foreground tracking-wide text-lg group-hover:text-primary transition-colors">
            Suhas S
          </span>
        </a>

        {/* Desktop Nav - Tubelight Style */}
        <div className="hidden md:flex items-center gap-1">
          <div className="glass rounded-full px-2 py-1.5 flex items-center gap-1 relative border border-white/10 backdrop-blur-md">
            {navLinks.map((link, index) => {
              const isActive = activeTab === link.href;
              return (
                <a
                  href={link.href}
                  key={index}
                  onClick={() => setActiveTab(link.href)}
                  className={`relative px-4 py-2 text-sm rounded-full transition-colors duration-300 ${
                    isActive ? "text-primary font-medium" : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <span className="absolute inset-0 rounded-full bg-primary/10 border border-primary/20 shadow-[0_0_12px_rgba(56,189,248,0.4)] -z-10 animate-fade-in" />
                  )}
                </a>
              );
            })}
          </div>
        </div>

        {/* CTA Button matching the exact glass style of the nav capsule */}
        <div className="hidden md:block">
          <Button
            size="sm"
            className="glass rounded-full border border-white/10 backdrop-blur-md text-muted-foreground hover:text-foreground shadow-sm transition-all duration-300"
            onClick={() =>
              document
                .getElementById("contact")
                ?.scrollIntoView({ behavior: "smooth" })
            }
          >
            Contact Me
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 text-foreground cursor-pointer"
          onClick={() => setIsMobileMenuOpen((prev) => !prev)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden glass-strong animate-fade-in border-b border-white/10 backdrop-blur-md">
          <div className="container mx-auto px-6 py-6 flex flex-col gap-4">
            {navLinks.map((link, index) => (
              <a
                href={link.href}
                key={index}
                onClick={() => {
                  setActiveTab(link.href);
                  setIsMobileMenuOpen(false);
                }}
                className={`text-lg py-2 transition-colors ${
                  activeTab === link.href ? "text-primary font-medium" : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {link.label}
              </a>
            ))}

            <Button
              className="glass rounded-full border border-white/10 backdrop-blur-md text-muted-foreground hover:text-foreground shadow-sm"
              onClick={() => {
                setIsMobileMenuOpen(false);
                document
                  .getElementById("contact")
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              Contact Me
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};