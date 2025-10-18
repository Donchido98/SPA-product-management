'use client';

import { useMemo, useEffect, useState } from "react";
import { PRODUCTS_DATA } from "../data/products";

/**
 * Retrieve all products (initial SSR-safe default)
 */
function getAllProducts() {
  if (typeof window === "undefined") return PRODUCTS_DATA;

  try {
    const local = JSON.parse(localStorage.getItem("added_products") || "[]");
    return [...local, ...PRODUCTS_DATA];
  } catch (error) {
    console.error("Error reading localStorage:", error);
    return PRODUCTS_DATA;
  }
}

export function useProducts(search, category, sortOrder) {
  const [allProducts, setProducts] = useState(getAllProducts());

  // Re-fetching whenever localStorage changes
  useEffect(() => {
    const updateProducts = () => setProducts(getAllProducts());
    window.addEventListener("storage", updateProducts);
    window.addEventListener("productChanged", updateProducts); // custom event
    return () => {
      window.removeEventListener("storage", updateProducts);
      window.removeEventListener("productChanged", updateProducts);
    };
  }, []);

  // Applying filters + sorting (memoized)
  const filtered = useMemo(() => {
    let result = allProducts;

    if (search) {
      result = result.filter(
        (p) =>
          p.title.toLowerCase().includes(search.toLowerCase()) ||
          p.brand.toLowerCase().includes(search.toLowerCase())
      );
    }

    if (category && category !== "all") {
      result = result.filter((p) => p.category === category);
    }

    result.sort((a, b) => {
      const dateA = new Date(a.meta?.createdAt || a.createdAt);
      const dateB = new Date(b.meta?.createdAt || b.createdAt);
      return sortOrder === "newest" ? dateB - dateA : dateA - dateB;
    });

    return result;
  }, [allProducts, search, category, sortOrder]);

  return filtered;
}

export function useProductById(id) {
  const all = getAllProducts();
  return all.find((p) => p.id === id);
}

export function getCategories() {
  return ["all", ...new Set(PRODUCTS_DATA.map((p) => p.category))];
}

export function addProduct(product) {
  if (typeof window === "undefined") return;

  try {
    const existing = JSON.parse(localStorage.getItem("added_products") || "[]");
    existing.unshift({
      ...product,
      id: Math.random().toString(36).slice(2, 9),
      createdAt: new Date().toISOString(),
    });
    localStorage.setItem("added_products", JSON.stringify(existing));

    window.dispatchEvent(new Event("productChanged"));
  } catch (error) {
    console.error("Error saving to localStorage:", error);
  }
}


export function deleteProduct(id) {
  if (typeof window === "undefined") return;

  try {
    const existing = JSON.parse(localStorage.getItem("added_products") || "[]");
    const updated = existing.filter((p) => p.id !== id);
    localStorage.setItem("added_products", JSON.stringify(updated));
    window.dispatchEvent(new Event("productChanged"));
  } catch (error) {
    console.error("Error deleting product:", error);
  }
}