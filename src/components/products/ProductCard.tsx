import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart, Eye, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useCart } from '@/context/CartContext';
import { Product } from '@/data/products';
import { toast } from 'sonner';

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  const [selectedWeight, setSelectedWeight] = useState(0);
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    const price = product.prices[selectedWeight];
    addToCart({
      productId: product.id,
      name: product.name,
      nameHindi: product.nameHindi,
      image: product.image,
      weight: price.weight,
      price: price.price,
    });
    toast.success(`${product.name} (${price.weight}) added to cart!`);
  };

  const getWhatsAppUrl = () => {
    const price = product.prices[selectedWeight];
    const message = `Hi, I want to order ${product.name}, Weight: ${price.weight}, Price: ₹${price.price}.`;
    return `https://wa.me/916376942880?text=${encodeURIComponent(message)}`;
  };

  return (
    <div className="bg-card rounded-2xl overflow-hidden border border-border card-hover group">
      {/* Image */}
      <div className="relative overflow-hidden aspect-square">
        <div className="w-full h-full overflow-hidden">
          <img
            src={product.image}
            alt={product.name}
            className="w-[115%] h-[115%] object-cover object-top transition-transform duration-500 group-hover:scale-110 -mb-[15%]"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        
        {/* Quick Actions */}
        <div className="absolute bottom-4 left-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-4 group-hover:translate-y-0">
          <Link to={`/product/${product.id}`} className="flex-1">
            <Button variant="secondary" className="w-full" size="sm">
              <Eye className="h-4 w-4" />
              View
            </Button>
          </Link>
          <a href={getWhatsAppUrl()} target="_blank" rel="noopener noreferrer">
            <Button variant="whatsapp" size="sm" type="button">
              <MessageCircle className="h-4 w-4" />
            </Button>
          </a>
        </div>

        {/* Category Badge */}
        <span className="absolute top-4 left-4 px-3 py-1 bg-background/90 backdrop-blur-sm rounded-full text-xs font-medium">
          {product.nameHindi}
        </span>
      </div>

      {/* Content */}
      <div className="p-5">
        <h3 className="font-display text-lg font-semibold mb-1 group-hover:text-primary transition-colors">
          {product.name}
        </h3>
        <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
          {product.description}
        </p>

        {/* Weight Selection */}
        <div className="flex flex-wrap gap-2 mb-4">
          {product.prices.map((price, index) => (
            <button
              key={price.weight}
              onClick={() => setSelectedWeight(index)}
              className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-colors ${
                selectedWeight === index
                  ? 'bg-primary text-primary-foreground'
                  : 'bg-muted text-muted-foreground hover:bg-muted/80'
              }`}
            >
              {price.weight}
            </button>
          ))}
        </div>

        {/* Price & Add to Cart */}
        <div className="flex items-center justify-between">
          <div>
            <span className="text-2xl font-bold text-primary">
              ₹{product.prices[selectedWeight].price}
            </span>
          </div>
          <Button onClick={handleAddToCart} size="sm">
            <ShoppingCart className="h-4 w-4" />
            Add
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
