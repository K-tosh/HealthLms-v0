import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import QuizQuestion from '../components/QuizQuestion';
import QuizTimer from '../components/QuizTimer';
import QuizResults from '../components/QuizResults';
import type { Quiz, QuizAttempt } from '../types/quiz';

// Mock quiz data for demonstration
const mockQuiz: Quiz = {
  id: 'q1',
  courseId: '1',
  type: 'pre',
  title: 'Pre-Course Assessment',
  description: 'Test your knowledge before starting the course.',
  timeLimit: 15,
  passingScore: 70,
  questions: [
    {
      id: '1',
      question: 'Which of the following is a key component of clinical assessment?',
      options: [
        'Patient history',
        'Physical examination',
        'Diagnostic reasoning',
        'All of the above'
      ],
      correctAnswer: 3,
      explanation: 'Clinical assessment involves gathering patient history, performing physical examination, and using diagnostic reasoning to form clinical decisions.'
    },
    {
      id: '2',
      question: 'What is the first step in performing a clinical assessment?',
      options: [
        'Physical examination',
        'Patient history taking',
        'Diagnostic tests',
        'Treatment planning'
      ],
      correctAnswer: 1,
      explanation: 'Patient history taking is the first and most important step in clinical assessment, as it guides subsequent examination and testing.'
    }
  ]
};

export default function Quiz() {
  const { courseId, quizId } = useParams();
  const navigate = useNavigate();
  const [quiz] = useState<Quiz>(mockQuiz);
  const [answers, setAnswers] = useState<number[]>(new Array(mockQuiz.questions.length).fill(-1));
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [showReview, setShowReview] = useState(false);
  const [attempt, setAttempt] = useState<QuizAttempt | null>(null);

  const handleAnswerSelect = (questionIndex: number, answer: number) => {
    const newAnswers = [...answers];
    newAnswers[questionIndex] = answer;
    setAnswers(newAnswers);
  };

  const handleSubmit = () => {
    const score = answers.reduce((acc, answer, index) => {
      return acc + (answer === quiz.questions[index].correctAnswer ? 1 : 0);
    }, 0);

    const newAttempt: QuizAttempt = {
      quizId: quiz.id,
      answers,
      score,
      timeTaken: quiz.timeLimit * 60,
      completed: true,
      startedAt: new Date().toISOString(),
      completedAt: new Date().toISOString()
    };

    setAttempt(newAttempt);
    setIsSubmitted(true);
  };

  if (!quiz) {
    return <div>Loading...</div>;
  }

  if (isSubmitted && attempt && !showReview) {
    return (
      <div className="min-h-screen bg-gray-50 py-12">
        <QuizResults
          quiz={quiz}
          attempt={attempt}
          onReview={() => setShowReview(true)}
          onRetry={() => {
            setAnswers(new Array(quiz.questions.length).fill(-1));
            setIsSubmitted(false);
            setShowReview(false);
            setCurrentQuestion(0);
          }}
        />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">{quiz.title}</h1>
          <p className="text-gray-600">{quiz.description}</p>
        </div>

        {!isSubmitted && <QuizTimer timeLimit={quiz.timeLimit} onTimeUp={handleSubmit} />}

        <div className="space-y-6">
          {quiz.questions.map((question, index) => (
            <QuizQuestion
              key={question.id}
              question={question}
              questionNumber={index + 1}
              selectedAnswer={answers[index]}
              showExplanation={showReview}
              onAnswerSelect={(answer) => handleAnswerSelect(index, answer)}
              disabled={isSubmitted}
            />
          ))}
        </div>

        {!isSubmitted && (
          <div className="mt-8 flex justify-end">
            <button
              onClick={handleSubmit}
              disabled={answers.includes(-1)}
              className="bg-indigo-600 text-white py-3 px-6 rounded-lg font-medium hover:bg-indigo-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Submit Quiz
            </button>
          </div>
        )}

        {showReview && (
          <div className="mt-8 flex justify-end">
            <button
              onClick={() => navigate(`/course/${courseId}`)}
              className="bg-indigo-600 text-white py-3 px-6 rounded-lg font-medium hover:bg-indigo-700 transition-colors"
            >
              Back to Course
            </button>
          </div>
        )}
      </div>
    </div>
  );
}