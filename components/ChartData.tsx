import React, { PureComponent } from "react";
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer
} from "recharts";

const data = [
  {
    name: "Page A",
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: "Page B",
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: "Page C",
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: "Page D",
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: "Page E",
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: "Page F",
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: "Page G",
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
];

const CustomBarShape = (props: any) => {
  const { fill, x, y, width, height } = props;
  const radius = 8;
  return (
    <path
      d={`M${x},${y + radius}
         a${radius},${radius} 0 0 1 ${radius},-${radius}
         h${width - 2 * radius}
         a${radius},${radius} 0 0 1 ${radius},${radius}
         v${height - radius}
         h${-width}
         Z`}
      fill={fill}
    />
  );
};

export default class ChartData extends PureComponent {
  render() {
    return (
      <div className="shadow-xl p-8 rounded-lg cursor-pointer hover:shadow-rose-400 w-full md:w-3/4 lg:w-2/3 xl:w-2/3" 
      style={{ height: '400px' }}>
        <h2 className="font-bold text-slate-700 mb-3">Conversion History</h2>
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={data}
            margin={{ top: 25, right: 30, left: 20, bottom: 20 }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="pv" fill="#fb7185" shape={CustomBarShape}/>
            <Bar dataKey="uv" fill="#fda4af" shape={CustomBarShape} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    );
  }
}
