import { Link } from 'react-router-dom';
import { Award, Heart, Eye, Globe, ArrowRight, CheckCircle, Target, Compass } from 'lucide-react';
import SectionTitle from '../components/SectionTitle';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const specializations = [
  'Swedish Massage',
  'Deep Tissue Massage',
  'Trigger Point Therapy',
  'Full Body Therapeutic Massage',
  'Meridian Therapy',
  'Wellness Consultation',
  'Relaxation & Recovery Programs',
];

const credentials = [
  'Certified Massage Therapist',
  'Certified Meridian Therapy Practitioner',
  'Traditional Chinese Medicine Wellness Training',
  'FOHOW Meridian Wellness Specialist',
  'Holistic Wellness Consultant',
  'Continuous Professional Development in Therapeutic Massage & Wellness Care',
];

const highlights = [
  {
    icon: Award,
    title: 'Certified Excellence',
    desc: 'Certified Massage Therapist and Certified Meridian Wellness Practitioner with rigorous professional training.',
  },
  {
    icon: Heart,
    title: 'Genuine Care',
    desc: 'Every treatment is delivered with heartfelt commitment to your wellness journey and overall wellbeing.',
  },
  {
    icon: Eye,
    title: 'Personalized Approach',
    desc: 'Each session is tailored to your unique needs, ensuring maximum benefit and lasting results.',
  },
  {
    icon: Globe,
    title: 'Vision for Ghana',
    desc: 'Bringing world-class wellness therapy to Ghana, making holistic health accessible and valued.',
  },
];

export default function About() {
  const scrollRef = useScrollAnimation();

  return (
    <div ref={scrollRef}>
      {/* Hero */}
      <section className="relative min-h-[70vh] flex items-center bg-gradient-oasis-dark overflow-hidden">
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[500px] h-[500px] rounded-full bg-oasis-gold/5 blur-[100px]" />
        <div className="relative z-10 max-w-6xl mx-auto px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center pt-24">
          <div className="animate-on-scroll">
            <div className="aspect-[3/4] rounded-2xl bg-gradient-to-br from-oasis-base to-oasis-deep overflow-hidden border border-oasis-light/10">
              <img
                src="/WhatsApp_Image_2026-06-10_at_16.38.37_(2).jpeg"
                alt="Simon Cost Sodokey"
                className="w-full h-full object-cover object-top"
              />
            </div>
          </div>
          <div className="animate-on-scroll">
            <span className="text-oasis-gold text-xs uppercase tracking-[0.3em] font-semibold">
              About
            </span>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-white mt-3 leading-tight">
              Meet Simon Cost
              <br />
              <span className="text-gradient-gold">Sodokey</span>
            </h1>
            <div className="gold-divider !ml-0 mt-4" />
            <p className="text-white/60 text-base leading-relaxed mt-6">
              Certified Massage Therapist & Certified Meridian Wellness Practitioner
              dedicated to transforming lives through the healing power of touch.
            </p>
            <Link to="/contact" className="btn-gold inline-flex items-center gap-2 mt-8">
              Book a Session
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Journey */}
      <section className="bg-oasis-dark section-padding">
        <div className="max-w-4xl mx-auto">
          <SectionTitle subtitle="Founder & Lead Therapist" title="The Path to Wellness" />
          <div className="space-y-6 animate-on-scroll">
            <p className="text-white/60 text-base leading-relaxed text-center">
              Simon Cost Sodokey is a professionally trained Massage Therapist and
              Meridian Wellness Practitioner dedicated to helping clients achieve optimal
              wellness through personalized therapeutic care. His training combines modern
              massage therapy techniques with holistic wellness principles inspired by
              Traditional Chinese Medicine and Meridian Therapy.
            </p>
            <p className="text-white/60 text-base leading-relaxed text-center">
              Through years of practice and continuous learning, Simon developed the Oasis
              Wellness Method a holistic approach that addresses the whole person, not
              just symptoms. His mission is to create a trusted wellness sanctuary where
              clients can relax, recover, and reconnect with their best selves.
            </p>
          </div>

          <div className="mt-12 animate-on-scroll">
            <h3 className="text-center text-oasis-gold text-xs uppercase tracking-[0.3em] font-semibold mb-6">
              Simon Specializes In
            </h3>
            <div className="flex flex-wrap justify-center gap-3">
              {specializations.map((s) => (
                <span
                  key={s}
                  className="bg-oasis-base/40 border border-oasis-light/15 text-white/70 text-sm rounded-full px-4 py-2"
                >
                  {s}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Highlights */}
      <section className="bg-oasis-deep section-padding">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {highlights.map((item, i) => (
              <div
                key={item.title}
                className="animate-on-scroll card-oasis rounded-2xl p-8 group transition-all duration-500 hover:-translate-y-1"
                style={{ transitionDelay: `${i * 100}ms` }}
              >
                <div className="w-12 h-12 rounded-xl bg-oasis-gold/10 border border-oasis-gold/20 flex items-center justify-center mb-5 transition-all group-hover:bg-oasis-gold/20">
                  <item.icon className="w-6 h-6 text-oasis-gold" />
                </div>
                <h3 className="font-display text-xl font-semibold text-white mb-3">
                  {item.title}
                </h3>
                <p className="text-white/50 text-sm leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="bg-oasis-dark section-padding">
        <div className="max-w-4xl mx-auto text-center">
          <SectionTitle subtitle="Professional Credentials" title="Trained, Certified & Trusted" />
          <div className="animate-on-scroll grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-3xl mx-auto text-left">
            {credentials.map((c) => (
              <div
                key={c}
                className="card-oasis rounded-xl p-5 flex items-start gap-3"
              >
                <CheckCircle className="w-5 h-5 text-oasis-gold shrink-0 mt-0.5" />
                <span className="text-white/70 text-sm font-medium">{c}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="bg-oasis-deep section-padding">
        <div className="max-w-5xl mx-auto">
          <SectionTitle subtitle="What Drives Us" title="Our Mission & Vision" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="animate-on-scroll card-oasis rounded-2xl p-8 md:p-10">
              <div className="w-12 h-12 rounded-xl bg-oasis-gold/10 border border-oasis-gold/20 flex items-center justify-center mb-5">
                <Target className="w-6 h-6 text-oasis-gold" />
              </div>
              <h3 className="font-display text-2xl font-semibold text-white mb-4">
                Our Mission
              </h3>
              <p className="text-white/60 text-base leading-relaxed text-justify">
                To provide professional, personalized therapeutic massage and holistic
                wellness care that restores balance to the body and mind. We are committed
                to creating a trusted sanctuary where every client can relax, recover, and
                reconnect with their best self-delivered with genuine care, integrity,
                and the highest standards of practice.
              </p>
            </div>
            <div className="animate-on-scroll card-oasis rounded-2xl p-8 md:p-10" style={{ transitionDelay: '100ms' }}>
              <div className="w-12 h-12 rounded-xl bg-oasis-gold/10 border border-oasis-gold/20 flex items-center justify-center mb-5">
                <Compass className="w-6 h-6 text-oasis-gold" />
              </div>
              <h3 className="font-display text-2xl font-semibold text-white mb-4">
                Our Vision
              </h3>
              <p className="text-white/60 text-base leading-relaxed text-justify">
                To establish wellness as a cornerstone of everyday life in Ghana making
                holistic, professional therapy accessible to all and showing that self-care
                is not a luxury, but a necessity for a fulfilling life. We envision Oasis as
                a leading name in world-class wellness care across Ghana and beyond.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Vision CTA */}
      <section className="relative py-24 md:py-32 bg-gradient-oasis overflow-hidden">
        <div className="absolute inset-0 bg-oasis-gold/5" />
        <div className="relative z-10 text-center px-6 max-w-3xl mx-auto">
          <span className="animate-on-scroll text-oasis-gold text-xs uppercase tracking-[0.3em] font-semibold">
            Be Part of It
          </span>
          <h2 className="animate-on-scroll font-display text-3xl md:text-4xl font-bold text-white mt-3 leading-tight">
            Bringing World-Class Wellness
            <br />
            <span className="text-gradient-gold">Home to Ghana</span>
          </h2>
          <p className="animate-on-scroll mt-6 text-white/50 text-base leading-relaxed">
            My vision is to establish wellness as a cornerstone of everyday life in Ghana.
            To make holistic, professional therapy accessible and to show that self-care
            is not a luxury it is a necessity for a fulfilling life.
          </p>
          <Link to="/contact" className="animate-on-scroll btn-gold inline-flex items-center gap-2 mt-8">
            Join the Journey
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}
