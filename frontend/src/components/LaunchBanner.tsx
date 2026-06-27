import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Sparkles, X } from 'lucide-react';

export default function LaunchBanner() {
  const [visible, setVisible] = useState(true);

  if (!visible) return null;

  return (
    <div className="relative z-[60] bg-gradient-to-r from-oasis-gold via-oasis-gold-light to-oasis-gold text-oasis-dark">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-2.5 flex items-center justify-center gap-3 text-center">
        <Sparkles className="w-4 h-4 shrink-0 hidden sm:block" />
        <p className="text-xs sm:text-sm font-semibold tracking-wide">
          <span className="hidden sm:inline">🌿 </span>GRAND OPENING JULY 2026 — Early appointments now available.
        </p>
        <Link
          to="/contact"
          className="hidden md:inline-block text-xs font-bold uppercase tracking-wider underline underline-offset-2 hover:no-underline shrink-0"
        >
          Reserve Your Session
        </Link>
        <button
          onClick={() => setVisible(false)}
          aria-label="Dismiss announcement"
          className="absolute right-4 text-oasis-dark/60 hover:text-oasis-dark transition-colors"
        >
          <X className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}
