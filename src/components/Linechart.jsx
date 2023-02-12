import React from "react";
import {
  XAxis,
  YAxis,
  CartesianGrid,
  Legend,
  AreaChart,
  Area,
  ResponsiveContainer,
} from "recharts";

const data = [
  {
    name: "Jan ",
    ProductsSold: 15000,
    Totalviews: 18000,
    amt: 16000,
  },
  {
    name: "Feb ",
    ProductsSold: 10000,
    Totalviews: 7000,
    amt: 8000,
  },
  {
    name: "Mar",
    ProductsSold: 15000,
    Totalviews: 17000,
    amt: 16000,
  },
  {
    name: "Apr",
    ProductsSold: 19000,
    Totalviews: 12000,
    amt: 15000,
  },
  {
    name: "May",
    ProductsSold: 15000,
    Totalviews: 17500,
    amt: 16000,
  },
  {
    name: "Jun",
    ProductsSold: 23000,
    Totalviews: 10000,
    amt: 18000,
  },
];

function Linechart() {
  return (
    <div>
      <ResponsiveContainer width={350} height={310}>
        <AreaChart
          data={data}
          margin={{ top: 10, right: 30, left: -30, bottom: 0 }}
        >
          <defs>
            <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#D9F5FF" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#D9F5FF" stopOpacity={0} />
            </linearGradient>
            <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#ECECFE" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#ECECFE" stopOpacity={0} />
            </linearGradient>
          </defs>
          <XAxis dataKey="name" />
          <YAxis
            type="number"
            domain={[5000, 25000]}
            tickFormatter={(value) =>
              new Intl.NumberFormat("en-US", {
                notation: "compact",
                compactDisplay: "short",

                style: "currency",
                currency: "USD",
              }).format(value)
            }
          />
          <CartesianGrid />
          <Legend />

          <Area
            type="monotone"
            dot={{
              stroke: "#80E2FF",
              strokeWidth: 1,
              r: 4,
              strokeDasharray: "",
            }}
            dataKey="Totalviews"
            stroke="#80E2FF"
            fillOpacity={1}
            fill="url(#colorUv)"
          />
          <Area
            type="monotone"
            dot={{
              stroke: "#B5B3FB",
              strokeWidth: 1,
              r: 4,
              strokeDasharray: "",
            }}
            dataKey="ProductsSold"
            stroke="#B5B3FB"
            fillOpacity={1}
            fill="url(#colorPv)"
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}

export default Linechart;
