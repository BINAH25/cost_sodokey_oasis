import { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Star,
  CheckCircle,
  ArrowRight,
  Phone,
  MessageCircle,
  Quote,
} from 'lucide-react';
import WaterRipple from '../components/WaterRipple';
import SectionTitle from '../components/SectionTitle';
import BookingModal from '../components/BookingModal';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const pillars = [
  {
    image: '/relax.png',
    title: 'RELAX',
    subtitle: 'Unwind Your Mind',
    description: 'Release the weight of stress and find your calm center.',
  },
  {
    image: '/renew.png',
    title: 'RENEW',
    subtitle: 'Refresh Your Body',
    description: 'Rejuvenate your body with therapeutic touch and care.',
  },
  {
    image: '/restore.png',
    title: 'RESTORE',
    subtitle: 'Rebalance Your Energy',
    description: 'Harmonize your energy flow through meridian therapy.',
  },
  {
    image: '/revive.png',
    title: 'REVIVE',
    subtitle: 'Revitalize Your Life',
    description: 'Emerge revitalized, ready to embrace life fully.',
  },
];

const services = [
  {
    title: 'Relaxation Massage',
    benefits: ['Stress reduction', 'Mental relaxation', 'Improved wellbeing'],
    popular: false,
  },
  {
    title: 'Deep Tissue Massage',
    benefits: ['Targeted muscle recovery', 'Tension release', 'Enhanced mobility'],
    popular: false,
  },
  {
    title: 'Meridian Therapy',
    benefits: [
      'Balance & recovery',
      'Energy flow',
      'Promote metabolism',
      'Reduce inflammation',
      'Relieve pain & detoxify',
      'Beautify and slim',
    ],
    popular: false,
  },
  {
    title: 'Oasis Signature Experience',
    benefits: ['Massage + Meridian Therapy', 'The complete Oasis journey', 'Holistic wellness'],
    popular: true,
  },
];

const steps = [
  { num: '01', title: 'Consultation', desc: 'We understand your wellness goals.' },
  { num: '02', title: 'Personalized Treatment', desc: 'Customized to your needs.' },
  { num: '03', title: 'Relaxation & Recovery', desc: 'Release stress and tension.' },
  { num: '04', title: 'Renewed You', desc: 'Leave feeling refreshed and revitalized.' },
];

const testimonials = [
  { text: 'Excellent service and very professional.', rating: 5 },
  { text: 'I felt completely refreshed after my session.', rating: 5 },
  { text: "One of the most relaxing experiences I've had.", rating: 5 },
];

export default function Home() {
  const scrollRef = useScrollAnimation();
  const [bookingOpen, setBookingOpen] = useState(false);

  return (
    <div ref={scrollRef}>
      <BookingModal isOpen={bookingOpen} onClose={() => setBookingOpen(false)} />
      {/* Hero */}
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-oasis-dark overflow-hidden">
        <WaterRipple />
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-oasis-gold/5 blur-[100px]" />
        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
          <div className="animate-fade-in mb-8 flex justify-center">
            <img src="/oasis-logo.png" alt="Oasis Massage & Wellness" className="h-36 w-auto object-contain drop-shadow-lg" />
          </div>
          <h1 className="animate-fade-in-up font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white tracking-wide leading-[1.1]">
            OASIS MASSAGE
            <br />
            <span className="text-gradient-gold">& WELLNESS</span>
          </h1>
          <p className="animate-fade-in-up [animation-delay:200ms] mt-6 text-lg md:text-xl text-white/70 font-light max-w-2xl mx-auto">
            Your Sanctuary for Relaxation and Wellness
          </p>
          <div className="animate-fade-in-up [animation-delay:400ms] mt-4 flex items-center justify-center gap-3 text-sm text-white/40">
            <span>Professional Massage Therapy</span>
            <span className="w-1 h-1 rounded-full bg-oasis-gold/60" />
            <span>Meridian Wellness</span>
            <span className="w-1 h-1 rounded-full bg-oasis-gold/60" />
            <span>Personalized Care</span>
          </div>
          <div className="animate-fade-in-up [animation-delay:600ms] mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button onClick={() => setBookingOpen(true)} className="btn-gold flex items-center gap-2">
              Book Appointment
              <ArrowRight className="w-4 h-4" />
            </button>
            <a
              href="https://wa.me/233243248922"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline-gold flex items-center gap-2"
            >
              <MessageCircle className="w-4 h-4" />
              WhatsApp Now
            </a>
          </div>
        </div>
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-float">
          <div className="w-6 h-10 rounded-full border border-white/20 flex items-start justify-center p-1.5">
            <div className="w-1.5 h-3 rounded-full bg-oasis-gold/60 animate-shimmer" />
          </div>
        </div>
      </section>

      {/* Founder Spotlight */}
      <section className="bg-oasis-dark section-padding">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className="animate-on-scroll">
            <div className="relative">
              <div className="aspect-[3/4] rounded-2xl bg-gradient-to-br from-oasis-base to-oasis-deep overflow-hidden border border-oasis-light/10">
                <img
                  src="/WhatsApp_Image_2026-06-10_at_16.38.37_(2).jpeg"
                  alt="Simon Cost Sodokey - Founder"
                  className="w-full h-full object-cover object-top"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 w-24 h-24 rounded-xl bg-oasis-gold/10 border border-oasis-gold/20 backdrop-blur-sm flex items-center justify-center overflow-hidden">
                <img src="/oasis-logo.png" alt="Oasis" className="w-full h-full object-contain p-2" />
              </div>
            </div>
          </div>
          <div className="animate-on-scroll">
            <span className="text-oasis-gold text-xs uppercase tracking-[0.3em] font-semibold">
              Founder Spotlight
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-semibold text-white mt-3 leading-tight">
              Meet Simon Cost Sodokey
            </h2>
            <div className="gold-divider !ml-0 mt-4" />
            <p className="text-oasis-gold/80 text-sm font-medium mt-4">
              Certified Massage Therapist &
              <br />
              Certified Meridian Wellness Practitioner
            </p>
            <p className="text-white/60 text-base leading-relaxed mt-6">
              At Oasis Massage & Wellness, I help individuals reduce stress, relieve
              muscle tension, improve recovery, and embrace total wellness through
              personalized therapeutic care.
            </p>
            <p className="text-white/80 text-base font-medium mt-4">
              My commitment is simple:
            </p>
            <p className="text-oasis-gold text-lg font-display italic mt-2">
              To ensure every client leaves feeling better than they arrived.
            </p>
          </div>
        </div>
      </section>

      {/* Signature Statement */}
      <section className="relative py-24 md:py-32 bg-gradient-oasis overflow-hidden">
        <div className="absolute inset-0 bg-oasis-gold/5" />
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-oasis-gold/30 to-transparent" />
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-oasis-gold/30 to-transparent" />
        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
          <h2 className="animate-on-scroll font-display text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.1]">
            More Than A Massage.
            <br />
            <span className="text-gradient-gold">A Wellness Experience.</span>
          </h2>
        </div>
      </section>

      {/* Oasis Wellness Method */}
      <section className="bg-oasis-dark section-padding">
        <div className="max-w-6xl mx-auto">
          <SectionTitle
            subtitle="The Oasis Wellness Method"
            title="Your Path to Complete Wellness"
            description="Four pillars that form the foundation of every Oasis experience."
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {pillars.map((pillar, i) => (
              <div
                key={pillar.title}
                className="animate-on-scroll card-oasis rounded-2xl p-8 text-center group transition-all duration-500 hover:-translate-y-2"
                style={{ transitionDelay: `${i * 100}ms` }}
              >
                <div className="w-36 h-24 mx-auto mb-2 transition-transform duration-300 group-hover:scale-110">
                  <img
                    src={pillar.image}
                    alt={pillar.title}
                    className="w-full h-full object-contain drop-shadow-lg"
                  />
                </div>
                <h3 className="font-display text-xl font-semibold text-white mb-1">
                  {pillar.title}
                </h3>
                <p className="text-oasis-gold text-sm font-medium mb-3">
                  {pillar.subtitle}
                </p>
                <p className="text-white/50 text-sm leading-relaxed">
                  {pillar.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Services */}
      <section className="bg-oasis-deep section-padding">
        <div className="max-w-6xl mx-auto">
          <SectionTitle
            subtitle="Featured Services"
            title="Tailored Treatments for You"
            description="Each treatment is designed to address your specific wellness needs."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {services.map((service, i) => (
              <div
                key={service.title}
                className={`animate-on-scroll card-oasis rounded-2xl p-8 relative group transition-all duration-500 hover:-translate-y-1 ${
                  service.popular ? 'ring-1 ring-oasis-gold/40' : ''
                }`}
                style={{ transitionDelay: `${i * 100}ms` }}
              >
                {service.popular && (
                  <div className="absolute top-4 right-4 flex items-center gap-1.5 bg-oasis-gold/20 border border-oasis-gold/30 rounded-full px-3 py-1">
                    <Star className="w-3.5 h-3.5 text-oasis-gold fill-oasis-gold" />
                    <span className="text-oasis-gold text-xs font-semibold uppercase tracking-wider">
                      Most Popular
                    </span>
                  </div>
                )}
                <h3 className="font-display text-xl font-semibold text-white mb-5">
                  {service.title}
                </h3>
                <ul className="space-y-3">
                  {service.benefits.map((benefit) => (
                    <li key={benefit} className="flex items-center gap-3 text-white/60 text-sm">
                      <CheckCircle className="w-4 h-4 text-oasis-glow/60 shrink-0" />
                      {benefit}
                    </li>
                  ))}
                </ul>
                <Link
                  to="/services"
                  className="mt-6 inline-flex items-center gap-2 text-oasis-gold text-sm font-medium hover:gap-3 transition-all"
                >
                  Learn More
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Oasis Experience Timeline */}
      <section className="bg-oasis-dark section-padding">
        <div className="max-w-4xl mx-auto">
          <SectionTitle
            subtitle="Your Oasis Experience"
            title="A Journey to Wellness"
            description="From consultation to renewal, every step is crafted for your comfort."
          />
          <div className="relative">
            <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-oasis-gold/40 via-oasis-glow/20 to-transparent" />
            <div className="space-y-12">
              {steps.map((step, i) => (
                <div
                  key={step.num}
                  className={`animate-on-scroll relative flex items-start gap-6 md:gap-0 ${
                    i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
                >
                  <div className="absolute left-8 md:left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-oasis-gold border-4 border-oasis-dark z-10" />
                  <div className={`ml-16 md:ml-0 md:w-1/2 ${i % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12'}`}>
                    <span className="text-oasis-gold text-3xl font-display font-bold opacity-30">
                      {step.num}
                    </span>
                    <h3 className="font-display text-xl font-semibold text-white -mt-2">
                      {step.title}
                    </h3>
                    <p className="text-white/50 text-sm mt-2">
                      {step.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Founder's Message */}
      <section className="bg-gradient-oasis section-padding relative overflow-hidden">
        <div className="absolute top-0 right-0 w-80 h-80 rounded-full bg-oasis-gold/5 blur-[80px]" />
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
          <div className="animate-on-scroll">
            <div className="aspect-[4/5] rounded-2xl bg-gradient-to-br from-oasis-base to-oasis-deep overflow-hidden border border-oasis-light/10">
              <img
                src="/WhatsApp_Image_2026-06-10_at_16.38.37_(2).jpeg"
                alt="Simon Cost Sodokey"
                className="w-full h-full object-cover object-top"
              />
            </div>
          </div>
          <div className="animate-on-scroll">
            <span className="text-oasis-gold text-xs uppercase tracking-[0.3em] font-semibold">
              Founder's Message
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-semibold text-white mt-3 leading-tight">
              A Peaceful Sanctuary
            </h2>
            <div className="gold-divider !ml-0 mt-4" />
            <p className="text-white/60 text-base leading-relaxed mt-6">
              Oasis Massage & Wellness was born from a desire to create a peaceful
              sanctuary where individuals can escape the pressures of daily life and
              reconnect with their wellbeing.
            </p>
            <p className="text-white/60 text-base leading-relaxed mt-4">
              Every treatment is delivered with professionalism, care, and a genuine
              commitment to your wellness journey.
            </p>
            <div className="mt-8 flex items-center gap-4">
              <div className="w-px h-12 bg-oasis-gold/30" />
              <div>
                <p className="text-white font-display text-lg italic">
                  Simon Cost Sodokey
                </p>
                <p className="text-oasis-gold/60 text-xs uppercase tracking-wider mt-1">
                  Founder & Lead Therapist
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-oasis-dark section-padding">
        <div className="max-w-5xl mx-auto">
          <SectionTitle
            subtitle="Testimonials"
            title="What Our Clients Say"
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <div
                key={i}
                className="animate-on-scroll card-oasis rounded-2xl p-8 text-center transition-all duration-500 hover:-translate-y-1"
              >
                <Quote className="w-8 h-8 text-oasis-gold/30 mx-auto mb-4" />
                <div className="flex items-center justify-center gap-1 mb-4">
                  {Array.from({ length: t.rating }).map((_, j) => (
                    <Star key={j} className="w-4 h-4 text-oasis-gold fill-oasis-gold" />
                  ))}
                </div>
                <p className="text-white/70 text-sm leading-relaxed italic">
                  &ldquo;{t.text}&rdquo;
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="relative py-24 md:py-32 bg-gradient-oasis-dark overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-oasis-gold/5 blur-[80px]" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full bg-oasis-glow/5 blur-[80px]" />
        </div>
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-oasis-gold/30 to-transparent" />
        <div className="relative z-10 text-center px-6 max-w-3xl mx-auto">
          <h2 className="animate-on-scroll font-display text-3xl md:text-5xl font-bold text-white leading-tight">
            Ready To{' '}
            <span className="text-gradient-gold">Relax, Renew, Restore</span>
            <br />
            & <span className="text-gradient-gold">Revive</span>?
          </h2>
          <p className="animate-on-scroll mt-6 text-white/50 text-lg">
            Book Your Oasis Experience Today.
          </p>
          <div className="animate-on-scroll mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button onClick={() => setBookingOpen(true)} className="btn-gold flex items-center gap-2 text-base">
              Book Now
              <ArrowRight className="w-5 h-5" />
            </button>
            <a
              href="https://wa.me/233243248922"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline-gold flex items-center gap-2 text-base"
            >
              <Phone className="w-5 h-5" />
              WhatsApp Now
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
