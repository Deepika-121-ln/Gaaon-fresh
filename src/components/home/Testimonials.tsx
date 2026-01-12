import { Star } from 'lucide-react';

const testimonials = [
  {
    name: 'Priya Sharma',
    location: 'Delhi',
    rating: 5,
    text: 'Gaon Fresh ghee is exactly like my grandmother used to make. Authentic traditional taste!',
    avatar: 'PS',
  },
  {
    name: 'Rajesh Kumar',
    location: 'Mumbai',
    rating: 5,
    text: 'Amazing quality spices! The turmeric powder has such vibrant color and pure taste. Highly recommended!',
    avatar: 'RK',
  },
  {
    name: 'Anita Patel',
    location: 'Ahmedabad',
    rating: 5,
    text: 'Finally found a trustworthy source for organic seeds. My whole family loves their products.',
    avatar: 'AP',
  },
];

const Testimonials = () => {
  return (
    <section className="py-16 md:py-24 bg-card">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
            Customer Reviews
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            What our happy customers say about our products
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-background rounded-2xl p-6 md:p-8 border border-border card-hover animate-slide-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-accent text-accent" />
                ))}
              </div>

              {/* Text */}
              <p className="text-foreground mb-6 leading-relaxed">
                "{testimonial.text}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-semibold">
                  {testimonial.avatar}
                </div>
                <div>
                  <p className="font-semibold">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
