'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import Footer from '../components/Footer';

function WrongExample() {
  const [data, setData] = useState<string | null>(null);

  // This will show a warning in console
  // @ts-ignore - Intentionally showing the wrong way
  useEffect(async () => {
    const res = await fetch('https://api.github.com/zen');
    const text = await res.text();
    setData(text);
    console.log('Wrong: async directly in useEffect');
  }, []);

  return (
    <div className="p-6 bg-red-50 dark:bg-red-900/20 rounded-lg border-2 border-red-300 dark:border-red-700">
      <h3 className="text-xl font-semibold mb-3 text-red-800 dark:text-red-300">❌ Wrong Code</h3>
      <div className="bg-gray-900 text-gray-100 p-4 rounded-md mb-4 overflow-x-auto">
        <pre className="text-sm">{`function App() {
  useEffect(async () => {  // ❌ async directly
    const res = await fetch('/api/data');
    const data = await res.json();
    console.log(data);
  }, []);
}`}</pre>
      </div>
      <div className="mb-4">
        <p className="text-red-900 dark:text-red-200 mb-3">
          <strong>Problem:</strong> useEffect cannot be async → returns a promise instead of undefined or cleanup function → React warns. 
          Check console for warning!
        </p>
        <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
          Data: {data || 'Loading...'}
        </p>
        <p className="mt-2 text-xs text-red-700 dark:text-red-400">
          ⚠️ Check console: You'll see a React warning about useEffect return value
        </p>
      </div>
    </div>
  );
}

function CorrectExample() {
  const [data, setData] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // ✅ Define async function inside
    const fetchData = async () => {
      setLoading(true);
      try {
        const res = await fetch('https://api.github.com/zen');
        const text = await res.text();
        setData(text);
        console.log('Correct: async function defined inside');
      } catch (error) {
        console.error('Error:', error);
      } finally {
        setLoading(false);
      }
    };
    
    fetchData(); // ✅ Call it
  }, []);

  return (
    <div className="p-6 bg-green-50 dark:bg-green-900/20 rounded-lg border-2 border-green-300 dark:border-green-700">
      <h3 className="text-xl font-semibold mb-3 text-green-800 dark:text-green-300">✅ Correct Code</h3>
      <div className="bg-gray-900 text-gray-100 p-4 rounded-md mb-4 overflow-x-auto">
        <pre className="text-sm">{`function App() {
  useEffect(() => {
    // ✅ Define async function inside
    const fetchData = async () => {
      const res = await fetch('/api/data');
      const data = await res.json();
      console.log(data);
    };
    
    fetchData(); // ✅ Call it
  }, []);
}`}</pre>
      </div>
      <div className="mb-4">
        <p className="text-green-900 dark:text-green-200 mb-3">
          <strong>Solution:</strong> Define async function inside effect, then call it. This way useEffect returns undefined or a cleanup function.
        </p>
        <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
          Status: {loading ? 'Loading...' : 'Loaded'}
        </p>
        <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
          Data: {data || 'Loading...'}
        </p>
        <p className="mt-2 text-xs text-green-700 dark:text-green-400">
          ✓ No warnings! Clean implementation with error handling
        </p>
      </div>
    </div>
  );
}

export default function Mistake4() {
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
          Mistake #4: Async Function Directly in useEffect
        </h1>
        <p className="text-gray-600 dark:text-gray-400 mb-8">
          Learn the correct way to handle async operations in useEffect
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
            Never make the useEffect callback async directly. Instead, define an async function inside the effect and call it. 
            This ensures useEffect returns the correct value (undefined or a cleanup function).
          </p>
        </div>
      </div>

      <Footer />
    </div>
  );
}

