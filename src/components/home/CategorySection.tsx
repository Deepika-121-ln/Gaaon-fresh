import { Link } from 'react-router-dom';
import { categories } from '@/data/products';

const CategorySection = () => {
  return (
    <section className="py-16 md:py-24 bg-card">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
            Our Categories
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Explore our range of pure, natural products sourced directly from villages
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {categories.map((category, index) => (
            <Link
              key={category.id}
              to={`/products?category=${category.id}`}
              className="group animate-slide-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="bg-background rounded-2xl p-6 md:p-8 text-center card-hover border border-border hover:border-primary/30">
                <span className="text-4xl md:text-5xl mb-4 block group-hover:scale-110 transition-transform duration-300">
                  {category.icon}
                </span>
                <h3 className="font-display text-lg md:text-xl font-semibold mb-1">
                  {category.name}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {category.nameHindi}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategorySection;
