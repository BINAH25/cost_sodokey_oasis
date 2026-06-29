import { Link } from 'react-router-dom';
import {
  Leaf,
  Dumbbell,
  Target,
  Zap,
  Crown,
  Home,
  Gift,
  Users,
  Sparkles,
  ArrowRight,
  Info,
} from 'lucide-react';
import SectionTitle from '../components/SectionTitle';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

interface Tier {
  duration: string;
  price: string;
  ideal: string;
}

interface ServiceGroup {
  icon: typeof Leaf;
  name: string;
  tiers: Tier[];
}

const serviceGroups: ServiceGroup[] = [
  {
    icon: Leaf,
    name: 'Swedish Massage',
    tiers: [
      { duration: '30 Minutes', price: '100', ideal: 'Relaxation, stress relief' },
      { duration: '60 Minutes', price: '180', ideal: 'Full-body relaxation' },
      { duration: '90 Minutes', price: '250', ideal: 'Complete wellness experience' },
    ],
  },
  {
    icon: Dumbbell,
    name: 'Deep Tissue Massage',
    tiers: [
      { duration: '30 Minutes', price: '120', ideal: 'Muscle tension relief' },
      { duration: '60 Minutes', price: '220', ideal: 'Chronic muscle pain & recovery' },
      { duration: '90 Minutes', price: '300', ideal: 'Intensive muscle therapy' },
    ],
  },
  {
    icon: Target,
    name: 'Trigger Point Therapy',
    tiers: [
      { duration: '30 Minutes', price: '150', ideal: 'Targeted pain relief' },
      { duration: '60 Minutes', price: '250', ideal: 'Chronic muscle knots & tension' },
    ],
  },
  {
    icon: Zap,
    name: 'Meridian Wellness Session (FOHOW)',
    tiers: [
      { duration: '30 Minutes', price: '120', ideal: 'Relaxation & wellness support' },
      { duration: '60 Minutes', price: '200', ideal: 'Comprehensive wellness session' },
    ],
  },
  {
    icon: Crown,
    name: 'Oasis Signature Experience',
    tiers: [
      {
        duration: '90 Minutes',
        price: '350',
        ideal: 'Massage + Meridian Wellness + Relaxation Enhancement',
      },
    ],
  },
];

const homeServiceCharges = [
  { location: 'Within Darkuman & Nearby', charge: '50' },
  { location: 'Greater Accra (Long Distance)', charge: '80 – 150' },
];

const memberships = [
  { tier: 'Silver Wellness', includes: '4 Sessions / Month', price: '650', highlight: false },
  { tier: 'Gold Wellness', includes: '8 Sessions / Month', price: '1,200', highlight: true },
  { tier: 'Executive Wellness', includes: 'Customized Plan', price: 'Quote on Request', highlight: false },
];

const corporate = [
  'Corporate Wellness Day',
  'Hotel & Guest Services',
  'Event Massage Services',
];

const grandOpening = [
  {
    icon: Gift,
    title: 'Grand Opening Wellness Bonus',
    desc: 'Complimentary 15-minute Relaxation Enhancement with every 60-minute or longer session.',
  },
  {
    icon: Crown,
    title: 'First 50 Clients',
    desc: 'Become Oasis Founding Members with exclusive future benefits.',
  },
  {
    icon: Users,
    title: 'Referral Reward',
    desc: 'Refer a friend who books a session and receive GHS 30 credit toward your next visit.',
  },
];

export default function Pricing() {
  const scrollRef = useScrollAnimation();

  return (
    <div ref={scrollRef}>
      {/* Hero */}
      <section className="relative pt-32 pb-20 bg-gradient-oasis-dark overflow-hidden">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[500px] h-[500px] rounded-full bg-oasis-gold/5 blur-[100px]" />
        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <span className="text-oasis-gold text-xs uppercase tracking-[0.3em] font-semibold">
            Wellness Investment
          </span>
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-white mt-3 leading-tight">
            Invest in Your <span className="text-gradient-gold">Wellbeing</span>
          </h1>
          <div className="gold-divider mt-4" />
          <p className="text-white/50 text-lg mt-6 max-w-2xl mx-auto">
            Every treatment is personalized to your wellness goals. Transparent
            pricing, crafted for the experience you deserve.
          </p>
        </div>
      </section>

      {/* Grand Opening Offer */}
      <section className="bg-oasis-deep section-padding">
        <div className="max-w-6xl mx-auto">
          <SectionTitle
            subtitle="Grand Opening Offer"
            title="Launch Month Rewards"
            description="A special welcome as we open our doors. Available for a limited time only."
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {grandOpening.map((offer, i) => (
              <div
                key={offer.title}
                className="animate-on-scroll card-oasis rounded-2xl p-8 text-center transition-all duration-500 hover:-translate-y-1"
                style={{ transitionDelay: `${i * 100}ms` }}
              >
                <div className="w-14 h-14 mx-auto rounded-xl bg-oasis-gold/10 border border-oasis-gold/20 flex items-center justify-center mb-5">
                  <offer.icon className="w-7 h-7 text-oasis-gold" />
                </div>
                <h3 className="font-display text-lg font-semibold text-white mb-3">
                  {offer.title}
                </h3>
                <p className="text-white/50 text-sm leading-relaxed">{offer.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Launch Price List */}
      <section className="bg-oasis-dark section-padding">
        <div className="max-w-5xl mx-auto">
          <SectionTitle subtitle="Launch Price List" title="Our Treatments" />
          <div className="space-y-8">
            {serviceGroups.map((group, i) => (
              <div
                key={group.name}
                className="animate-on-scroll card-oasis rounded-2xl overflow-hidden"
                style={{ transitionDelay: `${i * 80}ms` }}
              >
                <div className="flex items-center gap-3 px-6 md:px-8 py-5 border-b border-oasis-light/10 bg-oasis-base/30">
                  <div className="w-10 h-10 rounded-lg bg-oasis-gold/10 border border-oasis-gold/20 flex items-center justify-center shrink-0">
                    <group.icon className="w-5 h-5 text-oasis-gold" />
                  </div>
                  <h3 className="font-display text-lg md:text-xl font-semibold text-white">
                    {group.name}
                  </h3>
                </div>
                <div className="divide-y divide-oasis-light/10">
                  {group.tiers.map((tier) => (
                    <div
                      key={tier.duration}
                      className="px-6 md:px-8 py-4 flex flex-wrap items-center justify-between gap-x-6 gap-y-2"
                    >
                      <div className="min-w-[110px]">
                        <p className="text-white text-sm font-medium">{tier.duration}</p>
                        <p className="text-white/40 text-xs mt-0.5">{tier.ideal}</p>
                      </div>
                      <div className="text-oasis-gold font-display text-lg font-semibold whitespace-nowrap">
                        GHS {tier.price}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Consultation note */}
          <div className="animate-on-scroll mt-8 flex items-start gap-3 text-white/50 text-sm leading-relaxed bg-oasis-base/30 border border-oasis-light/10 rounded-xl px-5 py-4">
            <Info className="w-4 h-4 text-oasis-gold shrink-0 mt-0.5" />
            <span>
              All treatments are personalized to your wellness goals. If you're
              unsure which service is right for you, we're happy to guide you
              during your consultation.
            </span>
          </div>
        </div>
      </section>

      {/* Home Service */}
      <section className="bg-oasis-deep section-padding">
        <div className="max-w-3xl mx-auto">
          <SectionTitle
            subtitle="Home Service"
            title="We Come to You"
            description="Enjoy the Oasis experience in the comfort of your own space. Additional charges apply based on location."
          />
          <div className="animate-on-scroll card-oasis rounded-2xl overflow-hidden">
            <div className="flex items-center gap-3 px-6 md:px-8 py-5 border-b border-oasis-light/10 bg-oasis-base/30">
              <div className="w-10 h-10 rounded-lg bg-oasis-gold/10 border border-oasis-gold/20 flex items-center justify-center shrink-0">
                <Home className="w-5 h-5 text-oasis-gold" />
              </div>
              <h3 className="font-display text-lg md:text-xl font-semibold text-white">
                Home Service Charges
              </h3>
            </div>
            <div className="divide-y divide-oasis-light/10">
              {homeServiceCharges.map((row) => (
                <div
                  key={row.location}
                  className="px-6 md:px-8 py-4 flex items-center justify-between gap-6"
                >
                  <p className="text-white/80 text-sm">{row.location}</p>
                  <div className="text-oasis-gold font-display text-lg font-semibold whitespace-nowrap">
                    + GHS {row.charge}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Membership Packages */}
      <section className="bg-oasis-dark section-padding">
        <div className="max-w-5xl mx-auto">
          <SectionTitle
            subtitle="Membership Packages"
            title="Wellness, Every Month"
            description="Commit to your wellbeing and save. Ideal for those who make self-care a regular part of life."
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {memberships.map((m, i) => (
              <div
                key={m.tier}
                className={`animate-on-scroll rounded-2xl p-8 text-center transition-all duration-500 hover:-translate-y-1 ${
                  m.highlight
                    ? 'border border-oasis-gold/50 bg-oasis-gold/5'
                    : 'card-oasis'
                }`}
                style={{ transitionDelay: `${i * 100}ms` }}
              >
                {m.highlight && (
                  <span className="inline-block text-oasis-gold text-[0.65rem] uppercase tracking-[0.2em] font-semibold mb-3">
                    Most Popular
                  </span>
                )}
                <h3 className="font-display text-xl font-semibold text-white">{m.tier}</h3>
                <p className="text-white/50 text-sm mt-2">{m.includes}</p>
                <div className="gold-divider mt-5 mb-5" />
                <p className="text-oasis-gold font-display text-2xl font-bold">
                  {m.price === 'Quote on Request' ? (
                    <span className="text-lg font-semibold">Quote on Request</span>
                  ) : (
                    <>
                      GHS {m.price}
                      <span className="text-white/40 text-sm font-normal"> / month</span>
                    </>
                  )}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Corporate Wellness */}
      <section className="bg-oasis-deep section-padding">
        <div className="max-w-4xl mx-auto text-center">
          <SectionTitle
            subtitle="Corporate Wellness"
            title="Wellness for Teams & Events"
            description="Bring the Oasis experience to your workplace, hotel, or event."
          />
          <div className="animate-on-scroll grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-3xl mx-auto">
            {corporate.map((item) => (
              <div key={item} className="card-oasis rounded-xl p-6 flex flex-col items-center gap-3">
                <Sparkles className="w-6 h-6 text-oasis-gold" />
                <p className="text-white/80 text-sm font-medium">{item}</p>
                <p className="text-oasis-gold/70 text-xs uppercase tracking-wider">
                  Quote on Request
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-24 md:py-32 bg-gradient-oasis overflow-hidden">
        <div className="absolute inset-0 bg-oasis-gold/5" />
        <div className="relative z-10 text-center px-6 max-w-3xl mx-auto">
          <h2 className="animate-on-scroll font-display text-3xl md:text-5xl font-bold text-white leading-tight">
            Ready to Begin
            <br />
            <span className="text-gradient-gold">Your Wellness Journey?</span>
          </h2>
          <p className="animate-on-scroll text-white/50 mt-6 text-lg">
            Book a session or reach out — we'll help you choose the perfect treatment.
          </p>
          <Link to="/contact" className="animate-on-scroll btn-gold inline-flex items-center gap-2 mt-8">
            Book Your Session
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}
