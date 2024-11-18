import React from 'react';
import { HealthData } from '../types';

interface DataTableProps {
  data: HealthData[];
}

export function DataTable({ data }: DataTableProps) {
  if (!data.length) return null;

  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden">
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Date
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Heart Rate (BPM)
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Sleep Hours
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {data.map((row, index) => (
              <tr key={index} className="hover:bg-gray-50">
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                  {row.date}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                  {row.heartRate}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                  {row.sleepHours}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}