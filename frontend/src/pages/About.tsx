import { Link } from 'react-router-dom';
import { Award, Heart, Eye, Globe, ArrowRight, CheckCircle, Target, Compass } from 'lucide-react';
import SectionTitle from '../components/SectionTitle';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const story = [
  {
    title: 'Why I Chose Massage Therapy',
    subtitle: 'A Calling to Restore Wellness',
    image: '/article_one.jpeg',
    paragraphs: [
      'For many years, I have watched people around me struggle with stress, physical discomfort, fatigue, and the demands of everyday life. Too often, people wait until their health has significantly declined before seeking help, while overlooking the importance of caring for their bodies along the way.',
      'This realization inspired me to begin a journey into professional massage therapy and holistic wellness.',
      'As I continued my studies, I became fascinated by the principles of Traditional Chinese Medicine (TCM), particularly the concept of the body’s meridian system. These pathways have been used for centuries as a framework for understanding how different parts of the body are connected and how supporting the body’s natural balance can contribute to overall well-being.',
      'I believe that every person deserves the opportunity to slow down, reconnect with their body, and experience the benefits of intentional wellness care. Through professional massage therapy—including Swedish Massage, Deep Tissue Massage, Trigger Point Therapy, and Meridian Wellness techniques—I strive to help my clients reduce stress, ease muscle tension, improve circulation, and support their body’s natural ability to restore balance.',
    ],
  },
  {
    title: 'Why I Studied Meridian Wellness',
    subtitle: 'A Personal Journey That Became a Lifelong Mission',
    image: '/article_two.jpeg',
    paragraphs: [
      'My decision to study Meridian Wellness was deeply personal. Several years ago, I experienced recurring health challenges that required frequent medical attention. Those experiences led me to ask an important question: could I better understand my body and take a more proactive approach to my overall wellness?',
      'As I searched for answers, I discovered the importance of regular physical activity and healthy lifestyle habits. My journey of learning eventually introduced me to Traditional Chinese Medicine (TCM), one of the world’s oldest systems of holistic wellness.',
      'The philosophy of TCM fascinated me. It emphasizes balance, healthy living, and understanding the body as an interconnected whole. I became especially interested in the meridian system, which TCM describes as a network of pathways that supports the body’s natural balance.',
      'The more I studied, the more I realized that wellness is not only about responding to illness—it is also about caring for the body consistently through healthy habits, relaxation, movement, and mindful living. As I applied these principles in my own life, I experienced positive changes that inspired me to pursue professional training, combining traditional wellness principles with modern therapeutic massage techniques.',
      'For me, Meridian Wellness is not simply a technique—it is a lifelong commitment to learning, personal growth, and helping others make wellness an intentional part of their lives.',
    ],
  },
  {
    title: 'Why Oasis Exists',
    subtitle: 'A Sanctuary in the Midst of Life’s Demands',
    image: '/article_three.jpeg',
    paragraphs: [
      'Every day, I see people carrying the weight of modern life. They work long hours, sleep too little, eat on the run, experience constant stress, and rarely take time to care for their own well-being—until exhaustion becomes normal and self-care becomes an afterthought.',
      'As I reflected on this reality, one image continually came to mind. A desert. Not a literal desert, but a place where people feel drained, overwhelmed, and disconnected from the balance their bodies and minds need.',
      'In the middle of every desert, there is something extraordinary. There is an oasis—a place of refreshment, of rest, where strength is restored before the journey continues. That is the vision behind Oasis Massage & Wellness.',
      'We exist to be that place of renewal. A sanctuary where people can step away from the pressures of daily life and invest in their well-being through professional massage therapy, meridian wellness practices, and holistic care. Our goal is not simply to provide a massage session—it is to create an experience that helps every client feel calmer, lighter, and better prepared to face the demands of life.',
      'Because everyone deserves a place to pause, recover, and continue life’s journey with renewed strength. Welcome to Oasis — your sanctuary for relaxation and wellness.',
    ],
  },
];

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
                className="w-full h-full object-cover object-center"
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

      {/* Founder's Quote */}
      <section className="relative bg-gradient-oasis border-y border-oasis-gold/10 py-20 md:py-28 overflow-hidden">
        <div className="absolute inset-0 bg-oasis-gold/5" />
        <div className="relative z-10 max-w-3xl mx-auto px-6 text-center">
          <blockquote className="animate-on-scroll">
            <p className="font-display text-2xl md:text-3xl lg:text-4xl font-medium text-white leading-snug">
              “Wellness is not something we wait to regain after illness—it is
              something we cultivate every day.”
            </p>
          </blockquote>
          <div className="gold-divider mt-8" />
          <p className="animate-on-scroll mt-6 text-white font-display text-lg font-semibold">
            Simon Cost Sodokey
          </p>
          <p className="text-oasis-gold/80 text-xs uppercase tracking-[0.25em] font-semibold mt-1">
            Founder &amp; Lead Therapist
          </p>
        </div>
      </section>

      {/* My Story */}
      <section className="bg-oasis-deep section-padding">
        <div className="max-w-6xl mx-auto">
          <SectionTitle subtitle="My Story" title="The Heart Behind Oasis" />
          <div className="space-y-20 lg:space-y-28">
            {story.map((article, i) => (
              <div
                key={article.title}
                className={`animate-on-scroll grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center ${
                  i % 2 !== 0 ? 'lg:[direction:rtl]' : ''
                }`}
              >
                <div className={i % 2 !== 0 ? 'lg:[direction:ltr]' : ''}>
                  <div className="aspect-[3/4] rounded-2xl overflow-hidden border border-oasis-light/10 bg-gradient-to-br from-oasis-base to-oasis-deep">
                    <img
                      src={article.image}
                      alt={`Simon Cost Sodokey — ${article.title}`}
                      loading="lazy"
                      className="w-full h-full object-cover object-top"
                    />
                  </div>
                </div>
                <div className={i % 2 !== 0 ? 'lg:[direction:ltr]' : ''}>
                  <h3 className="font-display text-2xl md:text-3xl font-semibold text-white leading-tight">
                    {article.title}
                  </h3>
                  <p className="text-oasis-gold/80 text-sm font-medium mt-2">
                    {article.subtitle}
                  </p>
                  <div className="gold-divider !ml-0 mt-4" />
                  <div className="mt-6 space-y-4">
                    {article.paragraphs.map((p, j) => (
                      <p key={j} className="text-white/60 text-base leading-relaxed text-justify">
                        {p}
                      </p>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Highlights */}
      <section className="bg-oasis-dark section-padding">
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
