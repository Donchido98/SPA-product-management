"use client";

import React from "react";

interface DeleteModalProps {
  productTitle: string;
  onConfirm: () => void;
  onCancel: () => void;
}

export function DeleteModal({ productTitle, onConfirm, onCancel }: DeleteModalProps) {
  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-white rounded-xl shadow-xl p-6 w-full max-w-sm text-center animate-fadeIn">
        <h3 className="text-lg font-semibold text-gray-900 mb-3">
          Delete Product
        </h3>
        <p className="text-gray-700 mb-6">
          Are you sure you want to delete <span className="font-semibold">{productTitle}</span>?
          This action cannot be undone.
        </p>

        <div className="flex justify-center gap-3">
          <button onClick={onCancel} className="px-4 py-2 bg-gray-200 text-gray-800 rounded-lg hover:bg-gray-300 transition">
            Cancel
          </button>
          <button onClick={onConfirm} className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition">
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}
