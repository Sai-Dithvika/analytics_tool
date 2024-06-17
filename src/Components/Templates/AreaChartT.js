import React from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const AreaChartT = ({ data }) => {
  return (
    <ResponsiveContainer width="100%" height={400}>
      <AreaChart data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="pagePath" label={{ value: 'Page Path', position: 'insideBottom', offset: -5 }} />
        <YAxis yAxisId="left" label={{ value: 'Total Users', angle: -90, position: 'insideLeft' }} />
        <YAxis yAxisId="right" orientation="right" label={{ value: 'New Users', angle: -90, position: 'insideRight' }} />
        <Tooltip 
          formatter={(value, name, props) => {
            if (name === "Total Users") {
              return [`${value}`, 'Total Users'];
            } else if (name === "New Users") {
              return [`${value}`, 'New Users'];
            }
            return [value, name];
          }} 
        />
        <Area yAxisId="left" type="monotone" dataKey="totalUsers" name="Total Users" stroke="#8884d8" fill="#8884d8" />
        <Area yAxisId="right" type="monotone" dataKey="newUsers" name="New Users" stroke="#82ca9d" fill="#82ca9d" />
      </AreaChart>
    </ResponsiveContainer>
  );
}

export default AreaChartT;
