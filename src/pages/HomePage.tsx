import { Search, BookOpen, Award, Users } from 'lucide-react';
import CourseCard from '../components/CourseCard';

const featuredCourses = [
  {
    id: '1',
    title: 'Advanced Clinical Assessment Techniques',
    description: 'Master the latest clinical assessment methodologies and improve patient care with evidence-based practices.',
    thumbnail: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80',
    duration: 120,
    cpdPoints: 15,
    category: 'Clinical Skills',
    level: 'Advanced' as const,
    completionRate: 94
  },
  {
    id: '2',
    title: 'Emergency Medicine Updates 2024',
    description: 'Stay current with the latest emergency medicine protocols and treatment guidelines.',
    thumbnail: 'https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&q=80',
    duration: 180,
    cpdPoints: 20,
    category: 'Emergency Care',
    level: 'Intermediate' as const,
    completionRate: 88
  },
  {
    id: '3',
    title: 'Healthcare Leadership & Management',
    description: 'Develop essential leadership skills for healthcare professionals and learn effective team management.',
    thumbnail: 'https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?auto=format&fit=crop&q=80',
    duration: 150,
    cpdPoints: 18,
    category: 'Leadership',
    level: 'Intermediate' as const,
    completionRate: 91
  }
];

export default function HomePage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Hero Section */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Advance Your Healthcare Career
        </h1>
        <p className="text-xl text-gray-600 mb-8">
          Access premium medical courses and earn CPD points for your professional development
        </p>
        <div className="max-w-2xl mx-auto">
          <div className="relative">
            <input
              type="text"
              placeholder="Search for courses..."
              className="w-full px-4 py-3 pl-12 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
            <Search className="absolute left-4 top-3.5 h-5 w-5 text-gray-400" />
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
          <div className="flex items-center mb-2">
            <BookOpen className="h-8 w-8 text-indigo-600" />
            <span className="ml-2 text-2xl font-bold text-gray-900">200+</span>
          </div>
          <p className="text-gray-600">Accredited Courses</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
          <div className="flex items-center mb-2">
            <Award className="h-8 w-8 text-indigo-600" />
            <span className="ml-2 text-2xl font-bold text-gray-900">500</span>
          </div>
          <p className="text-gray-600">CPD Points Available</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
          <div className="flex items-center mb-2">
            <Users className="h-8 w-8 text-indigo-600" />
            <span className="ml-2 text-2xl font-bold text-gray-900">50k+</span>
          </div>
          <p className="text-gray-600">Healthcare Professionals</p>
        </div>
      </div>

      {/* Featured Courses */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Featured Courses</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredCourses.map((course) => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>
      </div>
    </div>
  );
}