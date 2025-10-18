import React from "react";
import { getCategories } from "../hooks/useProduct";

interface FilterPanelProps {
  selectedCategory: string;
  sortOrder: "newest" | "oldest";
  onCategoryChange: (category: string) => void;
  onSortChange: (order: "newest" | "oldest") => void;
}

export function FilterPanel({
  selectedCategory,
  sortOrder,
  onCategoryChange,
  onSortChange,
}: FilterPanelProps) {
  const categories = getCategories();

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <div>
        <label htmlFor="category-filter" className="block text-sm font-medium text-gray-700 mb-2">
          Category
        </label>
        <select
          id="category-filter"
          value={selectedCategory}
          onChange={(e) => onCategoryChange(e.target.value)}
          className="w-full px-3 py-2 border text-gray-900 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        >
          {categories.map((cat) => (
            <option key={cat} value={cat}>
              {cat.charAt(0).toUpperCase() + cat.slice(1)}
            </option>
          ))}
        </select>
      </div>

      {/* Sort Order Filter */}
      <div>
        <label htmlFor="sort-order" className="block text-sm font-medium text-gray-900 mb-2">
          Sort by Date
        </label>
        <select
          id="sort-order"
          value={sortOrder}
          onChange={(e) =>
            onSortChange(e.target.value as "newest" | "oldest")
          }
          className="w-full px-3 py-2 border text-gray-900 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        >
          <option value="newest">Newest First</option>
          <option value="oldest">Oldest First</option>
        </select>
      </div>
    </div>
  );
}
