import { T_pieData } from "@/types/commonTypes";
import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";

interface childProps {
  data: T_pieData;
}

export const Chart_Pie = (props: childProps) => {
  const Color = ["#12da00", "#8751ec", "#e741df", "#ff5e00"];
  return (
    <ResponsiveContainer width={"100%"} height={"100%"}>
      <PieChart
        margin={{
          top: 0,
          right: 0,
          left: 0,
          bottom: 0,
        }}
      >
        <Pie
          dataKey={"value"}
          startAngle={0}
          endAngle={360}
          data={props.data}
          cx="50%"
          cy="50%"
          outerRadius={90}
          innerRadius={50}
          fill=""
          label
          animationDuration={1000}
        >
          {props.data.map((item, idx) => (
            <Cell
              key={`cell-${item.name}-${idx}`}
              fill={Color[idx]}
              style={{ outline: "none" }}
            />
          ))}
        </Pie>
      </PieChart>
    </ResponsiveContainer>
  );
};
