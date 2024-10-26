import { Clock, Award, Users, Star } from 'lucide-react';
import { Course } from '../types/course';

interface CourseDetailHeaderProps {
  course: Course;
}

export default function CourseDetailHeader({ course }: CourseDetailHeaderProps) {
  return (
    <div className="bg-white border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <span className="px-3 py-1 bg-indigo-100 text-indigo-800 rounded-full text-sm font-medium">
                {course.category}
              </span>
              <span className="px-3 py-1 bg-gray-100 text-gray-800 rounded-full text-sm font-medium">
                {course.level}
              </span>
            </div>
            <h1 className="text-3xl font-bold text-gray-900 mb-4">{course.title}</h1>
            <p className="text-lg text-gray-600 mb-6">{course.description}</p>
            <div className="flex flex-wrap gap-6 text-sm text-gray-600">
              <div className="flex items-center">
                <Clock className="h-5 w-5 mr-2 text-indigo-600" />
                <span>{course.duration} mins</span>
              </div>
              <div className="flex items-center">
                <Award className="h-5 w-5 mr-2 text-indigo-600" />
                <span>{course.cpdPoints} CPD Points</span>
              </div>
              <div className="flex items-center">
                <Users className="h-5 w-5 mr-2 text-indigo-600" />
                <span>{course.enrollmentCount.toLocaleString()} enrolled</span>
              </div>
              <div className="flex items-center">
                <Star className="h-5 w-5 mr-2 text-yellow-400" />
                <span>{course.rating.toFixed(1)} Rating</span>
              </div>
            </div>
          </div>
          <div className="lg:pl-8">
            <img
              src={course.thumbnail}
              alt={course.title}
              className="w-full h-64 object-cover rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
    </div>
  );
}