import { Mail, MapPin, Phone } from "lucide-react";

const Footer = () => {
  return (
    <footer className="border-t border-border/50 py-16 px-4 md:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div>
            <span className="font-display text-2xl font-bold text-primary tracking-wider">AUREX</span>
            <p className="text-muted-foreground text-sm mt-4 leading-relaxed">
              Premium web design & development agency. We build high-converting websites that turn visitors into customers.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display font-semibold mb-4 text-sm uppercase tracking-wider text-foreground/70">Quick Links</h4>
            <div className="flex flex-col gap-2">
              {["About", "Services", "Portfolio", "Contact"].map((link) => (
                <a
                  key={link}
                  href={`#${link.toLowerCase()}`}
                  className="text-muted-foreground text-sm hover:text-primary transition-colors"
                >
                  {link}
                </a>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display font-semibold mb-4 text-sm uppercase tracking-wider text-foreground/70">Contact</h4>
            <div className="flex flex-col gap-3 text-sm text-muted-foreground">
              <a href="tel:+918851454740" className="flex items-center gap-2 hover:text-primary transition-colors">
                <Phone size={14} /> +91 8851454740
              </a>
              <a href="tel:+918860509005" className="flex items-center gap-2 hover:text-primary transition-colors">
                <Phone size={14} /> +91 8860509005
              </a>
              <a href="mailto:hello@aurex.agency" className="flex items-center gap-2 hover:text-primary transition-colors">
                <Mail size={14} /> web.forge2930@gmail.com
              </a>
              <div className="flex items-center gap-2">
                <MapPin size={14} className="text-primary" /> Remote Global Agency
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-border/50 pt-8 text-center">
          <p className="text-muted-foreground text-xs">
            © {new Date().getFullYear()} Aurex. Designing Websites That Close Clients.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
