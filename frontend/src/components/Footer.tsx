import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, MessageCircle, Instagram, Facebook, Music2, Clock } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-oasis-dark border-t border-oasis-light/10">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          <div className="lg:col-span-2">
            <Link to="/" className="inline-flex mb-4">
              <img src="/oasis-logo.png" alt="Oasis Massage & Wellness" className="h-16 w-auto object-contain" />
            </Link>
            <p className="text-oasis-gold text-xs uppercase tracking-[0.25em] font-semibold mt-1">
              Relax &bull; Renew &bull; Restore &bull; Revive
            </p>
            <p className="text-white/50 text-sm leading-relaxed max-w-md mt-4">
              Your sanctuary for relaxation and wellness in Accra, Ghana.
              Professional massage therapy and meridian wellness personalized
              to your needs.
            </p>
            <div className="flex gap-3 mt-6">
              <a
                href="https://wa.me/233243248922"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="w-10 h-10 rounded-full bg-oasis-base/50 flex items-center justify-center text-oasis-glow/70 hover:bg-oasis-gold/20 hover:text-oasis-gold transition-all"
              >
                <MessageCircle className="w-4 h-4" />
              </a>
              <a
                href="#"
                aria-label="Instagram"
                className="w-10 h-10 rounded-full bg-oasis-base/50 flex items-center justify-center text-oasis-glow/70 hover:bg-oasis-gold/20 hover:text-oasis-gold transition-all"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="#"
                aria-label="Facebook"
                className="w-10 h-10 rounded-full bg-oasis-base/50 flex items-center justify-center text-oasis-glow/70 hover:bg-oasis-gold/20 hover:text-oasis-gold transition-all"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href="#"
                aria-label="TikTok"
                className="w-10 h-10 rounded-full bg-oasis-base/50 flex items-center justify-center text-oasis-glow/70 hover:bg-oasis-gold/20 hover:text-oasis-gold transition-all"
              >
                <Music2 className="w-4 h-4" />
              </a>
              <a
                href="mailto:Infooasismassagewellness@gmail.com"
                aria-label="Email"
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
                { name: 'Wellness Investment', path: '/pricing' },
                { name: 'Philosophy', path: '/philosophy' },
                { name: 'Contact', path: '/contact' },
                { name: 'Feedback', path: '/feedback' },
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
                <span>Darkuman, opposite Sunflower School, Star Oil — Accra</span>
              </div>
              <a href="tel:+233243248922" className="flex items-center gap-3 text-white/50 text-sm hover:text-oasis-gold transition-colors">
                <Phone className="w-4 h-4 shrink-0 text-oasis-glow/50" />
                <span>+233 24 324 8922</span>
              </a>
              <a href="mailto:Infooasismassagewellness@gmail.com" className="flex items-center gap-3 text-white/50 text-sm hover:text-oasis-gold transition-colors">
                <Mail className="w-4 h-4 shrink-0 text-oasis-glow/50" />
                <span>Infooasismassagewellness@gmail.com</span>
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-oasis-gold text-sm font-semibold uppercase tracking-wider mb-4">
              Operating Hours
            </h4>
            <div className="space-y-3">
              <div className="flex items-start gap-3 text-white/50 text-sm">
                <Clock className="w-4 h-4 mt-0.5 shrink-0 text-oasis-glow/50" />
                <div>
                  <p>Mon – Sat</p>
                  <p className="text-white/70">9:00am – 7:00pm</p>
                  <p className="mt-2">Sunday</p>
                  <p className="text-white/70">By appointment</p>
                </div>
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
