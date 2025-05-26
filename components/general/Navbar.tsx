"use client";

import Link from "next/link";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ShoppingCart } from "lucide-react";
import { useState } from "react";

export function Navbar() {
  const pathname = usePathname();
  const router = useRouter();
  const searchParams = useSearchParams();
  const initialSearch = searchParams.get("q") ?? "";
  const [search, setSearch] = useState(initialSearch);

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (pathname === "/products") {
      router.push(`/products?q=${encodeURIComponent(search)}`);
    } else {
      router.push(`/products?q=${encodeURIComponent(search)}`);
    }
  };

  const cartCount = 3;

  const navItems = [
    { href: "/", label: "Home" },
    { href: "/products", label: "Products" },
  ];

  return (
    <header className="w-full border-b bg-background">
      <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between p-4 gap-4">
        <Link href="/" className="text-lg font-bold">
          🛍️ JTL Shop
        </Link>

        <nav className="flex flex-wrap items-center gap-4">
          {navItems.map(({ href, label }) => (
            <Button
              key={href}
              asChild
              variant={pathname === href ? "default" : "ghost"}
            >
              <Link href={href}>{label}</Link>
            </Button>
          ))}
          <form onSubmit={handleSearch}>
            <Input
              type="text"
              placeholder="Search products..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-56"
            />
          </form>

          <Link href="/cart" className="relative">
            <Button variant="ghost" size="icon">
              <ShoppingCart className="w-5 h-5" />
              {cartCount > 0 && (
                <span className="absolute -top-1.5 -right-1.5 bg-red-500 text-white text-xs font-bold w-5 h-5 flex items-center justify-center rounded-full">
                  {cartCount}
                </span>
              )}
            </Button>
          </Link>
        </nav>
      </div>
    </header>
  );
}
