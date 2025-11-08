"use client";

import { Line } from "react-chartjs-2";
import {
  Chart,
  LineElement,
  PointElement,
  LinearScale,
  CategoryScale,
  Tooltip,
  Filler,
  Legend,
} from "chart.js";

Chart.register(
  LineElement,
  PointElement,
  LinearScale,
  CategoryScale,
  Tooltip,
  Filler,
  Legend
);

export default function PriceChart({ labels, prices, symbol }) {
  const data = {
    labels,
    datasets: [
      {
        label: `${symbol} / USD`,
        data: prices,
        borderWidth: 2,
        tension: 0.35,
        pointRadius: 0,
        fill: "start",
        borderColor: "rgba(59,130,246,1)",
        backgroundColor: "rgba(59,130,246,0.18)",
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    interaction: { mode: "index", intersect: false },
    plugins: {
      legend: { display: true, labels: { color: "#cfd5e4" } },
      tooltip: { enabled: true },
    },
    scales: {
      x: {
        ticks: { color: "#aab2c5", maxRotation: 0 },
        grid: { color: "rgba(255,255,255,0.06)" },
      },
      y: {
        ticks: {
          color: "#aab2c5",
          callback: (v) => `$${v}`,
        },
        grid: { color: "rgba(255,255,255,0.06)" },
      },
    },
  };

  return (
    <div className="chartWrap">
      <Line data={data} options={options} />
    </div>
  );
}
