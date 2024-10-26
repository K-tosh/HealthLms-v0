import { type Course } from '../types/course';

interface CourseInstructorProps {
  instructor: Course['instructor'];
}

export default function CourseInstructor({ instructor }: CourseInstructorProps) {
  return (
    <div className="bg-white rounded-lg shadow-sm p-6">
      <h2 className="text-xl font-semibold text-gray-900 mb-4">Your Instructor</h2>
      <div className="flex items-start space-x-4">
        <img
          src={instructor.avatar}
          alt={instructor.name}
          className="w-16 h-16 rounded-full object-cover"
        />
        <div>
          <h3 className="font-medium text-gray-900">{instructor.name}</h3>
          <p className="text-sm text-indigo-600 mb-2">{instructor.title}</p>
          <p className="text-sm text-gray-600">{instructor.bio}</p>
        </div>
      </div>
    </div>
  );
}