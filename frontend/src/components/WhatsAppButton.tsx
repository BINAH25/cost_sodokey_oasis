import { MessageCircle } from 'lucide-react';

const WHATSAPP_URL = 'https://wa.me/233243248922';

export default function WhatsAppButton() {
  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with Simon on WhatsApp"
      className="fixed bottom-6 right-6 z-[90] group flex items-center gap-3"
    >
      <span className="hidden sm:block bg-oasis-base/90 backdrop-blur-sm border border-oasis-gold/30 text-white text-sm font-medium px-4 py-2 rounded-full shadow-lg opacity-0 translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 whitespace-nowrap">
        WhatsApp Simon
      </span>
      <span className="relative flex items-center justify-center w-14 h-14 rounded-full bg-[#25D366] shadow-lg shadow-black/30 transition-transform duration-300 group-hover:scale-110">
        <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-40" />
        <MessageCircle className="relative w-7 h-7 text-white" />
      </span>
    </a>
  );
}
