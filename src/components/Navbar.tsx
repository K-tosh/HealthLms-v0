import { Menu, X, BookOpen, Award, User } from 'lucide-react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            <Link to="/" className="flex items-center">
              <BookOpen className="h-8 w-8 text-indigo-600" />
              <span className="ml-2 text-xl font-bold text-gray-800">HealthLMS</span>
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/courses" className="text-gray-600 hover:text-indigo-600">Courses</Link>
            <Link to="/my-learning" className="text-gray-600 hover:text-indigo-600">My Learning</Link>
            <Link to="/certificates" className="text-gray-600 hover:text-indigo-600">Certificates</Link>
            <div className="flex items-center space-x-2">
              <Award className="h-5 w-5 text-indigo-600" />
              <span className="text-gray-600">120 CPD Points</span>
            </div>
            <Link to="/profile" className="p-2 rounded-full hover:bg-gray-100">
              <User className="h-6 w-6 text-gray-600" />
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link to="/courses" className="block px-3 py-2 text-gray-600 hover:text-indigo-600">
              Courses
            </Link>
            <Link to="/my-learning" className="block px-3 py-2 text-gray-600 hover:text-indigo-600">
              My Learning
            </Link>
            <Link to="/certificates" className="block px-3 py-2 text-gray-600 hover:text-indigo-600">
              Certificates
            </Link>
            <div className="px-3 py-2 flex items-center space-x-2">
              <Award className="h-5 w-5 text-indigo-600" />
              <span className="text-gray-600">120 CPD Points</span>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}