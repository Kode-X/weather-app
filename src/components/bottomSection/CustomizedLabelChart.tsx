import React from "react";

interface CustomizedLabelProps {
  x: number;
  y: number;
  stroke: string;
  value: string | number;
}

const CustomizedLabelChart: React.FC<CustomizedLabelProps> = React.memo(
  ({ x, y, stroke, value }) => {
    return (
      <>
        <text
          x={x}
          y={y}
          dy={-4}
          fill={stroke}
          fontSize={10}
          textAnchor="middle"
        >
          {value}°C
        </text>
      
      </>
    );
  }
);

export default CustomizedLabelChart;
