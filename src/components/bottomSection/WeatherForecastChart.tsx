import React from "react";
import { Line, LineChart, ResponsiveContainer } from "recharts";
import CustomizedLabelChart from "./CustomizedLabelChart";
import { dataChart } from "../utils/getMockData";



const MyBarChart: React.FC = () => (
  <div style={{ width: "100%", height: 200}}>
    <ResponsiveContainer width="100%" height="100%">
      <LineChart width={300} height={100} data={dataChart}>
        <Line
          type="monotone"
          dataKey="pv"
          
          stroke="#8884d8"
          strokeWidth={2}
          label={
            <CustomizedLabelChart
              x={0}
              y={0}
              stroke={""}
              value={""}
            />
          }
        />
      </LineChart>
    </ResponsiveContainer>
  </div>
);

export default MyBarChart;
