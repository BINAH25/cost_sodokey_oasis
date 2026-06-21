import { useEffect, useRef, useState } from 'react';
import { X, CheckCircle, Loader2, AlertCircle } from 'lucide-react';

const SERVICE_OPTIONS = [
  'Relaxation Massage',
  'Deep Tissue Massage',
  'Meridian Therapy',
  'Oasis Signature Experience',
];

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

interface FormState {
  name: string;
  email: string;
  phone: string;
  service: string;
  date: string;
  time: string;
  message: string;
}

const EMPTY: FormState = {
  name: '',
  email: '',
  phone: '',
  service: '',
  date: '',
  time: '',
  message: '',
};

type Status = 'idle' | 'submitting' | 'success' | 'error';

export default function BookingModal({ isOpen, onClose }: Props) {
  const [form, setForm] = useState<FormState>(EMPTY);
  const [status, setStatus] = useState<Status>('idle');
  const [errorMsg, setErrorMsg] = useState('');
  const overlayRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!isOpen) return;
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && onClose();
    document.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [isOpen, onClose]);

  useEffect(() => {
    if (!isOpen) {
      setForm(EMPTY);
      setStatus('idle');
      setErrorMsg('');
    }
  }, [isOpen]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');
    setErrorMsg('');

    // TODO: replace with Django API call, e.g.:
    // await fetch('/api/bookings/', { method: 'POST', body: JSON.stringify(form), headers: { 'Content-Type': 'application/json' } })
    await new Promise((r) => setTimeout(r, 600));
    setStatus('success');
  };

  if (!isOpen) return null;

  const inputCls =
    'w-full bg-oasis-base/60 border border-oasis-light/20 rounded-xl px-4 py-3 text-white text-sm placeholder-white/30 focus:outline-none focus:border-oasis-gold/60 transition-colors';
  const labelCls = 'block text-white/60 text-xs uppercase tracking-widest mb-1.5 font-medium';

  return (
    <div
      ref={overlayRef}
      className="fixed inset-0 z-[100] flex items-center justify-center p-4"
      onClick={(e) => e.target === overlayRef.current && onClose()}
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" />

      {/* Panel */}
      <div className="relative w-full max-w-lg max-h-[90vh] overflow-y-auto bg-gradient-to-br from-oasis-base to-oasis-deep border border-oasis-light/20 rounded-2xl shadow-2xl shadow-black/60 animate-fade-in-up">
        {/* Header */}
        <div className="sticky top-0 z-10 bg-oasis-base/95 backdrop-blur-sm border-b border-oasis-light/10 flex items-center justify-between px-6 py-5 rounded-t-2xl">
          <div className="flex items-center gap-3">
            <img src="/oasis-logo.png" alt="Oasis" className="h-12 w-auto object-contain" />
            <div>
              <p className="text-oasis-gold text-xs uppercase tracking-[0.3em] font-semibold">
                Oasis Wellness
              </p>
              <h2 className="font-display text-xl font-bold text-white mt-0.5">
                Book Your Session
              </h2>
            </div>
          </div>
          <button
            onClick={onClose}
            className="w-9 h-9 rounded-xl bg-white/5 hover:bg-white/10 border border-oasis-light/10 flex items-center justify-center text-white/50 hover:text-white transition-all"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Body */}
        <div className="px-6 py-6">
          {status === 'success' ? (
            <div className="flex flex-col items-center text-center py-8 gap-4">
              <div className="w-16 h-16 rounded-full bg-oasis-gold/10 border border-oasis-gold/30 flex items-center justify-center">
                <CheckCircle className="w-8 h-8 text-oasis-gold" />
              </div>
              <h3 className="font-display text-xl font-semibold text-white">
                Booking Received!
              </h3>
              <p className="text-white/50 text-sm leading-relaxed max-w-xs">
                Thank you, {form.name.split(' ')[0]}. We'll confirm your appointment shortly.
              </p>
              <button onClick={onClose} className="btn-gold mt-2">
                Close
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Name */}
              <div>
                <label className={labelCls}>Full Name</label>
                <input
                  name="name"
                  type="text"
                  required
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Your full name"
                  className={inputCls}
                />
              </div>

              {/* Email + Phone */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className={labelCls}>Email</label>
                  <input
                    name="email"
                    type="email"
                    required
                    value={form.email}
                    onChange={handleChange}
                    placeholder="you@example.com"
                    className={inputCls}
                  />
                </div>
                <div>
                  <label className={labelCls}>Phone</label>
                  <input
                    name="phone"
                    type="tel"
                    required
                    value={form.phone}
                    onChange={handleChange}
                    placeholder="+233 ..."
                    className={inputCls}
                  />
                </div>
              </div>

              {/* Service */}
              <div>
                <label className={labelCls}>Service of Interest</label>
                <select
                  name="service"
                  required
                  value={form.service}
                  onChange={handleChange}
                  className={`${inputCls} appearance-none`}
                >
                  <option value="" disabled className="bg-oasis-dark">
                    Select a service...
                  </option>
                  {SERVICE_OPTIONS.map((s) => (
                    <option key={s} value={s} className="bg-oasis-dark">
                      {s}
                    </option>
                  ))}
                </select>
              </div>

              {/* Date + Time */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className={labelCls}>Preferred Date</label>
                  <input
                    name="date"
                    type="date"
                    required
                    min={new Date().toISOString().split('T')[0]}
                    value={form.date}
                    onChange={handleChange}
                    className={`${inputCls} [color-scheme:dark]`}
                  />
                </div>
                <div>
                  <label className={labelCls}>Preferred Time</label>
                  <input
                    name="time"
                    type="time"
                    required
                    value={form.time}
                    onChange={handleChange}
                    className={`${inputCls} [color-scheme:dark]`}
                  />
                </div>
              </div>

              {/* Message */}
              <div>
                <label className={labelCls}>Message (optional)</label>
                <textarea
                  name="message"
                  rows={3}
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Any notes, concerns, or special requests..."
                  className={`${inputCls} resize-none`}
                />
              </div>

              {/* Error */}
              {status === 'error' && (
                <div className="flex items-center gap-2 text-red-400 text-sm bg-red-400/10 border border-red-400/20 rounded-xl px-4 py-3">
                  <AlertCircle className="w-4 h-4 shrink-0" />
                  {errorMsg}
                </div>
              )}

              {/* Submit */}
              <button
                type="submit"
                disabled={status === 'submitting'}
                className="btn-gold w-full flex items-center justify-center gap-2 disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {status === 'submitting' ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    Booking...
                  </>
                ) : (
                  'Confirm Booking'
                )}
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
