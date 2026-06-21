interface SectionTitleProps {
  subtitle?: string;
  title: string;
  description?: string;
  light?: boolean;
}

export default function SectionTitle({ subtitle, title, description, light = false }: SectionTitleProps) {
  return (
    <div className="text-center mb-16 animate-on-scroll">
      {subtitle && (
        <span className="text-oasis-gold text-xs uppercase tracking-[0.3em] font-semibold mb-3 block">
          {subtitle}
        </span>
      )}
      <h2
        className={`font-display text-3xl md:text-4xl lg:text-5xl font-semibold leading-tight ${
          light ? 'text-oasis-dark' : 'text-white'
        }`}
      >
        {title}
      </h2>
      <div className="gold-divider mt-4" />
      {description && (
        <p className={`mt-6 max-w-2xl mx-auto text-base leading-relaxed ${light ? 'text-oasis-dark/60' : 'text-white/50'}`}>
          {description}
        </p>
      )}
    </div>
  );
}
