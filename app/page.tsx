import Link from "next/link";
import Footer from "./components/Footer";

export default function Home() {
  const mistakes = [
    {
      id: 1,
      title: "Missing Dependency Array",
      description: "useEffect runs on every render → unnecessary re-renders",
      path: "/mistake-1"
    },
    {
      id: 2,
      title: "Doing Too Much in One useEffect",
      description: "Multiple concerns in one effect → harder to debug",
      path: "/mistake-2"
    },
    {
      id: 3,
      title: "Not Cleaning up Subscriptions / Timers",
      description: "Interval never cleared → memory leaks",
      path: "/mistake-3"
    },
    {
      id: 4,
      title: "Async Function Directly in useEffect",
      description: "useEffect cannot be async → React warns",
      path: "/mistake-4"
    },
    {
      id: 5,
      title: "Incorrect Dependency Array → Infinite Loop",
      description: "Updating state in dependency → infinite re-render",
      path: "/mistake-5"
    },
    {
      id: 6,
      title: "Over-reliance on useEffect",
      description: "Using useEffect instead of state/props → stale values",
      path: "/mistake-6"
    }
  ];

  return (
    <div className="min-h-screen p-8 pb-20 sm:p-20 bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
      <main className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            6 Common useEffect Mistakes
          </h1>
          <p className="text-gray-600 dark:text-gray-400 text-lg">
            Learn from common mistakes and see the correct solutions
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {mistakes.map((mistake) => (
            <Link
              key={mistake.id}
              href={mistake.path}
              className="group block p-6 bg-white dark:bg-gray-800 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-gray-700 hover:border-blue-500 dark:hover:border-blue-400"
            >
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-10 h-10 bg-blue-500 text-white rounded-full flex items-center justify-center font-bold text-lg group-hover:scale-110 transition-transform">
                  {mistake.id}
                </div>
                <div className="flex-1">
                  <h2 className="text-xl font-semibold mb-2 text-gray-800 dark:text-gray-100 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    {mistake.title}
                  </h2>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">
                    {mistake.description}
                  </p>
                  <div className="mt-3 text-blue-600 dark:text-blue-400 text-sm font-medium group-hover:translate-x-2 transition-transform inline-block">
                    View Example →
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-12 p-6 bg-blue-50 dark:bg-blue-900/20 rounded-xl border border-blue-200 dark:border-blue-800">
          <h3 className="text-lg font-semibold mb-3 text-gray-800 dark:text-gray-100">
            💡 What You&apos;ll Learn
          </h3>
          <ul className="space-y-2 text-gray-700 dark:text-gray-300">
            <li className="flex items-start gap-2">
              <span className="text-blue-500 mt-1">✓</span>
              <span>See the wrong code and understand why it&apos;s problematic</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-blue-500 mt-1">✓</span>
              <span>Learn the correct implementation with explanations</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-blue-500 mt-1">✓</span>
              <span>Interactive demos to see the mistakes and fixes in action</span>
            </li>
          </ul>
        </div>

        {/* MockExperts CTA Card */}
        <Link href="/mockexperts" className="block mt-12">
          <div className="p-8 bg-gradient-to-br from-purple-50 via-pink-50 to-orange-50 dark:from-purple-900/20 dark:via-pink-900/20 dark:to-orange-900/20 rounded-2xl border-2 border-purple-300 dark:border-purple-700 shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-[1.02]">
            <div className="text-center">
              <h2 className="text-3xl font-bold mb-3 bg-gradient-to-r from-purple-600 via-pink-600 to-orange-600 bg-clip-text text-transparent">
                🎯 Ready to Ace Your Tech Interviews?
              </h2>
              <p className="text-gray-700 dark:text-gray-300 text-lg mb-4">
                Practice MCQ rounds for Frontend, Backend, Full Stack, DevOps & Data Analyst roles
              </p>
              <div className="inline-flex items-center gap-2 text-purple-600 dark:text-purple-400 font-semibold">
                Learn More About MockExperts
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </div>
            </div>
          </div>
        </Link>

      </main>

      <Footer />
    </div>
  );
}
