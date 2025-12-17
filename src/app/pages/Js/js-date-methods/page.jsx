"use client";
import React, { useRef, useState } from 'react';
import { 
  Search, 
  ArrowUp, 
  Calendar,
  Clock,
  Hash,
  CalendarDays,
  Globe,
  Timer,
  Copy,
  Check,
  Play,
  CalendarRange,
  CalendarCheck,
  CalendarClock,
  CalendarHeart,
  CalendarMinus,
  CalendarPlus,
  ChevronRight,
  Sparkles,
  Terminal,
  Zap,
  Activity
} from 'lucide-react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';

const DateMethodsPage = () => {
  // Refs for each method
  const refs = {
    getDate: useRef(null),
    getDay: useRef(null),
    getFullYear: useRef(null),
    getMonth: useRef(null),
    getTime: useRef(null),
    toDateString: useRef(null),
    toISOString: useRef(null),
    toLocaleDateString: useRef(null),
    toLocaleTimeString: useRef(null),
    toTimeString: useRef(null),
    toUTCString: useRef(null),
    dateNow: useRef(null),
  };

  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [copiedCode, setCopiedCode] = useState(null);
  const [activeMethod, setActiveMethod] = useState('getDate');

  // Date methods data
  const dateMethods = [
    {
      id: 'getDate',
      title: 'getDate()',
      description: 'Returns the day of the month (1-31) for the specified date.',
      category: 'getters',
      level: 'Beginner',
      example: `const date = new Date('2025-06-23');
console.log(date.getDate()); // 23

// Practical example
const today = new Date();
if (today.getDate() === 1) {
  console.log("It's the first day of the month!");
}`,
      notes: [
        'Returns a number between 1 and 31',
        'Corresponds to the local time zone',
        'Useful for displaying or comparing specific days'
      ]
    },
    {
      id: 'getDay',
      title: 'getDay()',
      description: 'Returns the day of the week (0-6) for the specified date.',
      category: 'getters',
      level: 'Beginner',
      example: `const date = new Date('2025-06-23');
console.log(date.getDay()); // 1 (Monday)

// Convert to day name
const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
const dayName = days[date.getDay()];
console.log(dayName); // "Monday"

// Check if it's a weekday
const isWeekday = date.getDay() >= 1 && date.getDay() <= 5;
console.log(isWeekday); // true`,
      notes: [
        '0 = Sunday, 1 = Monday, 2 = Tuesday, 3 = Wednesday, 4 = Thursday, 5 = Friday, 6 = Saturday',
        'Returns a number, not a string',
        'Commonly used for business logic'
      ]
    },
    {
      id: 'getFullYear',
      title: 'getFullYear()',
      description: 'Returns the year (4 digits for 4-digit years) of the specified date.',
      category: 'getters',
      level: 'Beginner',
      example: `const date = new Date('2025-06-23');
console.log(date.getFullYear()); // 2025

// Calculate age
const birthYear = 1990;
const currentYear = new Date().getFullYear();
const age = currentYear - birthYear;
console.log(\`Age: \${age}\`); // Age: 35

// Get 2-digit year
const twoDigitYear = date.getFullYear().toString().slice(-2);
console.log(twoDigitYear); // "25"`,
      notes: [
        'Always use getFullYear() instead of getYear() (deprecated)',
        'Returns full 4-digit year',
        'For 2-digit year, use: getFullYear().toString().slice(-2)'
      ]
    },
    {
      id: 'getMonth',
      title: 'getMonth()',
      description: 'Returns the month (0-11) in the specified date.',
      category: 'getters',
      level: 'Beginner',
      example: `const date = new Date('2025-06-23');
console.log(date.getMonth()); // 5 (June)

// Convert to month name
const months = ['January', 'February', 'March', 'April', 'May', 'June', 
               'July', 'August', 'September', 'October', 'November', 'December'];
const monthName = months[date.getMonth()];
console.log(monthName); // "June"

// For display (adding 1 for human-readable month)
const displayMonth = date.getMonth() + 1;
console.log(\`\${displayMonth}/23/2025\`); // "6/23/2025"`,
      notes: [
        '0 = January, 1 = February, 2 = March, 3 = April, 4 = May, 5 = June',
        '6 = July, 7 = August, 8 = September, 9 = October, 10 = November, 11 = December',
        'Remember to add 1 for display purposes'
      ]
    },
    {
      id: 'getTime',
      title: 'getTime()',
      description: 'Returns the numeric value as milliseconds since January 1, 1970, 00:00:00 UTC.',
      category: 'timestamps',
      level: 'Intermediate',
      example: `const date = new Date('2025-06-23');
console.log(date.getTime()); // 1750669523190

// Compare dates
const date1 = new Date('2025-01-01');
const date2 = new Date('2025-12-31');
const difference = date2.getTime() - date1.getTime();
const daysDifference = Math.floor(difference / (1000 * 60 * 60 * 24));
console.log(\`Difference: \${daysDifference} days\`); // Difference: 364 days

// Create date from timestamp
const timestamp = 1750669523190;
const newDate = new Date(timestamp);
console.log(newDate.toISOString()); // "2025-06-23T00:00:00.000Z"`,
      notes: [
        'Also known as Unix timestamp or epoch time',
        'Useful for comparing dates and measuring intervals',
        'Milliseconds precision'
      ]
    },
    {
      id: 'toDateString',
      title: 'toDateString()',
      description: 'Returns the date portion in a human readable format.',
      category: 'formatting',
      level: 'Beginner',
      example: `const date = new Date('2025-06-23');
console.log(date.toDateString()); // "Mon Jun 23 2025"

// Comparing with other methods
console.log(date.toISOString());      // "2025-06-23T00:00:00.000Z"
console.log(date.toLocaleDateString()); // "6/23/2025" (varies by locale)
console.log(date.toDateString());      // "Mon Jun 23 2025"`,
      notes: [
        'Format: "Day Month Date Year"',
        'Uses 3-letter day and month abbreviations',
        'Good for debugging or simple displays',
        'Not locale-specific'
      ]
    },
    {
      id: 'toISOString',
      title: 'toISOString()',
      description: 'Returns a string in simplified extended ISO 8601 format.',
      category: 'formatting',
      level: 'Intermediate',
      example: `const date = new Date('2025-06-23');
console.log(date.toISOString()); // "2025-06-23T00:00:00.000Z"

// For APIs and databases
const dataToSend = {
  createdAt: new Date().toISOString(),
  updatedAt: new Date().toISOString(),
  // ... other data
};

// Parse ISO string back to Date
const isoString = "2025-06-23T12:30:45.123Z";
const parsedDate = new Date(isoString);
console.log(parsedDate.getFullYear()); // 2025`,
      notes: [
        'Always uses UTC time (Z suffix)',
        'Format: YYYY-MM-DDTHH:mm:ss.sssZ',
        'Ideal for APIs, databases, and data exchange',
        'Consistent across all environments'
      ]
    },
    {
      id: 'toLocaleDateString',
      title: 'toLocaleDateString()',
      description: 'Returns a language sensitive representation of the date portion.',
      category: 'formatting',
      level: 'Intermediate',
      example: `const date = new Date('2025-06-23');

// Default locale
console.log(date.toLocaleDateString()); // "6/23/2025" (en-US)

// With specific locale
console.log(date.toLocaleDateString('de-DE')); // "23.6.2025"
console.log(date.toLocaleDateString('ja-JP')); // "2025/6/23"

// With formatting options
const options = { 
  weekday: 'long', 
  year: 'numeric', 
  month: 'long', 
  day: 'numeric' 
};
console.log(date.toLocaleDateString('en-US', options));
// "Monday, June 23, 2025"`,
      notes: [
        'Automatically adapts to user locale',
        'Highly customizable with options',
        'Best for user-facing date displays',
        'Supports multiple locales'
      ]
    },
    {
      id: 'toLocaleTimeString',
      title: 'toLocaleTimeString()',
      description: 'Returns a language sensitive representation of the time portion.',
      category: 'formatting',
      level: 'Intermediate',
      example: `const date = new Date('2025-06-23T14:30:45');

// Default locale
console.log(date.toLocaleTimeString()); // "2:30:45 PM" (en-US)

// With formatting options
const options = { 
  hour: '2-digit', 
  minute: '2-digit', 
  second: '2-digit',
  hour12: true,
  timeZone: 'America/New_York'
};
console.log(date.toLocaleTimeString('en-US', options));
// "10:30:45 AM" (adjusted for timezone)

// 24-hour format
const options24 = { 
  hour: '2-digit', 
  minute: '2-digit', 
  hour12: false 
};
console.log(date.toLocaleTimeString('en-US', options24));
// "14:30"`,
      notes: [
        'Time-only equivalent of toLocaleDateString()',
        'Great for user-friendly time displays',
        'Supports timezone conversion',
        'Flexible formatting options'
      ]
    },
    {
      id: 'toTimeString',
      title: 'toTimeString()',
      description: 'Returns the time portion in human readable form, including timezone.',
      category: 'formatting',
      level: 'Beginner',
      example: `const date = new Date('2025-06-23T14:30:45');
console.log(date.toTimeString());
// "14:30:45 GMT+0500 (Pakistan Standard Time)"

// Useful for debugging timezone issues
console.log(date.toString());      // Full date string
console.log(date.toTimeString());  // Only time with timezone
console.log(date.toDateString());  // Only date`,
      notes: [
        'Format: HH:mm:ss GMT±HHMM (Timezone Name)',
        'Shows local time and timezone offset',
        'Good for debugging timezone issues',
        'Consistent format regardless of locale'
      ]
    },
    {
      id: 'toUTCString',
      title: 'toUTCString()',
      description: 'Converts a date to a string using the UTC time zone.',
      category: 'formatting',
      level: 'Intermediate',
      example: `const date = new Date('2025-06-23T14:30:45');
console.log(date.toUTCString());
// "Mon, 23 Jun 2025 09:30:45 GMT"

// Compare with local string
console.log(date.toString());        // Local time
console.log(date.toUTCString());     // UTC time

// For HTTP headers
const headers = {
  'Date': new Date().toUTCString(),
  'Expires': new Date(Date.now() + 3600000).toUTCString()
};`,
      notes: [
        'Format: "Day, DD Month YYYY HH:mm:ss GMT"',
        'Converts date to UTC before displaying',
        'Common in HTTP headers and email dates',
        'Good for international applications'
      ]
    },
    {
      id: 'dateNow',
      title: 'Date.now()',
      description: 'Returns the number of milliseconds elapsed since January 1, 1970 00:00:00 UTC.',
      category: 'timestamps',
      level: 'Intermediate',
      example: `// Get current timestamp
const timestamp = Date.now();
console.log(timestamp); // 1750669523190

// Measure execution time
function measurePerformance() {
  const start = Date.now();
  
  // Some operation
  let sum = 0;
  for (let i = 0; i < 1000000; i++) {
    sum += i;
  }
  
  const end = Date.now();
  console.log(\`Operation took \${end - start}ms\`);
}

measurePerformance();

// Create a unique ID
const uniqueId = \`id_\${Date.now()}_\${Math.random().toString(36).substr(2, 9)}\`;
console.log(uniqueId); // "id_1750669523190_abc123def"`,
      notes: [
        'More efficient than new Date().getTime()',
        'Does not create a Date object instance',
        'Recommended for performance measurement',
        'Static method (called on Date constructor, not instances)'
      ]
    }
  ];

  // Filter methods
  const filteredMethods = dateMethods.filter(method => {
    const matchesSearch = method.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         method.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || method.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  // Categories for filter
  const categories = ['all', 'getters', 'formatting', 'timestamps'];

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

  // Get category icon
  const getCategoryIcon = (category) => {
    switch (category) {
      case 'getters': return CalendarDays;
      case 'formatting': return Calendar;
      case 'timestamps': return Timer;
      default: return Calendar;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black text-white">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 via-purple-600/20 to-pink-600/20"></div>
        <div className="relative max-w-7xl mx-auto px-6 py-12">
          <div className="text-center">
            <div className="flex items-center justify-center gap-3 mb-4">
              <Calendar size={48} className="text-blue-400" />
              <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                Date Methods
              </h1>
              <Clock size={48} className="text-yellow-400 animate-pulse" />
            </div>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Master JavaScript Date object methods with practical examples, best practices, and real-world use cases.
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
                    placeholder="Search date methods..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-12 pr-4 py-3 bg-white/10 backdrop-blur-xl border border-white/10 rounded-2xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                
                <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
                  {categories.map((category) => {
                    const Icon = getCategoryIcon(category);
                    return (
                      <button
                        key={category}
                        onClick={() => setSelectedCategory(category)}
                        className={`flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-semibold whitespace-nowrap transition-all ${
                          selectedCategory === category
                            ? 'bg-blue-500 text-white shadow-lg shadow-blue-500/30'
                            : 'bg-white/10 text-gray-300 hover:bg-white/20'
                        }`}
                      >
                        <Icon size={16} />
                        {category === 'all' ? 'All Methods' : category}
                      </button>
                    );
                  })}
                </div>
              </div>
              
              {/* Quick Stats */}
              <div className="flex justify-center gap-8 text-sm text-gray-400">
                <span className="flex items-center gap-2">
                  <Calendar size={16} className="text-blue-400" />
                  <span className="text-white font-bold">{dateMethods.length}</span> Methods
                </span>
                <span className="flex items-center gap-2">
                  <Timer size={16} className="text-purple-400" />
                  <span className="text-white font-bold">3</span> Categories
                </span>
                <span className="flex items-center gap-2">
                  <Activity size={16} className="text-pink-400" />
                  <span className="text-white font-bold">25+</span> Examples
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
            {dateMethods.map((method) => {
              const Icon = getCategoryIcon(method.category);
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
                  <Icon size={16} />
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
            const CategoryIcon = getCategoryIcon(method.category);
            
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
                        <CategoryIcon size={24} className="text-blue-400" />
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
                  {/* Notes */}
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
                        <span className="text-sm font-semibold text-gray-300">Example</span>
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

                  {/* Practical Tips */}
                  <div className="mt-6 p-4 bg-gray-800/50 rounded-xl">
                    <div className="flex items-center gap-2 mb-3">
                      <Zap size={16} className="text-yellow-400" />
                      <span className="text-sm font-semibold text-gray-300">Pro Tips</span>
                    </div>
                    <div className="space-y-2 text-sm text-gray-400">
                      <div className="flex items-start gap-2">
                        <span className="text-blue-400 font-mono text-xs mt-0.5">💡</span>
                        <span>Always handle timezone conversions carefully when working with dates</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <span className="text-blue-400 font-mono text-xs mt-0.5">🚀</span>
                        <span>Use Date.now() for performance measurement instead of new Date().getTime()</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <span className="text-blue-400 font-mono text-xs mt-0.5">🌍</span>
                        <span>Use toLocaleDateString() and toLocaleTimeString() for user-friendly displays</span>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            );
          })}

          {/* Empty State */}
          {filteredMethods.length === 0 && (
            <div className="text-center py-16 bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl">
              <Calendar className="text-gray-500 mx-auto mb-4" size={64} />
              <div className="text-gray-400 text-lg mb-4">
                No date methods found matching your criteria.
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

      {/* Quick Reference */}
      <div className="max-w-7xl mx-auto px-6 mb-16">
        <div className="bg-gradient-to-r from-blue-500/10 to-purple-600/10 border border-white/10 rounded-2xl p-6">
          <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
            <CalendarRange size={24} className="text-blue-400" />
            Quick Reference
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-white/5 p-4 rounded-xl">
              <h4 className="text-sm font-semibold text-gray-300 mb-2">Month Numbers</h4>
              <div className="text-sm text-gray-400 space-y-1">
                <div className="flex justify-between">
                  <span>0</span>
                  <span>January</span>
                </div>
                <div className="flex justify-between">
                  <span>5</span>
                  <span>June</span>
                </div>
                <div className="flex justify-between">
                  <span>11</span>
                  <span>December</span>
                </div>
              </div>
            </div>
            <div className="bg-white/5 p-4 rounded-xl">
              <h4 className="text-sm font-semibold text-gray-300 mb-2">Day Numbers</h4>
              <div className="text-sm text-gray-400 space-y-1">
                <div className="flex justify-between">
                  <span>0</span>
                  <span>Sunday</span>
                </div>
                <div className="flex justify-between">
                  <span>1</span>
                  <span>Monday</span>
                </div>
                <div className="flex justify-between">
                  <span>6</span>
                  <span>Saturday</span>
                </div>
              </div>
            </div>
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

export default DateMethodsPage;