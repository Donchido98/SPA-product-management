import React from "react";

interface RatingBadgeProps {
  rating?: number; 
}

export function RatingBadge({ rating }: RatingBadgeProps) {
  const safeRating = typeof rating === "number" ? rating.toFixed(2) : "N/A";

  return (
    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-bold bg-yellow-100 text-yellow-800">
      ★ {safeRating}
    </span>
  );
}
