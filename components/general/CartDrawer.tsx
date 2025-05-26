"use client";

import * as React from "react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { useCart } from "@/lib/cart-context";
import { ShoppingCart } from "lucide-react";

export default function CartDrawer({
  open,
  setOpen,
}: {
  open?: boolean;
  setOpen?: (open: boolean) => void;
}) {
  const { items, removeItem, total, checkout } = useCart();

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button variant="outline">
          <ShoppingCart className="w-5 h-5" />
          Cart ({items.length})
        </Button>
      </SheetTrigger>
      <SheetContent side="right">
        <SheetHeader>
          <SheetTitle className="flex items-center ">
            {" "}
            <span>
              <ShoppingCart className="w-5 h-5 flex mr-2" />
            </span>
            Your Cart{" "}
          </SheetTitle>
        </SheetHeader>
        <div className="flex flex-col gap-4 mt-4 px-4">
          {items.length === 0 ? (
            <div className="text-center text-muted-foreground p-4">
              Your cart is empty.
            </div>
          ) : (
            items.map((item) => (
              <div
                key={`${item.productId}-${item.color}-${item.size}`}
                className="flex items-center justify-between gap-2 border-b p-2"
              >
                <div>
                  <div className="font-medium">{item.name}</div>
                  <div className="text-sm text-muted-foreground">
                    ${item.price.toFixed(2)} × {item.quantity}
                  </div>
                  <div className="text-xs text-muted-foreground">
                    Color: {item.color}, Size: {item.size}
                  </div>
                </div>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() =>
                    removeItem({
                      productId: item.productId,
                      color: item.color,
                      size: item.size,
                    })
                  }
                  aria-label={`Remove ${item.name}`}
                >
                  Remove
                </Button>
              </div>
            ))
          )}
        </div>
        <div className="mt-4 flex items-center justify-between font-semibold text-lg p-4">
          <span>Total</span>
          <span>${total.toFixed(2)}</span>
        </div>
        <div className="mt-6 flex items-center justify-between font-semibold text-lg p-4">
          {" "}
          <Button
            className="mt-6 w-full"
            disabled={items.length === 0}
            onClick={checkout}
          >
            Checkout
          </Button>
        </div>
      </SheetContent>
    </Sheet>
  );
}
