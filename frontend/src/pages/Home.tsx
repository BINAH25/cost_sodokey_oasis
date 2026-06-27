import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  Star,
  CheckCircle,
  ArrowRight,
  Phone,
  MessageCircle,
  Quote,
  ShieldCheck,
  Sparkles,
  UserCheck,
  HeartPulse,
  Home as HomeIcon,
  Smile,
  Briefcase,
  Activity,
  Brain,
  Flower2,
  Heart,
} from 'lucide-react';
import SectionTitle from '../components/SectionTitle';
import BookingModal from '../components/BookingModal';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { listFeedback } from '../lib/api';

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
    title: 'Swedish Massage Therapy',
    benefits: ['Reduced stress', 'Improved circulation', 'Better sleep quality', 'Relaxation and rejuvenation'],
    popular: false,
  },
  {
    title: 'Deep Tissue Massage',
    benefits: ['Muscle recovery', 'Improved flexibility', 'Reduced stiffness', 'Enhanced mobility'],
    popular: false,
  },
  {
    title: 'Trigger Point Therapy',
    benefits: ['Relief of muscle tightness', 'Improved movement', 'Reduced discomfort', 'Enhanced physical performance'],
    popular: false,
  },
  {
    title: 'Full Body Therapeutic Massage',
    benefits: ['Complete body relaxation', 'Stress reduction', 'Improved blood flow', 'Enhanced recovery'],
    popular: false,
  },
  {
    title: 'Meridian Balance Therapy',
    benefits: ['Relaxation', 'Energy balance', 'Improved circulation', 'Wellness support'],
    popular: false,
  },
  {
    title: 'FOHOW Meridian Wellness Session',
    benefits: ['Supports relaxation', 'Supports circulation', 'Supports recovery', 'Helps reduce muscle tension'],
    popular: false,
  },
  {
    title: 'The Oasis Signature Experience',
    benefits: ['Full Body Therapeutic Massage', 'Meridian Balance Therapy', 'FOHOW Wellness Session', 'Personalized Wellness Guidance'],
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
  { text: 'I arrived stressed and exhausted. I left feeling completely renewed.', rating: 5, author: 'Client, Accra' },
  { text: 'Professional, relaxing and worth every minute.', rating: 5, author: 'Client, Accra' },
  { text: "One of the most relaxing experiences I've had.", rating: 5, author: 'Client, Accra' },
];

const differences = [
  { icon: UserCheck, title: 'Professionally Trained Therapist', desc: 'Certified expertise you can trust with every session.' },
  { icon: Sparkles, title: 'Dual Massage & Meridian Expertise', desc: 'A rare combination of therapeutic massage and meridian wellness.' },
  { icon: HeartPulse, title: 'Personalized Treatment Plans', desc: 'Every session is tailored to your unique body and goals.' },
  { icon: ShieldCheck, title: 'Professional & Hygienic Environment', desc: 'A clean, private space designed for your comfort.' },
  { icon: Activity, title: 'Modern Wellness Technology', desc: 'FOHOW meridian wellness inspired by Traditional Chinese Medicine.' },
  { icon: Flower2, title: 'A Relaxing Sanctuary Experience', desc: 'Escape the noise and reconnect with your wellbeing.' },
  { icon: Heart, title: 'Client-Centered Care', desc: 'Your comfort, recovery, and goals guide every decision we make.' },
];

const founderSpecialties = [
  'Swedish Massage',
  'Deep Tissue Massage',
  'Trigger Point Therapy',
  'Full Body Therapeutic Massage',
  'Meridian Therapy',
  'Wellness Consultation',
  'Relaxation and Recovery Programs',
];

const credentials = [
  'Certified Massage Therapist',
  'Certified Meridian Therapy Practitioner',
  'Traditional Chinese Medicine Wellness Training',
  'FOHOW Meridian Wellness Specialist',
  'Holistic Wellness Consultant',
  'Continuous Professional Development in Therapeutic Massage & Wellness Care',
];

const idealFor = [
  { icon: Briefcase, label: 'Busy Professionals' },
  { icon: Sparkles, label: 'Entrepreneurs' },
  { icon: Activity, label: 'Athletes' },
  { icon: Brain, label: 'Those Experiencing Stress' },
  { icon: Smile, label: 'Anyone Seeking Relaxation' },
  { icon: HomeIcon, label: 'Anyone Investing in Wellness' },
];

export default function Home() {
  const scrollRef = useScrollAnimation();
  const [bookingOpen, setBookingOpen] = useState(false);

  // Pull published reviews from the backend; fall back to the defaults if none.
  const [reviews, setReviews] = useState<typeof testimonials>([]);
  useEffect(() => {
    listFeedback()
      .then((data) => {
        const mapped = data.map((f) => ({
          text: f.message,
          rating: f.rating,
          author: `${f.name}, Accra`,
        }));
        if (mapped.length) setReviews(mapped);
      })
      .catch(() => {
        /* keep the fallback testimonials on any error */
      });
  }, []);

  const displayTestimonials = reviews.length ? reviews : testimonials;

  return (
    <div ref={scrollRef}>
      <BookingModal isOpen={bookingOpen} onClose={() => setBookingOpen(false)} />
      {/* Hero */}
      <section className="relative min-h-[calc(100vh-5rem)] flex items-center justify-center overflow-hidden py-20">
        {/* Full-screen spa background image */}
        <div className="absolute inset-0">
          <img
            src="/relaxation-msssage.jpeg"
            alt=""
            aria-hidden="true"
            className="w-full h-full object-cover animate-hero-pan"
          />
        </div>
        {/* Emerald green overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-oasis-dark/90 via-oasis-deep/80 to-oasis-dark/95" />
        <div className="absolute inset-0 bg-oasis-base/30 mix-blend-multiply" />
        {/* Soft moving water sheen */}
        <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-oasis-glow/10 to-transparent animate-water-sheen" />
        {/* Gold accent glow */}
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-oasis-gold/10 blur-[100px]" />
        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
          <div className="animate-fade-in mb-8 flex justify-center">
            <img src="/oasis-logo.png" alt="Oasis Massage & Wellness" className="h-32 w-auto object-contain drop-shadow-lg" />
          </div>
          <p className="animate-fade-in-up text-oasis-gold text-sm uppercase tracking-[0.4em] font-semibold mb-5">
            Relax &bull; Renew &bull; Restore &bull; Revive
          </p>
          <h1 className="animate-fade-in-up font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white tracking-wide leading-[1.05]">
            Restore Balance.
            <br />
            Relieve Tension.
            <br />
            <span className="text-gradient-gold">Renew Your Life.</span>
          </h1>
          <p className="animate-fade-in-up [animation-delay:200ms] mt-6 text-lg md:text-xl text-white/70 font-light max-w-2xl mx-auto">
            Experience professional massage therapy, meridian wellness treatments, and
            holistic care designed to help you feel your best.
          </p>
          <div className="animate-fade-in-up [animation-delay:400ms] mt-5 flex flex-wrap items-center justify-center gap-x-3 gap-y-2 text-sm text-white/60">
            <span>Certified Massage Therapist</span>
            <span className="w-1 h-1 rounded-full bg-oasis-gold/60" />
            <span>Meridian Wellness Practitioner</span>
            <span className="w-1 h-1 rounded-full bg-oasis-gold/60" />
            <span>Wellness Consultant</span>
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

      {/* About Oasis */}
      <section className="bg-oasis-dark section-padding">
        <div className="max-w-3xl mx-auto text-center animate-on-scroll">
          <span className="text-oasis-gold text-xs uppercase tracking-[0.3em] font-semibold">
            About Oasis
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-semibold text-white mt-3 leading-tight">
            A Complete Approach to Wellness
          </h2>
          <div className="gold-divider mt-4" />
          <p className="text-white/60 text-base leading-relaxed mt-6">
            At Oasis Massage &amp; Wellness, we believe true wellness goes beyond
            relaxation. Our approach combines professional massage therapy techniques
            with meridian wellness principles to help clients relieve stress, reduce
            muscle tension, improve recovery, restore balance, and enhance overall
            well-being.
          </p>
          <p className="text-white/60 text-base leading-relaxed mt-4">
            Whether you are seeking relief from everyday stress, muscle tightness,
            physical fatigue, or simply looking to invest in your wellness, Oasis
            provides a professional and welcoming environment designed around your needs.
          </p>
        </div>
      </section>

      {/* Founder Spotlight */}
      <section className="bg-oasis-deep section-padding">
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
              Meet the Founder
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-semibold text-white mt-3 leading-tight">
              Simon Cost
            </h2>
            <p className="text-oasis-gold/80 text-sm font-medium mt-2">
              Founder &amp; Lead Therapist
            </p>
            <div className="gold-divider !ml-0 mt-4" />
            <p className="text-white/60 text-base leading-relaxed mt-6">
              Simon is a professionally trained Massage Therapist and Meridian Wellness
              Practitioner dedicated to helping clients achieve optimal wellness through
              personalized therapeutic care. His training combines modern massage therapy
              techniques with holistic wellness principles inspired by Traditional Chinese
              Medicine and Meridian Therapy.
            </p>
            <p className="text-white/80 text-sm font-medium mt-6">Simon specializes in:</p>
            <ul className="mt-3 grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2">
              {founderSpecialties.map((s) => (
                <li key={s} className="flex items-center gap-2.5 text-white/60 text-sm">
                  <span className="w-1.5 h-1.5 rounded-full bg-oasis-gold shrink-0" />
                  {s}
                </li>
              ))}
            </ul>
            <p className="text-oasis-gold text-lg font-display italic mt-6">
              His mission: to create a trusted wellness sanctuary where clients can relax,
              recover, and reconnect with their best selves.
            </p>
          </div>
        </div>
      </section>

      {/* Professional Credentials */}
      <section className="bg-oasis-dark section-padding">
        <div className="max-w-4xl mx-auto text-center">
          <SectionTitle
            subtitle="Professional Credentials"
            title="Trained, Certified & Trusted"
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-3xl mx-auto text-left">
            {credentials.map((c) => (
              <div
                key={c}
                className="animate-on-scroll card-oasis rounded-xl p-5 flex items-start gap-3"
              >
                <CheckCircle className="w-5 h-5 text-oasis-gold shrink-0 mt-0.5" />
                <span className="text-white/70 text-sm font-medium">{c}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="bg-oasis-deep section-padding">
        <div className="max-w-6xl mx-auto">
          <SectionTitle
            subtitle="Gallery"
            title="A Glimpse Into Oasis"
            description="A look at our founder, our craft, and the credentials behind every session."
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { src: '/image1.jpeg', alt: 'Simon Cost Sodokey, Founder', caption: 'Simon Cost Sodokey, Founder', contain: false },
              { src: '/image2.jpeg', alt: 'A therapeutic massage session at Oasis', caption: 'Therapeutic Care in Session', contain: false },
              { src: '/cert.png', alt: 'Lucklife Primary Technician Certificate', caption: 'Certified Meridian Technician', contain: true },
            ].map((img, i) => (
              <div
                key={img.src}
                className="animate-on-scroll group relative aspect-[3/4] rounded-2xl overflow-hidden border border-oasis-light/10 bg-gradient-to-br from-oasis-base to-oasis-deep"
                style={{ transitionDelay: `${i * 100}ms` }}
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  loading="lazy"
                  className={`w-full h-full transition-transform duration-700 group-hover:scale-105 ${
                    img.contain ? 'object-contain p-4' : 'object-cover'
                  }`}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-oasis-dark/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute bottom-0 left-0 right-0 p-5 translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                  <p className="text-white text-sm font-medium">{img.caption}</p>
                </div>
              </div>
            ))}
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

      {/* Our Signature Services */}
      <section className="bg-oasis-dark section-padding">
        <div className="max-w-6xl mx-auto">
          <SectionTitle
            subtitle="Our Signature Services"
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

      {/* The Oasis Difference */}
      <section className="bg-oasis-deep section-padding">
        <div className="max-w-6xl mx-auto">
          <SectionTitle
            subtitle="The Oasis Difference"
            title="Why Clients Choose Oasis"
            description="More than a massage — a professional wellness experience built on trust, expertise, and genuine care."
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {differences.map((item, i) => (
              <div
                key={item.title}
                className="animate-on-scroll card-oasis rounded-2xl p-7 group transition-all duration-500 hover:-translate-y-1"
                style={{ transitionDelay: `${i * 80}ms` }}
              >
                <div className="w-12 h-12 rounded-xl bg-oasis-gold/10 border border-oasis-gold/20 flex items-center justify-center mb-5 transition-all group-hover:bg-oasis-gold/20">
                  <item.icon className="w-6 h-6 text-oasis-gold" />
                </div>
                <h3 className="font-display text-lg font-semibold text-white mb-2">
                  {item.title}
                </h3>
                <p className="text-white/50 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* The 4 R's of Oasis */}
      <section className="bg-oasis-dark section-padding">
        <div className="max-w-6xl mx-auto">
          <SectionTitle
            subtitle="The 4 R's of Oasis"
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

      {/* Oasis Experience Timeline */}
      <section className="bg-oasis-deep section-padding">
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

      {/* Is Oasis Right For You */}
      <section className="bg-oasis-dark section-padding">
        <div className="max-w-5xl mx-auto">
          <SectionTitle
            subtitle="Is Oasis Right For You?"
            title="Designed For People Like You"
            description="Oasis is the perfect sanctuary for anyone ready to invest in their wellbeing."
          />
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
            {idealFor.map((item, i) => (
              <div
                key={item.label}
                className="animate-on-scroll card-oasis rounded-xl px-5 py-6 flex items-center gap-4 transition-all duration-500 hover:-translate-y-1"
                style={{ transitionDelay: `${i * 70}ms` }}
              >
                <div className="w-10 h-10 rounded-lg bg-oasis-gold/10 border border-oasis-gold/20 flex items-center justify-center shrink-0">
                  <item.icon className="w-5 h-5 text-oasis-gold" />
                </div>
                <span className="text-white/70 text-sm font-medium">{item.label}</span>
              </div>
            ))}
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
            {displayTestimonials.map((t, i) => (
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
                <p className="text-oasis-gold/70 text-xs uppercase tracking-wider mt-4">
                  — {t.author}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* The Oasis Promise */}
      <section className="relative py-24 md:py-28 bg-gradient-oasis overflow-hidden">
        <div className="absolute inset-0 bg-oasis-gold/5" />
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-oasis-gold/30 to-transparent" />
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-oasis-gold/30 to-transparent" />
        <div className="relative z-10 text-center px-6 max-w-3xl mx-auto">
          <span className="animate-on-scroll text-oasis-gold text-xs uppercase tracking-[0.3em] font-semibold">
            The Oasis Promise
          </span>
          <p className="animate-on-scroll font-display text-2xl md:text-3xl lg:text-4xl text-white leading-snug mt-5 italic">
            Every session is designed to provide a private, professional, and
            personalized wellness experience focused on your comfort, recovery,
            and relaxation.
          </p>
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
          <span className="animate-on-scroll text-oasis-gold text-xs uppercase tracking-[0.3em] font-semibold">
            Begin Your Wellness Journey
          </span>
          <h2 className="animate-on-scroll font-display text-3xl md:text-5xl font-bold text-white leading-tight mt-3">
            Ready To{' '}
            <span className="text-gradient-gold">Relax, Renew, Restore</span>
            <br />
            & <span className="text-gradient-gold">Revive</span>?
          </h2>
          <p className="animate-on-scroll mt-6 text-white/50 text-lg">
            Book your appointment today and discover a professional wellness
            experience designed around your needs.
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
