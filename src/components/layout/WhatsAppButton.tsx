import { MessageCircle } from 'lucide-react';

const WhatsAppButton = () => {
  const message = 'Hello! I would like information about Gaon Fresh products.';
  const whatsAppUrl = `https://wa.me/916376942880?text=${encodeURIComponent(message)}`;

  return (
    <a
      href={whatsAppUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-[#25D366] rounded-full shadow-elevated flex items-center justify-center text-white hover:scale-110 transition-all duration-300 hover:shadow-2xl group"
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle className="h-7 w-7" />
      <span className="absolute right-full mr-3 px-3 py-2 bg-card rounded-lg shadow-card text-sm font-medium text-foreground whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200">
        Order on WhatsApp
      </span>
    </a>
  );
};

export default WhatsAppButton;
