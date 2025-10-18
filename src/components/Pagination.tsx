import React from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface PaginationProps {
  page: number;
  totalPages: number;
  onPageChange: (page: number) => void;
  startIdx: number;
  pageSize: number;
  totalItems: number;
}

export function Pagination({
  page,
  totalPages,
  onPageChange,
  startIdx,
  pageSize,
  totalItems,
}: PaginationProps) {
  return (
    <div className="bg-white px-6 py-4 border-t flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 rounded-xl">
      {/* Top Section (Prev + Next) */}
      <div className="flex justify-between sm:justify-start sm:gap-4 order-1 sm:order-none w-full sm:w-auto">
        {/* Previous Button */}
        <button
          onClick={() => onPageChange(page - 1)}
          disabled={page === 1}
          className="flex items-center gap-2 px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed rounded"
          aria-label="Previous page"
        >
          <ChevronLeft size={18} />
          Previous
        </button>

        {/* Next Button */}
        <button
          onClick={() => onPageChange(page + 1)}
          disabled={page === totalPages}
          className="flex items-center gap-2 px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed rounded"
          aria-label="Next page"
        >
          Next
          <ChevronRight size={18} />
        </button>
      </div>

      {/* Page numbers - Centered on all screens */}
      <div className="flex justify-center items-center gap-2 order-2 w-full sm:w-auto">
        {Array.from({ length: Math.min(5, totalPages) }, (_, i) => {
          const pageNum = page > 3 ? page - 2 + i : i + 1;
          if (pageNum > totalPages) return null;
          return (
            <button
              key={pageNum}
              onClick={() => onPageChange(pageNum)}
              className={`w-8 h-8 rounded text-sm font-medium transition-colors ${
                pageNum === page
                  ? "bg-blue-500 text-white"
                  : "text-gray-700 hover:bg-gray-100"
              }`}
              aria-label={`Go to page ${pageNum}`}
              aria-current={pageNum === page ? "page" : undefined}
            >
              {pageNum}
            </button>
          );
        })}
      </div>

      {/* Results summary - Always last */}
      <div className="text-sm text-gray-600 text-center sm:text-right order-3 w-full sm:w-auto">
        {totalItems > 0
          ? `${startIdx + 1}-${Math.min(startIdx + pageSize, totalItems)} of ${totalItems}`
          : "0 results"}
      </div>
    </div>
  );
}
