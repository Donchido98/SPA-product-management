"use client";

import React, { useState } from "react";
import { TrendingUp, LogOut, Menu, X } from "lucide-react";
import { useRouter } from "next/navigation";
import { useAuth } from "@/providers/AuthProvider";
import { ProductList } from "./pages/ProductList";
import { ProductDetail } from "./pages/ProductDetail";

export default function DashboardPage() {
  const [selectedProductId, setSelectedProductId] = useState<number | null>(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const router = useRouter();
  const { logout } = useAuth();

  const handleLogout = () => {
    logout();
    router.push("/login");
  };

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header */}
      <header className="bg-white shadow fixed top-0 left-0 w-full z-50">
        <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <TrendingUp className="text-blue-600" size={32} />
            <h1 className="hidden sm:block text-2xl font-bold text-gray-900">
              SPA Product Management Dashboard
            </h1>
          </div>

          {/* Desktop Logout Button */}
          <button
            onClick={handleLogout}
            className="hidden sm:flex items-center gap-2 bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-red-600 transition"
          >
            <LogOut size={18} />
            Logout
          </button>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="sm:hidden p-2 text-gray-700 hover:bg-gray-100 rounded-md transition"
          >
            {menuOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>

        {/* Mobile Dropdown Menu */}
        {menuOpen && (
          <div className="sm:hidden bg-white border-t border-gray-200 px-4 py-3 space-y-3 animate-slide-down">
            <h1 className="text-lg font-semibold text-gray-900">
              SPA Product Management Dashboard
            </h1>

            <button
              onClick={handleLogout}
              className="flex items-center gap-2 bg-blue-500 text-white px-4 py-2 rounded-md w-50 mx-auto justify-center hover:bg-red-600 transition"
            >
              <LogOut size={18} />
              Logout
            </button>
          </div>
        )}
      </header>

      {/* Main Content */}
      <main className="pt-24 sm:pt-28 px-4 sm:px-6 lg:px-8 py-8">
        {selectedProductId ? (
          <ProductDetail
            productId={selectedProductId}
            onBack={() => setSelectedProductId(null)}
          />
        ) : (
          <ProductList onSelectProduct={setSelectedProductId} />
        )}
      </main>

      {/* Footer */}
      <footer className="bg-white border-t mt-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 text-center text-sm text-gray-600">
          <p>
            Product Dashboard v1.0 | Built with Next.js, TypeScript & Tailwind CSS | Developed by
            Nmeribe Chidiadi Nnamdi #Codewithnnamdi
          </p>
        </div>
      </footer>
    </div>
  );
}