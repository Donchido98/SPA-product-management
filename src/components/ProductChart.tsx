import React from "react";
import { LineChart, Line, ResponsiveContainer, XAxis, YAxis, Tooltip } from "recharts";

interface ProductsChartProps {
  filteredProducts: any[];
}

const ProductsChart: React.FC<ProductsChartProps> = ({ filteredProducts }) => {
  const brandCounts = filteredProducts.reduce((acc: any, p) => {
    acc[p.brand] = (acc[p.brand] || 0) + 1;
    return acc;
  }, {});
  const chartData = Object.entries(brandCounts).map(([brand, count]) => ({ brand, count }));

  if (chartData.length === 0) return null;

  return (
    <section className="bg-white p-4 rounded-lg shadow" aria-label="Products per brand chart">
      <h3 className="font-medium mb-2 text-gray-900">Products per Brand</h3>
      <div className="w-full h-44 min-w-0">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={chartData} aria-label="Line chart showing product count by brand">
            <XAxis dataKey="brand" />
            <YAxis />
            <Tooltip />
            <Line type="monotone" dataKey="count" stroke="#4f46e5" strokeWidth={2} />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </section>
  );
};

export default ProductsChart;
