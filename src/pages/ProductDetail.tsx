import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, ShoppingCart, MessageCircle, Check, Minus, Plus } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useCart } from '@/context/CartContext';
import { getProductById, getFeaturedProducts } from '@/data/products';
import ProductCard from '@/components/products/ProductCard';
import { toast } from 'sonner';

const ProductDetail = () => {
  const { id } = useParams<{ id: string }>();
  const product = getProductById(id || '');
  const [selectedWeight, setSelectedWeight] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const { addToCart } = useCart();

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Product not found</h1>
          <Link to="/products">
            <Button>Back to Products</Button>
          </Link>
        </div>
      </div>
    );
  }

  const selectedPrice = product.prices[selectedWeight];
  const relatedProducts = getFeaturedProducts().filter(p => p.id !== product.id).slice(0, 3);

  const handleAddToCart = () => {
    for (let i = 0; i < quantity; i++) {
      addToCart({
        productId: product.id,
        name: product.name,
        nameHindi: product.nameHindi,
        image: product.image,
        weight: selectedPrice.weight,
        price: selectedPrice.price,
      });
    }
    toast.success(`${quantity}x ${product.name} (${selectedPrice.weight}) added to cart!`);
  };

  const getWhatsAppUrl = () => {
    const message = `Hi, I want to order ${product.name}, Weight: ${selectedPrice.weight}, Qty: ${quantity}, Price: ₹${selectedPrice.price * quantity}.`;
    return `https://wa.me/916376942880?text=${encodeURIComponent(message)}`;
  };

  return (
    <main className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        {/* Breadcrumb */}
        <Link to="/products" className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary mb-8">
          <ArrowLeft className="h-4 w-4" />
          Back to Products
        </Link>

        {/* Product Details */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 mb-16">
          {/* Image */}
          <div className="relative aspect-square rounded-2xl overflow-hidden bg-card">
            <div className="w-full h-full overflow-hidden">
              <img
                src={product.image}
                alt={product.name}
                className="w-[115%] h-[115%] object-cover object-top -mb-[15%]"
              />
            </div>
            <span className="absolute top-4 left-4 px-4 py-2 bg-background/90 backdrop-blur-sm rounded-full text-sm font-medium">
              {product.nameHindi}
            </span>
          </div>

          {/* Info */}
          <div className="space-y-6">
            <div>
              <h1 className="font-display text-3xl md:text-4xl font-bold mb-2">
                {product.name}
              </h1>
              <p className="text-lg text-muted-foreground">
                {product.description}
              </p>
            </div>

            {/* Weight Selection */}
            <div>
              <label className="text-sm font-medium mb-3 block">Select Weight:</label>
              <div className="flex flex-wrap gap-3">
                {product.prices.map((price, index) => (
                  <button
                    key={price.weight}
                    onClick={() => setSelectedWeight(index)}
                    className={`px-6 py-3 rounded-xl text-sm font-semibold transition-all ${
                      selectedWeight === index
                        ? 'bg-primary text-primary-foreground shadow-card'
                        : 'bg-muted text-muted-foreground hover:bg-muted/80'
                    }`}
                  >
                    {price.weight} - ₹{price.price}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div>
              <label className="text-sm font-medium mb-3 block">Quantity:</label>
              <div className="flex items-center gap-4">
                <div className="flex items-center border border-border rounded-xl overflow-hidden">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="p-3 hover:bg-muted transition-colors"
                  >
                    <Minus className="h-4 w-4" />
                  </button>
                  <span className="px-6 py-3 font-semibold">{quantity}</span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="p-3 hover:bg-muted transition-colors"
                  >
                    <Plus className="h-4 w-4" />
                  </button>
                </div>
                <span className="text-3xl font-bold text-primary">
                  ₹{selectedPrice.price * quantity}
                </span>
              </div>
            </div>

            {/* Actions */}
            <div className="flex flex-wrap gap-4 pt-4">
              <Button variant="hero" size="xl" onClick={handleAddToCart} className="flex-1">
                <ShoppingCart className="h-5 w-5" />
                Add to Cart
              </Button>
              <a href={getWhatsAppUrl()} target="_blank" rel="noopener noreferrer">
                <Button variant="whatsapp" size="xl" type="button">
                  <MessageCircle className="h-5 w-5" />
                  WhatsApp Order
                </Button>
              </a>
            </div>

            {/* Benefits */}
            <div className="pt-6 border-t border-border">
              <h3 className="font-semibold mb-4">Benefits:</h3>
              <ul className="grid grid-cols-2 gap-2">
                {product.benefits.map((benefit, index) => (
                  <li key={index} className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Check className="h-4 w-4 text-secondary" />
                    {benefit}
                  </li>
                ))}
              </ul>
            </div>

            {/* Usage */}
            <div className="pt-6 border-t border-border">
              <h3 className="font-semibold mb-2">How to Use:</h3>
              <p className="text-muted-foreground">{product.usage}</p>
            </div>

            {/* Ingredients */}
            <div className="pt-6 border-t border-border">
              <h3 className="font-semibold mb-2">Ingredients:</h3>
              <p className="text-muted-foreground">{product.ingredients}</p>
            </div>
          </div>
        </div>

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <section>
            <h2 className="font-display text-2xl font-bold mb-8">You May Also Like</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {relatedProducts.map(product => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </section>
        )}
      </div>
    </main>
  );
};

export default ProductDetail;
