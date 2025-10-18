import React from 'react';
import { PRODUCTS_DATA } from '../data/products';

export function StatsCards() {
  const avgStock = (PRODUCTS_DATA.reduce((sum, p) => sum + p.stock, 0) / PRODUCTS_DATA.length).toFixed(0);
  const categories = new Set(PRODUCTS_DATA.map(p => p.category)).size;

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      <div className="bg-white rounded-lg shadow p-4">
        <div className="text-2xl font-bold text-gray-900">{PRODUCTS_DATA.length}</div>
        <div className="text-sm text-gray-600">Total products</div>
      </div>
      <div className="bg-white rounded-lg shadow p-4">
        <div className="text-2xl font-bold text-gray-900">{categories}</div>
        <div className="text-sm text-gray-600">Categories</div>
      </div>
      <div className="bg-white rounded-lg shadow p-4">
        <div className="text-2xl font-bold text-green-600">{avgStock}</div>
        <div className="text-sm text-gray-600">Avg stock</div>
      </div>
      <div className="bg-white rounded-lg shadow p-4">
        <div className="text-2xl font-bold text-blue-600">$</div>
        <div className="text-sm text-gray-600">Dashboard active</div>
      </div>
    </div>
  );
}
