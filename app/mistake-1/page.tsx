'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import Footer from '../components/Footer';

function WrongExample() {
  const [renderCount, setRenderCount] = useState(0);

  useEffect(() => {
    console.log('Component rendered!');
    // This runs on EVERY render
  });

  return (
    <div className="p-6 bg-red-50 dark:bg-red-900/20 rounded-lg border-2 border-red-300 dark:border-red-700">
      <h3 className="text-xl font-semibold mb-3 text-red-800 dark:text-red-300">❌ Wrong Code</h3>
      <div className="bg-gray-900 text-gray-100 p-4 rounded-md mb-4 overflow-x-auto">
        <pre className="text-sm">{`function App() {
  useEffect(() => {
    console.log('Component rendered!');
  }); // ❌ No dependency array

  return <h1>Hello World</h1>;
}`}</pre>
      </div>
      <div className="mb-4">
        <p className="text-red-900 dark:text-red-200 mb-2">
          <strong>Problem:</strong> Without a dependency array, useEffect runs on every render → unnecessary re-renders, performance issues.
        </p>
        <button
          onClick={() => setRenderCount(prev => prev + 1)}
          className="px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 transition-colors"
        >
          Trigger Re-render (Check Console)
        </button>
        <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
          Render count: {renderCount} (Check console - useEffect runs every time!)
        </p>
      </div>
    </div>
  );
}

function CorrectExample() {
  const [renderCount, setRenderCount] = useState(0);

  useEffect(() => {
    console.log('Runs only once on mount');
  }, []); // ✅ Empty array → runs once

  return (
    <div className="p-6 bg-green-50 dark:bg-green-900/20 rounded-lg border-2 border-green-300 dark:border-green-700">
      <h3 className="text-xl font-semibold mb-3 text-green-800 dark:text-green-300">✅ Correct Code</h3>
      <div className="bg-gray-900 text-gray-100 p-4 rounded-md mb-4 overflow-x-auto">
        <pre className="text-sm">{`function App() {
  useEffect(() => {
    console.log('Runs only once on mount');
  }, []); // ✅ Empty array → runs once

  return <h1>Hello World</h1>;
}`}</pre>
      </div>
      <div className="mb-4">
        <p className="text-green-900 dark:text-green-200 mb-2">
          <strong>Solution:</strong> Add [] to run only once (componentDidMount behavior).
        </p>
        <button
          onClick={() => setRenderCount(prev => prev + 1)}
          className="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 transition-colors"
        >
          Trigger Re-render (Check Console)
        </button>
        <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
          Render count: {renderCount} (Check console - useEffect runs only once!)
        </p>
      </div>
    </div>
  );
}

export default function Mistake1() {
  return (
    <div className="min-h-screen p-8 pb-20 sm:p-20 bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
      <div className="max-w-4xl mx-auto">
        <Link
          href="/"
          className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:underline mb-6"
        >
          ← Back to Home
        </Link>
        
        <h1 className="text-3xl sm:text-4xl font-bold mb-2 text-gray-800 dark:text-gray-100">
          Mistake #1: Missing Dependency Array
        </h1>
        <p className="text-gray-600 dark:text-gray-400 mb-8">
          Learn why you should always include a dependency array in useEffect
        </p>

        <div className="space-y-6">
          <WrongExample />
          <CorrectExample />
        </div>

        <div className="mt-8 p-6 bg-blue-50 dark:bg-blue-900/20 rounded-lg border border-blue-200 dark:border-blue-800">
          <h3 className="text-lg font-semibold mb-2 text-gray-800 dark:text-gray-100">
            📚 Key Takeaway
          </h3>
          <p className="text-gray-700 dark:text-gray-300">
            Always include a dependency array in useEffect. Use an empty array [] if you want it to run only once on mount, 
            or include specific dependencies if you want it to run when those values change.
          </p>
        </div>
      </div>

      <Footer />
    </div>
  );
}

