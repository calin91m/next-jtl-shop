// Add this to your root layout (e.g., app/layout.tsx) to enable toasts globally
"use client";
import { Toaster } from "sonner";

export function ToastProvider() {
  return <Toaster richColors position="bottom-right" expand={true} />;
}
