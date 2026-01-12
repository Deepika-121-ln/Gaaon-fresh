import { Link } from 'react-router-dom';
import { Trash2, Minus, Plus, ShoppingBag, ArrowLeft, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useCart } from '@/context/CartContext';

const Cart = () => {
  const { items, updateQuantity, removeFromCart, totalPrice, clearCart } = useCart();

  const getWhatsAppOrderUrl = () => {
    if (items.length === 0) return '#';
    
    let message = 'Hi, I want to order the following products:\n\n';
    items.forEach(item => {
      message += `📦 ${item.name}, Weight: ${item.weight}, Qty: ${item.quantity}, Price: ₹${item.price * item.quantity}\n`;
    });
    message += `\n💰 Total: ₹${totalPrice}`;
    
    return `https://wa.me/916376942880?text=${encodeURIComponent(message)}`;
  };

  if (items.length === 0) {
    return (
      <main className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center px-4">
          <div className="w-24 h-24 mx-auto mb-6 rounded-full bg-muted flex items-center justify-center">
            <ShoppingBag className="h-12 w-12 text-muted-foreground" />
          </div>
          <h1 className="font-display text-2xl font-bold mb-2">Your cart is empty</h1>
          <p className="text-muted-foreground mb-8">
            Add some products to your cart to get started
          </p>
          <Link to="/products">
            <Button variant="hero" size="lg">
              Browse Products
            </Button>
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        <Link to="/products" className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary mb-8">
          <ArrowLeft className="h-4 w-4" />
          Continue Shopping
        </Link>

        <h1 className="font-display text-3xl font-bold mb-8">Shopping Cart</h1>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2 space-y-4">
            {items.map(item => (
              <div
                key={`${item.productId}-${item.weight}`}
                className="bg-card rounded-2xl p-4 md:p-6 border border-border flex gap-4"
              >
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-24 h-24 md:w-32 md:h-32 object-cover rounded-xl"
                />
                <div className="flex-1">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="font-semibold text-lg">{item.name}</h3>
                      <p className="text-sm text-muted-foreground">{item.nameHindi} • {item.weight}</p>
                    </div>
                    <button
                      onClick={() => removeFromCart(item.productId, item.weight)}
                      className="text-muted-foreground hover:text-destructive transition-colors"
                    >
                      <Trash2 className="h-5 w-5" />
                    </button>
                  </div>
                  
                  <div className="flex items-center justify-between mt-4">
                    <div className="flex items-center border border-border rounded-lg overflow-hidden">
                      <button
                        onClick={() => updateQuantity(item.productId, item.weight, item.quantity - 1)}
                        className="p-2 hover:bg-muted transition-colors"
                      >
                        <Minus className="h-4 w-4" />
                      </button>
                      <span className="px-4 py-2 font-medium">{item.quantity}</span>
                      <button
                        onClick={() => updateQuantity(item.productId, item.weight, item.quantity + 1)}
                        className="p-2 hover:bg-muted transition-colors"
                      >
                        <Plus className="h-4 w-4" />
                      </button>
                    </div>
                    <span className="text-xl font-bold text-primary">
                      ₹{item.price * item.quantity}
                    </span>
                  </div>
                </div>
              </div>
            ))}

            <Button variant="ghost" onClick={clearCart} className="text-destructive hover:text-destructive">
              <Trash2 className="h-4 w-4" />
              Clear Cart
            </Button>
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <div className="bg-card rounded-2xl p-6 border border-border sticky top-24">
              <h2 className="font-display text-xl font-semibold mb-6">Order Summary</h2>
              
              <div className="space-y-4 mb-6">
                <div className="flex justify-between text-muted-foreground">
                  <span>Subtotal</span>
                  <span>₹{totalPrice}</span>
                </div>
                <div className="flex justify-between text-muted-foreground">
                  <span>Shipping</span>
                  <span className="text-secondary font-medium">Free</span>
                </div>
                <div className="border-t border-border pt-4 flex justify-between text-lg font-semibold">
                  <span>Total</span>
                  <span className="text-primary">₹{totalPrice}</span>
                </div>
              </div>

              <div className="space-y-3">
                <Link to="/checkout" className="block">
                  <Button variant="hero" size="lg" className="w-full">
                    Proceed to Checkout
                  </Button>
                </Link>
                <a href={getWhatsAppOrderUrl()} target="_blank" rel="noopener noreferrer" className="block">
                  <Button 
                    variant="whatsapp" 
                    size="lg" 
                    className="w-full"
                    type="button"
                  >
                    <MessageCircle className="h-5 w-5" />
                    Order via WhatsApp
                  </Button>
                </a>
              </div>

              <p className="text-xs text-muted-foreground text-center mt-4">
                Free shipping on orders above ₹499
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Cart;
