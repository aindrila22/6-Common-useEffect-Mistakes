'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import Footer from '../components/Footer';

function WrongExample() {
  const [data, setData] = useState<string | null>(null);
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Mixing multiple concerns in one effect
    fetch('https://api.github.com/zen')
      .then(res => res.text())
      .then(setData);
    console.log('Count is', count);
    document.title = `Count: ${count}`;
  }, [count]);

  return (
    <div className="p-6 bg-red-50 dark:bg-red-900/20 rounded-lg border-2 border-red-300 dark:border-red-700">
      <h3 className="text-xl font-semibold mb-3 text-red-800 dark:text-red-300">❌ Wrong Code</h3>
      <div className="bg-gray-900 text-gray-100 p-4 rounded-md mb-4 overflow-x-auto">
        <pre className="text-sm">{`function App() {
  const [data, setData] = useState(null);
  const [count, setCount] = useState(0);

  useEffect(() => {
    // ❌ Multiple concerns in one effect
    fetch('/api/data')
      .then(res => res.json())
      .then(setData);
    console.log('Count is', count);
    document.title = \`Count: \${count}\`;
  }, [count]);

  return <div>{data}</div>;
}`}</pre>
      </div>
      <div className="mb-4">
        <p className="text-red-900 dark:text-red-200 mb-3">
          <strong>Problem:</strong> One useEffect handles multiple concerns → harder to debug, increases risk of bugs. 
          The fetch runs every time count changes!
        </p>
        <button
          onClick={() => setCount(prev => prev + 1)}
          className="px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 transition-colors"
        >
          Increment Count
        </button>
        <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
          Count: {count} | Data: {data || 'Loading...'}
        </p>
      </div>
    </div>
  );
}

function CorrectExample() {
  const [data, setData] = useState<string | null>(null);
  const [count, setCount] = useState(0);

  // Separate effect for data fetching
  useEffect(() => {
    fetch('https://api.github.com/zen')
      .then(res => res.text())
      .then(setData);
  }, []);

  // Separate effect for count-related logic
  useEffect(() => {
    console.log('Count is', count);
    document.title = `Count: ${count}`;
  }, [count]);

  return (
    <div className="p-6 bg-green-50 dark:bg-green-900/20 rounded-lg border-2 border-green-300 dark:border-green-700">
      <h3 className="text-xl font-semibold mb-3 text-green-800 dark:text-green-300">✅ Correct Code</h3>
      <div className="bg-gray-900 text-gray-100 p-4 rounded-md mb-4 overflow-x-auto">
        <pre className="text-sm">{`function App() {
  const [data, setData] = useState(null);
  const [count, setCount] = useState(0);

  // ✅ Separate effect for fetching
  useEffect(() => {
    fetch('/api/data')
      .then(res => res.json())
      .then(setData);
  }, []);

  // ✅ Separate effect for count
  useEffect(() => {
    console.log('Count is', count);
    document.title = \`Count: \${count}\`;
  }, [count]);

  return <div>{data}</div>;
}`}</pre>
      </div>
      <div className="mb-4">
        <p className="text-green-900 dark:text-green-200 mb-3">
          <strong>Solution:</strong> Split into multiple useEffects → each handles a single concern. 
          Now fetch only runs once, and count logic runs only when count changes.
        </p>
        <button
          onClick={() => setCount(prev => prev + 1)}
          className="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 transition-colors"
        >
          Increment Count
        </button>
        <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
          Count: {count} | Data: {data || 'Loading...'}
        </p>
      </div>
    </div>
  );
}

export default function Mistake2() {
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
          Mistake #2: Doing Too Much in One useEffect
        </h1>
        <p className="text-gray-600 dark:text-gray-400 mb-8">
          Separate concerns for better debugging and maintainability
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
            Each useEffect should handle a single concern. This makes your code easier to understand, debug, and maintain. 
            Don&apos;t be afraid to use multiple useEffect hooks!
          </p>
        </div>
      </div>

      <Footer />
    </div>
  );
}

