import React from "react";
import { useState } from "react";
import { StockBadge } from "./StockBadge";
import { RatingBadge } from "./RatingBadge";
import { deleteProduct } from "@/hooks/useProduct";
import { DeleteModal } from "@/components/DeleteModal";

export interface Product {
  id: number;
  title: string;
  brand: string;
  category: string;
  price: number;
  rating: number;
  stock: number;
  thumbnail: string;
}

interface ProductTableProps {
  products: Product[];
  onSelectProduct: (id: number) => void;
  onMessage: (message: { type: "success" | "error"; text: string }) => void;
}

export function ProductTable({ products, onSelectProduct, onMessage}: ProductTableProps) {
  const [deleteTarget, setDeleteTarget] = useState<{ id: number; title: string } | null>(null);

  return (
    <div className="bg-white rounded-lg shadow overflow-hidden">
      <div className="hidden sm:block overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-semibold text-gray-700 uppercase">
                Product
              </th>
              <th className="px-6 py-3 text-left text-xs font-semibold text-gray-700 uppercase">
                Brand
              </th>
              <th className="px-6 py-3 text-left text-xs font-semibold text-gray-700 uppercase">
                Category
              </th>
              <th className="px-6 py-3 text-left text-xs font-semibold text-gray-700 uppercase">
                Price
              </th>
              <th className="px-6 py-3 text-left text-xs font-semibold text-gray-700 uppercase">
                Rating
              </th>
              <th className="px-6 py-3 text-left text-xs font-semibold text-gray-700 uppercase">
                Stock
              </th>
              <th className="px-6 py-3 text-left text-xs font-semibold text-gray-700 uppercase">
                Action
              </th>
            </tr>
          </thead>

          <tbody className="divide-y divide-gray-200">
            {products.map((product) => (
              <tr
                key={product.id}
                className="hover:bg-gray-50 transition-colors"
              >
                <td
                  onClick={() => onSelectProduct(product.id)}
                  className="px-6 py-4 flex items-center gap-3 cursor-pointer"
                >
                  <img
                    src={product.thumbnail}
                    alt={product.title}
                    className="w-10 h-10 rounded object-cover"
                  />
                  <span className="text-sm font-medium text-gray-900">
                    {product.title}
                  </span>
                </td>
                <td className="px-6 py-4 text-sm text-gray-900">{product.brand}</td>
                <td className="px-6 py-4 text-sm text-gray-600">{product.category}</td>
                <td className="px-6 py-4 text-sm font-medium text-gray-900">
                  ${product.price.toFixed(2)}
                </td>
                <td className="px-6 py-4 text-sm">
                  <RatingBadge rating={product.rating} />
                </td>
                <td className="px-6 py-4 text-sm">
                  <StockBadge stock={product.stock} />
                </td>
                <td className="px-6 py-4 text-sm text-right">
                  <button onClick={() => setDeleteTarget({ id: product.id, title: product.title })} className="text-red-600 hover:text-red-800 font-medium">
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>

        </table>
      </div>

      {/* Mobile cards */}
      <div className="block sm:hidden space-y-6 p-4">
        {products.map((product) => (
          <div
            key={product.id}
            onClick={() => onSelectProduct(product.id)}
            className="border rounded-lg overflow-hidden shadow-sm hover:shadow-md transition cursor-pointer bg-white"
          >
      
            <img
              src={product.thumbnail}
              alt={product.title}
              className="w-full h-48 object-cover bg-gray-100"
            />

            <div className="p-4 grid grid-cols-2 gap-3 text-sm">
              <div className="col-span-2 text-lg font-semibold text-gray-900">
                {product.title}
              </div>
              <div className="text-gray-700">
                <span className="font-semibold text-gray-700">Brand:</span> {product.brand}
              </div>
              <div className="text-gray-700">
                <span className="font-semibold text-gray-700">Category:</span> {product.category}
              </div>
              <div className="text-gray-700">
                <span className="font-semibold text-gray-700">Price:</span> ${product.price.toFixed(2)}
              </div>
              <div className="flex items-center gap-1">
                <span className="font-semibold text-gray-700">Rating:</span>
                <RatingBadge rating={product.rating} />
              </div>
              <div className="flex items-center gap-1">
                <span className="font-semibold text-gray-700">Stock:</span>
                <StockBadge stock={product.stock} />
              </div>
            </div>
            <div className="flex justify-end mt-2 p-4">
            <button
              onClick={(e) => {
                e.stopPropagation(); // prevent triggering onSelectProduct
                if (confirm(`Delete "${product.title}"?`)) {
                  deleteProduct(product.id);
                }
              }}
              className="px-3 py-1 bg-red-600 text-white rounded-lg hover:bg-red-700 text-sm"
            >
              Delete
            </button>
          </div>
          </div>
        ))}
      </div>

{deleteTarget && (
  <DeleteModal
    productTitle={deleteTarget.title}
    onCancel={() => setDeleteTarget(null)}
    onConfirm={() => {
      try {
        deleteProduct(deleteTarget.id);
        setDeleteTarget(null);
        onMessage({ type: "success", text: "Product deleted successfully!" });
      } catch (error) {
        onMessage({ type: "error", text: "Failed to delete product." });
      }
    }}
  />
)}

    </div>
  );
}
