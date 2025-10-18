"use client";

import React from 'react';
import { ChevronLeft } from 'lucide-react';
import { useProductById } from '../../hooks/useProduct';
import { RatingBadge } from '../../components/RatingBadge';
import { StatsCards } from '../../components/StatsCard';

interface ProductDetailProps {
  productId: number; 
  onBack: () => void; 
}

export function ProductDetail({ productId, onBack }: ProductDetailProps) {
  const product = useProductById(productId);

  if (!product) {
    return (
      <div className="bg-white rounded-lg shadow p-12 text-center">
        <p className="text-gray-600">Product not found</p>
        <button onClick={onBack} className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
          Back to List
        </button>
      </div>
    );
  }

  const discountedPrice = (product.price * 0.85).toFixed(2);

  return (
    <div className="space-y-6">
      <button onClick={onBack} className="flex items-center gap-2 text-blue-600 hover:text-blue-700 font-medium">
        <ChevronLeft size={20} />
        Back to Products
      </button>

      <div className="bg-white rounded-lg shadow overflow-hidden shadow-2xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-6">
          <div className="flex items-center justify-center bg-gray-50 rounded-lg p-8">
            <img src={product.thumbnail} alt={product.title} className="w-full h-auto max-w-md rounded"/>
          </div>

          <div className="space-y-6">
            <div>
              <h1 className="text-3xl font-bold text-gray-900 mb-2">{product.title}</h1>
              <p className="text-gray-600">{product.description}</p>
            </div>

            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-gray-600">Price:</span>
                <div className="text-right">
                  <div className="text-2xl font-bold text-blue-600">${product.price.toFixed(2)}</div>
                  <div className="text-sm text-gray-500">After discount: ${discountedPrice}</div>
                </div>
              </div>

              <div className="flex items-center justify-between">
                <span className="text-gray-600">Rating:</span>
                <RatingBadge rating={product.rating} />
              </div>

              <div className="flex items-center justify-between">
                <span className="text-gray-600">Stock:</span>
                <span className={`font-medium ${
                  product.stock > 0 ? 'text-green-600' : 'text-red-600'
                }`}>
                  {product.stock > 0 ? `${product.stock} units` : 'Out of stock'}
                </span>
              </div>

              <div className="flex items-center justify-between">
                <span className="text-gray-600">Brand:</span>
                <span className="font-medium text-gray-400">{product.brand}</span>
              </div>

              <div className="flex items-center justify-between">
                <span className="text-gray-600">Category:</span>
                <span className="font-medium capitalize text-gray-400">{product.category}</span>
              </div>

              <div className="flex items-center justify-between">
                <span className="text-gray-600">Created:</span>
                <span className="font-medium text-gray-400">
                  {product?.meta?.createdAt
                    ? new Date(product.meta.createdAt).toISOString().split('T')[0]
                    : "N/A"}
                </span>
              </div>
            </div>

            <button disabled={product.stock === 0}
              className="w-50 mx-auto px-6 py-3 bg-blue-600 text-white font-medium rounded-xl hover:bg-blue-700 disabled:bg-gray-400 disabled:cursor-not-allowed"
            >
              {product.stock > 0 ? 'Add to Cart' : 'Out of Stock'}
            </button>
          </div>
        </div>
      </div>

      <StatsCards />
    </div>
  );
}