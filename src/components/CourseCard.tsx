import { Clock, Award, BarChart } from 'lucide-react';
import { Course } from '../types/course';

interface CourseCardProps {
  course: Course;
}

export default function CourseCard({ course }: CourseCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:scale-105">
      <img
        src={course.thumbnail}
        alt={course.title}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <div className="flex items-center justify-between mb-2">
          <span className="text-sm font-medium text-indigo-600">{course.category}</span>
          <span className="text-sm text-gray-500">{course.level}</span>
        </div>
        <h3 className="text-lg font-semibold text-gray-900 mb-2">{course.title}</h3>
        <p className="text-gray-600 text-sm mb-4 line-clamp-2">{course.description}</p>
        
        <div className="flex items-center justify-between text-sm text-gray-500">
          <div className="flex items-center">
            <Clock className="h-4 w-4 mr-1" />
            <span>{course.duration} mins</span>
          </div>
          <div className="flex items-center">
            <Award className="h-4 w-4 mr-1" />
            <span>{course.cpdPoints} CPD</span>
          </div>
          {course.completionRate && (
            <div className="flex items-center">
              <BarChart className="h-4 w-4 mr-1" />
              <span>{course.completionRate}%</span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}