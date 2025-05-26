import { useState } from "react";

type CartItem = {
    id: string;
    name: string;
    price: number;
    quantity: number;
};

export function useCart() {
    const [items, setItems] = useState<CartItem[]>([]);
    const total = items.reduce((sum, item) => sum + item.price * item.quantity, 0);

    function removeItem(id: string) {
        setItems((prev) => prev.filter((item) => item.id !== id));
    }

    function checkout() {
        // Implement checkout logic here
        alert("Checkout not implemented.");
    }

    return { items, removeItem, total, checkout };
}