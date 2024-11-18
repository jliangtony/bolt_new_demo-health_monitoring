import React, { useCallback } from 'react';
import { Upload } from 'lucide-react';
import Papa from 'papaparse';
import { HealthData } from '../types';

interface CSVUploaderProps {
  onDataUpload: (data: HealthData[]) => void;
}

export function CSVUploader({ onDataUpload }: CSVUploaderProps) {
  const handleFileUpload = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    Papa.parse(file, {
      complete: (results) => {
        const parsedData: HealthData[] = results.data
          .slice(1) // Skip header row
          .map((row: any) => ({
            date: row[0],
            heartRate: Number(row[1]),
            sleepHours: Number(row[2])
          }))
          .filter((item: HealthData) => 
            item.date && !isNaN(item.heartRate) && !isNaN(item.sleepHours)
          );
        onDataUpload(parsedData);
      },
      header: false
    });
  }, [onDataUpload]);

  return (
    <div className="w-full max-w-xl mx-auto p-6 bg-white rounded-xl shadow-lg">
      <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center">
        <input
          type="file"
          accept=".csv"
          onChange={handleFileUpload}
          className="hidden"
          id="csvInput"
        />
        <label
          htmlFor="csvInput"
          className="flex flex-col items-center cursor-pointer"
        >
          <Upload className="w-12 h-12 text-blue-500 mb-4" />
          <span className="text-lg font-semibold text-gray-700 mb-2">
            Upload CSV File
          </span>
          <span className="text-sm text-gray-500">
            Click to select or drag and drop
          </span>
        </label>
      </div>

      <div className="mt-8">
        <h3 className="text-lg font-semibold mb-4">CSV Format Requirements:</h3>
        <div className="bg-gray-50 p-4 rounded-lg">
          <p className="text-sm text-gray-600 mb-2">Required columns:</p>
          <ul className="list-disc list-inside text-sm text-gray-600 space-y-1">
            <li>Date (YYYY-MM-DD)</li>
            <li>Heart Rate (BPM)</li>
            <li>Sleep Hours (decimal)</li>
          </ul>
          <div className="mt-4">
            <p className="text-sm text-gray-600 mb-2">Example:</p>
            <pre className="bg-gray-100 p-2 rounded text-xs">
              date,heartRate,sleepHours{'\n'}
              2024-01-01,72,7.5{'\n'}
              2024-01-02,68,8.0{'\n'}
              2024-01-03,75,6.5
            </pre>
          </div>
        </div>
      </div>
    </div>
  );
}