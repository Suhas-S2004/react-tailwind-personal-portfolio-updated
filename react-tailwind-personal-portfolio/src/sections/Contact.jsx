import {
  Mail,
  Phone,
  MapPin,
  Send,
  CheckCircle,
  AlertCircle,
} from "lucide-react";
import { Button } from "@/components/Button";
import { useState } from "react";

// The address the mailto: link will send to.
const RECEIVER_EMAIL = "suhas052004@gmail.com";

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "suhas052004@gmail.com",
    href: "mailto:suhas052004@gmail.com",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+91-8971620780",
    href: "tel:+918971620780",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Mysuru, Karnataka, India",
    href: null,
  },
];

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [submitStatus, setSubmitStatus] = useState({
    type: null, // 'success' or 'error'
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setIsLoading(true);
    setSubmitStatus({ type: null, message: "" });

    try {
      const subject = `Portfolio message from ${formData.name}`;
      const body = `Name: ${formData.name}\nEmail: ${formData.email}\n\n${formData.message}`;

      const mailtoUrl = `mailto:${RECEIVER_EMAIL}?subject=${encodeURIComponent(
        subject
      )}&body=${encodeURIComponent(body)}`;

      window.location.href = mailtoUrl;

      setSubmitStatus({
        type: "success",
        message: "Your email app should now be open. Just hit send!",
      });
      setFormData({ name: "", email: "", message: "" });
    } catch (err) {
      console.error("Mailto error:", err);
      setSubmitStatus({
        type: "error",
        message: "Couldn't open your email app. Please try again later.",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section id="contact" className="py-32 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-highlight/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-secondary-foreground text-3xl font-medium tracking-wider uppercase animate-fade-in">
            Get In Touch
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 animate-fade-in animation-delay-100 text-secondary-foreground">
            Let's build{" "}
            <span className="font-serif italic font-normal text-white">
              something great.
            </span>
          </h2>
          <p className="text-muted-foreground animate-fade-in animation-delay-200">
            Have a project in mind? I'd love to hear about it. Reach out to me
            directly through any of the channels below and let's discuss how we can work together.
          </p>
        </div>

        {/* Contact Info & Form */}
        <div className="grid lg:grid-cols-2 gap-8 max-w-5xl mx-auto animate-fade-in animation-delay-300">
          {/* Left: Contact Info & Availability */}
          <div className="space-y-6">
            <div className="glass rounded-3xl p-6 sm:p-8 border border-primary/30">
              <h3 className="text-xl font-semibold mb-6">
                Contact Information
              </h3>
              <div className="space-y-4">
                {contactInfo.map((item, i) => {
                  const isLink = Boolean(item.href);
                  const Component = isLink ? "a" : "div";

                  return (
                    <Component
                      key={i}
                      href={item.href || undefined}
                      className={`flex items-start sm:items-center gap-4 p-4 rounded-xl transition-colors ${
                        isLink ? "hover:bg-surface cursor-pointer group" : ""
                      }`}
                    >
                      <div
                        className={`w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0 transition-colors ${
                          isLink ? "group-hover:bg-primary/20" : ""
                        }`}
                      >
                        <item.icon className="w-5 h-5 text-primary" />
                      </div>
                      <div className="min-w-0 flex-1">
                        <div className="text-sm text-muted-foreground">
                          {item.label}
                        </div>
                        <div className="font-medium break-words">{item.value}</div>
                      </div>
                    </Component>
                  );
                })}
              </div>
            </div>

            {/* Availability Card */}
            <div className="glass rounded-3xl p-6 sm:p-8 border border-primary/30">
              <div className="flex items-center gap-3 mb-4">
                <span className="w-3 h-3 bg-green-500 rounded-full animate-pulse shrink-0" />
                <span className="font-medium">Currently Available</span>
              </div>
              <p className="text-muted-foreground text-sm">
                I'm currently open to new opportunities and exciting projects.
                Whether you need a full-time engineer or a freelance consultant,
                let's talk!
              </p>
            </div>
          </div>

          {/* Right: Message Form */}
          <div className="glass rounded-3xl p-6 sm:p-8 border border-primary/30">
            <h3 className="text-xl font-semibold mb-6">Send a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm text-muted-foreground mb-2">
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your name..."
                  className="w-full px-4 py-3 rounded-xl bg-surface border border-primary/30 focus:border-primary focus:outline-none transition-colors"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm text-muted-foreground mb-2">
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="your@email.com"
                  className="w-full px-4 py-3 rounded-xl bg-surface border border-primary/30 focus:border-primary focus:outline-none transition-colors"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm text-muted-foreground mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Your message..."
                  className="w-full px-4 py-3 rounded-xl bg-surface border border-primary/30 focus:border-primary focus:outline-none transition-colors resize-none"
                />
              </div>

              <Button type="submit" disabled={isLoading} className="w-full flex items-center justify-center gap-2">
                {isLoading ? "Opening your email app..." : "Send Message"}
                <Send className="w-4 h-4" />
              </Button>

              {submitStatus.type && (
                <div
                  className={`flex items-center gap-2 p-4 rounded-xl text-sm ${
                    submitStatus.type === "success"
                      ? "bg-primary/10 text-primary border border-primary/30"
                      : "bg-red-500/10 text-red-400 border border-red-500/30"
                  }`}
                >
                  {submitStatus.type === "success" ? (
                    <CheckCircle className="w-4 h-4 shrink-0" />
                  ) : (
                    <AlertCircle className="w-4 h-4 shrink-0" />
                  )}
                  {submitStatus.message}
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};