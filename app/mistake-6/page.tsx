'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import Footer from '../components/Footer';

function WrongExample({ name }: { name: string }) {
  const [displayName, setDisplayName] = useState('');

  useEffect(() => {
    setDisplayName(name);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []); // ❌ name not in dependency - runs only once!

  return (
    <div className="p-6 bg-red-50 dark:bg-red-900/20 rounded-lg border-2 border-red-300 dark:border-red-700">
      <h3 className="text-xl font-semibold mb-3 text-red-800 dark:text-red-300">❌ Wrong Code</h3>
      <div className="bg-gray-900 text-gray-100 p-4 rounded-md mb-4 overflow-x-auto">
        <pre className="text-sm">{`function App({ name }) {
  const [displayName, setDisplayName] = useState('');

  useEffect(() => {
    setDisplayName(name);
  }, []); // ❌ name not in dependency
  
  return <h1>{displayName}</h1>;
}`}</pre>
      </div>
      <div className="mb-4">
        <p className="text-red-900 dark:text-red-200 mb-3">
          <strong>Problem:</strong> useEffect runs only once → displayName never updates when name prop changes. 
          Over-reliance on useEffect instead of just using props directly!
        </p>
        <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
          Display Name: {displayName || '(empty - not updated!)'}
        </p>
        <p className="mt-1 text-xs text-red-700 dark:text-red-400">
          The displayName is stuck with the initial value and won&apos;t update!
        </p>
      </div>
    </div>
  );
}

function CorrectExample({ name }: { name: string }) {
  // ✅ No need for useEffect or state - just use the prop!
  return (
    <div className="p-6 bg-green-50 dark:bg-green-900/20 rounded-lg border-2 border-green-300 dark:border-green-700">
      <h3 className="text-xl font-semibold mb-3 text-green-800 dark:text-green-300">✅ Correct Code</h3>
      <div className="bg-gray-900 text-gray-100 p-4 rounded-md mb-4 overflow-x-auto">
        <pre className="text-sm">{`function App({ name }) {
  // ✅ No need for useEffect!
  return <h1>{name}</h1>;
}

// Or if you need to transform it:
function App({ name }) {
  const displayName = name.toUpperCase();
  return <h1>{displayName}</h1>;
}`}</pre>
      </div>
      <div className="mb-4">
        <p className="text-green-900 dark:text-green-200 mb-3">
          <strong>Solution:</strong> Use state only when necessary; props can often be used directly → cleaner code. 
          No useEffect needed!
        </p>
        <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
          Display Name: {name}
        </p>
        <p className="mt-1 text-xs text-green-700 dark:text-green-400">
          ✓ Updates automatically whenever the prop changes!
        </p>
      </div>
    </div>
  );
}

export default function Mistake6() {
  const [currentName, setCurrentName] = useState('John Doe');
  const names = ['John Doe', 'Jane Smith', 'Bob Johnson', 'Alice Williams'];

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
          Mistake #6: Over-reliance on useEffect
        </h1>
        <p className="text-gray-600 dark:text-gray-400 mb-8">
          Don&apos;t use useEffect when you can just use props or derived state
        </p>

        <div className="mb-6 p-4 bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700">
          <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
            Try changing the name to see the difference:
          </p>
          <div className="flex gap-2 flex-wrap">
            {names.map((name) => (
              <button
                key={name}
                onClick={() => setCurrentName(name)}
                className={`px-4 py-2 rounded-md transition-colors ${
                  currentName === name
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-600'
                }`}
              >
                {name}
              </button>
            ))}
          </div>
        </div>

        <div className="space-y-6">
          <WrongExample name={currentName} />
          <CorrectExample name={currentName} />
        </div>

        <div className="mt-8 p-6 bg-blue-50 dark:bg-blue-900/20 rounded-lg border border-blue-200 dark:border-blue-800">
          <h3 className="text-lg font-semibold mb-2 text-gray-800 dark:text-gray-100">
            📚 Key Takeaway
          </h3>
          <p className="text-gray-700 dark:text-gray-300">
            Don&apos;t reach for useEffect by default. If you can derive data from props or existing state, do that instead. 
            useEffect should be used for side effects (API calls, subscriptions, DOM manipulation), 
            not for synchronizing state that can be computed directly.
          </p>
        </div>
      </div>

      <Footer />
    </div>
  );
}

