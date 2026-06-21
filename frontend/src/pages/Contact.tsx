import { useState, type FormEvent } from 'react';
import { MapPin, Phone, Mail, MessageCircle, Clock, Send } from 'lucide-react';
import SectionTitle from '../components/SectionTitle';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const contactInfo = [
  { icon: MapPin, label: 'Location', value: 'Darkuman, Accra, Ghana' },
  { icon: Phone, label: 'Phone', value: '+233 24 324 8922', href: 'tel:+233243248922' },
  { icon: MessageCircle, label: 'WhatsApp', value: 'Chat with us on WhatsApp', href: 'https://wa.me/233243248922' },
  { icon: Mail, label: 'Email', value: 'info@oasismassagewellness.com', href: 'mailto:info@oasismassagewellness.com' },
  { icon: Clock, label: 'Hours', value: 'Mon–Sat: 9am – 7pm' },
];

export default function Contact() {
  const scrollRef = useScrollAnimation();
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div ref={scrollRef}>
      {/* Hero */}
      <section className="relative pt-32 pb-20 bg-gradient-oasis-dark overflow-hidden">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[500px] h-[500px] rounded-full bg-oasis-gold/5 blur-[100px]" />
        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <span className="text-oasis-gold text-xs uppercase tracking-[0.3em] font-semibold">
            Get in Touch
          </span>
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-white mt-3 leading-tight">
            Book Your <span className="text-gradient-gold">Oasis Experience</span>
          </h1>
          <div className="gold-divider mt-4" />
          <p className="text-white/50 text-lg mt-6 max-w-2xl mx-auto">
            Ready to begin your wellness journey? Reach out to book an appointment
            or ask any questions.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="bg-oasis-dark section-padding">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Info */}
          <div className="animate-on-scroll">
            <SectionTitle subtitle="Contact Information" title="We're Here for You" light={false} />
            <div className="space-y-4">
              {contactInfo.map((item) => (
                <div
                  key={item.label}
                  className="card-oasis rounded-xl p-5 flex items-center gap-4 transition-all duration-300 hover:-translate-y-0.5"
                >
                  <div className="w-11 h-11 rounded-lg bg-oasis-gold/10 border border-oasis-gold/20 flex items-center justify-center shrink-0">
                    <item.icon className="w-5 h-5 text-oasis-gold" />
                  </div>
                  <div>
                    <p className="text-oasis-gold text-xs uppercase tracking-wider font-semibold">
                      {item.label}
                    </p>
                    {item.href ? (
                      <a
                        href={item.href}
                        target={item.href.startsWith('http') ? '_blank' : undefined}
                        rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                        className="text-white/70 text-sm hover:text-white transition-colors"
                      >
                        {item.value}
                      </a>
                    ) : (
                      <p className="text-white/70 text-sm">{item.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-8 space-y-3">
              <a
                href="https://wa.me/233243248922"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-gold w-full flex items-center justify-center gap-2"
              >
                <MessageCircle className="w-5 h-5" />
                WhatsApp Now
              </a>
              <a
                href="tel:+233243248922"
                className="btn-outline-gold w-full flex items-center justify-center gap-2"
              >
                <Phone className="w-5 h-5" />
                Call Us
              </a>
            </div>
          </div>

          {/* Form */}
          <div className="animate-on-scroll">
            <div className="card-oasis rounded-2xl p-8 md:p-10">
              <h3 className="font-display text-2xl font-semibold text-white mb-2">
                Send a Message
              </h3>
              <p className="text-white/40 text-sm mb-8">
                Fill out the form and we'll get back to you shortly.
              </p>
              {submitted ? (
                <div className="text-center py-12">
                  <div className="w-16 h-16 mx-auto rounded-full bg-oasis-gold/20 flex items-center justify-center mb-4">
                    <Send className="w-7 h-7 text-oasis-gold" />
                  </div>
                  <h4 className="font-display text-xl font-semibold text-white">
                    Message Sent!
                  </h4>
                  <p className="text-white/50 text-sm mt-2">
                    We'll be in touch shortly. Thank you for choosing Oasis.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <label className="block text-white/60 text-sm mb-2">Full Name</label>
                    <input
                      type="text"
                      required
                      className="w-full bg-oasis-dark/60 border border-oasis-light/15 rounded-lg px-4 py-3 text-white text-sm placeholder-white/30 focus:outline-none focus:border-oasis-gold/40 transition-colors"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label className="block text-white/60 text-sm mb-2">Email</label>
                    <input
                      type="email"
                      required
                      className="w-full bg-oasis-dark/60 border border-oasis-light/15 rounded-lg px-4 py-3 text-white text-sm placeholder-white/30 focus:outline-none focus:border-oasis-gold/40 transition-colors"
                      placeholder="you@email.com"
                    />
                  </div>
                  <div>
                    <label className="block text-white/60 text-sm mb-2">Phone</label>
                    <input
                      type="tel"
                      className="w-full bg-oasis-dark/60 border border-oasis-light/15 rounded-lg px-4 py-3 text-white text-sm placeholder-white/30 focus:outline-none focus:border-oasis-gold/40 transition-colors"
                      placeholder="+233 XX XXX XXXX"
                    />
                  </div>
                  <div>
                    <label className="block text-white/60 text-sm mb-2">Service of Interest</label>
                    <select className="w-full bg-oasis-dark/60 border border-oasis-light/15 rounded-lg px-4 py-3 text-white/70 text-sm focus:outline-none focus:border-oasis-gold/40 transition-colors appearance-none">
                      <option value="">Select a service</option>
                      <option value="relaxation">Relaxation Massage</option>
                      <option value="deep-tissue">Deep Tissue Massage</option>
                      <option value="meridian">Meridian Therapy</option>
                      <option value="signature">Oasis Signature Experience</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-white/60 text-sm mb-2">Message</label>
                    <textarea
                      rows={4}
                      className="w-full bg-oasis-dark/60 border border-oasis-light/15 rounded-lg px-4 py-3 text-white text-sm placeholder-white/30 focus:outline-none focus:border-oasis-gold/40 transition-colors resize-none"
                      placeholder="Tell us about your wellness goals..."
                    />
                  </div>
                  <button type="submit" className="btn-gold w-full flex items-center justify-center gap-2">
                    Send Message
                    <Send className="w-4 h-4" />
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
