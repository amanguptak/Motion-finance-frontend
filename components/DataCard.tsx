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
  bgColor: string;
}

const DataCard = ({
  label,
  value,
  period,
  date,
  icon: Icon,
  bgColor,
}: DataProps) => {
  return (
    <div className="">
      <Card className="w-96 hover:shadow-rose-500 cursor-pointer shadow-xl">
        <CardHeader className="pb-2">
          <CardTitle className="flex text-slate-600 justify-between items-center">
            {label}
            <div className={`p-2 rounded-md bg-${bgColor}-200`}>
              <Icon className={`text-${bgColor}-400`} />
            </div>
          </CardTitle>
          <CardDescription className="py-0 text-xs">{date}</CardDescription>
        </CardHeader>
        <CardContent className="py-2">
          <p className="font-bold text-lg text-slate-500">{value}</p>
        </CardContent>
        <CardFooter>
          <p className="text-xs text-rose-600">{period}</p>
        </CardFooter>
      </Card>
    </div>
  );
};

export default DataCard;
