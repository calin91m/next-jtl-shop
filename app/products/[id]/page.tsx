import { notFound } from "next/navigation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { getProductById } from "@/lib/products";

export default async function ProductPage({
  params,
}: {
  params: { id: string };
}) {
  const product = await getProductById(Number(params.id));

  if (!product) return notFound();

  return (
    <div className="p-6 max-w-2xl mx-auto">
      <div className="mt-6 mb-2">
        <Link href="/products">
          <Button variant="outline" className="flex items-center gap-2">
            <ArrowLeft className="w-4 h-4" />
            Back to Products
          </Button>
        </Link>
      </div>
      <Card className="hover:shadow-lg transition-shadow rounded-md">
        <CardHeader>
          <CardTitle>{product.name}</CardTitle>
        </CardHeader>
        <CardContent>
          <AspectRatio ratio={3 / 4} className="bg-muted mb-4">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-full object-cover rounded-md"
            />
          </AspectRatio>
          <p className="text-sm text-muted-foreground mb-4">
            {product.description}
          </p>
          <p className="text-xl font-bold mb-4">${product.price.toFixed(2)}</p>
          <Button variant="default" className="w-full">
            Add to Cart
          </Button>
        </CardContent>
      </Card>
      <div className="mt-4 text-sm text-muted-foreground"></div>
    </div>
  );
}
