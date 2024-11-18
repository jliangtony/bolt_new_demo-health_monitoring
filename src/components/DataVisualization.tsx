import React from 'react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer
} from 'recharts';
import { ChartData } from '../types';

interface DataVisualizationProps {
  data: ChartData[];
}

export function DataVisualization({ data }: DataVisualizationProps) {
  if (!data.length) return null;

  return (
    <div className="w-full space-y-8">
      <div className="bg-white p-6 rounded-xl shadow-lg">
        <h3 className="text-lg font-semibold mb-4">Heart Rate Over Time</h3>
        <div className="h-[300px]">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={data}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis
                dataKey="date"
                tickFormatter={(date) => new Date(date).toLocaleDateString()}
              />
              <YAxis />
              <Tooltip
                labelFormatter={(date) => new Date(date).toLocaleDateString()}
              />
              <Legend />
              <Line
                type="monotone"
                dataKey="heartRate"
                stroke="#8884d8"
                name="Heart Rate (BPM)"
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>

      <div className="bg-white p-6 rounded-xl shadow-lg">
        <h3 className="text-lg font-semibold mb-4">Sleep Duration Over Time</h3>
        <div className="h-[300px]">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={data}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis
                dataKey="date"
                tickFormatter={(date) => new Date(date).toLocaleDateString()}
              />
              <YAxis />
              <Tooltip
                labelFormatter={(date) => new Date(date).toLocaleDateString()}
              />
              <Legend />
              <Line
                type="monotone"
                dataKey="sleepHours"
                stroke="#82ca9d"
                name="Sleep Hours"
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}