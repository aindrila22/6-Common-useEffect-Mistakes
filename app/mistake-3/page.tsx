'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import Footer from '../components/Footer';

function WrongExample() {
  const [count, setCount] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    if (isRunning) {
      setInterval(() => {
        setCount(c => c + 1);
        console.log('tick (NOT cleaned up)');
      }, 1000);
      // ❌ No cleanup - memory leak!
    }
  }, [isRunning]);

  return (
    <div className="p-6 bg-red-50 dark:bg-red-900/20 rounded-lg border-2 border-red-300 dark:border-red-700">
      <h3 className="text-xl font-semibold mb-3 text-red-800 dark:text-red-300">❌ Wrong Code</h3>
      <div className="bg-gray-900 text-gray-100 p-4 rounded-md mb-4 overflow-x-auto">
        <pre className="text-sm">{`function App() {
  useEffect(() => {
    const interval = setInterval(() => {
      console.log('tick');
    }, 1000);
    // ❌ No cleanup function
  }, []);

  return <h1>Timer</h1>;
}`}</pre>
      </div>
      <div className="mb-4">
        <p className="text-red-900 dark:text-red-200 mb-3">
          <strong>Problem:</strong> Interval never cleared → memory leak, continues running even after component unmounts. 
          Click start/stop multiple times and check console!
        </p>
        <div className="flex gap-3">
          <button
            onClick={() => setIsRunning(true)}
            className="px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 transition-colors"
          >
            Start Timer
          </button>
          <button
            onClick={() => setIsRunning(false)}
            className="px-4 py-2 bg-gray-600 text-white rounded-md hover:bg-gray-700 transition-colors"
          >
            Stop (Doesn&apos;t Actually Stop!)
          </button>
        </div>
        <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
          Count: {count} | Status: {isRunning ? 'Running' : 'Stopped'}
        </p>
        <p className="mt-1 text-xs text-red-700 dark:text-red-400">
          Warning: Each start creates a new interval without cleaning the old one!
        </p>
      </div>
    </div>
  );
}

function CorrectExample() {
  const [count, setCount] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    if (isRunning) {
      const interval = setInterval(() => {
        setCount(c => c + 1);
        console.log('tick (with cleanup)');
      }, 1000);
      
      return () => {
        clearInterval(interval); // ✅ Cleanup
        console.log('Interval cleared!');
      };
    }
  }, [isRunning]);

  return (
    <div className="p-6 bg-green-50 dark:bg-green-900/20 rounded-lg border-2 border-green-300 dark:border-green-700">
      <h3 className="text-xl font-semibold mb-3 text-green-800 dark:text-green-300">✅ Correct Code</h3>
      <div className="bg-gray-900 text-gray-100 p-4 rounded-md mb-4 overflow-x-auto">
        <pre className="text-sm">{`function App() {
  useEffect(() => {
    const interval = setInterval(() => {
      console.log('tick');
    }, 1000);
    
    return () => clearInterval(interval); // ✅ Cleanup
  }, []);

  return <h1>Timer</h1>;
}`}</pre>
      </div>
      <div className="mb-4">
        <p className="text-green-900 dark:text-green-200 mb-3">
          <strong>Solution:</strong> Always return a cleanup function for timers, subscriptions, listeners. 
          Now the interval is properly cleared!
        </p>
        <div className="flex gap-3">
          <button
            onClick={() => setIsRunning(true)}
            className="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 transition-colors"
          >
            Start Timer
          </button>
          <button
            onClick={() => setIsRunning(false)}
            className="px-4 py-2 bg-gray-600 text-white rounded-md hover:bg-gray-700 transition-colors"
          >
            Stop Timer
          </button>
        </div>
        <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
          Count: {count} | Status: {isRunning ? 'Running' : 'Stopped'}
        </p>
        <p className="mt-1 text-xs text-green-700 dark:text-green-400">
          ✓ Interval is properly cleaned up when stopped!
        </p>
      </div>
    </div>
  );
}

export default function Mistake3() {
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
          Mistake #3: Not Cleaning up Subscriptions / Timers
        </h1>
        <p className="text-gray-600 dark:text-gray-400 mb-8">
          Always clean up to prevent memory leaks
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
            Return a cleanup function from useEffect whenever you set up timers, intervals, subscriptions, or event listeners. 
            This prevents memory leaks and unexpected behavior.
          </p>
        </div>
      </div>

      <Footer />
    </div>
  );
}

