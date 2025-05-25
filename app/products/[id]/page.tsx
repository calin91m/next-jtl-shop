import { notFound } from "next/navigation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { getProductById } from "@/lib/products";
import Image from "next/image";

interface ProductPageProps {
  params: Promise<{ id: string }>;
}

export default async function ProductPage({ params }: ProductPageProps) {
  const resolvedParams = await params;
  const product = await getProductById(Number(resolvedParams.id));

  if (!product) return notFound();

  return (
    <div className="p-6 max-w-7xl flex-col flex">
      <div className="mt-6 mb-2">
        <Link href="/products">
          <Button variant="outline" className="flex items-center gap-2">
            <ArrowLeft className="w-4 h-4" />
            Back to Products
          </Button>
        </Link>
      </div>
      <Card className="hover:shadow-lg transition-shadow rounded-md max-w-4xl">
        <CardHeader>
          <CardTitle>{product.name}</CardTitle>
        </CardHeader>
        <CardContent>
          <AspectRatio ratio={3 / 4} className="bg-muted mb-4">
            <Image
              src={product.image}
              alt={product.name}
              className="w-full h-full object-cover rounded-md"
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1500px) 50vw, 33vw"
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
