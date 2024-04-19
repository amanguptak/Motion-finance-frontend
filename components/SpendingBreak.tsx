import React from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';

interface DataItem {
  name: string;
  value: number;
}

const data: DataItem[] = [
  { name: 'Group A', value: 400 },
  { name: 'Group B', value: 300 },
  { name: 'Group C', value: 300 },
  { name: 'Group D', value: 200 },
];

const COLORS: string[] = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

const SpendingBreak: React.FC = () => {
  return (
    // Use TailwindCSS for responsive width and add some max-width control
    <div className="shadow-xl p-8 rounded-lg cursor-pointer hover:shadow-rose-400 w-full sm:w-2/3 md:w-1/2 lg:w-1/3 xl:w-1/3">
      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          <Pie
            data={data}
            cx="50%" // Center the pie chart
            cy="50%" // Center the pie chart
            innerRadius={60}
            outerRadius={80}
            fill="#8884d8"
            paddingAngle={5}
            dataKey="value"
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};

export default SpendingBreak;
