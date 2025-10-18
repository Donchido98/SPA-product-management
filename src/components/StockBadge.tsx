import React from "react";

interface StockBadgeProps {
  stock: number;
}

export function StockBadge({ stock }: StockBadgeProps) {
  const className =
    stock > 20
      ? "bg-green-100 text-green-800"
      : stock > 0
      ? "bg-yellow-100 text-yellow-800"
      : "bg-red-100 text-red-800";

  return (
    <span
      className={`inline-flex px-2.5 py-0.5 rounded-full text-xs font-medium ${className}`}
    >
      {stock > 0 ? `${stock} units` : "Out of stock"}
    </span>
  );
}
