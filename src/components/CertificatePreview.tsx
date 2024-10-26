import { Award, Calendar, CheckCircle } from 'lucide-react';
import { Certificate } from '../types/certificate';

interface CertificatePreviewProps {
  certificate: Certificate;
}

export default function CertificatePreview({ certificate }: CertificatePreviewProps) {
  return (
    <div className="w-full max-w-4xl mx-auto bg-white p-12 rounded-lg shadow-lg border border-gray-200">
      <div className="text-center mb-12">
        <Award className="w-20 h-20 text-indigo-600 mx-auto mb-6" />
        <h1 className="text-4xl font-serif text-gray-900 mb-4">Certificate of Completion</h1>
        <p className="text-xl text-gray-600">This is to certify that</p>
        <p className="text-3xl font-semibold text-gray-900 mt-4 mb-6">{certificate.userName}</p>
        <p className="text-xl text-gray-600">has successfully completed the course</p>
        <p className="text-2xl font-semibold text-gray-900 mt-4 mb-8">{certificate.courseName}</p>
      </div>

      <div className="grid grid-cols-3 gap-8 mb-12">
        <div className="text-center">
          <Calendar className="w-8 h-8 text-indigo-600 mx-auto mb-2" />
          <p className="text-sm text-gray-600">Completion Date</p>
          <p className="font-medium text-gray-900">
            {new Date(certificate.completionDate).toLocaleDateString()}
          </p>
        </div>
        <div className="text-center">
          <Award className="w-8 h-8 text-indigo-600 mx-auto mb-2" />
          <p className="text-sm text-gray-600">CPD Points Earned</p>
          <p className="font-medium text-gray-900">{certificate.cpdPoints} Points</p>
        </div>
        <div className="text-center">
          <CheckCircle className="w-8 h-8 text-indigo-600 mx-auto mb-2" />
          <p className="text-sm text-gray-600">Certificate ID</p>
          <p className="font-medium text-gray-900">{certificate.verificationCode}</p>
        </div>
      </div>

      <div className="flex justify-between items-end mt-12 pt-8 border-t border-gray-200">
        <div>
          <img
            src={certificate.instructor.signature}
            alt="Instructor Signature"
            className="h-12 mb-2"
          />
          <p className="font-medium text-gray-900">{certificate.instructor.name}</p>
          <p className="text-sm text-gray-600">{certificate.instructor.title}</p>
        </div>
        <div className="text-right">
          <p className="text-sm text-gray-600">Issue Date</p>
          <p className="font-medium text-gray-900">
            {new Date(certificate.issueDate).toLocaleDateString()}
          </p>
        </div>
      </div>
    </div>
  );
}