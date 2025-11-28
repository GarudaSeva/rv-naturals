import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useCart } from "@/hooks/useCart";
import { ArrowLeft } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

interface CheckoutFormProps {
  onBack: () => void;
}

export const CheckoutForm = ({ onBack }: CheckoutFormProps) => {
  const { items, getTotalPrice, clearCart } = useCart();
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    address: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.phone || !formData.address) {
      toast.error("Please fill in all fields");
      return;
    }

    toast.success("Order placed successfully! We'll contact you soon.");
    clearCart();
    onBack();
  };

  return (
    <div className="flex flex-col h-full">
      <Button
        variant="ghost"
        onClick={onBack}
        className="mb-4 w-fit"
      >
        <ArrowLeft className="h-4 w-4 mr-2" />
        Back to Cart
      </Button>

      <h2 className="text-2xl font-display font-bold mb-6">Checkout</h2>
      
      <div className="flex-1 overflow-auto">
        <div className="space-y-4 mb-6">
          <h3 className="font-semibold">Order Summary</h3>
          {items.map((item) => (
            <div key={item.id} className="flex justify-between text-sm">
              <span>{item.name} x {item.quantity}</span>
              <span className="text-primary">₹{(item.price * item.quantity).toFixed(2)}</span>
            </div>
          ))}
          <div className="border-t pt-2 flex justify-between font-semibold">
            <span>Total:</span>
            <span className="text-primary">₹{getTotalPrice().toFixed(2)}</span>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <Label htmlFor="name">Full Name</Label>
            <Input
              id="name"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              placeholder="Enter your full name"
              required
            />
          </div>
          
          <div>
            <Label htmlFor="phone">Phone Number</Label>
            <Input
              id="phone"
              type="tel"
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              placeholder="Enter your phone number"
              required
            />
          </div>
          
          <div>
            <Label htmlFor="address">Delivery Address</Label>
            <Textarea
              id="address"
              value={formData.address}
              onChange={(e) => setFormData({ ...formData, address: e.target.value })}
              placeholder="Enter your complete address"
              rows={4}
              required
            />
          </div>
          
          <Button type="submit" className="w-full btn-primary">
            Place Order
          </Button>
        </form>
      </div>
    </div>
  );
};
