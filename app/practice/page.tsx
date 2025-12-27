"use client";

import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";

const commonQuestions = [
  "Tell me about yourself",
  "What are your greatest strengths?",
  "What are your weaknesses?",
  "Why do you want to work here?",
  "Where do you see yourself in 5 years?",
  "Why should we hire you?",
  "Tell me about a time you faced a challenge",
  "Describe a time you worked in a team",
  "What is your greatest achievement?",
  "Do you have any questions for us?",
];

export default function Practice() {
  const router = useRouter();
  const [selectedQuestion, setSelectedQuestion] = useState("");
  const [customQuestion, setCustomQuestion] = useState("");
  const [isRecording, setIsRecording] = useState(false);
  const [hasRecording, setHasRecording] = useState(false);
  const [recordingTime, setRecordingTime] = useState(0);

  const handleStartRecording = () => {
    setIsRecording(true);
    setHasRecording(false);
    // TODO: Implement actual recording logic
    const interval = setInterval(() => {
      setRecordingTime((prev) => prev + 1);
    }, 1000);

    // Auto-stop after demo (remove in production)
    setTimeout(() => {
      setIsRecording(false);
      setHasRecording(true);
      clearInterval(interval);
    }, 3000);
  };

  const handleStopRecording = () => {
    setIsRecording(false);
    setHasRecording(true);
    // TODO: Implement actual stop recording logic
  };

  const handleSubmit = async () => {
    // TODO: Submit recording to API
    // For now, redirect to a mock session ID
    const mockSessionId = `session-${Date.now()}`;
    router.push(`/results/${mockSessionId}`);
  };

  const questionToUse = customQuestion || selectedQuestion;

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, "0")}`;
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Header */}
      <nav className="bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link
              href="/"
              className="text-2xl font-bold text-gray-900 dark:text-white"
            >
              AI Interview Coach
            </Link>
            <div className="flex gap-4">
              <Link
                href="/dashboard"
                className="px-4 py-2 text-sm font-medium text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white"
              >
                Dashboard
              </Link>
              <Link
                href="/resume"
                className="px-4 py-2 text-sm font-medium text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white"
              >
                Resume
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-2">
            Practice Interview
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            Select a question, record your answer, and get AI-powered feedback
          </p>
        </div>

        {/* Question Selection */}
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 mb-6">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
            Step 1: Choose Your Question
          </h2>

          {/* Common Questions */}
          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Common Interview Questions
            </label>
            <select
              value={selectedQuestion}
              onChange={(e) => {
                setSelectedQuestion(e.target.value);
                setCustomQuestion("");
              }}
              className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
            >
              <option value="">Select a question...</option>
              {commonQuestions.map((q, idx) => (
                <option key={idx} value={q}>
                  {q}
                </option>
              ))}
            </select>
          </div>

          {/* Custom Question */}
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Or Enter Your Own Question
            </label>
            <input
              type="text"
              value={customQuestion}
              onChange={(e) => {
                setCustomQuestion(e.target.value);
                setSelectedQuestion("");
              }}
              placeholder="Type your custom interview question..."
              className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-400"
            />
          </div>
        </div>

        {/* Recording Section */}
        {questionToUse && (
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 mb-6">
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
              Step 2: Record Your Answer
            </h2>

            {/* Selected Question Display */}
            <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-4 mb-6">
              <p className="text-sm font-medium text-blue-800 dark:text-blue-300 mb-1">
                Question:
              </p>
              <p className="text-lg text-blue-900 dark:text-blue-100">
                {questionToUse}
              </p>
            </div>

            {/* Recording Interface */}
            <div className="flex flex-col items-center space-y-6">
              {/* Recording Status */}
              <div className="w-full max-w-md">
                <div className="bg-gray-100 dark:bg-gray-700 rounded-lg p-8 text-center">
                  {isRecording ? (
                    <>
                      <div className="flex justify-center mb-4">
                        <div className="w-4 h-4 bg-red-500 rounded-full animate-pulse"></div>
                      </div>
                      <p className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                        Recording...
                      </p>
                      <p className="text-3xl font-mono font-bold text-gray-900 dark:text-white">
                        {formatTime(recordingTime)}
                      </p>
                    </>
                  ) : hasRecording ? (
                    <>
                      <svg
                        className="w-16 h-16 text-green-500 mx-auto mb-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                      <p className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                        Recording Complete
                      </p>
                      <p className="text-gray-600 dark:text-gray-400">
                        Duration: {formatTime(recordingTime)}
                      </p>
                    </>
                  ) : (
                    <>
                      <svg
                        className="w-16 h-16 text-gray-400 mx-auto mb-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z"
                        />
                      </svg>
                      <p className="text-lg font-semibold text-gray-900 dark:text-white">
                        Ready to Record
                      </p>
                      <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">
                        Click the button below to start
                      </p>
                    </>
                  )}
                </div>
              </div>

              {/* Recording Controls */}
              <div className="flex gap-4">
                {!isRecording && !hasRecording && (
                  <button
                    onClick={handleStartRecording}
                    className="px-8 py-4 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors font-semibold flex items-center gap-2"
                  >
                    <svg
                      className="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <circle cx="12" cy="12" r="8" />
                    </svg>
                    Start Recording
                  </button>
                )}

                {isRecording && (
                  <button
                    onClick={handleStopRecording}
                    className="px-8 py-4 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors font-semibold flex items-center gap-2"
                  >
                    <svg
                      className="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <rect x="6" y="6" width="12" height="12" />
                    </svg>
                    Stop Recording
                  </button>
                )}

                {hasRecording && !isRecording && (
                  <>
                    <button
                      onClick={() => {
                        setHasRecording(false);
                        setRecordingTime(0);
                      }}
                      className="px-6 py-4 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors font-semibold"
                    >
                      Re-record
                    </button>
                    <button
                      onClick={handleSubmit}
                      className="px-8 py-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-semibold flex items-center gap-2"
                    >
                      Submit for Feedback
                      <svg
                        className="w-5 h-5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M13 7l5 5m0 0l-5 5m5-5H6"
                        />
                      </svg>
                    </button>
                  </>
                )}
              </div>
            </div>
          </div>
        )}

        {/* Tips Section */}
        <div className="bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-yellow-900 dark:text-yellow-100 mb-3">
            Tips for a Great Answer
          </h3>
          <ul className="space-y-2 text-yellow-800 dark:text-yellow-200">
            <li className="flex items-start gap-2">
              <span className="text-yellow-600 dark:text-yellow-400 mt-1">
                •
              </span>
              <span>
                Use the STAR method (Situation, Task, Action, Result) for
                behavioral questions
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-yellow-600 dark:text-yellow-400 mt-1">
                •
              </span>
              <span>Speak clearly and avoid filler words like "um" and "uh"</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-yellow-600 dark:text-yellow-400 mt-1">
                •
              </span>
              <span>Take a moment to think before you start speaking</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-yellow-600 dark:text-yellow-400 mt-1">
                •
              </span>
              <span>
                Be specific with examples and quantify your achievements when
                possible
              </span>
            </li>
          </ul>
        </div>
      </main>
    </div>
  );
}
