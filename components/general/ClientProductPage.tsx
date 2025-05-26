"use client";

import { useState } from "react";
import { useCart } from "@/lib/cart-context";
import { Button } from "@/components/ui/button";
import ProductGallery from "./ProductGallery";
import {
  Select,
  SelectTrigger,
  SelectContent,
  SelectItem,
  SelectValue,
} from "@/components/ui/select";

type Product = {
  id: number;
  name: string;
  description: string;
  price: number;
  images: string[];
  colors: string[];
  sizes: string[];
};

export default function ClientProductPage({ product }: { product: Product }) {
  const { addToCart } = useCart();
  const [selectedColor, setSelectedColor] = useState<string | undefined>(
    undefined
  );
  const [selectedSize, setSelectedSize] = useState<string | undefined>(
    undefined
  );

  return (
    <div className="max-w-5xl mx-auto p-6">
      <div className="grid md:grid-cols-2 gap-8">
        <ProductGallery product={product} />

        <div className="space-y-6">
          <h1 className="text-3xl font-bold">{product.name}</h1>
          <p className="text-2xl font-semibold">${product.price.toFixed(2)}</p>

          {/* Color selector */}
          <div>
            <label className="block mb-2 font-medium">Color</label>
            <Select
              onValueChange={(value) => setSelectedColor(value)}
              value={selectedColor}
            >
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Select a color" />
              </SelectTrigger>
              <SelectContent>
                {product.colors.map((color) => (
                  <SelectItem key={color} value={color}>
                    {color}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          {/* Size selector */}
          <div>
            <label className="block mb-2 font-medium">Size</label>
            <Select
              onValueChange={(value) => setSelectedSize(value)}
              value={selectedSize}
            >
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Select a size" />
              </SelectTrigger>
              <SelectContent>
                {product.sizes.map((size) => (
                  <SelectItem key={size} value={size}>
                    {size}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <Button
            size="lg"
            className="w-full"
            onClick={() => {
              if (!selectedColor || !selectedSize) {
                return alert("Please select a color and size");
              }
              addToCart({
                productId: product.id,
                name: product.name,
                price: product.price,
                quantity: 1,
              });
            }}
          >
            Add to Cart
          </Button>
        </div>
      </div>

      <div className="mt-8">
        <h2 className="text-2xl font-semibold mb-4">Description</h2>
        <p className="text-muted-foreground">{product.description}</p>
      </div>
    </div>
  );
}
