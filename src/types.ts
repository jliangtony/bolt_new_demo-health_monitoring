export interface HealthData {
  date: string;
  heartRate: number;
  sleepHours: number;
}

export interface ChartData extends HealthData {
  dateObj: Date;
}