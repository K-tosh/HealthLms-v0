import { useState } from 'react';
import type { QuizQuestion as QuizQuestionType } from '../types/quiz';

interface QuizQuestionProps {
  question: QuizQuestionType;
  questionNumber: number;
  selectedAnswer?: number;
  showExplanation?: boolean;
  onAnswerSelect: (answer: number) => void;
  disabled?: boolean;
}

export default function QuizQuestion({
  question,
  questionNumber,
  selectedAnswer,
  showExplanation,
  onAnswerSelect,
  disabled
}: QuizQuestionProps) {
  return (
    <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
      <div className="flex items-start mb-4">
        <span className="flex-shrink-0 w-8 h-8 rounded-full bg-indigo-100 text-indigo-600 flex items-center justify-center font-medium mr-3">
          {questionNumber}
        </span>
        <h3 className="text-lg font-medium text-gray-900">{question.question}</h3>
      </div>

      <div className="space-y-3 ml-11">
        {question.options.map((option, index) => (
          <button
            key={index}
            onClick={() => onAnswerSelect(index)}
            disabled={disabled}
            className={`w-full text-left p-4 rounded-lg border transition-colors ${
              selectedAnswer === index
                ? 'border-indigo-600 bg-indigo-50'
                : 'border-gray-200 hover:border-indigo-200'
            } ${
              showExplanation
                ? index === question.correctAnswer
                  ? 'bg-green-50 border-green-500'
                  : selectedAnswer === index
                  ? 'bg-red-50 border-red-500'
                  : ''
                : ''
            } ${disabled ? 'cursor-not-allowed opacity-60' : ''}`}
          >
            <div className="flex items-center">
              <span className="w-6 h-6 rounded-full border border-current flex items-center justify-center mr-3 text-sm">
                {String.fromCharCode(65 + index)}
              </span>
              <span>{option}</span>
            </div>
          </button>
        ))}
      </div>

      {showExplanation && (
        <div className="mt-4 ml-11 p-4 bg-gray-50 rounded-lg">
          <p className="text-gray-700">{question.explanation}</p>
        </div>
      )}
    </div>
  );
}