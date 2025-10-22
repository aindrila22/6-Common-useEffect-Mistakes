'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import Footer from '../components/Footer';

function WrongExample() {
  const [count, setCount] = useState(0);
  const [hasError, setHasError] = useState(false);

  // Commented out to prevent actual infinite loop
  // useEffect(() => {
  //   setCount(count + 1); // ❌ Infinite loop!
  // }, [count]);

  return (
    <div className="p-6 bg-red-50 dark:bg-red-900/20 rounded-lg border-2 border-red-300 dark:border-red-700">
      <h3 className="text-xl font-semibold mb-3 text-red-800 dark:text-red-300">❌ Wrong Code</h3>
      <div className="bg-gray-900 text-gray-100 p-4 rounded-md mb-4 overflow-x-auto">
        <pre className="text-sm">{`function App() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    setCount(count + 1); // ❌ Updates count
  }, [count]); // ❌ count is in dependency

  return <h1>{count}</h1>;
}

// Flow: count changes → useEffect runs → 
// setCount called → count changes → 
// useEffect runs → INFINITE LOOP! 🔄`}</pre>
      </div>
      <div className="mb-4">
        <p className="text-red-900 dark:text-red-200 mb-3">
          <strong>Problem:</strong> Adding count as dependency and updating it inside → infinite re-render. 
          React will crash your browser!
        </p>
        <div className="p-3 bg-red-100 dark:bg-red-800/30 rounded border border-red-400 dark:border-red-600">
          <p className="text-sm text-red-800 dark:text-red-200 font-mono">
            ⚠️ This code is disabled to prevent infinite loop!
          </p>
          <p className="text-xs text-red-700 dark:text-red-300 mt-1">
            If enabled, your browser would freeze from constant re-renders.
          </p>
        </div>
      </div>
    </div>
  );
}

function CorrectExample() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setCount(c => c + 1); // ✅ Functional update
    }, 1000);
    
    return () => clearTimeout(timer);
  }, []); // ✅ Empty dependency - runs once

  return (
    <div className="p-6 bg-green-50 dark:bg-green-900/20 rounded-lg border-2 border-green-300 dark:border-green-700">
      <h3 className="text-xl font-semibold mb-3 text-green-800 dark:text-green-300">✅ Correct Code</h3>
      <div className="bg-gray-900 text-gray-100 p-4 rounded-md mb-4 overflow-x-auto">
        <pre className="text-sm">{`function App() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setCount(c => c + 1); // ✅ Functional update
    }, 1000);
    
    return () => clearTimeout(timer);
  }, []); // ✅ Only runs once

  return <h1>{count}</h1>;
}`}</pre>
      </div>
      <div className="mb-4">
        <p className="text-green-900 dark:text-green-200 mb-3">
          <strong>Solution:</strong> Avoid updating state directly in dependency → use functional updates or restructure. 
          Now it runs once and updates safely!
        </p>
        <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
          Count: {count} (increments once per second)
        </p>
        <p className="mt-2 text-xs text-green-700 dark:text-green-400">
          ✓ Using functional update (c =&gt; c + 1) allows us to update state without adding it to dependencies
        </p>
      </div>
    </div>
  );
}

export default function Mistake5() {
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
          Mistake #5: Incorrect Dependency Array → Infinite Loop
        </h1>
        <p className="text-gray-600 dark:text-gray-400 mb-8">
          Avoid infinite re-renders by managing dependencies carefully
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
            Be careful when including state in dependencies and updating that same state in the effect. 
            Use functional updates (setState(prev =&gt; ...)) to avoid needing the current state in dependencies.
          </p>
        </div>
      </div>

      <Footer />
    </div>
  );
}

