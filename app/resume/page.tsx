"use client";

import Link from "next/link";
import { useState } from "react";

export default function Resume() {
  const [resumeText, setResumeText] = useState("");
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [feedback, setFeedback] = useState<{
    suggestions: string[];
    rewrittenBullets: { original: string; improved: string }[];
  } | null>(null);

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      // TODO: Implement actual file parsing
      const reader = new FileReader();
      reader.onload = (event) => {
        const text = event.target?.result as string;
        setResumeText(text);
      };
      reader.readAsText(file);
    }
  };

  const handleAnalyze = async () => {
    setIsAnalyzing(true);
    // TODO: Call API to analyze resume

    // Mock response for demo
    setTimeout(() => {
      setFeedback({
        suggestions: [
          "Use more action verbs at the start of bullet points (e.g., 'Led', 'Developed', 'Implemented')",
          "Quantify your achievements with specific numbers and metrics",
          "Remove passive language and use active voice throughout",
          "Tailor your skills section to match the job description",
          "Keep bullet points concise - aim for 1-2 lines each",
        ],
        rewrittenBullets: [
          {
            original: "Responsible for managing a team of developers",
            improved:
              "Led a team of 5 developers to deliver 3 major projects, increasing productivity by 25%",
          },
          {
            original: "Worked on improving the company website",
            improved:
              "Redesigned company website using React and Next.js, resulting in 40% faster load times and 30% increase in user engagement",
          },
          {
            original: "Helped with customer support tasks",
            improved:
              "Resolved 50+ customer support tickets weekly, maintaining a 95% satisfaction rating",
          },
        ],
      });
      setIsAnalyzing(false);
    }, 2000);
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
                href="/dashboard"
                className="px-4 py-2 text-sm font-medium text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white"
              >
                Dashboard
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-2">
            Resume Optimizer
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            Upload your resume or paste the text to get AI-powered improvement
            suggestions
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-6">
          {/* Input Section */}
          <div className="space-y-6">
            {/* File Upload */}
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                Upload Resume
              </h2>
              <div className="border-2 border-dashed border-gray-300 dark:border-gray-600 rounded-lg p-8 text-center hover:border-blue-500 dark:hover:border-blue-400 transition-colors">
                <input
                  type="file"
                  id="resume-upload"
                  accept=".pdf,.doc,.docx,.txt"
                  onChange={handleFileUpload}
                  className="hidden"
                />
                <label
                  htmlFor="resume-upload"
                  className="cursor-pointer flex flex-col items-center"
                >
                  <svg
                    className="w-12 h-12 text-gray-400 mb-3"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                    />
                  </svg>
                  <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                    Click to upload or drag and drop
                  </span>
                  <span className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                    PDF, DOC, DOCX, or TXT (MAX. 5MB)
                  </span>
                </label>
              </div>
            </div>

            {/* Text Input */}
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                Or Paste Resume Text
              </h2>
              <textarea
                value={resumeText}
                onChange={(e) => setResumeText(e.target.value)}
                placeholder="Paste your resume content here..."
                rows={12}
                className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-400 font-mono text-sm"
              />
              <button
                onClick={handleAnalyze}
                disabled={!resumeText || isAnalyzing}
                className="mt-4 w-full px-6 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 disabled:bg-gray-400 disabled:cursor-not-allowed transition-colors font-semibold"
              >
                {isAnalyzing ? (
                  <span className="flex items-center justify-center gap-2">
                    <svg
                      className="animate-spin h-5 w-5"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      />
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      />
                    </svg>
                    Analyzing...
                  </span>
                ) : (
                  "Analyze Resume"
                )}
              </button>
            </div>
          </div>

          {/* Feedback Section */}
          <div className="space-y-6">
            {feedback ? (
              <>
                {/* General Suggestions */}
                <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
                  <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
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
                        d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                      />
                    </svg>
                    Suggestions
                  </h2>
                  <ul className="space-y-3">
                    {feedback.suggestions.map((suggestion, idx) => (
                      <li
                        key={idx}
                        className="flex items-start gap-3 text-gray-700 dark:text-gray-300"
                      >
                        <span className="flex-shrink-0 w-6 h-6 bg-purple-100 dark:bg-purple-900 text-purple-600 dark:text-purple-300 rounded-full flex items-center justify-center text-sm font-semibold mt-0.5">
                          {idx + 1}
                        </span>
                        <span>{suggestion}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Rewritten Bullets */}
                <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
                  <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
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
                        d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                      />
                    </svg>
                    Improved Bullet Points
                  </h2>
                  <div className="space-y-6">
                    {feedback.rewrittenBullets.map((bullet, idx) => (
                      <div
                        key={idx}
                        className="border-l-4 border-purple-500 pl-4"
                      >
                        <div className="mb-2">
                          <span className="text-xs font-semibold text-red-600 dark:text-red-400 uppercase">
                            Before:
                          </span>
                          <p className="text-sm text-gray-600 dark:text-gray-400 line-through mt-1">
                            {bullet.original}
                          </p>
                        </div>
                        <div>
                          <span className="text-xs font-semibold text-green-600 dark:text-green-400 uppercase">
                            After:
                          </span>
                          <p className="text-sm text-gray-900 dark:text-white font-medium mt-1">
                            {bullet.improved}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Actions */}
                <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-4">
                  <p className="text-sm text-blue-800 dark:text-blue-200 mb-3">
                    Want more personalized feedback?
                  </p>
                  <button className="w-full px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-semibold">
                    Get Full Resume Review
                  </button>
                </div>
              </>
            ) : (
              <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-12 text-center">
                <svg
                  className="w-16 h-16 text-gray-300 dark:text-gray-600 mx-auto mb-4"
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
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  No Resume Analyzed Yet
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Upload or paste your resume to get started with AI-powered
                  suggestions
                </p>
              </div>
            )}
          </div>
        </div>
      </main>
    </div>
  );
}
