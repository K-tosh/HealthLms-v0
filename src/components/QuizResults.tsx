import { CheckCircle, XCircle } from 'lucide-react';
import type { Quiz, QuizAttempt } from '../types/quiz';

interface QuizResultsProps {
  quiz: Quiz;
  attempt: QuizAttempt;
  onReview: () => void;
  onRetry?: () => void;
}

export default function QuizResults({ quiz, attempt, onReview, onRetry }: QuizResultsProps) {
  const percentage = Math.round((attempt.score / quiz.questions.length) * 100);
  const passed = percentage >= quiz.passingScore;

  return (
    <div className="bg-white rounded-lg shadow-lg p-8 max-w-2xl mx-auto">
      <div className="text-center mb-8">
        {passed ? (
          <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-4" />
        ) : (
          <XCircle className="h-16 w-16 text-red-500 mx-auto mb-4" />
        )}
        <h2 className="text-2xl font-bold text-gray-900 mb-2">
          {passed ? 'Congratulations!' : 'Keep Practicing'}
        </h2>
        <p className="text-gray-600">
          {passed
            ? 'You have successfully passed the quiz.'
            : 'You did not meet the minimum passing score.'}
        </p>
      </div>

      <div className="grid grid-cols-2 gap-6 mb-8">
        <div className="text-center p-4 bg-gray-50 rounded-lg">
          <p className="text-sm text-gray-600 mb-1">Your Score</p>
          <p className="text-2xl font-bold text-gray-900">{percentage}%</p>
        </div>
        <div className="text-center p-4 bg-gray-50 rounded-lg">
          <p className="text-sm text-gray-600 mb-1">Time Taken</p>
          <p className="text-2xl font-bold text-gray-900">
            {Math.floor(attempt.timeTaken / 60)}:{(attempt.timeTaken % 60)
              .toString()
              .padStart(2, '0')}
          </p>
        </div>
      </div>

      <div className="flex gap-4">
        <button
          onClick={onReview}
          className="flex-1 bg-indigo-600 text-white py-3 px-4 rounded-lg font-medium hover:bg-indigo-700 transition-colors"
        >
          Review Answers
        </button>
        {!passed && onRetry && (
          <button
            onClick={onRetry}
            className="flex-1 bg-white text-indigo-600 py-3 px-4 rounded-lg font-medium border border-indigo-600 hover:bg-indigo-50 transition-colors"
          >
            Try Again
          </button>
        )}
      </div>
    </div>
  );
}