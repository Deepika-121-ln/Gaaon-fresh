import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowRight, MessageCircle } from 'lucide-react';
import heroSpices from '@/assets/hero-spices.jpg';
import heroGhee from '@/assets/hero-ghee.jpg';
import heroSeeds from '@/assets/hero-seeds.jpg';
import heroTurmeric from '@/assets/hero-turmeric.jpg';

const HeroSection = () => {
  const whatsAppUrl = `https://wa.me/916376942880?text=${encodeURIComponent('Hello! I would like to order products from Gaon Fresh.')}`;

  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-pattern-leaves">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-secondary/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8 animate-fade-in">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full text-primary text-sm font-medium">
              <span className="text-lg">🌿</span>
              100% Natural & Pure
            </div>

            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold leading-tight tracking-tight">
              <span className="text-gradient-primary block mb-2">Pure, Traditional</span>
              <span className="text-foreground block">& Natural Food</span>
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground max-w-lg leading-relaxed">
              <span className="font-semibold text-foreground">Seeds • Powders • Ghee • Dehydrated Foods</span>
              <br />
              Village purity, delivered straight to your kitchen
            </p>

            <div className="flex flex-wrap gap-4">
              <Link to="/products">
                <Button variant="hero" size="xl" className="group">
                  Shop Now
                  <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
              <a href={whatsAppUrl} target="_blank" rel="noopener noreferrer">
                <Button variant="whatsapp" size="xl" type="button">
                  <MessageCircle className="h-5 w-5" />
                  WhatsApp Order
                </Button>
              </a>
            </div>

            {/* Trust badges */}
            <div className="flex flex-wrap items-center gap-6 pt-4">
              {[
                { icon: '🌾', label: 'Direct from Village' },
                { icon: '✓', label: 'No Preservatives' },
                { icon: '🍃', label: 'Natural Processing' },
              ].map((badge, index) => (
                <div key={index} className="flex items-center gap-2 text-sm text-muted-foreground">
                  <span className="text-xl">{badge.icon}</span>
                  <span>{badge.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Hero Images - Seeds Grid */}
          <div className="relative hidden lg:block">
            <div className="relative animate-float">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 rounded-full blur-3xl" />
              <div className="relative grid grid-cols-2 gap-4">
                <div className="space-y-4">
                  <div className="rounded-2xl overflow-hidden shadow-elevated transform hover:scale-105 transition-transform duration-300">
                    <img
                      src={heroSpices}
                      alt="Coriander Seeds"
                      className="w-full h-48 object-cover"
                    />
                  </div>
                  <div className="rounded-2xl overflow-hidden shadow-elevated transform hover:scale-105 transition-transform duration-300">
                    <img
                      src={heroGhee}
                      alt="Moringa Powder"
                      className="w-full h-32 object-cover"
                    />
                  </div>
                </div>
                <div className="space-y-4 pt-8">
                  <div className="rounded-2xl overflow-hidden shadow-elevated transform hover:scale-105 transition-transform duration-300">
                    <img
                      src={heroSeeds}
                      alt="Flax Seeds"
                      className="w-full h-32 object-cover"
                    />
                  </div>
                  <div className="rounded-2xl overflow-hidden shadow-elevated transform hover:scale-105 transition-transform duration-300">
                    <img
                      src={heroTurmeric}
                      alt="Turmeric Powder"
                      className="w-full h-48 object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
