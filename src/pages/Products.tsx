import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useCart } from "@/hooks/useCart";
import { toast } from "sonner";
import facewashImg from "@/assets/facewash.jpg";
import serumImg from "@/assets/serum.jpg";
import creamImg from "@/assets/cream.jpg";

type Category = "all" | "facewash" | "serums" | "creams";

const Products = () => {
  const [selectedCategory, setSelectedCategory] = useState<Category>("all");
  const { addItem } = useCart();

  const products = [
    { id: "1", name: "Natural Glow Facewash", price: 499, category: "facewash", image: facewashImg, description: "Gentle cleansing with natural botanicals" },
    { id: "2", name: "Deep Clean Facewash", price: 549, category: "facewash", image: facewashImg, description: "Deep cleansing for oily skin" },
    { id: "3", name: "Sensitive Skin Facewash", price: 599, category: "facewash", image: facewashImg, description: "Extra gentle for sensitive skin" },
    
    { id: "4", name: "Radiance Boost Serum", price: 999, category: "serums", image: serumImg, description: "Vitamin C enriched brightening serum" },
    { id: "5", name: "Hydration Serum", price: 1099, category: "serums", image: serumImg, description: "Deep hydration with hyaluronic acid" },
    { id: "6", name: "Anti-Aging Serum", price: 1299, category: "serums", image: serumImg, description: "Reduce fine lines naturally" },
    
    { id: "7", name: "Nourishing Day Cream", price: 799, category: "creams", image: creamImg, description: "24-hour moisture protection" },
    { id: "8", name: "Night Repair Cream", price: 899, category: "creams", image: creamImg, description: "Overnight skin renewal" },
    { id: "9", name: "SPF 30 Day Cream", price: 849, category: "creams", image: creamImg, description: "Sun protection with moisture" },
  ];

  const categories = [
    { id: "all", label: "All Products" },
    { id: "facewash", label: "Face Wash" },
    { id: "serums", label: "Serums" },
    { id: "creams", label: "Creams" },
  ];

  const filteredProducts = selectedCategory === "all" 
    ? products 
    : products.filter(p => p.category === selectedCategory);

  const handleAddToCart = (product: typeof products[0]) => {
    addItem({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
    });
    toast.success(`${product.name} added to cart!`);
  };

  return (
    <div className="min-h-screen py-12 px-4">
      <div className="container mx-auto">
        <div className="mb-12 text-center space-y-4">
          <h1 className="text-5xl font-display font-bold">Our Products</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Discover our complete range of natural beauty products, carefully crafted for all skin types
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <Button
              key={category.id}
              variant={selectedCategory === category.id ? "default" : "outline"}
              onClick={() => setSelectedCategory(category.id as Category)}
              className={selectedCategory === category.id ? "btn-primary" : ""}
            >
              {category.label}
            </Button>
          ))}
        </div>

        {/* Product Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {filteredProducts.map((product) => (
            <Card key={product.id} className="card-elegant overflow-hidden group">
              <div className="relative overflow-hidden">
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="w-full h-72 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <Badge className="absolute top-4 left-4 bg-primary/90 text-white">
                  Natural
                </Badge>
              </div>
              <CardContent className="p-6 space-y-4">
                <div>
                  <h3 className="font-display font-semibold text-xl mb-2">{product.name}</h3>
                  <p className="text-sm text-muted-foreground">{product.description}</p>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-primary">₹{product.price}</span>
                  <Button 
                    onClick={() => handleAddToCart(product)}
                    className="btn-primary"
                  >
                    Add to Cart
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {filteredProducts.length === 0 && (
          <div className="text-center py-16">
            <p className="text-xl text-muted-foreground">No products found in this category</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Products;
