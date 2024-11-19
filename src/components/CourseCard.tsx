import { Course } from '../types';

interface CourseCardProps {
  course: Course;
  isPreview?: boolean;
}

export default function CourseCard({ course, isPreview = false }: CourseCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:scale-105">
      <img
        src={course.image}
        alt={course.title}
        className="w-full h-48 object-cover"
      />
      <div className="p-6">
        <div className="flex justify-between items-start">
          <h3 className="text-xl font-semibold text-gray-900">{course.title}</h3>
          <span className={`px-2 py-1 text-xs rounded-full ${
            course.category === 'Frontend' 
              ? 'bg-purple-100 text-purple-800' 
              : 'bg-indigo-100 text-indigo-800'
          }`}>
            {course.category}
          </span>
        </div>
        <p className="mt-2 text-gray-600 line-clamp-2">{course.description}</p>
        <div className="mt-4 flex items-center justify-between">
          <span className="text-sm text-gray-500">{course.duration}</span>
          <span className={`px-2 py-1 text-xs rounded-full ${
            course.level === 'Beginner' 
              ? 'bg-green-100 text-green-800'
              : course.level === 'Intermediate'
              ? 'bg-yellow-100 text-yellow-800'
              : 'bg-red-100 text-red-800'
          }`}>
            {course.level}
          </span>
        </div>
        {!isPreview && (
          <button className="mt-4 w-full bg-purple-600 text-white py-2 px-4 rounded-md hover:bg-purple-700 transition-colors">
            Start Learning
          </button>
        )}
      </div>
    </div>
  );
}