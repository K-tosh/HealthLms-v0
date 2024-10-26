import { Download, ExternalLink } from 'lucide-react';
import { Certificate } from '../types/certificate';

interface CertificateCardProps {
  certificate: Certificate;
  onDownload: (format: 'pdf' | 'image') => void;
  onView: () => void;
}

export default function CertificateCard({ certificate, onDownload, onView }: CertificateCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
      <div className="flex justify-between items-start mb-4">
        <div>
          <h3 className="text-lg font-semibold text-gray-900">{certificate.courseName}</h3>
          <p className="text-sm text-gray-500">Completed on {new Date(certificate.completionDate).toLocaleDateString()}</p>
        </div>
        <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm font-medium">
          {certificate.cpdPoints} CPD Points
        </span>
      </div>

      <div className="border-t border-gray-200 pt-4 mt-4">
        <div className="flex items-center justify-between text-sm">
          <div className="text-gray-500">
            Certificate ID: {certificate.verificationCode}
          </div>
          <div className="flex space-x-2">
            <button
              onClick={() => onDownload('pdf')}
              className="flex items-center text-indigo-600 hover:text-indigo-700"
            >
              <Download className="h-4 w-4 mr-1" />
              PDF
            </button>
            <button
              onClick={() => onDownload('image')}
              className="flex items-center text-indigo-600 hover:text-indigo-700"
            >
              <Download className="h-4 w-4 mr-1" />
              Image
            </button>
            <button
              onClick={onView}
              className="flex items-center text-indigo-600 hover:text-indigo-700"
            >
              <ExternalLink className="h-4 w-4 mr-1" />
              View
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}