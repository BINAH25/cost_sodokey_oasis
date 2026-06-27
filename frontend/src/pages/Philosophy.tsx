import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import SectionTitle from '../components/SectionTitle';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const pillars = [
  {
    image: '/relax.png',
    title: 'Relax',
    subtitle: 'Unwind Your Mind',
    color: 'from-emerald-400 to-emerald-600',
    description:
      'True wellness begins when the mind is at peace. In our fast-paced world, mental rest is not optional — it is essential. Relaxation is the gateway to healing, allowing your body to shift from survival mode into a state of restoration.',
    principles: [
      'Quiet the mental noise through therapeutic touch',
      'Lower cortisol and activate the parasympathetic nervous system',
      'Create space for clarity and emotional calm',
      'Reconnect with your inner stillness',
    ],
  },
  {
    image: '/renew.png',
    title: 'Renew',
    subtitle: 'Refresh Your Body',
    color: 'from-amber-300 to-amber-500',
    description:
      'Your body carries the weight of daily life — tension in the shoulders, stiffness in the back, fatigue in the muscles. Renewal means releasing that accumulated burden and restoring your physical vitality through targeted, expert care.',
    principles: [
      'Release deep-held muscular tension and adhesions',
      'Improve blood flow and oxygen delivery to tissues',
      'Accelerate recovery from physical strain and overuse',
      'Restore range of motion and physical freedom',
    ],
  },
  {
    image: '/restore.png',
    title: 'Restore',
    subtitle: 'Rebalance Your Energy',
    color: 'from-cyan-300 to-cyan-500',
    description:
      'The body is an energy system. When meridians are blocked, vitality diminishes and imbalance takes root. Meridian therapy restores the free flow of energy, addressing the root causes of discomfort rather than merely the symptoms.',
    principles: [
      'Clear meridian blockages for optimal energy flow',
      'Promote metabolism and reduce inflammation naturally',
      'Relieve pain at its energetic source',
      'Detoxify the body and support immune function',
    ],
  },
  {
    image: '/revive.png',
    title: 'Revive',
    subtitle: 'Revitalize Your Life',
    color: 'from-orange-300 to-orange-500',
    description:
      'Wellness is not the destination — it is the fuel for a vibrant life. When you relax, renew, and restore, you revive. You step back into your days with more energy, more presence, and more joy. This is the Oasis promise.',
    principles: [
      'Emerge with renewed vitality for daily life',
      'Carry the benefits of therapy into every moment',
      'Build a sustainable wellness practice',
      'Live with greater presence, energy, and purpose',
    ],
  },
];

export default function Philosophy() {
  const scrollRef = useScrollAnimation();

  return (
    <div ref={scrollRef}>
      {/* Hero */}
      <section className="relative min-h-[60vh] flex items-center justify-center bg-gradient-oasis-dark overflow-hidden">
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[500px] h-[500px] rounded-full bg-oasis-gold/5 blur-[100px]" />
        <div className="relative z-10 text-center px-6 max-w-3xl mx-auto pt-20">
          <span className="text-oasis-gold text-xs uppercase tracking-[0.3em] font-semibold">
            The Oasis Philosophy
          </span>
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-white mt-3 leading-tight">
            Wellness Is Not Merely the
            <br />
            <span className="text-gradient-gold">Absence of Stress</span>
          </h1>
          <div className="gold-divider mt-4" />
          <p className="text-white/50 text-lg mt-6 max-w-xl mx-auto">
            It is the presence of balance, vitality, and inner peace.
          </p>
        </div>
      </section>

      {/* Introduction */}
      <section className="bg-oasis-dark section-padding">
        <div className="max-w-3xl mx-auto text-center animate-on-scroll">
          <p className="text-white/60 text-base leading-relaxed">
            At Oasis Massage & Wellness, we believe that true health cannot be measured
            by the absence of symptoms alone. It is felt — in the lightness of your
            step, the clarity of your mind, and the ease in your body. The Oasis
            Philosophy is built on four interconnected pillars, each one essential to
            the whole.
          </p>
        </div>
      </section>

      {/* Pillars */}
      <section className="bg-oasis-dark pb-20 md:pb-28">
        <div className="max-w-6xl mx-auto px-6 lg:px-8 space-y-24">
          {pillars.map((pillar, i) => (
            <div
              key={pillar.title}
              className={`animate-on-scroll grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                i % 2 !== 0 ? 'lg:[direction:rtl]' : ''
              }`}
            >
              <div className={`text-center ${i % 2 !== 0 ? 'lg:[direction:ltr]' : ''}`}>
                <div className="w-56 h-28 mx-auto mb-2">
                  <img src={pillar.image} alt={pillar.title} className="w-full h-full object-contain drop-shadow-lg" />
                </div>
                <h2 className="font-display text-3xl md:text-4xl font-bold text-white">
                  {pillar.title}
                </h2>
                <p className="text-oasis-gold text-lg font-medium mt-2">
                  {pillar.subtitle}
                </p>
              </div>

              <div className={i % 2 !== 0 ? 'lg:[direction:ltr]' : ''}>
                <p className="text-white/60 text-base leading-relaxed mb-6">
                  {pillar.description}
                </p>
                <ul className="space-y-3">
                  {pillar.principles.map((p) => (
                    <li key={p} className="flex items-start gap-3 text-white/50 text-sm">
                      <div className="w-1.5 h-1.5 rounded-full bg-oasis-gold mt-2 shrink-0" />
                      {p}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Integration */}
      <section className="relative py-24 md:py-32 bg-gradient-oasis overflow-hidden">
        <div className="absolute inset-0 bg-oasis-gold/5" />
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-oasis-gold/30 to-transparent" />
        <div className="relative z-10 max-w-3xl mx-auto px-6 text-center">
          <SectionTitle
            subtitle="The Whole Is Greater"
            title="Four Pillars, One Experience"
            description="The Oasis Wellness Method integrates all four pillars into every session. Whether you choose a single treatment or the Signature Experience, you are always moving through the full cycle of wellness — from relaxation to revival."
          />
          <div className="animate-on-scroll flex items-center justify-center gap-4 flex-wrap mt-8">
            {pillars.map((p, i) => (
              <div key={p.title} className="flex items-center gap-4">
                <div className="w-28 h-20">
                  <img src={p.image} alt={p.title} className="w-full h-full object-contain drop-shadow-lg" />
                </div>
                {i < pillars.length - 1 && (
                  <div className="w-8 h-px bg-oasis-gold/40" />
                )}
              </div>
            ))}
          </div>
          <Link to="/contact" className="animate-on-scroll btn-gold inline-flex items-center gap-2 mt-10">
            Begin Your Wellness Journey
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}
