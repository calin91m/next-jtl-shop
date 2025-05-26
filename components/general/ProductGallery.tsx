"use client";

import { useState } from "react";
import Image from "next/image";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { cn } from "@/lib/utils"; // if you have a className utility

type Props = {
  product: {
    id: number;
    name: string;
    description: string;
    price: number;
    images: string[];
  };
};

export default function ProductGallery({ product }: Props) {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeImage = product.images[activeIndex];

  return (
    <div>
      {/* Main image */}
      <AspectRatio
        ratio={3 / 4}
        className="mb-4 bg-muted rounded-lg overflow-hidden shadow-sm"
      >
        <Image
          src={activeImage}
          alt={product.name}
          fill
          className="object-cover rounded-lg"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </AspectRatio>

      {/* Thumbnails */}
      <div className="flex gap-2">
        {product.images.map((img, index) => (
          <button
            key={index}
            onClick={() => setActiveIndex(index)}
            className={cn(
              "relative w-18 h-24 rounded overflow-hidden border-2 transition border-1-grey shadow-sm",
              activeIndex === index
                ? "border-primary ring-1 ring-primary"
                : "border-transparent"
            )}
          >
            <Image
              src={img}
              alt={`Thumbnail ${index}`}
              fill
              className="object-cover"
            />
          </button>
        ))}
      </div>
    </div>
  );
}
