import { useState } from 'react';
import { Award } from 'lucide-react';
import CertificateCard from '../components/CertificateCard';
import CertificatePreview from '../components/CertificatePreview';

// Mock certificate data
const mockCertificates = [
  {
    id: 'cert1',
    courseId: '1',
    userId: 'user1',
    courseName: 'Advanced Clinical Assessment Techniques',
    userName: 'Dr. John Smith',
    cpdPoints: 15,
    issueDate: '2024-03-10T10:00:00Z',
    completionDate: '2024-03-10T09:30:00Z',
    verificationCode: 'CERT-2024-001',
    instructor: {
      name: 'Dr. Sarah Johnson',
      title: 'Senior Clinical Educator, MBBS, FRACP',
      signature: 'https://example.com/signature.png'
    }
  },
  {
    id: 'cert2',
    courseId: '2',
    userId: 'user1',
    courseName: 'Emergency Medicine Updates 2024',
    userName: 'Dr. John Smith',
    cpdPoints: 20,
    issueDate: '2024-03-05T14:00:00Z',
    completionDate: '2024-03-05T13:45:00Z',
    verificationCode: 'CERT-2024-002',
    instructor: {
      name: 'Dr. Michael Chen',
      title: 'Emergency Medicine Specialist, MD, FACEM',
      signature: 'https://example.com/signature2.png'
    }
  }
];

export default function Certificates() {
  const [selectedCertificate, setSelectedCertificate] = useState(null);
  const [showPreview, setShowPreview] = useState(false);

  const handleDownload = (certificateId: string, format: 'pdf' | 'image') => {
    // Implementation for certificate download
    console.log(`Downloading certificate ${certificateId} in ${format} format`);
  };

  const handleView = (certificate) => {
    setSelectedCertificate(certificate);
    setShowPreview(true);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">My Certificates</h1>
            <p className="text-gray-600 mt-2">View and download your course completion certificates</p>
          </div>
          <div className="flex items-center bg-white px-4 py-2 rounded-lg shadow-sm border border-gray-200">
            <Award className="h-5 w-5 text-indigo-600 mr-2" />
            <span className="text-gray-900 font-medium">Total CPD Points: </span>
            <span className="ml-2 text-indigo-600 font-bold">
              {mockCertificates.reduce((sum, cert) => sum + cert.cpdPoints, 0)}
            </span>
          </div>
        </div>

        {showPreview && selectedCertificate ? (
          <div className="mb-8">
            <button
              onClick={() => setShowPreview(false)}
              className="mb-4 text-indigo-600 hover:text-indigo-700 font-medium"
            >
              ← Back to Certificates
            </button>
            <CertificatePreview certificate={selectedCertificate} />
          </div>
        ) : (
          <div className="grid grid-cols-1 gap-6">
            {mockCertificates.map((certificate) => (
              <CertificateCard
                key={certificate.id}
                certificate={certificate}
                onDownload={(format) => handleDownload(certificate.id, format)}
                onView={() => handleView(certificate)}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}