import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  PieChart,
  Pie,
  Cell,
  Label,
  ResponsiveContainer,
} from "recharts";
import "../components/piechart.css";

const data1 = [
  { name: "France", value: 4260 },
  { name: "Italy", value: 3970 },
  { name: "Japan", value: 4260 },
  { name: "Canada", value: 3970 },
];

const COLORS = ["#80E2FF", "#F49FA8", "#FFDF94", "#B5B3FB"];

const data2 = [
  { name: "France", value: 4260 },
  { name: "Italy", value: 3970 },
  { name: "Japan", value: 4260 },
  { name: "Canada", value: 3970 },
];

function Piechart() {
  return (
    <div>
      <PieChart width={400} height={310}>
        <Pie
          data={data2}
          cx="40%"
          cy="40%"
          labelLine={false}
          outerRadius={100}
          innerRadius={50}
          fill="#8884d8"
          dataKey="value"
        >
          {data1.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
          <Label value="230900 Sales" position="center" />
        </Pie>

        <Legend
          payload={data1.map((item, index) => ({
            id: item.name,
            value: `${item.name} ${item.value}`,
            color: COLORS[index % COLORS.length],
           
          }))}
        />
      </PieChart>
    </div>
  );
}

export default Piechart;


