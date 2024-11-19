import { Circle } from 'lucide-react';

interface ProgressChartProps {
  progress: number;
  totalCourses: number;
  completedCourses: number;
}

export default function ProgressChart({ progress, totalCourses, completedCourses }: ProgressChartProps) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h3 className="text-lg font-semibold text-gray-900 mb-4">Your Progress</h3>
      <div className="relative w-32 h-32 mx-auto">
        <svg className="w-full h-full" viewBox="0 0 36 36">
          <path
            d="M18 2.0845
              a 15.9155 15.9155 0 0 1 0 31.831
              a 15.9155 15.9155 0 0 1 0 -31.831"
            fill="none"
            stroke="#E2E8F0"
            strokeWidth="3"
          />
          <path
            d="M18 2.0845
              a 15.9155 15.9155 0 0 1 0 31.831
              a 15.9155 15.9155 0 0 1 0 -31.831"
            fill="none"
            stroke="#9333EA"
            strokeWidth="3"
            strokeDasharray={`${progress}, 100`}
          />
        </svg>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
          <span className="text-2xl font-bold text-purple-600">{progress}%</span>
        </div>
      </div>
      <div className="mt-6 space-y-2">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <Circle className="w-4 h-4 text-purple-600 mr-2" fill="currentColor" />
            <span className="text-sm text-gray-600">Completed Courses</span>
          </div>
          <span className="font-semibold">{completedCourses}</span>
        </div>
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <Circle className="w-4 h-4 text-gray-300 mr-2" fill="currentColor" />
            <span className="text-sm text-gray-600">Total Courses</span>
          </div>
          <span className="font-semibold">{totalCourses}</span>
        </div>
      </div>
    </div>
  );
}