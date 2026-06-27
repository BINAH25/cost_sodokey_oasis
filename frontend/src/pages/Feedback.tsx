import { useState, type FormEvent } from 'react';
import { Star, Heart, Send, Loader2, AlertCircle } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { createFeedback, ApiError } from '../lib/api';

export default function Feedback() {
  const scrollRef = useScrollAnimation();
  const [feedbackSent, setFeedbackSent] = useState(false);
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');
  const [rating, setRating] = useState(0);
  const [hoverRating, setHoverRating] = useState(0);
  const [submitting, setSubmitting] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const handleFeedback = async (e: FormEvent) => {
    e.preventDefault();
    if (rating < 1) {
      setErrorMsg('Please select a star rating.');
      return;
    }
    setSubmitting(true);
    setErrorMsg('');
    try {
      await createFeedback({ name, rating, message });
      setFeedbackSent(true);
    } catch (err) {
      setErrorMsg(
        err instanceof ApiError ? err.message : 'Something went wrong. Please try again.'
      );
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div ref={scrollRef}>
      {/* Hero */}
      <section className="relative pt-32 pb-20 bg-gradient-oasis-dark overflow-hidden">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[500px] h-[500px] rounded-full bg-oasis-gold/5 blur-[100px]" />
        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <span className="text-oasis-gold text-xs uppercase tracking-[0.3em] font-semibold">
            Your Experience
          </span>
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-white mt-3 leading-tight">
            Share Your <span className="text-gradient-gold">Feedback</span>
          </h1>
          <div className="gold-divider mt-4" />
          <p className="text-white/50 text-lg mt-6 max-w-2xl mx-auto">
            Have you visited Oasis? We'd love to hear about your experience. Your words
            help us grow and inspire others to begin their wellness journey.
          </p>
        </div>
      </section>

      {/* Feedback form */}
      <section className="bg-oasis-dark section-padding">
        <div className="max-w-2xl mx-auto">
          <div className="animate-on-scroll card-oasis rounded-2xl p-8 md:p-10">
            {feedbackSent ? (
              <div className="text-center py-12">
                <div className="w-16 h-16 mx-auto rounded-full bg-oasis-gold/20 flex items-center justify-center mb-4">
                  <Heart className="w-7 h-7 text-oasis-gold" />
                </div>
                <h4 className="font-display text-xl font-semibold text-white">
                  Thank You for Sharing!
                </h4>
                <p className="text-white/50 text-sm mt-2">
                  We truly appreciate your feedback. It means the world to us.
                </p>
              </div>
            ) : (
              <form onSubmit={handleFeedback} className="space-y-5">
                <div>
                  <label className="block text-white/60 text-sm mb-2">Your Name</label>
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full bg-oasis-dark/60 border border-oasis-light/15 rounded-lg px-4 py-3 text-white text-sm placeholder-white/30 focus:outline-none focus:border-oasis-gold/40 transition-colors"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="block text-white/60 text-sm mb-2">How was your experience?</label>
                  <div className="flex items-center gap-2">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <button
                        type="button"
                        key={star}
                        onClick={() => setRating(star)}
                        onMouseEnter={() => setHoverRating(star)}
                        onMouseLeave={() => setHoverRating(0)}
                        className="transition-transform duration-200 hover:scale-110"
                        aria-label={`${star} star${star > 1 ? 's' : ''}`}
                      >
                        <Star
                          className={`w-8 h-8 transition-colors ${
                            star <= (hoverRating || rating)
                              ? 'text-oasis-gold fill-oasis-gold'
                              : 'text-white/20'
                          }`}
                        />
                      </button>
                    ))}
                  </div>
                </div>
                <div>
                  <label className="block text-white/60 text-sm mb-2">Your Feedback</label>
                  <textarea
                    rows={5}
                    required
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="w-full bg-oasis-dark/60 border border-oasis-light/15 rounded-lg px-4 py-3 text-white text-sm placeholder-white/30 focus:outline-none focus:border-oasis-gold/40 transition-colors resize-none"
                    placeholder="Tell us about your visit to Oasis..."
                  />
                </div>
                {errorMsg && (
                  <div className="flex items-center gap-2 text-red-400 text-sm bg-red-400/10 border border-red-400/20 rounded-lg px-4 py-3">
                    <AlertCircle className="w-4 h-4 shrink-0" />
                    {errorMsg}
                  </div>
                )}
                <button
                  type="submit"
                  disabled={submitting}
                  className="btn-gold w-full flex items-center justify-center gap-2 disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {submitting ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      Submitting...
                    </>
                  ) : (
                    <>
                      Submit Feedback
                      <Send className="w-4 h-4" />
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
