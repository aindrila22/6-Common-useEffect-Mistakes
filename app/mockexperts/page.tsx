import Link from "next/link";
import Footer from "../components/Footer";

export default function MockExperts() {
  return (
    <div className="min-h-screen p-8 pb-20 sm:p-20 bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
      <main className="max-w-4xl mx-auto">
        <Link
          href="/"
          className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:underline mb-6"
        >
          ← Back to Home
        </Link>

        {/* MockExperts Promotion Section */}
        <div className="p-8 bg-gradient-to-br from-purple-50 via-pink-50 to-orange-50 dark:from-purple-900/20 dark:via-pink-900/20 dark:to-orange-900/20 rounded-2xl border-2 border-purple-300 dark:border-purple-700 shadow-lg">
          <div className="text-center mb-6">
            <h1 className="text-4xl font-bold mb-3 bg-gradient-to-r from-purple-600 via-pink-600 to-orange-600 bg-clip-text text-transparent">
              🎯 Ready to Ace Your Tech Interviews?
            </h1>
            <p className="text-gray-700 dark:text-gray-300 text-lg">
              Practice with <strong className="text-purple-600 dark:text-purple-400">MockExperts</strong> - Your Ultimate MCQ Interview Prep Platform
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
            <div className="p-4 bg-white dark:bg-gray-800 rounded-lg shadow-md border border-purple-200 dark:border-purple-800">
              <div className="text-2xl mb-2">💻</div>
              <h3 className="font-semibold text-gray-800 dark:text-gray-100 mb-1">Frontend Developer</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">React, Vue, Angular, JavaScript, CSS, HTML</p>
            </div>

            <div className="p-4 bg-white dark:bg-gray-800 rounded-lg shadow-md border border-pink-200 dark:border-pink-800">
              <div className="text-2xl mb-2">⚙️</div>
              <h3 className="font-semibold text-gray-800 dark:text-gray-100 mb-1">Backend Developer</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">Node.js, Python, Java, APIs, Databases</p>
            </div>

            <div className="p-4 bg-white dark:bg-gray-800 rounded-lg shadow-md border border-orange-200 dark:border-orange-800">
              <div className="text-2xl mb-2">🚀</div>
              <h3 className="font-semibold text-gray-800 dark:text-gray-100 mb-1">Full Stack Developer</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">End-to-end development, System Design</p>
            </div>

            <div className="p-4 bg-white dark:bg-gray-800 rounded-lg shadow-md border border-blue-200 dark:border-blue-800">
              <div className="text-2xl mb-2">🔧</div>
              <h3 className="font-semibold text-gray-800 dark:text-gray-100 mb-1">DevOps Engineer</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">CI/CD, Docker, Kubernetes, AWS, Azure</p>
            </div>

            <div className="p-4 bg-white dark:bg-gray-800 rounded-lg shadow-md border border-green-200 dark:border-green-800">
              <div className="text-2xl mb-2">📊</div>
              <h3 className="font-semibold text-gray-800 dark:text-gray-100 mb-1">Data Analyst</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">SQL, Python, Data Visualization, Statistics</p>
            </div>

            <div className="p-4 bg-white dark:bg-gray-800 rounded-lg shadow-md border border-indigo-200 dark:border-indigo-800">
              <div className="text-2xl mb-2">🤖</div>
              <h3 className="font-semibold text-gray-800 dark:text-gray-100 mb-1">And Many More!</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">QA, Mobile Dev, Cloud Architect, ML Engineer</p>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md border border-purple-200 dark:border-purple-800 mb-6">
            <h3 className="text-xl font-semibold mb-4 text-gray-800 dark:text-gray-100">
              🌟 Why MockExperts?
            </h3>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 w-8 h-8 bg-purple-500 text-white rounded-full flex items-center justify-center text-sm font-bold">✓</div>
                <div>
                  <h4 className="font-semibold text-gray-800 dark:text-gray-100">1000+ MCQ Questions</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Curated by industry experts</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 w-8 h-8 bg-pink-500 text-white rounded-full flex items-center justify-center text-sm font-bold">✓</div>
                <div>
                  <h4 className="font-semibold text-gray-800 dark:text-gray-100">Real Interview Scenarios</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Practice like the actual interview</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 w-8 h-8 bg-orange-500 text-white rounded-full flex items-center justify-center text-sm font-bold">✓</div>
                <div>
                  <h4 className="font-semibold text-gray-800 dark:text-gray-100">Detailed Explanations</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Learn from every question</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center text-sm font-bold">✓</div>
                <div>
                  <h4 className="font-semibold text-gray-800 dark:text-gray-100">Track Your Progress</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Analytics & performance insights</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 w-8 h-8 bg-green-500 text-white rounded-full flex items-center justify-center text-sm font-bold">✓</div>
                <div>
                  <h4 className="font-semibold text-gray-800 dark:text-gray-100">Role-Specific Tests</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Tailored for your career path</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 w-8 h-8 bg-indigo-500 text-white rounded-full flex items-center justify-center text-sm font-bold">✓</div>
                <div>
                  <h4 className="font-semibold text-gray-800 dark:text-gray-100">Timed Practice</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Build speed and confidence</p>
                </div>
              </div>
            </div>
          </div>

          {/* AI Analysis & Certificate Section */}
          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <div className="bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-900/30 dark:to-cyan-900/30 p-6 rounded-xl border-2 border-blue-300 dark:border-blue-700 shadow-md">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-blue-600 text-white rounded-lg flex items-center justify-center text-2xl">
                  🤖
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-800 dark:text-gray-100 mb-2">
                    AI-Powered Analysis
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300 text-sm mb-3">
                    Get instant, personalized feedback after every exam with our advanced AI technology:
                  </p>
                  <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                    <li className="flex items-start gap-2">
                      <span className="text-blue-500 font-bold">•</span>
                      <span>Identify your strengths & weaknesses</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-blue-500 font-bold">•</span>
                      <span>Personalized study recommendations</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-blue-500 font-bold">•</span>
                      <span>Detailed topic-wise performance breakdown</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-blue-500 font-bold">•</span>
                      <span>Compare with top performers</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-amber-50 to-yellow-50 dark:from-amber-900/30 dark:to-yellow-900/30 p-6 rounded-xl border-2 border-amber-300 dark:border-amber-700 shadow-md">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-amber-600 text-white rounded-lg flex items-center justify-center text-2xl">
                  🏆
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-800 dark:text-gray-100 mb-2">
                    Download Certificates
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300 text-sm mb-3">
                    Earn professional certificates after completing each exam and showcase your skills:
                  </p>
                  <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                    <li className="flex items-start gap-2">
                      <span className="text-amber-500 font-bold">•</span>
                      <span>Instant certificate generation</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-amber-500 font-bold">•</span>
                      <span>Add to your LinkedIn profile</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-amber-500 font-bold">•</span>
                      <span>Share with employers & recruiters</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-amber-500 font-bold">•</span>
                      <span>Boost your resume credibility</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center">
            <a
              href="https://mockexperts.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-bold rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 text-lg"
            >
              🚀 Start Practicing Now
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </a>
            <p className="mt-3 text-sm text-gray-600 dark:text-gray-400">
              Join thousands of developers who landed their dream jobs!
            </p>
          </div>
        </div>

        {/* Testimonials Section */}
        <div className="mt-12 p-8 bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700">
          <h2 className="text-3xl font-bold text-center mb-8 text-gray-800 dark:text-gray-100">
            💬 What Developers Say
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="p-6 bg-gray-50 dark:bg-gray-900 rounded-xl">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white font-bold text-lg">
                  RS
                </div>
                <div>
                  <p className="font-semibold text-gray-800 dark:text-gray-100">Rahul Sharma</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Frontend Developer at Google</p>
                </div>
              </div>
              <p className="text-gray-700 dark:text-gray-300 text-sm">
                &quot;MockExperts helped me prepare for my Google interview. The AI analysis feature is a game-changer!&quot;
              </p>
            </div>

            <div className="p-6 bg-gray-50 dark:bg-gray-900 rounded-xl">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-12 h-12 bg-gradient-to-br from-pink-500 to-orange-500 rounded-full flex items-center justify-center text-white font-bold text-lg">
                  PK
                </div>
                <div>
                  <p className="font-semibold text-gray-800 dark:text-gray-100">Priya Kapoor</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Full Stack Developer at Amazon</p>
                </div>
              </div>
              <p className="text-gray-700 dark:text-gray-300 text-sm">
                &quot;The role-specific tests and detailed explanations made all the difference in my preparation.&quot;
              </p>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

