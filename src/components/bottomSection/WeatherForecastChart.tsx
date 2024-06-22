import React from "react";
import { Line, LineChart, ResponsiveContainer } from "recharts";

const data = [
  { name: "January", uv: 4000, pv: 2400, amt: 2400 },
  { name: "February", uv: 3000, pv: 1398, amt: 2210 },
  { name: "March", uv: 2000, pv: 9800, amt: 2290 },
  { name: "April", uv: 2780, pv: 3908, amt: 2000 },
  { name: "May", uv: 1890, pv: 4800, amt: 2181 },
  { name: "June", uv: 2390, pv: 3800, amt: 2500 },
  { name: "July", uv: 3490, pv: 4300, amt: 2100 },
];

const MyBarChart: React.FC = () => (
  <div style={{ width: "100%", height: 200 }}>
    <ResponsiveContainer width="100%" height="100%">
      <LineChart width={300} height={100} data={data}>
        <Line type="monotone" dataKey="pv" stroke="#8884d8" strokeWidth={2} />
      </LineChart>
    </ResponsiveContainer>
  </div>
);

export default MyBarChart;
