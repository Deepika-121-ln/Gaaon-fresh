import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ArrowLeft, CreditCard, Truck, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useCart } from '@/context/CartContext';
import { toast } from 'sonner';

const Checkout = () => {
  const { items, totalPrice, clearCart } = useCart();
  const navigate = useNavigate();
  const [paymentMethod, setPaymentMethod] = useState<'cod' | 'online'>('cod');
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    address: '',
    city: '',
    state: '',
    pincode: '',
  });

  if (items.length === 0) {
    navigate('/cart');
    return null;
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.name || !formData.phone || !formData.address || !formData.city || !formData.pincode) {
      toast.error('Please fill all required fields');
      return;
    }

    if (paymentMethod === 'cod') {
      // Simulate order placement
      toast.success('Order placed successfully! You will receive a confirmation call.');
      clearCart();
      navigate('/');
    } else {
      toast.info('Online payment integration coming soon. Please use Cash on Delivery or WhatsApp order.');
    }
  };

  const getWhatsAppOrderUrl = () => {
    let message = 'Hi, I want to order the following products:\n\n';
    items.forEach(item => {
      message += `📦 ${item.name}, Weight: ${item.weight}, Qty: ${item.quantity}, Price: ₹${item.price * item.quantity}\n`;
    });
    message += `\n💰 Total: ₹${totalPrice}`;
    
    if (formData.name) message += `\n\n👤 Name: ${formData.name}`;
    if (formData.phone) message += `\n📞 Phone: ${formData.phone}`;
    if (formData.address) message += `\n📍 Address: ${formData.address}, ${formData.city}, ${formData.state} - ${formData.pincode}`;
    
    return `https://wa.me/916376942880?text=${encodeURIComponent(message)}`;
  };

  return (
    <main className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        <Link to="/cart" className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary mb-8">
          <ArrowLeft className="h-4 w-4" />
          Back to Cart
        </Link>

        <h1 className="font-display text-3xl font-bold mb-8">Checkout</h1>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Checkout Form */}
          <form onSubmit={handleSubmit} className="lg:col-span-2 space-y-8">
            {/* Shipping Info */}
            <div className="bg-card rounded-2xl p-6 border border-border">
              <h2 className="font-display text-xl font-semibold mb-6">Shipping Details</h2>
              
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Full Name *</Label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="आपका नाम"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone">Phone Number *</Label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="98765 43210"
                    required
                  />
                </div>
                <div className="space-y-2 md:col-span-2">
                  <Label htmlFor="email">Email (Optional)</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="your@email.com"
                  />
                </div>
                <div className="space-y-2 md:col-span-2">
                  <Label htmlFor="address">Full Address *</Label>
                  <Input
                    id="address"
                    name="address"
                    value={formData.address}
                    onChange={handleInputChange}
                    placeholder="House No, Street, Area"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="city">City *</Label>
                  <Input
                    id="city"
                    name="city"
                    value={formData.city}
                    onChange={handleInputChange}
                    placeholder="City"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="state">State</Label>
                  <Input
                    id="state"
                    name="state"
                    value={formData.state}
                    onChange={handleInputChange}
                    placeholder="State"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="pincode">Pincode *</Label>
                  <Input
                    id="pincode"
                    name="pincode"
                    value={formData.pincode}
                    onChange={handleInputChange}
                    placeholder="123456"
                    required
                  />
                </div>
              </div>
            </div>

            {/* Payment Method */}
            <div className="bg-card rounded-2xl p-6 border border-border">
              <h2 className="font-display text-xl font-semibold mb-6">Payment Method</h2>
              
              <div className="space-y-4">
                <label className={`flex items-center gap-4 p-4 rounded-xl border-2 cursor-pointer transition-colors ${
                  paymentMethod === 'cod' ? 'border-primary bg-primary/5' : 'border-border hover:border-primary/50'
                }`}>
                  <input
                    type="radio"
                    name="payment"
                    value="cod"
                    checked={paymentMethod === 'cod'}
                    onChange={() => setPaymentMethod('cod')}
                    className="w-5 h-5 text-primary"
                  />
                  <Truck className="h-6 w-6 text-primary" />
                  <div>
                    <p className="font-medium">Cash on Delivery</p>
                    <p className="text-sm text-muted-foreground">Pay when you receive your order</p>
                  </div>
                </label>

                <label className={`flex items-center gap-4 p-4 rounded-xl border-2 cursor-pointer transition-colors ${
                  paymentMethod === 'online' ? 'border-primary bg-primary/5' : 'border-border hover:border-primary/50'
                }`}>
                  <input
                    type="radio"
                    name="payment"
                    value="online"
                    checked={paymentMethod === 'online'}
                    onChange={() => setPaymentMethod('online')}
                    className="w-5 h-5 text-primary"
                  />
                  <CreditCard className="h-6 w-6 text-primary" />
                  <div>
                    <p className="font-medium">Online Payment</p>
                    <p className="text-sm text-muted-foreground">UPI, Card, Net Banking (Coming Soon)</p>
                  </div>
                </label>
              </div>
            </div>

            <div className="flex flex-wrap gap-4">
              <Button type="submit" variant="hero" size="lg" className="flex-1">
                Place Order - ₹{totalPrice}
              </Button>
              <a href={getWhatsAppOrderUrl()} target="_blank" rel="noopener noreferrer">
                <Button 
                  type="button"
                  variant="whatsapp" 
                  size="lg"
                >
                  <MessageCircle className="h-5 w-5" />
                  Order via WhatsApp
                </Button>
              </a>
            </div>
          </form>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <div className="bg-card rounded-2xl p-6 border border-border sticky top-24">
              <h2 className="font-display text-xl font-semibold mb-6">Order Summary</h2>
              
              <div className="space-y-4 mb-6">
                {items.map(item => (
                  <div key={`${item.productId}-${item.weight}`} className="flex gap-3">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-16 h-16 object-cover rounded-lg"
                    />
                    <div className="flex-1">
                      <p className="font-medium text-sm">{item.name}</p>
                      <p className="text-xs text-muted-foreground">{item.weight} × {item.quantity}</p>
                      <p className="text-sm font-semibold text-primary">₹{item.price * item.quantity}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="space-y-3 border-t border-border pt-4">
                <div className="flex justify-between text-muted-foreground">
                  <span>Subtotal</span>
                  <span>₹{totalPrice}</span>
                </div>
                <div className="flex justify-between text-muted-foreground">
                  <span>Shipping</span>
                  <span className="text-secondary font-medium">Free</span>
                </div>
                <div className="border-t border-border pt-3 flex justify-between text-lg font-semibold">
                  <span>Total</span>
                  <span className="text-primary">₹{totalPrice}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Checkout;
