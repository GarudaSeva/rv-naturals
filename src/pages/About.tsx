import { Card, CardContent } from "@/components/ui/card";
import { Leaf, Users, Recycle } from "lucide-react";
import leafImg from "@/assets/leaf.jpg";
import naturalProductsImg from "@/assets/natural-products.jpg";

const About = () => {
  const values = [
    {
      icon: Leaf,
      title: "Natural & Safe",
      description: "Only pure, plant-based ingredients in every product"
    },
    {
      icon: Users,
      title: "Inclusive Beauty",
      description: "Products designed for all skin types and genders"
    },
    {
      icon: Recycle,
      title: "Sustainable",
      description: "Eco-friendly packaging and ethical sourcing"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="gradient-hero py-20 px-4">
        <div className="container mx-auto text-center space-y-6 max-w-3xl">
          <h1 className="text-5xl md:text-6xl font-display font-bold">About RV Naturals</h1>
          <p className="text-2xl text-muted-foreground">Nature-inspired beauty for everyone</p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <Card className="card-elegant overflow-hidden">
            <div className="grid md:grid-cols-2 gap-0">
              <div className="order-2 md:order-1">
                <img 
                  src={leafImg} 
                  alt="Natural Leaf with water droplets"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="order-1 md:order-2 p-8 md:p-12 flex flex-col justify-center">
                <h2 className="text-3xl font-display font-bold mb-6">Our Story</h2>
                <div className="space-y-4 text-muted-foreground">
                  <p>
                    <span className="font-semibold text-primary">RV Naturals</span> was born from a simple belief: beauty should be natural, effective, and accessible to everyone. We create products using the finest plant-based ingredients, free from harmful chemicals.
                  </p>
                  <p>
                    Our journey began with a passion for harnessing nature's power to create skincare that truly works. Every formula is carefully crafted, tested, and perfected to deliver visible results while being gentle on your skin and the planet.
                  </p>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* Our Promise */}
      <section className="py-16 px-4 bg-accent/30">
        <div className="container mx-auto">
          <Card className="card-elegant overflow-hidden">
            <div className="grid md:grid-cols-2 gap-0">
              <div className="p-8 md:p-12 flex flex-col justify-center">
                <h2 className="text-3xl font-display font-bold mb-6">Our Promise</h2>
                <div className="space-y-4 text-muted-foreground">
                  <p>
                    Every product is crafted with care, dermatologically tested, and never tested on animals. We believe in transparency, sustainability, and creating beauty products that work for all genders and skin types.
                  </p>
                  <p>
                    We're committed to using only the highest quality natural ingredients, sourced ethically and sustainably. Our packaging is eco-friendly, and we continuously work to minimize our environmental impact.
                  </p>
                  <p className="font-semibold text-foreground">
                    Your skin deserves the best that nature has to offer, and we're here to deliver exactly that.
                  </p>
                </div>
              </div>
              <div>
                <img 
                  src={naturalProductsImg} 
                  alt="Natural skincare products and ingredients"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-display font-bold mb-4">Our Values</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="card-elegant text-center p-8 border-none">
                <CardContent className="space-y-4 pt-6">
                  <div className="mx-auto w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center">
                    <value.icon className="w-10 h-10 text-primary" />
                  </div>
                  <h3 className="text-2xl font-display font-semibold">{value.title}</h3>
                  <p className="text-muted-foreground text-lg">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 px-4 gradient-hero">
        <div className="container mx-auto text-center space-y-6 max-w-3xl">
          <h2 className="text-4xl font-display font-bold">Join the Natural Beauty Movement</h2>
          <p className="text-xl text-muted-foreground">
            Experience the difference that pure, natural ingredients can make for your skin
          </p>
        </div>
      </section>
    </div>
  );
};

export default About;
