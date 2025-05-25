"use client";

import { useSearchParams } from "next/navigation";
import { getAllProducts, Product } from "@/lib/products";
import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { AspectRatio } from "@/components/ui/aspect-ratio";

export function ProductsPageContent() {
  const searchParams = useSearchParams();
  const searchQuery = searchParams.get("q")?.toLowerCase() ?? "";

  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    async function load() {
      const all = await getAllProducts();
      setProducts(all);
    }
    load();
  }, []);

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchQuery)
  );

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center py-2">
        <h1 className="text-2xl font-bold">
          Products{" "}
          {searchQuery && (
            <span className="text-muted-foreground">
              – Searching for “{searchQuery}”
            </span>
          )}
        </h1>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filteredProducts.map((product) => (
          <Link key={product.id} href={`/products/${product.id}`}>
            <Card className="hover:shadow-lg transition-shadow py-2 px-2 rounded-md cursor-pointer">
              <CardContent className="py-0 px-0 text-center">
                <AspectRatio ratio={3 / 4} className="bg-muted mb-4">
                  <Image
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover rounded-sm"
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </AspectRatio>
                <p className="text-sm text-muted-foreground mb-2">
                  {product.name}
                </p>
                <p className="font-semibold mb-4">
                  ${product.price.toFixed(2)}
                </p>
                <Button variant="default" className="w-full">
                  Add to Cart
                </Button>
              </CardContent>
            </Card>
          </Link>
        ))}
        {filteredProducts.length === 0 && (
          <p className="col-span-full text-muted-foreground text-center">
            No products match your search.
          </p>
        )}
      </div>
    </div>
  );
}
