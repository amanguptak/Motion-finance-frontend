import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { LucideIcon } from "lucide-react";

interface DataProps {
  label: string;
  value: string;
  period: string;
  date: string;
  icon: LucideIcon;
  bgColor: keyof typeof colorMap;
}

const colorMap = {
  green: "bg-green-200 text-green-400",
  rose: "bg-rose-200 text-rose-400",
  amber: "bg-amber-200 text-amber-400",
} as const;

// const isKeyOfColorMap = (key: any): key is keyof typeof colorMap => {
//   return key in colorMap;
// }

const DataCard = ({
  label,
  value,
  period,
  date,
  icon: Icon,
  bgColor,
}: DataProps) => {
  const colorClasses = colorMap[bgColor] || "bg-gray-200 text-gray-400";
  return (
    <div className="">
      <Card className="w-96 hover:shadow-rose-500 cursor-pointer shadow-xl">
        <CardHeader className="pb-2">
          <CardTitle className="flex text-slate-600 justify-between items-center">
            {label}
            <div className={`p-2 rounded-md ${colorClasses}`}>
              <Icon />
            </div>
          </CardTitle>
          <CardDescription className="py-0 text-xs">{date}</CardDescription>
        </CardHeader>
        <CardContent className="py-2">
          <p className="font-bold text-lg text-slate-500">{value}</p>
        </CardContent>
        <CardFooter>
          <p className="text-xs text-slate-600">{period}</p>
        </CardFooter>
      </Card>
    </div>
  );
};

export default DataCard;
