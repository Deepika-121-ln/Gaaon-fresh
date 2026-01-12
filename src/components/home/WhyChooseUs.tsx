import { Leaf, Shield, Heart, Truck } from 'lucide-react';

const features = [
  {
    icon: Leaf,
    title: 'Direct from Village',
    titleEn: 'Direct from Village',
    description: 'Products sourced directly from village farms with no middlemen',
  },
  {
    icon: Shield,
    title: 'No Preservatives',
    titleEn: 'Chemical Free',
    description: 'Pure and natural products without any artificial additives',
  },
  {
    icon: Heart,
    title: 'Natural Processing',
    titleEn: 'Traditional Methods',
    description: 'Processed using traditional methods to retain nutrients',
  },
  {
    icon: Truck,
    title: 'Fast Delivery',
    titleEn: 'Pan India Shipping',
    description: 'Quick and safe delivery to your doorstep across India',
  },
];

const WhyChooseUs = () => {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-primary/5 to-accent/5">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
            Why Choose Us?
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            We believe in bringing the purest form of food from villages to your home
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-card rounded-2xl p-6 md:p-8 text-center card-hover border border-border animate-slide-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-primary/10 flex items-center justify-center">
                <feature.icon className="h-8 w-8 text-primary" />
              </div>
              <h3 className="font-display text-xl font-semibold mb-2">
                {feature.title}
              </h3>
              <p className="text-sm text-muted-foreground">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
