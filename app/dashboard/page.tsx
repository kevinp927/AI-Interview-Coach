"use client";

import Link from "next/link";
import { useState } from "react";

// Mock data
const mockSessions = [
  {
    id: "session-1",
    question: "Tell me about yourself",
    date: "2025-01-15",
    scores: {
      filler: 85,
      confidence: 78,
      clarity: 92,
      content: 88,
    },
    overall: 86,
  },
  {
    id: "session-2",
    question: "What are your greatest strengths?",
    date: "2025-01-14",
    scores: {
      filler: 72,
      confidence: 81,
      clarity: 85,
      content: 79,
    },
    overall: 79,
  },
  {
    id: "session-3",
    question: "Why do you want to work here?",
    date: "2025-01-13",
    scores: {
      filler: 68,
      confidence: 75,
      clarity: 80,
      content: 73,
    },
    overall: 74,
  },
  {
    id: "session-4",
    question: "Describe a time you worked in a team",
    date: "2025-01-12",
    scores: {
      filler: 90,
      confidence: 88,
      clarity: 87,
      content: 91,
    },
    overall: 89,
  },
];

const mockUserStats = {
  totalSessions: 12,
  averageScore: 82,
  creditsRemaining: 15,
  subscriptionTier: "Pro",
  improvementRate: "+12%",
};

export default function Dashboard() {
  const [sessions] = useState(mockSessions);
  const [stats] = useState(mockUserStats);

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
                href="/practice"
                className="px-4 py-2 text-sm font-medium text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white"
              >
                Practice
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
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Welcome Section */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-2">
            Welcome Back!
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            Track your progress and continue improving your interview skills
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid md:grid-cols-4 gap-6 mb-8">
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-sm font-medium text-gray-600 dark:text-gray-400">
                Total Sessions
              </h3>
              <svg
                className="w-8 h-8 text-blue-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"
                />
              </svg>
            </div>
            <p className="text-3xl font-bold text-gray-900 dark:text-white">
              {stats.totalSessions}
            </p>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-sm font-medium text-gray-600 dark:text-gray-400">
                Average Score
              </h3>
              <svg
                className="w-8 h-8 text-green-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                />
              </svg>
            </div>
            <p className="text-3xl font-bold text-gray-900 dark:text-white">
              {stats.averageScore}
              <span className="text-lg text-gray-600 dark:text-gray-400">
                /100
              </span>
            </p>
            <p className="text-sm text-green-600 dark:text-green-400 font-medium mt-1">
              {stats.improvementRate} from last week
            </p>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-sm font-medium text-gray-600 dark:text-gray-400">
                Credits
              </h3>
              <svg
                className="w-8 h-8 text-purple-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
            <p className="text-3xl font-bold text-gray-900 dark:text-white">
              {stats.creditsRemaining}
            </p>
            <button className="text-sm text-purple-600 dark:text-purple-400 hover:underline font-medium mt-1">
              Buy more credits
            </button>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-sm font-medium text-gray-600 dark:text-gray-400">
                Subscription
              </h3>
              <svg
                className="w-8 h-8 text-yellow-600"
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
            <p className="text-3xl font-bold text-gray-900 dark:text-white">
              {stats.subscriptionTier}
            </p>
            <button className="text-sm text-yellow-600 dark:text-yellow-400 hover:underline font-medium mt-1">
              Manage subscription
            </button>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <Link href="/practice">
            <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-lg shadow-lg p-8 text-white hover:from-blue-700 hover:to-blue-800 transition-all transform hover:scale-105 cursor-pointer">
              <h3 className="text-2xl font-bold mb-2">Start New Practice</h3>
              <p className="text-blue-100 mb-4">
                Continue improving with AI-powered interview practice
              </p>
              <div className="flex items-center gap-2 text-sm font-semibold">
                <span>Begin Practice</span>
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 7l5 5m0 0l-5 5m5-5H6"
                  />
                </svg>
              </div>
            </div>
          </Link>

          <Link href="/resume">
            <div className="bg-gradient-to-r from-purple-600 to-purple-700 rounded-lg shadow-lg p-8 text-white hover:from-purple-700 hover:to-purple-800 transition-all transform hover:scale-105 cursor-pointer">
              <h3 className="text-2xl font-bold mb-2">Optimize Resume</h3>
              <p className="text-purple-100 mb-4">
                Get AI feedback to improve your resume
              </p>
              <div className="flex items-center gap-2 text-sm font-semibold">
                <span>Upload Resume</span>
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 7l5 5m0 0l-5 5m5-5H6"
                  />
                </svg>
              </div>
            </div>
          </Link>
        </div>

        {/* Session History */}
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
              Recent Practice Sessions
            </h2>
            <button className="text-sm text-blue-600 dark:text-blue-400 hover:underline font-medium">
              View all sessions
            </button>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-200 dark:border-gray-700">
                  <th className="text-left py-3 px-4 text-sm font-semibold text-gray-600 dark:text-gray-400">
                    Question
                  </th>
                  <th className="text-left py-3 px-4 text-sm font-semibold text-gray-600 dark:text-gray-400">
                    Date
                  </th>
                  <th className="text-center py-3 px-4 text-sm font-semibold text-gray-600 dark:text-gray-400">
                    Filler
                  </th>
                  <th className="text-center py-3 px-4 text-sm font-semibold text-gray-600 dark:text-gray-400">
                    Confidence
                  </th>
                  <th className="text-center py-3 px-4 text-sm font-semibold text-gray-600 dark:text-gray-400">
                    Clarity
                  </th>
                  <th className="text-center py-3 px-4 text-sm font-semibold text-gray-600 dark:text-gray-400">
                    Content
                  </th>
                  <th className="text-center py-3 px-4 text-sm font-semibold text-gray-600 dark:text-gray-400">
                    Overall
                  </th>
                  <th className="text-right py-3 px-4 text-sm font-semibold text-gray-600 dark:text-gray-400">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody>
                {sessions.map((session) => (
                  <tr
                    key={session.id}
                    className="border-b border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700/50"
                  >
                    <td className="py-4 px-4 text-sm text-gray-900 dark:text-white font-medium">
                      {session.question}
                    </td>
                    <td className="py-4 px-4 text-sm text-gray-600 dark:text-gray-400">
                      {new Date(session.date).toLocaleDateString()}
                    </td>
                    <td className="py-4 px-4 text-center">
                      <span
                        className={`inline-flex items-center justify-center w-12 h-12 rounded-full ${getScoreBgColor(
                          session.scores.filler
                        )} ${getScoreColor(session.scores.filler)} font-semibold text-sm`}
                      >
                        {session.scores.filler}
                      </span>
                    </td>
                    <td className="py-4 px-4 text-center">
                      <span
                        className={`inline-flex items-center justify-center w-12 h-12 rounded-full ${getScoreBgColor(
                          session.scores.confidence
                        )} ${getScoreColor(session.scores.confidence)} font-semibold text-sm`}
                      >
                        {session.scores.confidence}
                      </span>
                    </td>
                    <td className="py-4 px-4 text-center">
                      <span
                        className={`inline-flex items-center justify-center w-12 h-12 rounded-full ${getScoreBgColor(
                          session.scores.clarity
                        )} ${getScoreColor(session.scores.clarity)} font-semibold text-sm`}
                      >
                        {session.scores.clarity}
                      </span>
                    </td>
                    <td className="py-4 px-4 text-center">
                      <span
                        className={`inline-flex items-center justify-center w-12 h-12 rounded-full ${getScoreBgColor(
                          session.scores.content
                        )} ${getScoreColor(session.scores.content)} font-semibold text-sm`}
                      >
                        {session.scores.content}
                      </span>
                    </td>
                    <td className="py-4 px-4 text-center">
                      <span
                        className={`inline-flex items-center justify-center w-16 h-16 rounded-full ${getScoreBgColor(
                          session.overall
                        )} ${getScoreColor(session.overall)} font-bold text-lg`}
                      >
                        {session.overall}
                      </span>
                    </td>
                    <td className="py-4 px-4 text-right">
                      <Link
                        href={`/results/${session.id}`}
                        className="inline-block px-4 py-2 bg-blue-600 text-white text-sm rounded-lg hover:bg-blue-700 transition-colors font-medium"
                      >
                        View Details
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </main>
    </div>
  );
}
