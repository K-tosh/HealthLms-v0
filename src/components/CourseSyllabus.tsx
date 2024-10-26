import { ChevronDown, ChevronUp, Clock } from 'lucide-react';
import { useState } from 'react';
import { type Course } from '../types/course';

interface CourseSyllabusProps {
  syllabus: Course['syllabus'];
}

export default function CourseSyllabus({ syllabus }: CourseSyllabusProps) {
  const [openModule, setOpenModule] = useState<string | null>(null);

  return (
    <div className="bg-white rounded-lg shadow-sm p-6">
      <h2 className="text-xl font-semibold text-gray-900 mb-4">Course Content</h2>
      <div className="space-y-4">
        {syllabus.map((module) => (
          <div key={module.id} className="border rounded-lg">
            <button
              onClick={() => setOpenModule(openModule === module.id ? null : module.id)}
              className="w-full flex items-center justify-between p-4 hover:bg-gray-50"
            >
              <div className="flex items-center space-x-2">
                <span className="font-medium text-gray-900">{module.title}</span>
                <div className="flex items-center text-sm text-gray-500">
                  <Clock className="h-4 w-4 mr-1" />
                  <span>{module.duration} mins</span>
                </div>
              </div>
              {openModule === module.id ? (
                <ChevronUp className="h-5 w-5 text-gray-400" />
              ) : (
                <ChevronDown className="h-5 w-5 text-gray-400" />
              )}
            </button>
            {openModule === module.id && (
              <div className="px-4 pb-4">
                <p className="text-gray-600 text-sm">{module.description}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}