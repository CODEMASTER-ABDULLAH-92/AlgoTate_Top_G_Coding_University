"use client";
import React, { useRef, useState } from 'react';
import SEO from "../../../Component/SeoComp"
import { 
  Search, 
  ArrowUp, 
  Zap, 
  Code, 
  Hash, 
  Type, 
  Check, 
  X, 
  Infinity as InfinityIcon,
  AlertCircle,
  HelpCircle,
  ChevronRight,
  Copy,
  Play,
  Sparkles,
  Terminal,
  Braces,
  List,
  FunctionSquare,
  Calendar
} from 'lucide-react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';

const JsDataTypesPage = () => {
  // Refs for each section
  const refs = {
    primitive: useRef(null),
    object: useRef(null),
    special: useRef(null),
    typeConversion: useRef(null),
    typeofOp: useRef(null),
    bestPractices: useRef(null),
  };

  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [copiedCode, setCopiedCode] = useState(null);
  const [activeSection, setActiveSection] = useState('primitive');

  // Data types data
  const dataTypes = [
    {
      id: 'number',
      title: 'Number',
      category: 'primitive',
      description: 'Represents both integer and floating-point numbers',
      example: `let age = 25;
let price = 99.99;
let hex = 0xFF; // 255 in hexadecimal
let binary = 0b1010; // 10 in binary`,
      note: 'All numbers in JS are 64-bit floating point (IEEE 754)',
      icon: Hash
    },
    {
      id: 'string',
      title: 'String',
      category: 'primitive',
      description: 'Represents textual data enclosed in quotes',
      example: `let name = "John";
let message = 'Hello World';
let template = \`Hello \${name}\`; // Template literal`,
      note: 'Strings are immutable in JavaScript',
      icon: Type
    },
    {
      id: 'boolean',
      title: 'Boolean',
      category: 'primitive',
      description: 'Logical entity with true or false values',
      example: `let isActive = true;
let canEdit = false;
let hasAccess = (age >= 18); // true or false`,
      note: 'Used in conditional statements and logical operations',
      icon: Check
    },
    {
      id: 'undefined',
      title: 'Undefined',
      category: 'primitive',
      description: 'A variable that has been declared but not assigned a value',
      example: `let x;
console.log(x); // undefined

function test() {}
console.log(test()); // undefined`,
      note: 'Default value of uninitialized variables',
      icon: HelpCircle
    },
    {
      id: 'null',
      title: 'Null',
      category: 'primitive',
      description: 'Represents the intentional absence of any object value',
      example: `let user = null;
let data = null; // Explicitly setting to null`,
      note: 'typeof null is "object" (historical bug)',
      icon: X
    },
    {
      id: 'symbol',
      title: 'Symbol',
      category: 'primitive',
      description: 'A unique and immutable primitive value (ES6)',
      example: `const id = Symbol('id');
const user = {
  [id]: 123,
  name: 'John'
};

console.log(user[id]); // 123`,
      note: 'Used to create unique property keys',
      icon: Zap
    },
    {
      id: 'bigint',
      title: 'BigInt',
      category: 'primitive',
      description: 'Represents integers larger than 2^53 - 1 (ES2020)',
      example: `const bigNum = 1234567890123456789012345678901234567890n;
const hugeString = BigInt("9007199254740991");

console.log(bigNum + 1n); // Arithmetic with BigInt`,
      note: 'Add "n" suffix or use BigInt() constructor',
      icon: InfinityIcon
    },
    {
      id: 'object',
      title: 'Object',
      category: 'object',
      description: 'Collections of key-value pairs',
      example: `let person = {
  name: "John",
  age: 30,
  isAdmin: false,
  greet() {
    return "Hello!";
  }
};

console.log(person.name); // John
console.log(person.greet()); // Hello!`,
      note: 'Almost everything in JS is an object',
      icon: Braces
    },
    {
      id: 'array',
      title: 'Array',
      category: 'object',
      description: 'Ordered collections of values',
      example: `let colors = ["red", "green", "blue"];
let numbers = [1, 2, 3, 4, 5];
let mixed = [1, "text", true, {key: "value"}];

console.log(colors[0]); // red
console.log(numbers.length); // 5`,
      note: 'Arrays are special types of objects',
      icon: List
    },
    {
      id: 'function',
      title: 'Function',
      category: 'object',
      description: 'Callable objects that execute a block of code',
      example: `function greet(name) {
  return "Hello " + name;
}

const arrowFunc = (x, y) => x + y;
const asyncFunc = async () => {
  return await fetchData();
};`,
      note: 'Functions are first-class citizens in JS',
      icon: FunctionSquare
    },
    {
      id: 'date',
      title: 'Date',
      category: 'object',
      description: 'Represents dates and times',
      example: `let now = new Date();
let specificDate = new Date('2024-12-25');
let timestamp = new Date(1704067200000);

console.log(now.toISOString()); // Current date/time
console.log(specificDate.getFullYear()); // 2024`,
      note: 'Based on Unix Time (milliseconds since Jan 1, 1970)',
      icon: Calendar
    },
    {
      id: 'nan',
      title: 'NaN',
      category: 'special',
      description: 'Represents "Not-a-Number" from invalid numeric operations',
      example: `console.log(0 / 0); // NaN
console.log(Number("hello")); // NaN
console.log(Math.sqrt(-1)); // NaN

// NaN is the only value not equal to itself
console.log(NaN === NaN); // false`,
      note: 'Use isNaN() or Number.isNaN() to check for NaN',
      icon: AlertCircle
    },
    {
      id: 'infinity',
      title: 'Infinity',
      category: 'special',
      description: 'Represents mathematical infinity',
      example: `console.log(1 / 0); // Infinity
console.log(-1 / 0); // -Infinity
console.log(Infinity > 1000000); // true

// Maximum number
console.log(Number.MAX_VALUE); // 1.7976931348623157e+308`,
      note: 'Use isFinite() to check for finite numbers',
      icon: InfinityIcon
    }
  ];

  // Type conversion examples
  const typeConversions = [
    {
      title: 'String to Number',
      examples: [
        { code: `Number("123")`, result: '123 (number)' },
        { code: `parseInt("123px")`, result: '123 (number)' },
        { code: `+"456"`, result: '456 (number)' },
      ]
    },
    {
      title: 'Number to String',
      examples: [
        { code: `String(123)`, result: '"123" (string)' },
        { code: `(456).toString()`, result: '"456" (string)' },
        { code: `100 + ""`, result: '"100" (string)' },
      ]
    },
    {
      title: 'Boolean Conversion',
      examples: [
        { code: `Boolean(1)`, result: 'true' },
        { code: `Boolean(0)`, result: 'false' },
        { code: `!!"text"`, result: 'true (double negation)' },
      ]
    }
  ];

  // Filter data types
  const filteredTypes = dataTypes.filter(type => {
    const matchesSearch = type.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         type.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || type.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  // Categories for filter
  const categories = ['all', 'primitive', 'object', 'special'];

  // Scroll function
  const scrollToRef = (ref, sectionId) => {
    ref.current.scrollIntoView({ behavior: 'smooth' });
    setActiveSection(sectionId);
    // Add highlight effect
    ref.current.classList.add('highlight-section');
    setTimeout(() => {
      ref.current.classList.remove('highlight-section');
    }, 1000);
  };

  // Copy code function
  const copyToClipboard = (code, id) => {
    navigator.clipboard.writeText(code);
    setCopiedCode(id);
    setTimeout(() => setCopiedCode(null), 2000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black text-white">
      {/* Hero Section */}
      <SEO title='JS Data Types | Algo Tate'/>
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 via-purple-600/20 to-pink-600/20"></div>
        <div className="relative max-w-7xl mx-auto px-6 py-12">
          <div className="text-center">
            <div className="flex items-center justify-center gap-3 mb-4">
              <Type size={48} className="text-blue-400" />
              <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                JavaScript Data Types
              </h1>
              <Zap size={48} className="text-yellow-400 animate-pulse" />
            </div>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Understand JavaScript's dynamic typing system with comprehensive examples and best practices.
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
                    placeholder="Search data types..."
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
                      {category === 'all' ? 'All Types' : category}
                    </button>
                  ))}
                </div>
              </div>
              
              {/* Quick Stats */}
              <div className="flex justify-center gap-8 text-sm text-gray-400">
                <span className="flex items-center gap-2">
                  <Hash size={16} className="text-blue-400" />
                  <span className="text-white font-bold">7</span> Primitive Types
                </span>
                <span className="flex items-center gap-2">
                  <Braces size={16} className="text-purple-400" />
                  <span className="text-white font-bold">4</span> Object Types
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <div className="max-w-7xl mx-auto px-6 mb-8">
        <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-4">
          <div className="flex flex-wrap justify-center gap-2">
            {Object.keys(refs).map((section) => (
              <button
                key={section}
                onClick={() => scrollToRef(refs[section], section)}
                className={`px-4 py-2 rounded-xl text-sm font-semibold capitalize transition-all ${
                  activeSection === section
                    ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg'
                    : 'bg-white/10 text-gray-300 hover:bg-white/20'
                }`}
              >
                {section.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase())}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 pb-16">
        {/* Primitive Types Section */}
        <section ref={refs.primitive} className="mb-16">
          <div className="flex items-center gap-3 mb-6">
            <Hash className="text-blue-400" size={32} />
            <h2 className="text-3xl font-bold text-white">Primitive Data Types</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {filteredTypes.filter(t => t.category === 'primitive').map((type) => (
              <div
                key={type.id}
                className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl overflow-hidden hover:border-blue-500/30 transition-all duration-300 group"
              >
                <div className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div className="p-2 bg-blue-500/20 rounded-lg">
                        <type.icon size={24} className="text-blue-400" />
                      </div>
                      <h3 className="text-xl font-bold text-white">{type.title}</h3>
                    </div>
                    <span className="px-3 py-1 bg-blue-500/20 text-blue-400 text-xs font-semibold rounded-full">
                      Primitive
                    </span>
                  </div>
                  
                  <p className="text-gray-300 mb-4">{type.description}</p>
                  
                  {type.note && (
                    <div className="mb-4 p-3 bg-blue-500/10 border border-blue-500/20 rounded-lg">
                      <p className="text-blue-400 text-sm flex items-center gap-2">
                        <AlertCircle size={14} />
                        {type.note}
                      </p>
                    </div>
                  )}
                  
                  <div className="relative">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm font-semibold text-gray-300">Example</span>
                      <button
                        onClick={() => copyToClipboard(type.example, type.id)}
                        className="flex items-center gap-1 px-3 py-1 bg-blue-500/20 hover:bg-blue-500/30 border border-blue-500/30 rounded-lg text-blue-400 hover:text-white transition-all duration-200 text-sm"
                      >
                        {copiedCode === type.id ? (
                          <>
                            <Check size={12} />
                            Copied
                          </>
                        ) : (
                          <>
                            <Copy size={12} />
                            Copy
                          </>
                        )}
                      </button>
                    </div>
                    
                    <div className="bg-gray-900 rounded-lg overflow-hidden border border-gray-700">
                      <SyntaxHighlighter
                        language="javascript"
                        style={vscDarkPlus}
                        customStyle={{
                          margin: 0,
                          padding: '1rem',
                          fontSize: '14px',
                          background: 'transparent'
                        }}
                      >
                        {type.example}
                      </SyntaxHighlighter>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Object Types Section */}
        <section ref={refs.object} className="mb-16">
          <div className="flex items-center gap-3 mb-6">
            <Braces className="text-purple-400" size={32} />
            <h2 className="text-3xl font-bold text-white">Object Data Types</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {filteredTypes.filter(t => t.category === 'object').map((type) => (
              <div
                key={type.id}
                className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl overflow-hidden hover:border-purple-500/30 transition-all duration-300 group"
              >
                <div className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div className="p-2 bg-purple-500/20 rounded-lg">
                        <type.icon size={24} className="text-purple-400" />
                      </div>
                      <h3 className="text-xl font-bold text-white">{type.title}</h3>
                    </div>
                    <span className="px-3 py-1 bg-purple-500/20 text-purple-400 text-xs font-semibold rounded-full">
                      Object
                    </span>
                  </div>
                  
                  <p className="text-gray-300 mb-4">{type.description}</p>
                  
                  {type.note && (
                    <div className="mb-4 p-3 bg-purple-500/10 border border-purple-500/20 rounded-lg">
                      <p className="text-purple-400 text-sm flex items-center gap-2">
                        <AlertCircle size={14} />
                        {type.note}
                      </p>
                    </div>
                  )}
                  
                  <div className="relative">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm font-semibold text-gray-300">Example</span>
                      <button
                        onClick={() => copyToClipboard(type.example, type.id)}
                        className="flex items-center gap-1 px-3 py-1 bg-purple-500/20 hover:bg-purple-500/30 border border-purple-500/30 rounded-lg text-purple-400 hover:text-white transition-all duration-200 text-sm"
                      >
                        {copiedCode === type.id ? (
                          <>
                            <Check size={12} />
                            Copied
                          </>
                        ) : (
                          <>
                            <Copy size={12} />
                            Copy
                          </>
                        )}
                      </button>
                    </div>
                    
                    <div className="bg-gray-900 rounded-lg overflow-hidden border border-gray-700">
                      <SyntaxHighlighter
                        language="javascript"
                        style={vscDarkPlus}
                        customStyle={{
                          margin: 0,
                          padding: '1rem',
                          fontSize: '14px',
                          background: 'transparent'
                        }}
                      >
                        {type.example}
                      </SyntaxHighlighter>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Special Types Section */}
        <section ref={refs.special} className="mb-16">
          <div className="flex items-center gap-3 mb-6">
            <AlertCircle className="text-red-400" size={32} />
            <h2 className="text-3xl font-bold text-white">Special Data Types</h2>
          </div>
          
          <div className="grid grid-cols-1 gap-6">
            {filteredTypes.filter(t => t.category === 'special').map((type) => (
              <div
                key={type.id}
                className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl overflow-hidden hover:border-red-500/30 transition-all duration-300 group"
              >
                <div className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div className="p-2 bg-red-500/20 rounded-lg">
                        <type.icon size={24} className="text-red-400" />
                      </div>
                      <h3 className="text-xl font-bold text-white">{type.title}</h3>
                    </div>
                    <span className="px-3 py-1 bg-red-500/20 text-red-400 text-xs font-semibold rounded-full">
                      Special
                    </span>
                  </div>
                  
                  <p className="text-gray-300 mb-4">{type.description}</p>
                  
                  {type.note && (
                    <div className="mb-4 p-3 bg-red-500/10 border border-red-500/20 rounded-lg">
                      <p className="text-red-400 text-sm flex items-center gap-2">
                        <AlertCircle size={14} />
                        {type.note}
                      </p>
                    </div>
                  )}
                  
                  <div className="relative">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm font-semibold text-gray-300">Example</span>
                      <button
                        onClick={() => copyToClipboard(type.example, type.id)}
                        className="flex items-center gap-1 px-3 py-1 bg-red-500/20 hover:bg-red-500/30 border border-red-500/30 rounded-lg text-red-400 hover:text-white transition-all duration-200 text-sm"
                      >
                        {copiedCode === type.id ? (
                          <>
                            <Check size={12} />
                            Copied
                          </>
                        ) : (
                          <>
                            <Copy size={12} />
                            Copy
                          </>
                        )}
                      </button>
                    </div>
                    
                    <div className="bg-gray-900 rounded-lg overflow-hidden border border-gray-700">
                      <SyntaxHighlighter
                        language="javascript"
                        style={vscDarkPlus}
                        customStyle={{
                          margin: 0,
                          padding: '1rem',
                          fontSize: '14px',
                          background: 'transparent'
                        }}
                      >
                        {type.example}
                      </SyntaxHighlighter>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Type Conversion Section */}
        <section ref={refs.typeConversion} className="mb-16">
          <div className="flex items-center gap-3 mb-6">
            <Zap className="text-yellow-400" size={32} />
            <h2 className="text-3xl font-bold text-white">Type Conversion</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {typeConversions.map((conversion, idx) => (
              <div
                key={idx}
                className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 hover:border-yellow-500/30 transition-all duration-300"
              >
                <h3 className="text-xl font-bold text-white mb-4">{conversion.title}</h3>
                
                <div className="space-y-3">
                  {conversion.examples.map((example, exampleIdx) => (
                    <div key={exampleIdx} className="bg-gray-900/50 rounded-lg p-3 border border-gray-700">
                      <div className="flex items-center justify-between mb-1">
                        <code className="text-yellow-400 text-sm">{example.code}</code>
                        <Copy
                          size={14}
                          className="text-gray-400 hover:text-white cursor-pointer"
                          onClick={() => copyToClipboard(example.code, `conv-${idx}-${exampleIdx}`)}
                        />
                      </div>
                      <div className="text-gray-400 text-sm">
                        → {example.result}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* typeof Operator Section */}
        <section ref={refs.typeofOp} className="mb-16">
          <div className="flex items-center gap-3 mb-6">
            <Terminal className="text-green-400" size={32} />
            <h2 className="text-3xl font-bold text-white">typeof Operator</h2>
          </div>
          
          <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6">
            <p className="text-gray-300 mb-6">
              The <code className="text-green-400">typeof</code> operator returns a string indicating the type of the operand.
            </p>
            
            <div className="bg-gray-900/50 rounded-lg p-4 border border-gray-700">
              <SyntaxHighlighter
                language="javascript"
                style={vscDarkPlus}
                customStyle={{
                  margin: 0,
                  padding: 0,
                  fontSize: '14px',
                  background: 'transparent'
                }}
              >
                {`console.log(typeof 42);               // "number"
console.log(typeof "hello");           // "string"
console.log(typeof true);              // "boolean"
console.log(typeof undefined);         // "undefined"
console.log(typeof null);              // "object" (historical bug)
console.log(typeof {});                // "object"
console.log(typeof []);                // "object"
console.log(typeof function() {});     // "function"
console.log(typeof Symbol());          // "symbol"
console.log(typeof 123n);              // "bigint"`}
              </SyntaxHighlighter>
            </div>
          </div>
        </section>

        {/* Best Practices Section */}
        <section ref={refs.bestPractices} className="mb-16">
          <div className="flex items-center gap-3 mb-6">
            <Sparkles className="text-pink-400" size={32} />
            <h2 className="text-3xl font-bold text-white">Best Practices</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                title: "Use Strict Equality",
                description: "Prefer === and !== over == and != to avoid unexpected type coercion.",
                example: `// Good
if (value === 5) { ... }

// Avoid
if (value == 5) { ... } // Performs type coercion`
              },
              {
                title: "Initialize Variables",
                description: "Avoid undefined by properly initializing variables.",
                example: `// Good
let count = 0;
let name = "";

// Avoid
let count; // undefined
let name;  // undefined`
              },
              {
                title: "Check for Null/Undefined",
                description: "Handle cases where values might be missing.",
                example: `// Check both null and undefined
if (value == null) { ... }

// Optional chaining (ES2020)
const city = user?.address?.city;

// Nullish coalescing (ES2020)
const displayName = username ?? "Guest";`
              },
              {
                title: "Type Checking",
                description: "Explicitly check types when necessary.",
                example: `if (typeof value === 'string') { ... }

// Array checking
if (Array.isArray(items)) { ... }

// Number checking
if (!isNaN(Number(input))) { ... }`
              }
            ].map((practice, idx) => (
              <div
                key={idx}
                className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 hover:border-pink-500/30 transition-all duration-300"
              >
                <h3 className="text-xl font-bold text-white mb-3">{practice.title}</h3>
                <p className="text-gray-300 mb-4">{practice.description}</p>
                
                <div className="bg-gray-900/50 rounded-lg p-3 border border-gray-700">
                  <SyntaxHighlighter
                    language="javascript"
                    style={vscDarkPlus}
                    customStyle={{
                      margin: 0,
                      padding: 0,
                      fontSize: '13px',
                      background: 'transparent'
                    }}
                  >
                    {practice.example}
                  </SyntaxHighlighter>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Empty State */}
        {filteredTypes.length === 0 && (
          <div className="text-center py-16 bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl">
            <div className="text-gray-400 text-lg mb-4">
              No data types found matching your criteria.
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

export default JsDataTypesPage;