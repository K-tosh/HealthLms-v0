import { useParams } from 'react-router-dom';
import CourseDetailHeader from '../components/CourseDetailHeader';
import CourseInstructor from '../components/CourseInstructor';
import CourseSyllabus from '../components/CourseSyllabus';

// Mock data for demonstration
const courseData = {
  id: '1',
  title: 'Advanced Clinical Assessment Techniques',
  description: 'Master the latest clinical assessment methodologies and improve patient care with evidence-based practices. This comprehensive course covers physical examination techniques, patient history taking, and diagnostic reasoning.',
  thumbnail: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80',
  duration: 120,
  cpdPoints: 15,
  category: 'Clinical Skills',
  level: 'Advanced' as const,
  completionRate: 94,
  enrollmentCount: 1234,
  rating: 4.8,
  instructor: {
    name: 'Dr. Sarah Johnson',
    title: 'Senior Clinical Educator, MBBS, FRACP',
    bio: 'Dr. Johnson has over 15 years of experience in clinical education and practice. She specializes in advanced assessment techniques and has trained healthcare professionals worldwide.',
    avatar: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&q=80'
  },
  syllabus: [
    {
      id: 'm1',
      title: 'Module 1: Foundations of Clinical Assessment',
      duration: 30,
      description: 'Introduction to advanced clinical assessment principles and framework.'
    },
    {
      id: 'm2',
      title: 'Module 2: Physical Examination Techniques',
      duration: 45,
      description: 'Comprehensive coverage of systematic physical examination methods.'
    },
    {
      id: 'm3',
      title: 'Module 3: Diagnostic Reasoning',
      duration: 45,
      description: 'Development of clinical reasoning skills and differential diagnosis.'
    }
  ],
  learningOutcomes: [
    'Master advanced physical examination techniques',
    'Develop comprehensive patient assessment skills',
    'Enhance diagnostic reasoning abilities',
    'Implement evidence-based assessment practices'
  ],
  prerequisites: [
    'Basic clinical examination skills',
    'Current healthcare professional registration',
    'Minimum 2 years clinical experience'
  ]
};

export default function CourseDetail() {
  const { courseId } = useParams();

  return (
    <div className="min-h-screen bg-gray-50">
      <CourseDetailHeader course={courseData} />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-8">
            <CourseSyllabus syllabus={courseData.syllabus} />
            
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">Learning Outcomes</h2>
              <ul className="space-y-2">
                {courseData.learningOutcomes.map((outcome, index) => (
                  <li key={index} className="flex items-start">
                    <span className="flex-shrink-0 w-5 h-5 rounded-full bg-indigo-100 text-indigo-600 flex items-center justify-center text-sm mr-3 mt-0.5">
                      {index + 1}
                    </span>
                    <span className="text-gray-600">{outcome}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          
          <div className="space-y-8">
            <CourseInstructor instructor={courseData.instructor} />
            
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">Prerequisites</h2>
              <ul className="space-y-2">
                {courseData.prerequisites.map((prerequisite, index) => (
                  <li key={index} className="flex items-start">
                    <span className="w-1.5 h-1.5 rounded-full bg-indigo-600 mt-2 mr-3" />
                    <span className="text-gray-600">{prerequisite}</span>
                  </li>
                ))}
              </ul>
            </div>

            <button className="w-full bg-indigo-600 text-white py-3 px-4 rounded-lg font-medium hover:bg-indigo-700 transition-colors">
              Enroll Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}