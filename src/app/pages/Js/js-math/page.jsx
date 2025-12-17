"use client";
import React, { useRef, useState } from 'react';
import SEO from "../../../Component/SeoComp"

import { 
  Search, 
  ArrowUp, 
  Calculator, 
  Divide,
  Plus,
  Minus,
  X,
  Hash,
  Infinity as InfinityIcon,
  Percent,
  SquareRoot,
  Power,
  Copy,
  Check,
  Sparkles,
  Terminal,
  ChevronRight,
  Zap,
  Activity,
  Dice5,
  TrendingUp,
  TrendingDown,
  ArrowUpRight,
  ArrowDownRight,
  Target
} from 'lucide-react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';

const MathPage = () => {
  // Refs for each math method
  const refs = {
    floor: useRef(null),
    ceil: useRef(null),
    round: useRef(null),
    trunc: useRef(null),
    random: useRef(null),
    minMax: useRef(null),
    powSqrt: useRef(null),
    absSign: useRef(null),
    constants: useRef(null),
    otherMethods: useRef(null)
  };

  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [copiedCode, setCopiedCode] = useState(null);
  const [activeMethod, setActiveMethod] = useState('floor');

  // Math methods data
  const mathMethods = [
    {
      id: 'floor',
      title: 'Math.floor()',
      description: 'Rounds down to the nearest smaller integer (toward negative infinity).',
      category: 'rounding',
      level: 'Beginner',
      example: `// Basic usage
console.log(Math.floor(4.5));    // 4
console.log(Math.floor(4.9));    // 4
console.log(Math.floor(-4.1));   // -5 (moves down)

// Practical: Pagination calculation
function calculatePages(totalItems, itemsPerPage) {
  return Math.floor(totalItems / itemsPerPage) + 
         (totalItems % itemsPerPage > 0 ? 1 : 0);
}

console.log(calculatePages(17, 5)); // 4 pages

// Generating random integers
function randomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

console.log(randomInt(1, 10)); // Random integer between 1-10`,
      notes: [
        'Always rounds down, even with .999',
        'Useful for integer division',
        'Common in random number generation',
        'For negative numbers, moves toward negative infinity'
      ],
      icon: ArrowDownRight
    },
    {
      id: 'ceil',
      title: 'Math.ceil()',
      description: 'Rounds up to the nearest larger integer (toward positive infinity).',
      category: 'rounding',
      level: 'Beginner',
      example: `// Basic usage
console.log(Math.ceil(4.1));     // 5
console.log(Math.ceil(4.0001));  // 5
console.log(Math.ceil(-4.9));    // -4 (moves up)

// Practical: Resource allocation
function calculateResources(users, capacity) {
  return Math.ceil(users / capacity);
}

console.log(calculateResources(102, 50)); // 3 servers needed

// Pricing calculations
function calculateShippingBoxes(items, boxCapacity) {
  return Math.ceil(items / boxCapacity);
}

console.log(calculateShippingBoxes(23, 10)); // 3 boxes needed

// Rounding up for display
const exactAmount = 49.95;
const displayAmount = Math.ceil(exactAmount);
console.log(displayAmount); // 50`,
      notes: [
        'Always rounds up, even with .001',
        'Essential for resource planning',
        'Use when you cannot have partial units',
        'For negative numbers, moves toward positive infinity'
      ],
      icon: ArrowUpRight
    },
    {
      id: 'round',
      title: 'Math.round()',
      description: 'Rounds to the nearest integer (.5 rounds up for positive, down for negative).',
      category: 'rounding',
      level: 'Beginner',
      example: `// Basic usage
console.log(Math.round(4.4));    // 4
console.log(Math.round(4.5));    // 5 (.5 rounds up)
console.log(Math.round(-4.4));   // -4
console.log(Math.round(-4.5));   // -4 (.5 rounds toward zero)

// Practical: Display rounding
function formatTemperature(temp) {
  return Math.round(temp) + '°C';
}

console.log(formatTemperature(23.7)); // "24°C"

// Rounding for ratings
function calculateAverageRating(ratings) {
  const sum = ratings.reduce((a, b) => a + b, 0);
  return Math.round((sum / ratings.length) * 10) / 10;
}

console.log(calculateAverageRating([4.5, 5, 3.5])); // 4.3

// Currency rounding (simplified)
function roundToNearestCent(amount) {
  return Math.round(amount * 100) / 100;
}

console.log(roundToNearestCent(12.3456)); // 12.35`,
      notes: [
        'Standard mathematical rounding',
        '.5 rounds up for positive, toward zero for negative',
        'Most common for user-facing numbers',
        'Consider using toFixed() for decimal places'
      ],
      icon: Target
    },
    {
      id: 'trunc',
      title: 'Math.trunc()',
      description: 'Removes decimal part, returns integer portion (truncates toward zero).',
      category: 'rounding',
      level: 'Intermediate',
      example: `// Basic usage
console.log(Math.trunc(4.88));   // 4
console.log(Math.trunc(-4.88));  // -4
console.log(Math.trunc(4.1));    // 4
console.log(Math.trunc(-4.1));   // -4

// Practical: Extracting integer part
function splitNumber(num) {
  return {
    integer: Math.trunc(num),
    fraction: num - Math.trunc(num)
  };
}

console.log(splitNumber(12.345)); // { integer: 12, fraction: 0.345 }

// Converting floating hours to hours and minutes
function hoursToHMS(hours) {
  const h = Math.trunc(hours);
  const m = Math.trunc((hours - h) * 60);
  const s = Math.round(((hours - h) * 60 - m) * 60);
  return { h, m, s };
}

console.log(hoursToHMS(1.755)); // { h: 1, m: 45, s: 18 }

// Faster than parseInt for numbers
console.log(Math.trunc("12.34")); // 12 (coerces string to number)`,
      notes: [
        'Simply removes decimal part without rounding',
        'For positive numbers, same as Math.floor()',
        'For negative numbers, different from Math.floor()',
        'Faster than parseInt() for number conversion'
      ],
      icon: Minus
    },
    {
      id: 'random',
      title: 'Math.random()',
      description: 'Returns pseudo-random number between 0 (inclusive) and 1 (exclusive).',
      category: 'random',
      level: 'Beginner',
      example: `// Basic random number
const randomNum = Math.random();
console.log(randomNum); // 0.123456789 (example)

// Common utility functions
function randomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function randomFloat(min, max) {
  return Math.random() * (max - min) + min;
}

function randomChoice(array) {
  return array[Math.floor(Math.random() * array.length)];
}

function shuffleArray(array) {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

// Real-world examples
const colors = ['red', 'green', 'blue', 'yellow'];
console.log(randomChoice(colors)); // Random color

const deck = ['A♠', 'K♠', 'Q♠', 'J♠', '10♠'];
console.log(shuffleArray(deck)); // Shuffled deck

// Generate random RGB color
function randomColor() {
  const r = randomInt(0, 255);
  const g = randomInt(0, 255);
  const b = randomInt(0, 255);
  return \`rgb(\${r}, \${g}, \${b})\`;
}

console.log(randomColor()); // "rgb(123, 45, 67)"`,
      notes: [
        'Not cryptographically secure',
        'Use crypto.getRandomValues() for security',
        'Uniform distribution between 0 and 1',
        'Often combined with Math.floor() for integers'
      ],
      icon: Dice5
    },
    {
      id: 'minMax',
      title: 'Math.min() / Math.max()',
      description: 'Returns the smallest or largest of given numbers.',
      category: 'utilities',
      level: 'Beginner',
      example: `// Basic usage
console.log(Math.min(1, 2, 3)); // 1
console.log(Math.max(1, 2, 3)); // 3

// With arrays using spread operator
const numbers = [4, 2, 8, 6, 1];
console.log(Math.min(...numbers)); // 1
console.log(Math.max(...numbers)); // 8

// Practical: Clamping values
function clamp(value, min, max) {
  return Math.min(Math.max(value, min), max);
}

console.log(clamp(15, 0, 10)); // 10
console.log(clamp(-5, 0, 10)); // 0

// Finding range
function findRange(arr) {
  return Math.max(...arr) - Math.min(...arr);
}

console.log(findRange([10, 20, 30, 40])); // 30

// Normalizing values between 0-1
function normalize(value, min, max) {
  return (value - min) / (max - min);
}

console.log(normalize(75, 0, 100)); // 0.75

// Practical: Finding best/worst scores
const scores = [85, 92, 78, 95, 88];
console.log(\`Best: \${Math.max(...scores)}\`); // Best: 95
console.log(\`Worst: \${Math.min(...scores)}\`); // Worst: 78`,
      notes: [
        'Accepts any number of arguments',
        'Returns Infinity for Math.min() with no args',
        'Returns -Infinity for Math.max() with no args',
        'Use spread operator with arrays'
      ],
      icon: TrendingUp
    },
    {
      id: 'powSqrt',
      title: 'Math.pow() / Math.sqrt()',
      description: 'Exponentiation and square root operations.',
      category: 'operations',
      level: 'Intermediate',
      example: `// Basic power operations
console.log(Math.pow(2, 3));    // 8 (2³)
console.log(Math.pow(4, 0.5));  // 2 (square root)
console.log(Math.pow(10, -2));  // 0.01 (1/100)

// Square root
console.log(Math.sqrt(16));     // 4
console.log(Math.sqrt(2));      // 1.4142135623730951

// ES6 exponentiation operator (preferred)
console.log(2 ** 3);           // 8
console.log(4 ** 0.5);         // 2

// Practical: Distance calculation (Pythagorean)
function distance(x1, y1, x2, y2) {
  return Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2);
}

console.log(distance(0, 0, 3, 4)); // 5

// Compound interest calculation
function compoundInterest(principal, rate, years) {
  return principal * (1 + rate) ** years;
}

console.log(compoundInterest(1000, 0.05, 10)); // 1628.89

// Hypotenuse calculation
function hypotenuse(a, b) {
  return Math.sqrt(a ** 2 + b ** 2);
}

console.log(hypotenuse(3, 4)); // 5

// Cube root (using exponent)
function cubeRoot(x) {
  return Math.pow(x, 1/3);
}

console.log(cubeRoot(27)); // 3`,
      notes: [
        'Math.pow(x, y) raises x to the power y',
        'ES6 ** operator is now preferred',
        'Math.sqrt(x) is faster than Math.pow(x, 0.5)',
        'For cube roots: Math.cbrt() or x ** (1/3)'
      ],
      icon: Power
    },
    {
      id: 'absSign',
      title: 'Math.abs() / Math.sign()',
      description: 'Absolute value and sign detection.',
      category: 'utilities',
      level: 'Intermediate',
      example: `// Absolute value
console.log(Math.abs(-4.5));    // 4.5
console.log(Math.abs(4.5));     // 4.5
console.log(Math.abs(0));       // 0
console.log(Math.abs(-0));      // 0

// Sign function
console.log(Math.sign(4.5));    // 1
console.log(Math.sign(-4.5));   // -1
console.log(Math.sign(0));      // 0
console.log(Math.sign(-0));     // -0

// Practical: Vector magnitude
function vectorMagnitude(x, y) {
  return Math.sqrt(x ** 2 + y ** 2);
}

console.log(vectorMagnitude(3, 4)); // 5

// Direction-based movement
function moveInDirection(position, distance) {
  const direction = Math.sign(distance);
  const speed = Math.abs(distance) * 10;
  return \`Moving \${speed} units in direction \${direction}\`;
}

console.log(moveInDirection(0, 5));  // "Moving 50 units in direction 1"
console.log(moveInDirection(0, -3)); // "Moving 30 units in direction -1"

// Calculating difference (always positive)
function absoluteDifference(a, b) {
  return Math.abs(a - b);
}

console.log(absoluteDifference(10, 15)); // 5
console.log(absoluteDifference(15, 10)); // 5

// Temperature difference calculation
function tempDifference(temp1, temp2) {
  return Math.abs(temp1 - temp2);
}

console.log(tempDifference(20, -5)); // 25`,
      notes: [
        'Math.abs() always returns positive or zero',
        'Math.sign() returns 1, -1, 0, -0, or NaN',
        'Useful for physics and game programming',
        'Great for comparing magnitudes'
      ],
      icon: Percent
    }
  ];

  // Filter methods
  const filteredMethods = mathMethods.filter(method => {
    const matchesSearch = method.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         method.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || method.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  // Categories for filter
  const categories = ['all', 'rounding', 'random', 'operations', 'utilities'];

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
  const scrollToRef = (ref, methodId) => {
    ref.current.scrollIntoView({ behavior: 'smooth' });
    setActiveMethod(methodId);
    // Add highlight effect
    ref.current.classList.add('highlight-section');
    setTimeout(() => {
      ref.current.classList.remove('highlight-section');
    }, 1000);
  };

  // Copy code function
  const copyToClipboard = (code, methodId) => {
    navigator.clipboard.writeText(code);
    setCopiedCode(methodId);
    setTimeout(() => setCopiedCode(null), 2000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black text-white">
      {/* Hero Section */}
      <SEO title='JS Math | Algo Tate'/>
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 via-purple-600/20 to-pink-600/20"></div>
        <div className="relative max-w-7xl mx-auto px-6 py-12">
          <div className="text-center">
            <div className="flex items-center justify-center gap-3 mb-4">
              <Calculator size={48} className="text-blue-400" />
              <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                Math Methods
              </h1>
              <SquareRoot size={48} className="text-yellow-400 animate-pulse" />
            </div>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Master JavaScript's Math object with practical examples, performance tips, and real-world applications.
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
                    placeholder="Search math methods..."
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
                  <Calculator size={16} className="text-blue-400" />
                  <span className="text-white font-bold">{mathMethods.length}</span> Methods
                </span>
                <span className="flex items-center gap-2">
                  <Zap size={16} className="text-purple-400" />
                  <span className="text-white font-bold">4</span> Categories
                </span>
                <span className="flex items-center gap-2">
                  <Activity size={16} className="text-pink-400" />
                  <span className="text-white font-bold">40+</span> Examples
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
            {mathMethods.map((method) => {
              const MethodIcon = method.icon;
              return (
                <button
                  key={method.id}
                  onClick={() => scrollToRef(refs[method.id], method.id)}
                  className={`flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-semibold whitespace-nowrap transition-all ${
                    activeMethod === method.id
                      ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg'
                      : 'bg-white/10 text-gray-300 hover:bg-white/20'
                  }`}
                >
                  <MethodIcon size={16} />
                  {method.title}
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Methods Grid */}
      <div className="max-w-7xl mx-auto px-6 pb-16">
        <div className="grid grid-cols-1 gap-6">
          {filteredMethods.map((method) => {
            const MethodIcon = method.icon;
            
            return (
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
                        <MethodIcon size={24} className="text-blue-400" />
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
                      <span className="text-xs text-gray-500 bg-gray-800/50 px-3 py-1 rounded-full capitalize">
                        {method.category}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Method Content */}
                <div className="p-6">
                  {/* Key Points */}
                  {method.notes && (
                    <div className="mb-6 p-4 bg-blue-500/10 border border-blue-500/20 rounded-xl">
                      <div className="flex items-center gap-2 text-blue-400 mb-3">
                        <Sparkles size={16} />
                        <span className="font-semibold">Key Points</span>
                      </div>
                      <ul className="space-y-2">
                        {method.notes.map((note, idx) => (
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
                          onClick={() => copyToClipboard(method.example, method.id)}
                          className="flex items-center gap-2 px-3 py-1.5 bg-blue-500/20 hover:bg-blue-500/30 border border-blue-500/30 rounded-lg text-blue-400 hover:text-white transition-all duration-200 text-sm"
                        >
                          {copiedCode === method.id ? (
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
                        {method.example}
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
                      {method.id === 'trunc' && (
                        <div className="flex items-start gap-2">
                          <span className="text-blue-400 font-mono text-xs mt-0.5">⚡</span>
                          <span><code className="text-blue-400">Math.trunc(x)</code> is faster than <code className="text-blue-400">parseInt(x)</code> for numbers</span>
                        </div>
                      )}
                      {method.id === 'powSqrt' && (
                        <div className="flex items-start gap-2">
                          <span className="text-blue-400 font-mono text-xs mt-0.5">⚡</span>
                          <span>Use <code className="text-blue-400">x ** y</code> instead of <code className="text-blue-400">Math.pow(x, y)</code> for better readability</span>
                        </div>
                      )}
                      {method.id === 'random' && (
                        <div className="flex items-start gap-2">
                          <span className="text-blue-400 font-mono text-xs mt-0.5">🔒</span>
                          <span>For cryptography, use <code className="text-blue-400">crypto.getRandomValues()</code> instead of <code className="text-blue-400">Math.random()</code></span>
                        </div>
                      )}
                      {method.id === 'minMax' && (
                        <div className="flex items-start gap-2">
                          <span className="text-blue-400 font-mono text-xs mt-0.5">⚡</span>
                          <span>Cache <code className="text-blue-400">Math.min()</code> and <code className="text-blue-400">Math.max()</code> results if used repeatedly</span>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </section>
            );
          })}

          {/* Math Constants Section */}
          <section ref={refs.constants} className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6">
            <div className="flex items-center gap-3 mb-6">
              <Hash size={32} className="text-blue-400" />
              <h2 className="text-2xl font-bold text-white">Math Constants</h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {[
                { name: 'Math.PI', value: '3.141592653589793', description: 'Ratio of a circle\'s circumference to its diameter' },
                { name: 'Math.E', value: '2.718281828459045', description: 'Euler\'s number, base of natural logarithms' },
                { name: 'Math.LN2', value: '0.6931471805599453', description: 'Natural logarithm of 2' },
                { name: 'Math.LN10', value: '2.302585092994046', description: 'Natural logarithm of 10' },
                { name: 'Math.LOG2E', value: '1.4426950408889634', description: 'Base-2 logarithm of E' },
                { name: 'Math.LOG10E', value: '0.4342944819032518', description: 'Base-10 logarithm of E' },
                { name: 'Math.SQRT2', value: '1.4142135623730951', description: 'Square root of 2' },
                { name: 'Math.SQRT1_2', value: '0.7071067811865476', description: 'Square root of 1/2' },
                { name: 'Infinity', value: 'Infinity', description: 'Positive infinity' },
                { name: 'NaN', value: 'NaN', description: 'Not-a-Number' }
              ].map((constant) => (
                <div key={constant.name} className="bg-gray-800/50 p-4 rounded-xl">
                  <div className="font-mono text-blue-400 text-sm mb-1">{constant.name}</div>
                  <div className="text-gray-300 text-sm font-medium mb-2">{constant.value}</div>
                  <div className="text-gray-400 text-xs">{constant.description}</div>
                </div>
              ))}
            </div>
          </section>

          {/* Other Math Methods Section */}
          <section ref={refs.otherMethods} className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6">
            <div className="flex items-center gap-3 mb-6">
              <Plus size={32} className="text-purple-400" />
              <h2 className="text-2xl font-bold text-white">Other Useful Math Methods</h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                { method: 'Math.sin() / Math.cos() / Math.tan()', description: 'Trigonometric functions' },
                { method: 'Math.asin() / Math.acos() / Math.atan()', description: 'Inverse trigonometric functions' },
                { method: 'Math.log() / Math.log10() / Math.log2()', description: 'Logarithm functions' },
                { method: 'Math.exp()', description: 'Returns E^x' },
                { method: 'Math.cbrt()', description: 'Cube root (ES6)' },
                { method: 'Math.hypot()', description: 'Square root of sum of squares (ES6)' },
                { method: 'Math.fround()', description: 'Nearest single precision float (ES6)' },
                { method: 'Math.imul()', description: '32-bit integer multiplication' }
              ].map((item) => (
                <div key={item.method} className="bg-gray-800/50 p-4 rounded-xl hover:bg-gray-800/70 transition-colors">
                  <div className="font-mono text-purple-400 text-sm mb-2">{item.method}</div>
                  <div className="text-gray-300 text-sm">{item.description}</div>
                </div>
              ))}
            </div>
          </section>

          {/* Empty State */}
          {filteredMethods.length === 0 && (
            <div className="text-center py-16 bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl">
              <Calculator className="text-gray-500 mx-auto mb-4" size={64} />
              <div className="text-gray-400 text-lg mb-4">
                No math methods found matching your criteria.
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

export default MathPage;