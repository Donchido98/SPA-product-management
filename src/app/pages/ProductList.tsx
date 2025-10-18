"use client";

import React, { useState, useEffect, useRef } from "react";
import { SearchBar } from "@/components/SearchBar";
import { FilterPanel } from "@/components/FilterPanel";
import { ProductTable } from "@/components/ProductTable";
import { Pagination } from "@/components/Pagination";
import { EmptyState } from "@/components/EmptyState";
import { useProducts, addProduct } from "@/hooks/useProduct";
import { Protected } from "@/components/Protected";
import AddProductModal from "@/components/AddProductModal";
import ProductsChart from "@/components/ProductChart";

const PAGE_SIZE = 10;

interface ProductListProps {
  onSelectProduct: (productId: number) => void;
}

interface FormData {
  title: string;
  price: string;
  brand: string;
  category: string;
}

interface Message {
  type: "success" | "error";
  text: string;
}

export function ProductList({ onSelectProduct }: ProductListProps) {
  const [page, setPage] = useState<number>(1);
  const [search, setSearch] = useState<string>("");
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [sortOrder, setSortOrder] = useState<"newest" | "oldest">("newest");
  const [showForm, setShowForm] = useState<boolean>(false);
  const [formData, setFormData] = useState<FormData>({ title: "", price: "", brand: "", category: "" });
  const [message, setMessage] = useState<Message | null>(null);
  const [mounted, setMounted] = useState(false);

  const addProductButtonRef = useRef<HTMLButtonElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const messageRef = useRef<HTMLDivElement>(null);

  const filteredProducts = useProducts(search, selectedCategory, sortOrder);
  const totalPages = Math.ceil(filteredProducts.length / PAGE_SIZE);
  const startIdx = (page - 1) * PAGE_SIZE;
  const paginatedProducts = filteredProducts.slice(startIdx, startIdx + PAGE_SIZE);

  // Mount flag
  useEffect(() => setMounted(true), []);

  // Focus management
  useEffect(() => {
    if (!showForm) addProductButtonRef.current?.focus();
  }, [showForm]);

  // Screen reader message
  useEffect(() => {
    if (message && messageRef.current) {
      messageRef.current.setAttribute("role", "status");
      messageRef.current.setAttribute("aria-live", "polite");
      messageRef.current.setAttribute("aria-atomic", "true");
    }
  }, [message]);

  // Auto-dismiss message
  useEffect(() => {
    if (message) {
      const timer = setTimeout(() => setMessage(null), 3000);
      return () => clearTimeout(timer);
    }
  }, [message]);

  // ESC key to close modal
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && showForm) setShowForm(false);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [showForm]);

  const handlePageChange = (newPage: number) => {
    setPage(Math.max(1, Math.min(newPage, totalPages)));
    window.scrollTo(0, 0);
  };
  const handleSearch = (value: string) => { setSearch(value); setPage(1); };
  const handleCategoryChange = (value: string) => { setSelectedCategory(value); setPage(1); };

  const handleAddProduct = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.title || !formData.brand || !formData.price) {
      setMessage({ type: "error", text: "Please fill in title, brand, and price." });
      return;
    }
    try {
      addProduct({ ...formData, price: parseFloat(formData.price) });
      setFormData({ title: "", price: "", brand: "", category: "" });
      setMessage({ type: "success", text: "Product added successfully!" });
      setTimeout(() => setShowForm(false), 300);
    } catch {
      setMessage({ type: "error", text: "Failed to add product. Try again." });
    }
  };

  if (!mounted) return null;

  return (
    <Protected>
      {message && (
        <div
          ref={messageRef}
          className={`fixed top-24 right-12 z-[9999] px-4 py-3 rounded-lg shadow-lg text-white text-sm sm:text-base font-medium transition-all duration-300 ${
            message.type === "success" ? "bg-green-600" : "bg-red-600"
          }`}
        >
          {message.text}
        </div>
      )}

      <main className="space-y-6 relative">
        {/* Controls */}
        <section className="bg-white p-6 rounded-lg shadow space-y-4" aria-label="Product filters and controls">
          <SearchBar value={search} onChange={handleSearch} />
          <FilterPanel
            selectedCategory={selectedCategory}
            sortOrder={sortOrder}
            onCategoryChange={handleCategoryChange}
            onSortChange={setSortOrder}
          />
          <button
            ref={addProductButtonRef}
            onClick={() => setShowForm(true)}
            className="px-4 py-2 bg-indigo-600 text-white rounded-xl hover:bg-indigo-700 transition focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
          >
            Add Product
          </button>
        </section>

        {/* Modal Form */}
        {showForm && (
          <AddProductModal
            formData={formData}
            setFormData={setFormData}
            onClose={() => setShowForm(false)}
            onAddProduct={handleAddProduct}
            closeButtonRef={closeButtonRef}
          />
        )}

        {/* Products Chart */}
        <ProductsChart filteredProducts={filteredProducts} />

        {/* Product Table */}
        {paginatedProducts.length > 0 ? (
          <>
            <section aria-label="Product list">
              <ProductTable
                products={paginatedProducts}
                onSelectProduct={onSelectProduct}
                onMessage={setMessage}
              />
            </section>
            <nav aria-label="Product pagination">
              <Pagination
                page={page}
                totalPages={totalPages}
                onPageChange={handlePageChange}
                startIdx={startIdx}
                pageSize={PAGE_SIZE}
                totalItems={filteredProducts.length}
              />
            </nav>
          </>
        ) : (
          <EmptyState />
        )}
      </main>
    </Protected>
  );
}
