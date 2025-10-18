import React, { useEffect } from "react";

interface FormData {
  title: string;
  price: string;
  brand: string;
  category: string;
}

interface AddProductModalProps {
  formData: FormData;
  setFormData: React.Dispatch<React.SetStateAction<FormData>>;
  onClose: () => void;
  onAddProduct: (e: React.FormEvent) => void;
  closeButtonRef: React.RefObject<HTMLButtonElement | null>; // ✅ fix here
}

const AddProductModal: React.FC<AddProductModalProps> = ({
  formData,
  setFormData,
  onClose,
  onAddProduct,
  closeButtonRef,
}) => {
  useEffect(() => {
    closeButtonRef.current?.focus();
  }, []);

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-2" role="presentation" aria-hidden="false">
      <div
        className="bg-white rounded-xl shadow-lg p-6 w-full max-w-md relative"
        role="dialog"
        aria-modal="true"
        aria-labelledby="add-product-title"
      >
        <button
          ref={closeButtonRef}
          onClick={onClose}
          className="absolute top-2 right-3 font-bold text-gray-900 hover:text-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 rounded"
          aria-label="Close form"
        >
          ✕
        </button>

        <h2 id="add-product-title" className="text-xl font-bold text-gray-900 mb-4">
          Add New Product
        </h2>

        <form onSubmit={onAddProduct} className="space-y-3">
          {/* Title */}
          <div className="flex flex-col">
            <label htmlFor="product-title" className="text-sm font-medium text-gray-700 mb-1">
              Product Title <span className="text-red-600">*</span>
            </label>
            <input
              id="product-title"
              type="text"
              placeholder="Enter product title"
              value={formData.title}
              onChange={(e) => setFormData((f) => ({ ...f, title: e.target.value }))}
              className="border border-gray-300 p-2 rounded-xl w-full text-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              required
            />
          </div>

          {/* Brand */}
          <div className="flex flex-col">
            <label htmlFor="product-brand" className="text-sm font-medium text-gray-700 mb-1">
              Brand <span className="text-red-600">*</span>
            </label>
            <input
              id="product-brand"
              type="text"
              placeholder="Enter brand name"
              value={formData.brand}
              onChange={(e) => setFormData((f) => ({ ...f, brand: e.target.value }))}
              className="border border-gray-300 p-2 rounded-xl w-full text-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              required
            />
          </div>

          {/* Price */}
          <div className="flex flex-col">
            <label htmlFor="product-price" className="text-sm font-medium text-gray-700 mb-1">
              Price <span className="text-red-600">*</span>
            </label>
            <input
              id="product-price"
              type="number"
              step="0.01"
              placeholder="Enter price"
              value={formData.price}
              onChange={(e) => setFormData((f) => ({ ...f, price: e.target.value }))}
              className="border border-gray-300 p-2 rounded-xl w-full text-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              required
            />
          </div>

          {/* Category */}
          <div className="flex flex-col">
            <label htmlFor="product-category" className="text-sm font-medium text-gray-700 mb-1">
              Category
            </label>
            <input
              id="product-category"
              type="text"
              placeholder="Enter category (optional)"
              value={formData.category}
              onChange={(e) => setFormData((f) => ({ ...f, category: e.target.value }))}
              className="border border-gray-300 p-2 rounded-xl w-full text-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-indigo-600 text-white py-2 rounded-xl hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 transition"
          >
            Save Product
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddProductModal;
