"use client";
import React, { useRef, useState } from 'react';
import SEO from "../../../Component/SeoComp"

import { 
  Search, 
  ArrowUp, 
   Infinity, 
  Code, 
  Zap, 
  RefreshCw,
  Repeat,
  GitBranch,
  List,
  Grid,
  Copy,
  Check,
  Play,
  Sparkles,
  Terminal,
  ChevronRight,
  Activity,
  Filter,
  Layers
} from 'lucide-react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';

const LoopsPage = () => {
  // Refs for each loop type
  const refs = {
    for: useRef(null),
    while: useRef(null),
    doWhile: useRef(null),
    forIn: useRef(null),
    forOf: useRef(null),
    forEach: useRef(null),
    map: useRef(null),
    breakContinue: useRef(null),
  };

  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [copiedCode, setCopiedCode] = useState(null);
  const [activeLoop, setActiveLoop] = useState('for');

  // Loop methods data
  const loops = [
    {
      id: 'for',
      title: 'for Loop',
      description: 'Repeats a block of code a specific number of times with initialization, condition, and iteration.',
      category: 'traditional',
      level: 'Beginner',
      example: `// Basic for loop
for (let i = 0; i < 5; i++) {
  console.log(i); // 0, 1, 2, 3, 4
}

// Looping through array
const fruits = ['apple', 'banana', 'orange'];
for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]); // apple, banana, orange
}

// Nested loops
for (let i = 0; i < 3; i++) {
  for (let j = 0; j < 3; j++) {
    console.log(\`\${i}, \${j}\`);
  }
}`,
      notes: [
        'Best when you know exact number of iterations',
        'Provides index access for arrays',
        'Can use break and continue statements',
        'Traditional, widely supported'
      ],
      icon: Infinity
    },
    {
      id: 'while',
      title: 'while Loop',
      description: 'Executes code repeatedly while a condition remains true.',
      category: 'traditional',
      level: 'Beginner',
      example: `// Basic while loop
let i = 0;
while (i < 5) {
  console.log(i); // 0, 1, 2, 3, 4
  i++;
}

// Game loop example
let isGameRunning = true;
let score = 0;
while (isGameRunning) {
  // Game logic here
  score += 10;
  
  // Check win condition
  if (score >= 100) {
    isGameRunning = false;
    console.log('You win!');
  }
}

// Input validation
let userInput;
while (userInput !== 'quit') {
  userInput = prompt('Type "quit" to exit:');
  console.log(\`You typed: \${userInput}\`);
}`,
      notes: [
        'Use when iterations are unknown',
        'Condition checked before each iteration',
        'Can result in infinite loop if condition never becomes false',
        'Good for event-driven programming'
      ],
      icon: RefreshCw
    },
    {
      id: 'doWhile',
      title: 'do...while Loop',
      description: 'Executes code once, then repeats while condition is true.',
      category: 'traditional',
      level: 'Intermediate',
      example: `// Basic do...while
let i = 0;
do {
  console.log(i); // 0, 1, 2, 3, 4
  i++;
} while (i < 5);

// Menu system example
let choice;
do {
  choice = prompt(
  1. Add user
    2. Delete user
    3. View users
    4. Exit
    Enter choice: );
    
  switch(choice) {
    case '1': console.log('Adding user...'); break;
    case '2': console.log('Deleting user...'); break;
    case '3': console.log('Viewing users...'); break;
  }
} while (choice !== '4');

// Always executes at least once
let condition = false;
do {
  console.log('This runs once even if condition is false');
} while (condition);`,
      notes: [
        'Guarantees at least one execution',
        'Condition checked after execution',
        'Useful for input validation',
        'Less common than while loop'
      ],
      icon: Repeat
    },
    {
      id: 'forIn',
      title: 'for...in Loop',
      description: 'Iterates over enumerable properties of objects.',
      category: 'iterators',
      level: 'Intermediate',
      example: `// Iterating object properties
const person = {
  name: 'John',
  age: 30,
  job: 'developer',
  city: 'New York'
};

for (const key in person) {
  console.log(\`\${key}: \${person[key]}\`);
  // Output:
  // name: John
  // age: 30
  // job: developer
  // city: New York
}

// Only own properties (filter inherited)
for (const key in person) {
  if (person.hasOwnProperty(key)) {
    console.log(key, person[key]);
  }
}

// With arrays (not recommended)
const colors = ['red', 'green', 'blue'];
for (const index in colors) {
  console.log(colors[index]); // red, green, blue
}`,
      notes: [
        'Best for object iteration',
        'Not recommended for arrays (use for...of)',
        'Iterates over enumerable properties including inherited',
        'Order not guaranteed for non-array objects'
      ],
      icon: GitBranch
    },
    {
      id: 'forOf',
      title: 'for...of Loop',
      description: 'Iterates over iterable objects like arrays, strings, maps, sets.',
      category: 'iterators',
      level: 'Intermediate',
      example: `// Array iteration
const fruits = ['apple', 'banana', 'orange'];
for (const fruit of fruits) {
  console.log(fruit); // apple, banana, orange
}

// String iteration
const message = 'Hello';
for (const char of message) {
  console.log(char); // H, e, l, l, o
}

// Map iteration
const userMap = new Map([
  ['name', 'Alice'],
  ['age', 25],
  ['city', 'London']
]);

for (const [key, value] of userMap) {
  console.log(\`\${key}: \${value}\`);
}

// Set iteration
const uniqueNumbers = new Set([1, 2, 2, 3, 4, 4]);
for (const num of uniqueNumbers) {
  console.log(num); // 1, 2, 3, 4 (only unique)
}`,
      notes: [
        'Modern, clean syntax for iterables',
        'Works with any iterable object',
        'Can use break and continue',
        'No index by default (use entries() for index)'
      ],
      icon: List
    },
    {
      id: 'forEach',
      title: 'forEach() Method',
      description: 'Array method that executes a function for each element.',
      category: 'arrayMethods',
      level: 'Beginner',
      example: `// Basic forEach
const numbers = [1, 2, 3, 4, 5];
numbers.forEach(num => {
  console.log(num * 2); // 2, 4, 6, 8, 10
});

// With index and array parameters
numbers.forEach((num, index, array) => {
  console.log(\`Index \${index}: \${num} of \${array.length}\`);
});

// Summing array elements
let sum = 0;
numbers.forEach(num => {
  sum += num;
});
console.log(\`Sum: \${sum}\`); // 15

// Modifying original array (caution)
const words = ['hello', 'world'];
words.forEach((word, index, arr) => {
  arr[index] = word.toUpperCase();
});
console.log(words); // ['HELLO', 'WORLD']`,
      notes: [
        'Functional programming style',
        'Cannot break or continue (use return to skip)',
        'Works well with arrow functions',
        'Does not work with async/await as expected'
      ],
      icon: Grid
    },
    {
      id: 'map',
      title: 'map() Method',
      description: 'Creates new array by transforming each element.',
      category: 'arrayMethods',
      level: 'Beginner',
      example: `// Basic map transformation
const numbers = [1, 2, 3, 4, 5];
const doubled = numbers.map(num => num * 2);
console.log(doubled); // [2, 4, 6, 8, 10]

// Transforming objects
const users = [
  { id: 1, name: 'Alice' },
  { id: 2, name: 'Bob' },
  { id: 3, name: 'Charlie' }
];

const names = users.map(user => user.name);
console.log(names); // ['Alice', 'Bob', 'Charlie']

// Complex transformation
const userCards = users.map(user => ({
  ...user,
  greeting: \`Hello, \${user.name}!\`,
  timestamp: Date.now()
}));

// Chaining with other methods
const result = numbers
  .filter(num => num % 2 === 0) // [2, 4]
  .map(num => num * 10) // [20, 40]
  .reduce((sum, num) => sum + num, 0); // 60

console.log(result); // 60`,
      notes: [
        'Returns new array (immutable)',
        'Chainable with other array methods',
        'Pure function when callback is pure',
        'Common in React for rendering lists'
      ],
      icon: Layers
    },
    {
      id: 'breakContinue',
      title: 'break & continue',
      description: 'Control flow statements for loops.',
      category: 'control',
      level: 'Intermediate',
      example: `// break - exits loop
for (let i = 0; i < 10; i++) {
  if (i === 5) {
    break; // Exit loop when i is 5
  }
  console.log(i); // 0, 1, 2, 3, 4
}

// continue - skips iteration
for (let i = 0; i < 5; i++) {
  if (i === 2) {
    continue; // Skip when i is 2
  }
  console.log(i); // 0, 1, 3, 4
}

// Search example with break
const users = ['Alice', 'Bob', 'Charlie', 'David'];
let foundUser = null;

for (const user of users) {
  if (user === 'Charlie') {
    foundUser = user;
    break; // Stop searching once found
  }
}
console.log(\`Found: \${foundUser}\`); // Found: Charlie

// Filtering with continue
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let oddSum = 0;

for (const num of numbers) {
  if (num % 2 === 0) {
    continue; // Skip even numbers
  }
  oddSum += num;
}
console.log(\`Sum of odd numbers: \${oddSum}\`); // 25

// Labeled break (rare)
outer: for (let i = 0; i < 3; i++) {
  inner: for (let j = 0; j < 3; j++) {
    if (i === 1 && j === 1) {
      break outer; // Break out of both loops
    }
    console.log(\`[\${i}, \${j}]\`);
  }
}`,
      notes: [
        'break: completely exits the loop',
        'continue: skips to next iteration',
        'Useful for optimization and early exit',
        'Not available in forEach method'
      ],
      icon: Filter
    }
  ];

  // Filter loops
  const filteredLoops = loops.filter(loop => {
    const matchesSearch = loop.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         loop.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || loop.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  // Categories for filter
  const categories = ['all', 'traditional', 'iterators', 'arrayMethods', 'control'];

  // Get level color
  const getLevelColor = (level) => {
    switch (level.toLowerCase()) {
      case 'beginner':
        return 'bg-green-500/20 text-green-400 border-green-500/30';
      case 'intermediate':
        return 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30';
      case 'advanced':
        return 'bg-red-500/20 text-red-400 border-red-500/30';
      default:
        return 'bg-gray-500/20 text-gray-400 border-gray-500/30';
    }
  };

  // Scroll function
  const scrollToRef = (ref, loopId) => {
    ref.current.scrollIntoView({ behavior: 'smooth' });
    setActiveLoop(loopId);
    // Add highlight effect
    ref.current.classList.add('highlight-section');
    setTimeout(() => {
      ref.current.classList.remove('highlight-section');
    }, 1000);
  };

  // Copy code function
  const copyToClipboard = (code, loopId) => {
    navigator.clipboard.writeText(code);
    setCopiedCode(loopId);
    setTimeout(() => setCopiedCode(null), 2000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black text-white">
      {/* Hero Section */}
      <SEO title='JS Loops | Algo Tate'/>
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 via-purple-600/20 to-pink-600/20"></div>
        <div className="relative max-w-7xl mx-auto px-6 py-12">
          <div className="text-center">
            <div className="flex items-center justify-center gap-3 mb-4">
              < Infinity size={48} className="text-blue-400" />
              <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                JavaScript Loops
              </h1>
              <RefreshCw size={48} className="text-yellow-400 animate-pulse" />
            </div>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Master iteration in JavaScript with comprehensive examples, performance tips, and best practices for each loop type.
            </p>

            {/* Search and Filter */}
            <div className="max-w-4xl mx-auto mb-12">
              <div className="flex flex-col md:flex-row gap-4 mb-4">
                <div className="flex-1 relative">
                  <Search
                    className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400"
                    size={20}
                  />
                  <input
                    type="text"
                    placeholder="Search loop types..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-12 pr-4 py-3 bg-white/10 backdrop-blur-xl border border-white/10 rounded-2xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                
                <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
                  {categories.map((category) => (
                    <button
                      key={category}
                      onClick={() => setSelectedCategory(category)}
                      className={`px-4 py-2 rounded-xl text-sm font-semibold whitespace-nowrap transition-all ${
                        selectedCategory === category
                          ? 'bg-blue-500 text-white shadow-lg shadow-blue-500/30'
                          : 'bg-white/10 text-gray-300 hover:bg-white/20'
                      }`}
                    >
                      {category === 'all' ? 'All Loops' : category}
                    </button>
                  ))}
                </div>
              </div>
              
              {/* Quick Stats */}
              <div className="flex justify-center gap-8 text-sm text-gray-400">
                <span className="flex items-center gap-2">
                  < Infinity size={16} className="text-blue-400" />
                  <span className="text-white font-bold">{loops.length}</span> Loop Types
                </span>
                <span className="flex items-center gap-2">
                  <Zap size={16} className="text-purple-400" />
                  <span className="text-white font-bold">5</span> Categories
                </span>
                <span className="flex items-center gap-2">
                  <Activity size={16} className="text-pink-400" />
                  <span className="text-white font-bold">30+</span> Examples
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <div className="max-w-7xl mx-auto px-6 mb-8">
        <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-4">
          <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
            {loops.map((loop) => {
              const LoopIcon = loop.icon;
              return (
                <button
                  key={loop.id}
                  onClick={() => scrollToRef(refs[loop.id], loop.id)}
                  className={`flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-semibold whitespace-nowrap transition-all ${
                    activeLoop === loop.id
                      ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg'
                      : 'bg-white/10 text-gray-300 hover:bg-white/20'
                  }`}
                >
                  <LoopIcon size={16} />
                  {loop.title}
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Loops Grid */}
      <div className="max-w-7xl mx-auto px-6 pb-16">
        <div className="grid grid-cols-1 gap-6">
          {filteredLoops.map((loop) => {
            const LoopIcon = loop.icon;
            
            return (
              <section
                key={loop.id}
                ref={refs[loop.id]}
                className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl overflow-hidden hover:border-white/20 transition-all duration-300 hover:scale-[1.02] group"
              >
                {/* Loop Header */}
                <div className="p-6 border-b border-white/10">
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <LoopIcon size={24} className="text-blue-400" />
                        <h2 className="text-2xl font-bold text-white group-hover:text-blue-400 transition-colors">
                          {loop.title}
                        </h2>
                        <span className={`px-3 py-1 rounded-full text-xs font-semibold border ${getLevelColor(loop.level)}`}>
                          {loop.level}
                        </span>
                      </div>
                      <p className="text-gray-300">{loop.description}</p>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-xs text-gray-500 bg-gray-800/50 px-3 py-1 rounded-full capitalize">
                        {loop.category}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Loop Content */}
                <div className="p-6">
                  {/* Key Points */}
                  {loop.notes && (
                    <div className="mb-6 p-4 bg-blue-500/10 border border-blue-500/20 rounded-xl">
                      <div className="flex items-center gap-2 text-blue-400 mb-3">
                        <Sparkles size={16} />
                        <span className="font-semibold">Key Points</span>
                      </div>
                      <ul className="space-y-2">
                        {loop.notes.map((note, idx) => (
                          <li key={idx} className="flex items-start gap-2 text-sm text-gray-300">
                            <ChevronRight size={14} className="text-blue-400 mt-0.5 flex-shrink-0" />
                            <span>{note}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* Code Example */}
                  <div className="relative">
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center gap-2">
                        <Terminal size={18} className="text-green-400" />
                        <span className="text-sm font-semibold text-gray-300">Examples</span>
                      </div>
                      <div className="flex gap-2">
                        <button
                          onClick={() => copyToClipboard(loop.example, loop.id)}
                          className="flex items-center gap-2 px-3 py-1.5 bg-blue-500/20 hover:bg-blue-500/30 border border-blue-500/30 rounded-lg text-blue-400 hover:text-white transition-all duration-200 text-sm"
                        >
                          {copiedCode === loop.id ? (
                            <>
                              <Check size={14} />
                              Copied!
                            </>
                          ) : (
                            <>
                              <Copy size={14} />
                              Copy Code
                            </>
                          )}
                        </button>
                      </div>
                    </div>
                    
                    <div className="bg-gray-900 rounded-xl overflow-hidden border border-gray-700">
                      <SyntaxHighlighter
                        language="javascript"
                        style={vscDarkPlus}
                        customStyle={{
                          margin: 0,
                          padding: '1.5rem',
                          fontSize: '14px',
                          background: 'transparent'
                        }}
                      >
                        {loop.example}
                      </SyntaxHighlighter>
                    </div>
                  </div>

                  {/* Performance & Best Practices */}
                  <div className="mt-6 p-4 bg-gray-800/50 rounded-xl">
                    <div className="flex items-center gap-2 mb-3">
                      <Zap size={16} className="text-yellow-400" />
                      <span className="text-sm font-semibold text-gray-300">Performance Tips</span>
                    </div>
                    <div className="space-y-2 text-sm text-gray-400">
                      {loop.id === 'for' && (
                        <>
                          <div className="flex items-start gap-2">
                            <span className="text-blue-400 font-mono text-xs mt-0.5">⚡</span>
                            <span>Cache array length in condition: <code className="text-blue-400">{`for (let i = 0, len = arr.length; i < len; i++)`}</code></span>
                          </div>
                          <div className="flex items-start gap-2">
                            <span className="text-blue-400 font-mono text-xs mt-0.5">📊</span>
                            <span>Traditional for loops are fastest for array iteration</span>
                          </div>
                        </>
                      )}
                      {loop.id === 'forOf' && (
                        <>
                          <div className="flex items-start gap-2">
                            <span className="text-blue-400 font-mono text-xs mt-0.5">⚡</span>
                            <span>Best balance of readability and performance for modern code</span>
                          </div>
                          <div className="flex items-start gap-2">
                            <span className="text-blue-400 font-mono text-xs mt-0.5">📊</span>
                            <span>Use <code className="text-blue-400">for...of</code> over <code className="text-blue-400">forEach</code> for async operations</span>
                          </div>
                        </>
                      )}
                      {loop.id === 'map' && (
                        <>
                          <div className="flex items-start gap-2">
                            <span className="text-blue-400 font-mono text-xs mt-0.5">⚡</span>
                            <span>Return a new array - don't mutate original array inside map</span>
                          </div>
                          <div className="flex items-start gap-2">
                            <span className="text-blue-400 font-mono text-xs mt-0.5">📊</span>
                            <span>Use map for data transformation, forEach for side effects</span>
                          </div>
                        </>
                      )}
                      {loop.id === 'breakContinue' && (
                        <>
                          <div className="flex items-start gap-2">
                            <span className="text-blue-400 font-mono text-xs mt-0.5">⚡</span>
                            <span>Use break to exit early and improve performance</span>
                          </div>
                          <div className="flex items-start gap-2">
                            <span className="text-blue-400 font-mono text-xs mt-0.5">📊</span>
                            <span>Consider if/else instead of continue for better readability</span>
                          </div>
                        </>
                      )}
                    </div>
                  </div>
                </div>
              </section>
            );
          })}

          {/* Empty State */}
          {filteredLoops.length === 0 && (
            <div className="text-center py-16 bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl">
              <Loop className="text-gray-500 mx-auto mb-4" size={64} />
              <div className="text-gray-400 text-lg mb-4">
                No loops found matching your criteria.
              </div>
              <button
                onClick={() => {
                  setSearchTerm('');
                  setSelectedCategory('all');
                }}
                className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-semibold py-3 px-6 rounded-xl transition-all duration-300 transform hover:scale-105"
              >
                Clear Filters
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Comparison Table */}
      <div className="max-w-7xl mx-auto px-6 mb-16">
        <div className="bg-gradient-to-r from-blue-500/10 to-purple-600/10 border border-white/10 rounded-2xl p-6">
          <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
            <Activity size={24} className="text-blue-400" />
            Loop Comparison
          </h3>
          <div className="overflow-x-auto">
            <table className="min-w-full">
              <thead>
                <tr className="border-b border-white/10">
                  <th className="px-4 py-3 text-left text-sm font-semibold text-gray-300">Loop Type</th>
                  <th className="px-4 py-3 text-left text-sm font-semibold text-gray-300">Best For</th>
                  <th className="px-4 py-3 text-left text-sm font-semibold text-gray-300">Speed</th>
                  <th className="px-4 py-3 text-left text-sm font-semibold text-gray-300">Break/Continue</th>
                  <th className="px-4 py-3 text-left text-sm font-semibold text-gray-300">Returns</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5">
                <tr>
                  <td className="px-4 py-3 text-sm text-blue-400 font-mono">for</td>
                  <td className="px-4 py-3 text-sm text-gray-300">Fixed iterations, array index access</td>
                  <td className="px-4 py-3 text-sm"><span className="text-green-400 font-bold">Fastest</span></td>
                  <td className="px-4 py-3 text-sm"><span className="text-green-400">✓</span></td>
                  <td className="px-4 py-3 text-sm text-gray-300">Nothing</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 text-sm text-blue-400 font-mono">for...of</td>
                  <td className="px-4 py-3 text-sm text-gray-300">Arrays, strings, iterables</td>
                  <td className="px-4 py-3 text-sm"><span className="text-yellow-400 font-bold">Medium</span></td>
                  <td className="px-4 py-3 text-sm"><span className="text-green-400">✓</span></td>
                  <td className="px-4 py-3 text-sm text-gray-300">Nothing</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 text-sm text-blue-400 font-mono">forEach</td>
                  <td className="px-4 py-3 text-sm text-gray-300">Array iteration, functional style</td>
                  <td className="px-4 py-3 text-sm"><span className="text-red-400 font-bold">Slowest</span></td>
                  <td className="px-4 py-3 text-sm"><span className="text-red-400">✗</span></td>
                  <td className="px-4 py-3 text-sm text-gray-300">undefined</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 text-sm text-blue-400 font-mono">map</td>
                  <td className="px-4 py-3 text-sm text-gray-300">Array transformation</td>
                  <td className="px-4 py-3 text-sm"><span className="text-yellow-400 font-bold">Medium</span></td>
                  <td className="px-4 py-3 text-sm"><span className="text-red-400">✗</span></td>
                  <td className="px-4 py-3 text-sm text-gray-300">New array</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Back to Top Button */}
      <div className="fixed bottom-8 right-8">
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="p-3 bg-gradient-to-br from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110 group"
          title="Back to Top"
        >
          <ArrowUp size={24} className="group-hover:-translate-y-1 transition-transform" />
        </button>
      </div>

      {/* Custom Styles */}
      <style jsx global>{`
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .highlight-section {
          animation: highlight 1s ease;
        }
        @keyframes highlight {
          0%, 100% {
            border-color: rgba(255, 255, 255, 0.1);
          }
          50% {
            border-color: rgba(59, 130, 246, 0.5);
            box-shadow: 0 0 30px rgba(59, 130, 246, 0.2);
          }
        }
      `}</style>
    </div>
  );
};

export default LoopsPage;