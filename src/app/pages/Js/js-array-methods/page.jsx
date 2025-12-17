"use client";
import React, { useRef, useState } from 'react';
import SEO from "../../../Component/SeoComp"
import { 
  Search, 
  ArrowUp, 
  Zap, 
  Code, 
  Filter, 
  Play, 
  Copy,
  Check,
  Terminal,
  Sparkles,
  ChevronRight
} from 'lucide-react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';

const ArrayMethodsPage = () => {
  // Refs for each method
  const refs = {
    forEach: useRef(null),
    map: useRef(null),
    filter: useRef(null),
    reduce: useRef(null),
    push: useRef(null),
    pop: useRef(null),
    shift: useRef(null),
    unshift: useRef(null),
    concat: useRef(null),
    slice: useRef(null),
    splice: useRef(null),
    indexOf: useRef(null),
    find: useRef(null),
    includes: useRef(null),
    findIndex: useRef(null),
    some: useRef(null),
    every: useRef(null),
    sort: useRef(null),
    reverse: useRef(null),
    join: useRef(null),
  };

  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [copiedIndex, setCopiedIndex] = useState(null);
  const [activeMethod, setActiveMethod] = useState('forEach');

  // Array methods data
  const arrayMethods = [
    {
      id: 'forEach',
      title: 'forEach()',
      description: 'Executes a provided function once for each array element.',
      category: 'iteration',
      level: 'Beginner',
      syntax: `const numbers = [1, 2, 3];
numbers.forEach(num => console.log(num * 2));
// Output: 2, 4, 6`,
      note: 'Does not return a new array'
    },
    {
      id: 'map',
      title: 'map()',
      description: 'Creates a new array with the results of calling a provided function on every element.',
      category: 'transformation',
      level: 'Beginner',
      syntax: `const numbers = [1, 2, 3];
const doubled = numbers.map(num => num * 2);
console.log(doubled); // [2, 4, 6]`,
      note: 'Always returns a new array'
    },
    {
      id: 'filter',
      title: 'filter()',
      description: 'Creates a new array with all elements that pass the test implemented by the provided function.',
      category: 'selection',
      level: 'Beginner',
      syntax: `const numbers = [1, 2, 3, 4, 5];
const evens = numbers.filter(num => num % 2 === 0);
console.log(evens); // [2, 4]`,
      note: 'Returns new array with filtered elements'
    },
    {
      id: 'reduce',
      title: 'reduce()',
      description: 'Executes a reducer function on each element, resulting in a single output value.',
      category: 'aggregation',
      level: 'Intermediate',
      syntax: `const numbers = [1, 2, 3, 4];
const sum = numbers.reduce((acc, curr) => acc + curr, 0);
console.log(sum); // 10`,
      note: 'Requires accumulator initial value'
    },
    {
      id: 'push',
      title: 'push()',
      description: 'Adds one or more elements to the end of an array and returns the new length.',
      category: 'modification',
      level: 'Beginner',
      syntax: `const fruits = ['apple', 'banana'];
const newLength = fruits.push('orange');
console.log(fruits); // ['apple', 'banana', 'orange']
console.log(newLength); // 3`,
      note: 'Mutates original array'
    },
    {
      id: 'pop',
      title: 'pop()',
      description: 'Removes the last element from an array and returns that element.',
      category: 'modification',
      level: 'Beginner',
      syntax: `const fruits = ['apple', 'banana', 'orange'];
const last = fruits.pop();
console.log(last); // 'orange'
console.log(fruits); // ['apple', 'banana']`,
      note: 'Mutates original array'
    },
    {
      id: 'shift',
      title: 'shift()',
      description: 'Removes the first element from an array and returns that element.',
      category: 'modification',
      level: 'Beginner',
      syntax: `const fruits = ['apple', 'banana', 'orange'];
const first = fruits.shift();
console.log(first); // 'apple'
console.log(fruits); // ['banana', 'orange']`,
      note: 'Mutates original array'
    },
    {
      id: 'unshift',
      title: 'unshift()',
      description: 'Adds one or more elements to the beginning of an array and returns the new length.',
      category: 'modification',
      level: 'Beginner',
      syntax: `const fruits = ['banana', 'orange'];
const newLength = fruits.unshift('apple');
console.log(fruits); // ['apple', 'banana', 'orange']
console.log(newLength); // 3`,
      note: 'Mutates original array'
    },
    {
      id: 'concat',
      title: 'concat()',
      description: 'Returns a new array that is the combination of two or more arrays.',
      category: 'combination',
      level: 'Beginner',
      syntax: `const arr1 = [1, 2];
const arr2 = [3, 4];
const combined = arr1.concat(arr2);
console.log(combined); // [1, 2, 3, 4]`,
      note: 'Does not mutate original arrays'
    },
    {
      id: 'slice',
      title: 'slice()',
      description: 'Returns a shallow copy of a portion of an array into a new array.',
      category: 'extraction',
      level: 'Beginner',
      syntax: `const fruits = ['apple', 'banana', 'orange', 'kiwi'];
const citrus = fruits.slice(1, 3);
console.log(citrus); // ['banana', 'orange']
console.log(fruits); // Original unchanged`,
      note: 'End index is exclusive'
    },
    {
      id: 'splice',
      title: 'splice()',
      description: 'Changes the contents of an array by removing or replacing existing elements and/or adding new elements.',
      category: 'modification',
      level: 'Intermediate',
      syntax: `const fruits = ['apple', 'banana', 'orange'];
const removed = fruits.splice(1, 1, 'kiwi');
console.log(removed); // ['banana']
console.log(fruits); // ['apple', 'kiwi', 'orange']`,
      note: 'Highly versatile but mutates array'
    },
    {
      id: 'indexOf',
      title: 'indexOf()',
      description: 'Returns the first index at which a given element can be found in the array, or -1 if not present.',
      category: 'search',
      level: 'Beginner',
      syntax: `const fruits = ['apple', 'banana', 'orange'];
const index = fruits.indexOf('banana');
console.log(index); // 1`,
      note: 'Uses strict equality (===)'
    },
    {
      id: 'find',
      title: 'find()',
      description: 'Returns the first element in the array that satisfies the provided testing function.',
      category: 'search',
      level: 'Intermediate',
      syntax: `const numbers = [5, 12, 8, 130, 44];
const found = numbers.find(num => num > 10);
console.log(found); // 12`,
      note: 'Returns undefined if not found'
    },
    {
      id: 'includes',
      title: 'includes()',
      description: 'Determines whether an array includes a certain value among its entries.',
      category: 'search',
      level: 'Beginner',
      syntax: `const fruits = ['apple', 'banana', 'orange'];
const hasBanana = fruits.includes('banana');
console.log(hasBanana); // true`,
      note: 'Case-sensitive for strings'
    },
    {
      id: 'findIndex',
      title: 'findIndex()',
      description: 'Returns the index of the first element in the array that satisfies the provided testing function.',
      category: 'search',
      level: 'Intermediate',
      syntax: `const numbers = [5, 12, 8, 130, 44];
const index = numbers.findIndex(num => num > 10);
console.log(index); // 1`,
      note: 'Returns -1 if not found'
    },
    {
      id: 'some',
      title: 'some()',
      description: 'Tests whether at least one element in the array passes the test implemented by the provided function.',
      category: 'validation',
      level: 'Intermediate',
      syntax: `const numbers = [1, 2, 3, 4, 5];
const hasEven = numbers.some(num => num % 2 === 0);
console.log(hasEven); // true`,
      note: 'Short-circuits on first truthy'
    },
    {
      id: 'every',
      title: 'every()',
      description: 'Tests whether all elements in the array pass the test implemented by the provided function.',
      category: 'validation',
      level: 'Intermediate',
      syntax: `const numbers = [2, 4, 6, 8];
const allEven = numbers.every(num => num % 2 === 0);
console.log(allEven); // true`,
      note: 'Short-circuits on first falsy'
    },
    {
      id: 'sort',
      title: 'sort()',
      description: 'Sorts the elements of an array in place and returns the sorted array.',
      category: 'ordering',
      level: 'Intermediate',
      syntax: `const numbers = [3, 1, 4, 2];
numbers.sort((a, b) => a - b); // ascending
console.log(numbers); // [1, 2, 3, 4]

const fruits = ['banana', 'apple', 'orange'];
fruits.sort();
console.log(fruits); // ['apple', 'banana', 'orange']`,
      note: 'Mutates original array'
    },
    {
      id: 'reverse',
      title: 'reverse()',
      description: 'Reverses the order of the elements in an array.',
      category: 'ordering',
      level: 'Beginner',
      syntax: `const numbers = [1, 2, 3];
numbers.reverse();
console.log(numbers); // [3, 2, 1]`,
      note: 'Mutates original array'
    },
    {
      id: 'join',
      title: 'join()',
      description: 'Joins all elements of an array into a string.',
      category: 'conversion',
      level: 'Beginner',
      syntax: `const elements = ['Fire', 'Air', 'Water'];
const joined = elements.join(' - ');
console.log(joined); // "Fire - Air - Water"`,
      note: 'Defaults to comma separator'
    }
  ];

  // Filter methods
  const filteredMethods = arrayMethods.filter(method => {
    const matchesSearch = method.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         method.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || method.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  // Categories for filter
  const categories = ['all', ...new Set(arrayMethods.map(m => m.category))];

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
  const scrollToRef = (ref, id) => {
    ref.current.scrollIntoView({ behavior: 'smooth' });
    setActiveMethod(id);
    // Add highlight effect
    ref.current.classList.add('highlight-section');
    setTimeout(() => {
      ref.current.classList.remove('highlight-section');
    }, 1000);
  };

  // Copy code function
  const copyToClipboard = (code, index) => {
    navigator.clipboard.writeText(code);
    setCopiedIndex(index);
    setTimeout(() => setCopiedIndex(null), 2000);
  };

  // Run code in console
  const runInConsole = (code) => {
    try {
      // Create safe execution
      const safeCode = code.replace(/console\.log/g, '');
      eval(safeCode);
    } catch (error) {
      console.error('Error executing code:', error);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black text-white">
      {/* Hero Section */}
      <SEO title='JS Arrays 
       Algo Tate'/>
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 via-purple-600/20 to-pink-600/20"></div>
        <div className="relative max-w-7xl mx-auto px-6 py-12">
          <div className="text-center">
            <div className="flex items-center justify-center gap-3 mb-4">
              <Terminal size={48} className="text-blue-400" />
              <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                Array Methods
              </h1>
              <Zap size={48} className="text-yellow-400 animate-pulse" />
            </div>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Master JavaScript array methods with interactive examples, real-time execution, and detailed explanations.
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
                    placeholder="Search array methods..."
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
                      {category === 'all' ? 'All Methods' : category}
                    </button>
                  ))}
                </div>
              </div>
              
              {/* Quick Stats */}
              <div className="flex justify-center gap-8 text-sm text-gray-400">
                <span className="flex items-center gap-2">
                  <Code size={16} className="text-blue-400" />
                  <span className="text-white font-bold">{arrayMethods.length}</span> Methods
                </span>
                <span className="flex items-center gap-2">
                  <Filter size={16} className="text-purple-400" />
                  <span className="text-white font-bold">{categories.length - 1}</span> Categories
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Methods Navigation - Horizontal Scroll */}
      <div className="max-w-7xl mx-auto px-6 mb-8">
        <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-4">
          <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
            {arrayMethods.map((method) => (
              <button
                key={method.id}
                onClick={() => scrollToRef(refs[method.id], method.id)}
                className={`flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-semibold whitespace-nowrap transition-all ${
                  activeMethod === method.id
                    ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg'
                    : 'bg-white/10 text-gray-300 hover:bg-white/20'
                }`}
              >
                {method.title}
                {method.level === 'Intermediate' && (
                  <Sparkles size={12} className="text-yellow-400" />
                )}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Methods Grid */}
      <div className="max-w-7xl mx-auto px-6 pb-16">
        <div className="grid grid-cols-1 gap-6">
          {filteredMethods.map((method, index) => (
            <section
              key={method.id}
              ref={refs[method.id]}
              className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl overflow-hidden hover:border-white/20 transition-all duration-300 hover:scale-[1.02] group"
            >
              {/* Method Header */}
              <div className="p-6 border-b border-white/10">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <h2 className="text-2xl font-bold text-white group-hover:text-blue-400 transition-colors">
                        {method.title}
                      </h2>
                      <span className={`px-3 py-1 rounded-full text-xs font-semibold border ${getLevelColor(method.level)}`}>
                        {method.level}
                      </span>
                    </div>
                    <p className="text-gray-300">{method.description}</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-xs text-gray-500 bg-gray-800/50 px-3 py-1 rounded-full">
                      {method.category}
                    </span>
                  </div>
                </div>
              </div>

              {/* Method Content */}
              <div className="p-6">
                {/* Note */}
                {method.note && (
                  <div className="mb-6 p-4 bg-blue-500/10 border border-blue-500/20 rounded-xl">
                    <div className="flex items-center gap-2 text-blue-400 mb-2">
                      <Zap size={16} />
                      <span className="font-semibold">Note</span>
                    </div>
                    <p className="text-gray-300 text-sm">{method.note}</p>
                  </div>
                )}

                {/* Code Example */}
                <div className="relative">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-2">
                      <Code size={18} className="text-green-400" />
                      <span className="text-sm font-semibold text-gray-300">Example</span>
                    </div>
                    <div className="flex gap-2">
                      <button
                        onClick={() => runInConsole(method.syntax)}
                        className="flex items-center gap-2 px-3 py-1.5 bg-green-500/20 hover:bg-green-500/30 border border-green-500/30 rounded-lg text-green-400 hover:text-white transition-all duration-200 text-sm"
                      >
                        <Play size={14} />
                        Run
                      </button>
                      <button
                        onClick={() => copyToClipboard(method.syntax, index)}
                        className="flex items-center gap-2 px-3 py-1.5 bg-blue-500/20 hover:bg-blue-500/30 border border-blue-500/30 rounded-lg text-blue-400 hover:text-white transition-all duration-200 text-sm"
                      >
                        {copiedIndex === index ? <Check size={14} /> : <Copy size={14} />}
                        {copiedIndex === index ? 'Copied!' : 'Copy'}
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
                      {method.syntax}
                    </SyntaxHighlighter>
                  </div>
                </div>

                {/* Usage Tips */}
                <div className="mt-6 p-4 bg-gray-800/50 rounded-xl">
                  <div className="flex items-center gap-2 mb-3">
                    <Terminal size={16} className="text-purple-400" />
                    <span className="text-sm font-semibold text-gray-300">Common Use Cases</span>
                  </div>
                  <ul className="space-y-2 text-sm text-gray-400">
                    <li className="flex items-start gap-2">
                      <ChevronRight size={14} className="text-blue-400 mt-0.5 flex-shrink-0" />
                      <span>Great for iterating over arrays without needing to return a new array</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <ChevronRight size={14} className="text-blue-400 mt-0.5 flex-shrink-0" />
                      <span>Ideal for side effects like logging or DOM manipulation</span>
                    </li>
                  </ul>
                </div>
              </div>
            </section>
          ))}

          {/* Empty State */}
          {filteredMethods.length === 0 && (
            <div className="text-center py-16 bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl">
              <div className="text-gray-400 text-lg mb-4">
                No methods found matching your criteria.
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

export default ArrayMethodsPage;