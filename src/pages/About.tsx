import { Leaf, Heart, Users, Award } from 'lucide-react';

const About = () => {
  const values = [
    {
      icon: Leaf,
      title: 'Natural & Pure',
      description: 'We source products directly from village farms, ensuring 100% natural and chemical-free food.',
    },
    {
      icon: Heart,
      title: 'Health First',
      description: 'Every product is chosen with your health in mind. No preservatives, no additives.',
    },
    {
      icon: Users,
      title: 'Supporting Farmers',
      description: 'We work directly with village farmers, ensuring fair prices and sustainable practices.',
    },
    {
      icon: Award,
      title: 'Quality Assured',
      description: 'Each product goes through strict quality checks before reaching your doorstep.',
    },
  ];

  return (
    <main className="min-h-screen bg-background">
      {/* Hero */}
      <section className="bg-gradient-to-br from-primary/5 to-accent/5 py-16 md:py-24">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-display text-4xl md:text-5xl font-bold mb-6">
            Our Story
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Gaon Fresh began with a dream - to bring the purity of the village to every home in the city
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="font-display text-3xl font-bold">
                From Village to Your Home
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Gaon Fresh started when we noticed how adulterated the food available in cities had become. 
                The authentic taste and purity from our elders' time was nowhere to be found.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                We decided to connect directly with village farmers and deliver their pure products 
                to your home without any adulteration. Today we work with farmers from 100+ villages.
              </p>
              <div className="grid grid-cols-2 gap-4 pt-4">
                <div className="text-center p-4 bg-card rounded-xl">
                  <p className="text-3xl font-bold text-primary">100+</p>
                  <p className="text-sm text-muted-foreground">Partner Villages</p>
                </div>
                <div className="text-center p-4 bg-card rounded-xl">
                  <p className="text-3xl font-bold text-primary">50K+</p>
                  <p className="text-sm text-muted-foreground">Happy Customers</p>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="rounded-2xl overflow-hidden shadow-elevated">
                <img
                  src="https://images.unsplash.com/photo-1500937386664-56d1dfef3854?w=600"
                  alt="Village Farm"
                  className="w-full h-[400px] object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-card p-4 rounded-xl shadow-card">
                <p className="text-sm text-muted-foreground">Since</p>
                <p className="text-2xl font-bold text-primary">2020</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 md:py-24 bg-card">
        <div className="container mx-auto px-4">
          <h2 className="font-display text-3xl font-bold text-center mb-12">
            Our Values
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <div
                key={index}
                className="bg-background rounded-2xl p-6 text-center card-hover border border-border"
              >
                <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                  <value.icon className="h-7 w-7 text-primary" />
                </div>
                <h3 className="font-semibold mb-2">{value.title}</h3>
                <p className="text-sm text-muted-foreground">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-display text-3xl font-bold mb-6">Our Mission</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            "To bring village purity to every Indian home - no chemicals, no adulteration, 
            only natural and traditional food products. Along with ensuring fair prices for village farmers for their produce."
          </p>
        </div>
      </section>
    </main>
  );
};

export default About;
