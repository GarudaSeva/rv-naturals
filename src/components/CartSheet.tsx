import { Button } from "@/components/ui/button";
import { useCart } from "@/hooks/useCart";
import { Minus, Plus, Trash2 } from "lucide-react";
import { useState } from "react";
import { CheckoutForm } from "./CheckoutForm";

export const CartSheet = () => {
  const { items, removeItem, updateQuantity, getTotalPrice } = useCart();
  const [showCheckout, setShowCheckout] = useState(false);

  if (showCheckout) {
    return <CheckoutForm onBack={() => setShowCheckout(false)} />;
  }

  if (items.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center h-full text-center">
        <p className="text-muted-foreground mb-4">Your cart is empty</p>
        <p className="text-sm text-muted-foreground">Add some beautiful products to get started!</p>
      </div>
    );
  }

  return (
    <div className="flex flex-col h-full">
      <h2 className="text-2xl font-display font-bold mb-6">Shopping Cart</h2>
      
      <div className="flex-1 overflow-auto space-y-4">
        {items.map((item) => (
          <div key={item.id} className="flex gap-4 p-4 bg-secondary/50 rounded-lg">
            <img 
              src={item.image} 
              alt={item.name}
              className="w-20 h-20 object-cover rounded-md"
            />
            <div className="flex-1">
              <h3 className="font-semibold">{item.name}</h3>
              <p className="text-primary font-semibold">₹{item.price}</p>
              
              <div className="flex items-center gap-2 mt-2">
                <Button
                  variant="outline"
                  size="icon"
                  className="h-8 w-8"
                  onClick={() => updateQuantity(item.id, Math.max(1, item.quantity - 1))}
                >
                  <Minus className="h-3 w-3" />
                </Button>
                <span className="w-8 text-center">{item.quantity}</span>
                <Button
                  variant="outline"
                  size="icon"
                  className="h-8 w-8"
                  onClick={() => updateQuantity(item.id, item.quantity + 1)}
                >
                  <Plus className="h-3 w-3" />
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  className="h-8 w-8 ml-auto text-destructive"
                  onClick={() => removeItem(item.id)}
                >
                  <Trash2 className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      <div className="border-t pt-4 mt-4 space-y-4">
        <div className="flex justify-between text-lg font-semibold">
          <span>Total:</span>
          <span className="text-primary">₹{getTotalPrice().toFixed(2)}</span>
        </div>
        <Button 
          className="w-full btn-primary"
          onClick={() => setShowCheckout(true)}
        >
          Proceed to Checkout
        </Button>
      </div>
    </div>
  );
};
