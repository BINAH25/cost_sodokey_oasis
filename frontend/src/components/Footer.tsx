import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, MessageCircle } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-oasis-dark border-t border-oasis-light/10">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div className="lg:col-span-2">
            <Link to="/" className="inline-flex mb-4">
              <img src="/oasis-logo.png" alt="Oasis Massage & Wellness" className="h-16 w-auto object-contain" />
            </Link>
            <p className="text-white/50 text-sm leading-relaxed max-w-md mt-4">
              Your sanctuary for relaxation and wellness in Accra, Ghana.
              Professional massage therapy and meridian wellness personalized
              to your needs.
            </p>
            <div className="flex gap-4 mt-6">
              <a
                href="https://wa.me/233243248922"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-oasis-base/50 flex items-center justify-center text-oasis-glow/70 hover:bg-oasis-gold/20 hover:text-oasis-gold transition-all"
              >
                <MessageCircle className="w-4 h-4" />
              </a>
              <a
                href="tel:+233243248922"
                className="w-10 h-10 rounded-full bg-oasis-base/50 flex items-center justify-center text-oasis-glow/70 hover:bg-oasis-gold/20 hover:text-oasis-gold transition-all"
              >
                <Phone className="w-4 h-4" />
              </a>
              <a
                href="mailto:info@oasismassagewellness.com"
                className="w-10 h-10 rounded-full bg-oasis-base/50 flex items-center justify-center text-oasis-glow/70 hover:bg-oasis-gold/20 hover:text-oasis-gold transition-all"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-oasis-gold text-sm font-semibold uppercase tracking-wider mb-4">
              Quick Links
            </h4>
            <div className="space-y-3">
              {[
                { name: 'Home', path: '/' },
                { name: 'About', path: '/about' },
                { name: 'Services', path: '/services' },
                { name: 'Philosophy', path: '/philosophy' },
                { name: 'Contact', path: '/contact' },
              ].map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className="block text-white/50 text-sm hover:text-oasis-gold transition-colors"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-oasis-gold text-sm font-semibold uppercase tracking-wider mb-4">
              Contact
            </h4>
            <div className="space-y-3">
              <div className="flex items-start gap-3 text-white/50 text-sm">
                <MapPin className="w-4 h-4 mt-0.5 shrink-0 text-oasis-glow/50" />
                <span>Darkuman, Accra, Ghana</span>
              </div>
              <div className="flex items-center gap-3 text-white/50 text-sm">
                <Phone className="w-4 h-4 shrink-0 text-oasis-glow/50" />
                <span>+233 24 324 8922</span>
              </div>
              <div className="flex items-center gap-3 text-white/50 text-sm">
                <Mail className="w-4 h-4 shrink-0 text-oasis-glow/50" />
                <span>info@oasismassagewellness.com</span>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-oasis-light/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-white/30 text-xs">
            &copy; {new Date().getFullYear()} Oasis Massage & Wellness. All rights reserved.
          </p>
          <div className="flex items-center gap-2 text-white/30 text-xs">
            <span>Relax</span>
            <span className="text-oasis-gold/40">&bull;</span>
            <span>Renew</span>
            <span className="text-oasis-gold/40">&bull;</span>
            <span>Restore</span>
            <span className="text-oasis-gold/40">&bull;</span>
            <span>Revive</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
