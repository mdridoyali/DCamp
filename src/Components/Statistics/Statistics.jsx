import React, { useEffect, useState } from "react";
import { PieChart, Pie, Tooltip, Cell } from "recharts";

const Statistics = () => {
  const [donateItems, setDonateItems] = useState([]);

  useEffect(() => {
    const storedDonations = JSON.parse(localStorage.getItem("donation"));
    if (storedDonations) {
      setDonateItems(storedDonations);
    }
  }, []);

  const calDonationPercentage = () => {
    if (donateItems.length === 0) {
      return 0;
    }
    const percentage = (donateItems.length / 12) * 100;
    return percentage;
  };

  const remainingPercentage = 100 - calDonationPercentage();

  const renderCustomizedLabel = ({
    cx,
    cy,
    midAngle,
    innerRadius,
    outerRadius,
    percent,
  }) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * (Math.PI / 180));
    const y = cy + radius * Math.sin(-midAngle * (Math.PI / 180));

    return (
      <text
        x={x}
        y={y}
        fill="white"
        fontSize={15}
        fontWeight={'bold'}
        textAnchor="middle"
        dominantBaseline="central"
      >
        {`${(percent * 100).toFixed(1)}%`}
      </text>
    );
  };

  return (
    <div className="flex flex-col justify-center items-center mt-6">
      <h2 className="text-3xl font-bold">Donation Chart</h2>
      <div>
        <PieChart width={375} height={250}>
          <Pie
            data={[
              { name: "Your Donation", value: calDonationPercentage() },
              { name:"Total Donation", value: remainingPercentage },
            ]}
            cx="50%"
            cy="50%"
            labelLine={false}
            label={renderCustomizedLabel}
            outerRadius={80}
            fill="#8884d8"
            dataKey="value"
          >
            <Cell key="Donations" fill="#008000" />
            <Cell key="Remaining" fill="#FF0000" />
          </Pie>
          <Tooltip />
        </PieChart>
      </div>
      <div className="flex gap-x-5">
        <div className="flex gap-2 items-center">
          <p className="font-semibold">Your Donation</p>
          <div className="h-2 w-12 bg-green-600"></div>
        </div>
        <div className="flex gap-2 items-center">
          <p className="font-semibold">Total Donation</p>
          <div className="h-2 w-12 bg-red-600"></div>
        </div>
      </div>
    </div>
  );
};

export default Statistics;
