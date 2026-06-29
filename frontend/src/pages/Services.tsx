import { Link } from 'react-router-dom';
import {
  Leaf,
  Sparkles,
  Droplets,
  Sun,
  Star,
  Heart,
  Activity,
  CheckCircle,
  Clock,
  ArrowRight,
  Info,
} from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const services = [
  {
    icon: Leaf,
    title: 'Swedish Massage Therapy',
    tagline: 'Unwind Your Mind',
    duration: '30 / 60 / 90 min',
    price: 'From GHS 100',
    image: '/relaxation-msssage.jpeg',
    benefits: [
      'Reduced stress',
      'Improved circulation',
      'Better sleep quality',
      'Relaxation and rejuvenation',
    ],
    pillar: 'RELAX',
    pillarColor: 'text-emerald-400',
  },
  {
    icon: Sparkles,
    title: 'Deep Tissue Massage',
    tagline: 'Refresh Your Body',
    duration: '30 / 60 / 90 min',
    price: 'From GHS 120',
    image: '/deeptissuemassage.jpg',
    benefits: [
      'Muscle recovery',
      'Improved flexibility',
      'Reduced stiffness',
      'Enhanced mobility',
    ],
    pillar: 'RENEW',
    pillarColor: 'text-amber-400',
  },
  {
    icon: Sun,
    title: 'Trigger Point Therapy',
    tagline: 'Release the Tension',
    duration: '30 / 60 min',
    price: 'From GHS 150',
    image: '/deeptissuemassage.jpg',
    benefits: [
      'Relief of muscle tightness',
      'Improved movement',
      'Reduced discomfort',
      'Enhanced physical performance',
    ],
    pillar: 'RENEW',
    pillarColor: 'text-amber-400',
  },
  {
    icon: Heart,
    title: 'Full Body Therapeutic Massage',
    tagline: 'Restore Your Whole Self',
    duration: '90 min',
    price: 'Price on consultation',
    image: '/relaxation-msssage.jpeg',
    benefits: [
      'Complete body relaxation',
      'Stress reduction',
      'Improved blood flow',
      'Enhanced recovery',
    ],
    pillar: 'RELAX',
    pillarColor: 'text-emerald-400',
  },
  {
    icon: Droplets,
    title: 'Meridian Balance Therapy',
    tagline: 'Rebalance Your Energy',
    duration: '60 / 90 min',
    price: 'Price on consultation',
    image: '/meridian-massage.jpg',
    benefits: [
      'Relaxation',
      'Energy balance',
      'Improved circulation',
      'Wellness support',
    ],
    pillar: 'RESTORE',
    pillarColor: 'text-cyan-400',
  },
  {
    icon: Activity,
    title: 'FOHOW Meridian Wellness Session',
    tagline: 'Modern Wellness Technology',
    duration: '30 / 60 min',
    price: 'From GHS 120',
    image: '/meridian-massage.jpg',
    benefits: [
      'Supports relaxation',
      'Supports circulation',
      'Supports recovery',
      'Enhances overall wellness',
      'Helps reduce muscle tension',
    ],
    pillar: 'RESTORE',
    pillarColor: 'text-cyan-400',
    disclaimer:
      'This service is intended to support wellness and relaxation and is not intended to diagnose, treat, cure, or prevent any disease.',
  },
  {
    icon: Star,
    title: 'The Oasis Signature Experience',
    tagline: 'Revitalize Your Life',
    duration: '90 min',
    price: 'GHS 350',
    image: '/revive-oasis-massaggi.jpg',
    benefits: [
      'Full Body Therapeutic Massage',
      'Meridian Balance Therapy',
      'FOHOW Wellness Session',
      'Personalized Wellness Guidance',
    ],
    pillar: 'REVIVE',
    pillarColor: 'text-orange-400',
    popular: true,
  },
];

export default function Services() {
  const scrollRef = useScrollAnimation();

  return (
    <div ref={scrollRef}>
      {/* Hero */}
      <section className="relative pt-32 pb-20 bg-gradient-oasis-dark overflow-hidden">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[500px] h-[500px] rounded-full bg-oasis-gold/5 blur-[100px]" />
        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <span className="text-oasis-gold text-xs uppercase tracking-[0.3em] font-semibold">
            Our Signature Services
          </span>
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-white mt-3 leading-tight">
            Tailored <span className="text-gradient-gold">Treatments</span>
          </h1>
          <div className="gold-divider mt-4" />
          <p className="text-white/50 text-lg mt-6 max-w-2xl mx-auto">
            Each treatment is crafted to address your specific wellness needs,
            delivered with expertise and genuine care.
          </p>
        </div>
      </section>

      {/* Services List */}
      <section className="bg-oasis-dark section-padding">
        <div className="max-w-6xl mx-auto space-y-16">
          {services.map((service, i) => (
            <div
              key={service.title}
              className={`animate-on-scroll grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center ${
                i % 2 !== 0 ? 'lg:[direction:rtl]' : ''
              }`}
            >
              <div className={`relative ${i % 2 !== 0 ? 'lg:[direction:ltr]' : ''}`}>
                <div className="aspect-[4/3] rounded-2xl overflow-hidden border border-oasis-light/10 bg-gradient-to-br from-oasis-base to-oasis-deep">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover opacity-70"
                  />
                </div>
                {service.popular && (
                  <div className="absolute top-4 left-4 flex items-center gap-1.5 bg-oasis-gold/20 border border-oasis-gold/30 backdrop-blur-sm rounded-full px-4 py-1.5">
                    <Star className="w-4 h-4 text-oasis-gold fill-oasis-gold" />
                    <span className="text-oasis-gold text-xs font-semibold uppercase tracking-wider">
                      Most Popular
                    </span>
                  </div>
                )}
              </div>

              <div className={i % 2 !== 0 ? 'lg:[direction:ltr]' : ''}>
                <span className={`${service.pillarColor} text-xs uppercase tracking-[0.3em] font-semibold`}>
                  {service.pillar}
                </span>
                <h2 className="font-display text-2xl md:text-3xl font-semibold text-white mt-2">
                  {service.title}
                </h2>
                <p className="text-white/40 text-sm mt-1">{service.tagline}</p>
                <div className="gold-divider !ml-0 mt-4" />

                <ul className="mt-6 space-y-3">
                  {service.benefits.map((b) => (
                    <li key={b} className="flex items-start gap-3 text-white/60 text-sm">
                      <CheckCircle className="w-4 h-4 text-oasis-glow/60 shrink-0 mt-0.5" />
                      {b}
                    </li>
                  ))}
                </ul>

                {service.disclaimer && (
                  <div className="mt-5 flex items-start gap-2.5 text-white/35 text-xs leading-relaxed bg-oasis-base/30 border border-oasis-light/10 rounded-lg px-4 py-3">
                    <Info className="w-3.5 h-3.5 shrink-0 mt-0.5" />
                    <span>{service.disclaimer}</span>
                  </div>
                )}

                <div className="flex items-center gap-6 mt-8 text-sm">
                  <div className="flex items-center gap-2 text-white/40">
                    <Clock className="w-4 h-4" />
                    {service.duration}
                  </div>
                  <div className="text-oasis-gold font-semibold">
                    {service.price}
                  </div>
                </div>

                <Link
                  to="/contact"
                  className="btn-gold inline-flex items-center gap-2 mt-6 text-sm !py-2.5 !px-5"
                >
                  Book This Service
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-24 md:py-32 bg-gradient-oasis overflow-hidden">
        <div className="absolute inset-0 bg-oasis-gold/5" />
        <div className="relative z-10 text-center px-6 max-w-3xl mx-auto">
          <h2 className="animate-on-scroll font-display text-3xl md:text-5xl font-bold text-white leading-tight">
            Not Sure Which Treatment
            <br />
            <span className="text-gradient-gold">Is Right for You?</span>
          </h2>
          <p className="animate-on-scroll text-white/50 mt-6 text-lg">
            Let's discuss your needs and find the perfect wellness plan together.
          </p>
          <div className="animate-on-scroll mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/contact" className="btn-gold inline-flex items-center gap-2">
              Get a Consultation
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link to="/pricing" className="btn-outline-gold inline-flex items-center gap-2">
              View Full Pricing
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
