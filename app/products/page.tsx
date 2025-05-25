// app/products/page.tsx

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import Link from "next/link";
import { getAllProducts } from "@/lib/products";
import Image from "next/image";

export default async function ProductsPage() {
  const products = await getAllProducts();
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">Products</h1>
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <Link key={product.id} href={`/products/${product.id}`}>
            <Card
              key={product.id}
              className="hover:shadow-lg transition-shadow py-2 px-2 rounded-md cursor-pointer"
            >
              <CardContent className="py-0 px-0 text-center ">
                <AspectRatio ratio={3 / 4} className="bg-muted mb-4">
                  <Image
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover rounded-sm"
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
      </div>
    </div>
  );
}
