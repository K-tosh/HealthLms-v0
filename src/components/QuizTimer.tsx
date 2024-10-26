import { useEffect, useState } from 'react';

interface QuizTimerProps {
  timeLimit: number;
  onTimeUp: () => void;
}

export default function QuizTimer({ timeLimit, onTimeUp }: QuizTimerProps) {
  const [timeLeft, setTimeLeft] = useState(timeLimit * 60);

  useEffect(() => {
    if (timeLeft <= 0) {
      onTimeUp();
      return;
    }

    const timer = setInterval(() => {
      setTimeLeft((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [timeLeft, onTimeUp]);

  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;

  return (
    <div className="fixed top-4 right-4 bg-white rounded-lg shadow-lg p-4 border border-gray-200">
      <div className="text-center">
        <p className="text-sm text-gray-600 mb-1">Time Remaining</p>
        <p className={`text-2xl font-bold ${timeLeft < 60 ? 'text-red-600' : 'text-gray-900'}`}>
          {minutes.toString().padStart(2, '0')}:{seconds.toString().padStart(2, '0')}
        </p>
      </div>
    </div>
  );
}