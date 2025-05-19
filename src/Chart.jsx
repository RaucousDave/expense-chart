import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Tooltip,
} from "chart.js";
import data from "./data.json";

ChartJS.register(CategoryScale, LinearScale, BarElement, Tooltip);

export default function Chart() {
  const chartData = {
    labels: data.map((item) => item.day.toLowerCase()),
    datasets: [
      {
        label: "Spending - USD",
        data: data.map((item) => item.amount),
        backgroundColor: data.map((item) =>
          item.amount === Math.max(...data.map((d) => d.amount))
            ? "hsl(186, 34%, 65%)"
            : "hsl(10, 79%, 65%)"
        ),
        borderRadius: 6,
        borderSkipped: false,
        barThickness: 40,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      y: {
        display: false,
        ticks: {
          // color: "#7c8b99",
        },
        grid: {
          drawTicks: false,
          drawBorder: false,
          display: false,
        },
      },
      x: {
        ticks: {
          color: "#7c8b99",
        },
        font: {
          family: "DM Sans",
          size: 16,
        },
        grid: {
          display: false,
        },
      },
    },
    plugins: {
      tooltip: {
        backgroundColor: "hsl(25, 47%, 15%)",
        titleColor: "#fff",
        bodyColor: "#fff",
        displayColors: false,
        padding: 10,
      },
      legend: {
        display: false,
      },
    },
  };

  return (
    <div className="bg-white rounded-xl shadow-lg p-3 md:p-6  w-[100%] md:w-[50%] mx-auto max-h-[400px]">
      <h1 className="text-2xl font-semibold text-brown-dark">
        Spending - Last 7 Days
      </h1>
      <div className="h-[200px] mb-4">
        <Bar
          data={chartData}
          options={options}
          style={{ fontFamily: "DM Sans" }}
        />
      </div>
      <div className="w-full h-0.5 bg-brown-light/40 mb-4"></div>
      <div className="flex justify-between">
        <div className="flex flex-col gap-2">
          <p className="text-brown-light">Total this month</p>
          <h1 className="text-brown-dark text-3xl font-semibold">$478.33</h1>
        </div>
        <div className="flex flex-col items-end justify-end">
          <h2 className="text-brown-dark font-medium text-base">+2.4%</h2>
          <h2 className="text-brown-light text-medium">from last month</h2>
        </div>
      </div>
    </div>
  );
}
