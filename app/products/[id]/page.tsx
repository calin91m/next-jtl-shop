// app/products/[id]/page.tsx
import { getAllProducts } from "@/lib/products";
import { notFound } from "next/navigation";
import ClientProductPage from "@/components/general/ClientProductPage";

export default async function ProductPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const productId = Number(id);

  const products = await getAllProducts();
  const product = products.find((p) => p.id === productId);

  if (!product) return notFound();

  return <ClientProductPage product={product} />;
}
