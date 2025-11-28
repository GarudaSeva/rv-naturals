import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useCart } from "@/hooks/useCart";
import { Minus, Plus, Trash2, ShoppingBag } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";

const Cart = () => {
  const { items, removeItem, updateQuantity, getTotalPrice } = useCart();
  const navigate = useNavigate();

  if (items.length === 0) {
    return (
      <div className="min-h-screen py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="flex flex-col items-center justify-center text-center py-20">
            <ShoppingBag className="h-24 w-24 text-muted-foreground mb-6" />
            <h1 className="text-3xl font-display font-bold mb-4">Your cart is empty</h1>
            <p className="text-muted-foreground mb-8">Add some beautiful products to get started!</p>
            <Link to="/products">
              <Button className="btn-primary">Browse Products</Button>
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen py-16 px-4">
      <div className="container mx-auto max-w-6xl">
        <h1 className="text-4xl font-display font-bold mb-8">Shopping Cart</h1>
        
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2 space-y-4">
            {items.map((item) => (
              <Card key={item.id} className="card-elegant">
                <CardContent className="p-6">
                  <div className="flex gap-6">
                    <img 
                      src={item.image} 
                      alt={item.name}
                      className="w-32 h-32 object-cover rounded-lg"
                    />
                    <div className="flex-1">
                      <h3 className="text-xl font-display font-semibold mb-2">{item.name}</h3>
                      <p className="text-2xl text-primary font-semibold mb-4">₹{item.price}</p>
                      
                      <div className="flex items-center gap-3">
                        <div className="flex items-center gap-2">
                          <Button
                            variant="outline"
                            size="icon"
                            className="h-9 w-9"
                            onClick={() => updateQuantity(item.id, Math.max(1, item.quantity - 1))}
                          >
                            <Minus className="h-4 w-4" />
                          </Button>
                          <span className="w-12 text-center font-semibold">{item.quantity}</span>
                          <Button
                            variant="outline"
                            size="icon"
                            className="h-9 w-9"
                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          >
                            <Plus className="h-4 w-4" />
                          </Button>
                        </div>
                        <Button
                          variant="ghost"
                          size="sm"
                          className="text-destructive hover:text-destructive"
                          onClick={() => removeItem(item.id)}
                        >
                          <Trash2 className="h-4 w-4 mr-2" />
                          Remove
                        </Button>
                      </div>
                      
                      <div className="mt-4 text-right">
                        <p className="text-sm text-muted-foreground">Subtotal</p>
                        <p className="text-xl font-semibold text-primary">₹{(item.price * item.quantity).toFixed(2)}</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          
          {/* Order Summary */}
          <div className="lg:col-span-1">
            <Card className="card-elegant sticky top-24">
              <CardContent className="p-6 space-y-6">
                <h2 className="text-2xl font-display font-bold">Order Summary</h2>
                
                <div className="space-y-3">
                  {items.map((item) => (
                    <div key={item.id} className="flex justify-between text-sm">
                      <span className="text-muted-foreground">{item.name} x {item.quantity}</span>
                      <span className="font-semibold">₹{(item.price * item.quantity).toFixed(2)}</span>
                    </div>
                  ))}
                </div>
                
                <div className="border-t pt-4">
                  <div className="flex justify-between text-lg font-semibold mb-2">
                    <span>Subtotal:</span>
                    <span className="text-primary">₹{getTotalPrice().toFixed(2)}</span>
                  </div>
                  <p className="text-sm text-muted-foreground mb-4">Shipping calculated at checkout</p>
                </div>
                
                <div className="border-t pt-4">
                  <div className="flex justify-between text-xl font-bold mb-6">
                    <span>Total:</span>
                    <span className="text-primary">₹{getTotalPrice().toFixed(2)}</span>
                  </div>
                  
                  <Button 
                    className="w-full btn-primary mb-3"
                    onClick={() => navigate('/checkout')}
                  >
                    Proceed to Checkout
                  </Button>
                  
                  <Link to="/products">
                    <Button variant="outline" className="w-full">
                      Continue Shopping
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
