import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Sparkles, Leaf, HeartPulse, ShieldCheck } from "lucide-react";
import { Link } from "react-router-dom";
import heroProduct from "@/assets/hero-product.jpg";
import ingredientsImg from "@/assets/ingredients.jpg";
import facewashImg from "@/assets/facewash.jpg";
import serumImg from "@/assets/serum.jpg";
import creamImg from "@/assets/cream.jpg";

const Index = () => {
  const benefits = [
    {
      icon: Leaf,
      title: "100% Natural",
      description: "Pure ingredients from nature, no harmful chemicals"
    },
    {
      icon: HeartPulse,
      title: "Dermatologically Tested",
      description: "Safe for all skin types, clinically proven"
    },
    {
      icon: ShieldCheck,
      title: "Cruelty Free",
      description: "Never tested on animals, ethically made"
    }
  ];

  const ingredients = [
    { name: "Aloe Vera", benefit: "Deep hydration" },
    { name: "Green Tea", benefit: "Antioxidant protection" },
    { name: "Lavender", benefit: "Calming & soothing" },
    { name: "Vitamin C", benefit: "Brightening" }
  ];

  const offers = [
    { id: 1, name: "Natural Glow Facewash", price: 499, originalPrice: 699, discount: 30, image: facewashImg },
    { id: 2, name: "Radiance Boost Serum", price: 999, originalPrice: 1299, discount: 25, image: serumImg },
    { id: 3, name: "Nourishing Day Cream", price: 799, originalPrice: 999, discount: 20, image: creamImg },
  ];

  const reviews = [
    { name: "Priya S.", rating: 5, text: "Best natural products I've ever used! My skin has never looked better." },
    { name: "Rahul M.", rating: 5, text: "Finally found products that work for sensitive skin. Highly recommend!" },
    { name: "Ananya K.", rating: 5, text: "Love the natural ingredients. Results are visible within weeks!" }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="gradient-hero py-20 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 animate-fade-in">
              <Badge className="bg-primary/10 text-primary border-primary/20">
                <Sparkles className="w-3 h-3 mr-1" />
                Featured Product
              </Badge>
              <h1 className="text-5xl md:text-6xl font-display font-bold leading-tight">
                Discover Natural Beauty
              </h1>
              <p className="text-xl text-muted-foreground">
                Experience our signature Radiance Boost Serum - packed with natural botanicals for glowing, healthy skin
              </p>
              <div className="flex gap-4">
                <Link to="/products">
                  <Button size="lg" className="btn-primary">
                    Shop Now
                  </Button>
                </Link>
                <Link to="/about">
                  <Button size="lg" variant="outline">
                    Learn More
                  </Button>
                </Link>
              </div>
            </div>
            <div className="relative animate-scale-in">
              <img 
                src={heroProduct} 
                alt="RV Naturals Signature Serum"
                className="rounded-3xl shadow-2xl w-full hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 px-4 bg-card">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <Card key={index} className="card-elegant border-none text-center p-8 hover:scale-105 transition-transform duration-300">
                <CardContent className="space-y-4 pt-6">
                  <div className="mx-auto w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                    <benefit.icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-display font-semibold">{benefit.title}</h3>
                  <p className="text-muted-foreground">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Video Section */}
      <section className="py-16 px-4 gradient-hero">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <h2 className="text-4xl font-display font-bold">See The Difference</h2>
            <p className="text-xl text-muted-foreground">Watch how our products transform your skincare routine</p>
            <div className="aspect-video bg-secondary rounded-3xl shadow-2xl overflow-hidden">
              <video 
                controls 
                className="w-full h-full object-cover"
                poster={serumImg}
              >
                <source src="https://www.w3schools.com/html/mov_bbb.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        </div>
      </section>

      {/* Ingredients Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-4xl font-display font-bold">Pure Natural Ingredients</h2>
              <p className="text-lg text-muted-foreground">
                We carefully select the finest plant-based ingredients to create products that are gentle yet effective
              </p>
              <div className="grid grid-cols-2 gap-4">
                {ingredients.map((ingredient, index) => (
                  <Card key={index} className="border-l-4 border-primary">
                    <CardContent className="p-4">
                      <h4 className="font-semibold">{ingredient.name}</h4>
                      <p className="text-sm text-muted-foreground">{ingredient.benefit}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
            <div className="relative">
              <img 
                src={ingredientsImg} 
                alt="Natural Ingredients"
                className="rounded-3xl shadow-2xl w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Special Offers */}
      <section className="py-16 px-4 bg-accent/30">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-display font-bold mb-4">Special Offers</h2>
            <p className="text-xl text-muted-foreground">Limited time deals on our bestsellers</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {offers.map((product) => (
              <Card key={product.id} className="card-elegant overflow-hidden">
                <div className="relative">
                  <Badge className="absolute top-4 right-4 bg-destructive text-white">
                    {product.discount}% OFF
                  </Badge>
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-full h-64 object-cover"
                  />
                </div>
                <CardContent className="p-6 space-y-4">
                  <h3 className="font-display font-semibold text-lg">{product.name}</h3>
                  <div className="flex items-center gap-2">
                    <span className="text-2xl font-bold text-primary">₹{product.price}</span>
                    <span className="text-sm text-muted-foreground line-through">₹{product.originalPrice}</span>
                  </div>
                  <Link to="/products">
                    <Button className="w-full btn-primary">View Details</Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-display font-bold mb-4">What Our Customers Say</h2>
            <p className="text-xl text-muted-foreground">Real reviews from real people</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {reviews.map((review, index) => (
              <Card key={index} className="card-elegant">
                <CardContent className="p-6 space-y-4">
                  <div className="flex gap-1">
                    {[...Array(review.rating)].map((_, i) => (
                      <span key={i} className="text-yellow-500">★</span>
                    ))}
                  </div>
                  <p className="text-muted-foreground italic">"{review.text}"</p>
                  <p className="font-semibold">— {review.name}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
