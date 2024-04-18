import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

interface DataProps {
  label: string;
  value: string;
  period: string;
  date: string;
}

const DataCard = ({ label, value, period, date }: DataProps) => {
  return (
    <div className="">
      <Card className="w-96 hover:shadow-rose-500 cursor-pointer shadow-xl">
        <CardHeader className="pb-2">
          <CardTitle>{label}</CardTitle>
          <CardDescription className="py-0 text-xs">{date}</CardDescription>
        </CardHeader>
        <CardContent className="py-2" >
          <p className="font-bold text-lg">{value}</p>
        </CardContent>
        <CardFooter>
          <p className="text-xs text-rose-600">{period}</p>
        </CardFooter>
      </Card>
    </div>
  );
};

export default DataCard;
