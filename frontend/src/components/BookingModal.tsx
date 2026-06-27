import { useEffect, useRef, useState } from 'react';
import { X, CheckCircle, Loader2, AlertCircle, Home, Building2 } from 'lucide-react';
import { createAppointment, ApiError } from '../lib/api';

const SERVICE_OPTIONS = [
  'Relaxation Massage',
  'Deep Tissue Massage',
  'Meridian Therapy',
  'Oasis Signature Experience',
];

const LOCATION_OPTIONS = [
  { value: 'sanctuary', label: 'At the Sanctuary', desc: 'Visit us in Darkuman, Accra', icon: Building2 },
  { value: 'home', label: 'Home Service', desc: 'We come to your location', icon: Home },
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
  location: string;
  date: string;
  time: string;
  message: string;
}

const EMPTY: FormState = {
  name: '',
  email: '',
  phone: '',
  service: '',
  location: 'sanctuary',
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

    try {
      await createAppointment({
        name: form.name,
        email: form.email,
        phone: form.phone,
        service: form.service,
        location: form.location,
        date: form.date,
        time: form.time,
        message: form.message,
      });
      setStatus('success');
    } catch (err) {
      setStatus('error');
      setErrorMsg(
        err instanceof ApiError ? err.message : 'Something went wrong. Please try again.'
      );
    }
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

              {/* Location preference */}
              <div>
                <label className={labelCls}>Where would you like your session?</label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {LOCATION_OPTIONS.map((opt) => {
                    const active = form.location === opt.value;
                    return (
                      <label
                        key={opt.value}
                        className={`cursor-pointer rounded-xl border p-4 flex items-start gap-3 transition-all duration-300 ${
                          active
                            ? 'border-oasis-gold/60 bg-oasis-gold/10'
                            : 'border-oasis-light/20 bg-oasis-base/60 hover:border-oasis-gold/30'
                        }`}
                      >
                        <input
                          type="radio"
                          name="location"
                          value={opt.value}
                          checked={active}
                          onChange={handleChange}
                          className="sr-only"
                        />
                        <div
                          className={`w-9 h-9 rounded-lg flex items-center justify-center shrink-0 transition-colors ${
                            active ? 'bg-oasis-gold/20' : 'bg-oasis-gold/10'
                          }`}
                        >
                          <opt.icon className="w-4 h-4 text-oasis-gold" />
                        </div>
                        <div>
                          <p className="text-white text-sm font-medium">{opt.label}</p>
                          <p className="text-white/40 text-xs mt-0.5">{opt.desc}</p>
                        </div>
                      </label>
                    );
                  })}
                </div>
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
