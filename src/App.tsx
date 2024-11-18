import React, { useState } from 'react';
import { Activity } from 'lucide-react';
import { CSVUploader } from './components/CSVUploader';
import { DataVisualization } from './components/DataVisualization';
import { DataTable } from './components/DataTable';
import { HealthData, ChartData } from './types';

function App() {
  const [healthData, setHealthData] = useState<HealthData[]>([]);

  const handleDataUpload = (data: HealthData[]) => {
    const sortedData = [...data].sort((a, b) => 
      new Date(a.date).getTime() - new Date(b.date).getTime()
    );
    setHealthData(sortedData);
  };

  const chartData: ChartData[] = healthData.map(item => ({
    ...item,
    dateObj: new Date(item.date)
  }));

  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center space-x-3">
            <Activity className="h-8 w-8 text-blue-500" />
            <h1 className="text-2xl font-bold text-gray-900">
              Health Monitor
            </h1>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="space-y-8">
          <CSVUploader onDataUpload={handleDataUpload} />
          
          {healthData.length > 0 && (
            <>
              <DataVisualization data={chartData} />
              <DataTable data={healthData} />
            </>
          )}
        </div>
      </main>
    </div>
  );
}

export default App;