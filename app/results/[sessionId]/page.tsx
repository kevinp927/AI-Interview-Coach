"use client";

import Link from "next/link";
import { useParams } from "next/navigation";
import { useState } from "react";

// Mock data
const mockResult = {
  sessionId: "session-1",
  question: "Tell me about yourself",
  date: "2025-01-15",
  transcript:
    "Um, well, I'm a software developer with about 5 years of experience. I've worked primarily with React and Node.js, uh, building web applications. In my current role, I've led a team of 3 developers and we've successfully delivered, you know, several projects. I'm really passionate about, like, creating user-friendly interfaces and, um, solving complex problems. I'm looking for new opportunities where I can, uh, continue to grow and make an impact.",
  scores: {
    filler: 72,
    confidence: 78,
    clarity: 85,
    content: 88,
  },
  overall: 81,
  fillerWords: {
    um: 4,
    uh: 3,
    like: 1,
    "you know": 1,
  },
  feedback: {
    strengths: [
      "Strong content - mentioned specific technologies and leadership experience",
      "Good structure - covered experience, current role, and future goals",
      "Quantified achievements (5 years experience, team of 3)",
    ],
    improvements: [
      "Reduce filler words (um, uh, like, you know) - practice answering more smoothly",
      "Start stronger - lead with your most impressive achievement",
      "Be more specific about the impact you've made in past projects",
      "Practice pausing instead of using filler words when thinking",
    ],
  },
  suggestedAnswer:
    "I'm a software developer with 5 years of experience specializing in React and Node.js. In my current role, I lead a team of 3 developers where we've successfully delivered multiple web applications that serve over 100,000 users. I'm particularly proud of a recent project where we reduced page load times by 40% through performance optimization. I'm passionate about creating intuitive user interfaces and solving complex technical challenges. I'm excited about this opportunity because it aligns with my goal to work on scalable applications that make a real difference for users.",
};

export default function Results() {
  const params = useParams();
  const [result] = useState(mockResult);

  const getScoreColor = (score: number) => {
    if (score >= 85) return "text-green-600 dark:text-green-400";
    if (score >= 70) return "text-yellow-600 dark:text-yellow-400";
    return "text-red-600 dark:text-red-400";
  };

  const getScoreBgColor = (score: number) => {
    if (score >= 85) return "bg-green-100 dark:bg-green-900";
    if (score >= 70) return "bg-yellow-100 dark:bg-yellow-900";
    return "bg-red-100 dark:bg-red-900";
  };

  const getProgressBarColor = (score: number) => {
    if (score >= 85) return "bg-green-600";
    if (score >= 70) return "bg-yellow-600";
    return "bg-red-600";
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
                href="/practice"
                className="px-4 py-2 text-sm font-medium bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
              >
                Practice Again
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400 mb-2">
            <Link href="/dashboard" className="hover:text-gray-900 dark:hover:text-white">
              Dashboard
            </Link>
            <span>/</span>
            <span>Session Results</span>
          </div>
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-2">
            Interview Feedback
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            Session ID: {params.sessionId as string} • {new Date(result.date).toLocaleDateString()}
          </p>
        </div>

        {/* Overall Score */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg shadow-lg p-8 mb-6 text-white">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-2xl font-bold mb-2">Overall Performance</h2>
              <p className="text-blue-100 text-lg">Question: {result.question}</p>
            </div>
            <div className="text-center">
              <div className="text-6xl font-bold mb-2">{result.overall}</div>
              <div className="text-xl text-blue-100">out of 100</div>
            </div>
          </div>
        </div>

        {/* Detailed Scores */}
        <div className="grid md:grid-cols-4 gap-6 mb-6">
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
            <div className="flex items-center justify-between mb-3">
              <h3 className="text-sm font-semibold text-gray-600 dark:text-gray-400 uppercase">
                Filler Words
              </h3>
              <svg
                className="w-6 h-6 text-blue-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z"
                />
              </svg>
            </div>
            <div
              className={`text-4xl font-bold mb-2 ${getScoreColor(
                result.scores.filler
              )}`}
            >
              {result.scores.filler}
            </div>
            <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
              <div
                className={`h-2 rounded-full ${getProgressBarColor(
                  result.scores.filler
                )}`}
                style={{ width: `${result.scores.filler}%` }}
              />
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
            <div className="flex items-center justify-between mb-3">
              <h3 className="text-sm font-semibold text-gray-600 dark:text-gray-400 uppercase">
                Confidence
              </h3>
              <svg
                className="w-6 h-6 text-purple-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5"
                />
              </svg>
            </div>
            <div
              className={`text-4xl font-bold mb-2 ${getScoreColor(
                result.scores.confidence
              )}`}
            >
              {result.scores.confidence}
            </div>
            <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
              <div
                className={`h-2 rounded-full ${getProgressBarColor(
                  result.scores.confidence
                )}`}
                style={{ width: `${result.scores.confidence}%` }}
              />
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
            <div className="flex items-center justify-between mb-3">
              <h3 className="text-sm font-semibold text-gray-600 dark:text-gray-400 uppercase">
                Clarity
              </h3>
              <svg
                className="w-6 h-6 text-green-600"
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
            </div>
            <div
              className={`text-4xl font-bold mb-2 ${getScoreColor(
                result.scores.clarity
              )}`}
            >
              {result.scores.clarity}
            </div>
            <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
              <div
                className={`h-2 rounded-full ${getProgressBarColor(
                  result.scores.clarity
                )}`}
                style={{ width: `${result.scores.clarity}%` }}
              />
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
            <div className="flex items-center justify-between mb-3">
              <h3 className="text-sm font-semibold text-gray-600 dark:text-gray-400 uppercase">
                Content
              </h3>
              <svg
                className="w-6 h-6 text-yellow-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
                />
              </svg>
            </div>
            <div
              className={`text-4xl font-bold mb-2 ${getScoreColor(
                result.scores.content
              )}`}
            >
              {result.scores.content}
            </div>
            <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
              <div
                className={`h-2 rounded-full ${getProgressBarColor(
                  result.scores.content
                )}`}
                style={{ width: `${result.scores.content}%` }}
              />
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-6 mb-6">
          {/* Transcript */}
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
            <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
              <svg
                className="w-6 h-6 text-blue-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                />
              </svg>
              Your Transcript
            </h2>
            <div className="bg-gray-50 dark:bg-gray-900 rounded-lg p-4 text-gray-700 dark:text-gray-300 leading-relaxed">
              {result.transcript}
            </div>

            {/* Filler Words Breakdown */}
            <div className="mt-4 p-4 bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded-lg">
              <h3 className="text-sm font-semibold text-yellow-900 dark:text-yellow-100 mb-2">
                Filler Words Detected:
              </h3>
              <div className="flex flex-wrap gap-2">
                {Object.entries(result.fillerWords).map(([word, count]) => (
                  <span
                    key={word}
                    className="px-3 py-1 bg-yellow-200 dark:bg-yellow-800 text-yellow-900 dark:text-yellow-100 rounded-full text-sm font-medium"
                  >
                    "{word}" × {count}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Suggested Answer */}
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
            <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
              <svg
                className="w-6 h-6 text-green-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"
                />
              </svg>
              Suggested Improved Answer
            </h2>
            <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg p-4 text-gray-700 dark:text-gray-300 leading-relaxed">
              {result.suggestedAnswer}
            </div>
            <div className="mt-4 text-sm text-gray-600 dark:text-gray-400">
              💡 Notice how this version eliminates filler words, includes specific metrics, and demonstrates clear impact.
            </div>
          </div>
        </div>

        {/* Feedback Sections */}
        <div className="grid lg:grid-cols-2 gap-6 mb-6">
          {/* Strengths */}
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
            <h2 className="text-xl font-bold text-green-600 dark:text-green-400 mb-4 flex items-center gap-2">
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5"
                />
              </svg>
              What You Did Well
            </h2>
            <ul className="space-y-3">
              {result.feedback.strengths.map((strength, idx) => (
                <li
                  key={idx}
                  className="flex items-start gap-3 text-gray-700 dark:text-gray-300"
                >
                  <span className="flex-shrink-0 w-6 h-6 bg-green-100 dark:bg-green-900 text-green-600 dark:text-green-300 rounded-full flex items-center justify-center text-sm font-semibold mt-0.5">
                    ✓
                  </span>
                  <span>{strength}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Areas for Improvement */}
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
            <h2 className="text-xl font-bold text-blue-600 dark:text-blue-400 mb-4 flex items-center gap-2">
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 10V3L4 14h7v7l9-11h-7z"
                />
              </svg>
              Areas for Improvement
            </h2>
            <ul className="space-y-3">
              {result.feedback.improvements.map((improvement, idx) => (
                <li
                  key={idx}
                  className="flex items-start gap-3 text-gray-700 dark:text-gray-300"
                >
                  <span className="flex-shrink-0 w-6 h-6 bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-300 rounded-full flex items-center justify-center text-sm font-semibold mt-0.5">
                    {idx + 1}
                  </span>
                  <span>{improvement}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Next Steps */}
        <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg shadow-lg p-8 text-white text-center">
          <h2 className="text-2xl font-bold mb-4">Ready to Improve?</h2>
          <p className="text-purple-100 mb-6 text-lg">
            Practice makes perfect! Try another question to continue building your skills.
          </p>
          <Link
            href="/practice"
            className="inline-block px-8 py-4 bg-white text-purple-600 rounded-lg hover:bg-gray-100 transition-colors font-semibold text-lg"
          >
            Practice Next Question
          </Link>
        </div>
      </main>
    </div>
  );
}
