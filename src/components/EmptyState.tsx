import React from 'react';
import { Filter } from 'lucide-react';

export function EmptyState() {
  return (
    <div className="bg-white rounded-lg shadow p-12 text-center">
      <Filter size={48} className="mx-auto text-gray-400 mb-4" />
      <h3 className="text-lg font-medium text-gray-900 mb-2">No products found</h3>
      <p className="text-gray-600">Try adjusting your search or filter criteria</p>
    </div>
  );
}