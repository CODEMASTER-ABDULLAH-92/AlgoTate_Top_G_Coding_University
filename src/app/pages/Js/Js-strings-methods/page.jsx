// "use client";
// import React, { useRef } from 'react';

// const StringMethodsPage = () => {
//   // Refs for each method
//   const charAtRef = useRef(null);
//   const lengthRef = useRef(null);
//   const concatRef = useRef(null);
//   const caseRef = useRef(null);
//   const includesRef = useRef(null);
//   const sliceRef = useRef(null);
//   const substringRef = useRef(null);
//   const replaceRef = useRef(null);
//   const trimRef = useRef(null);
//   const splitRef = useRef(null);

//   // Scroll function
//   const scrollToRef = (ref) => {
//     ref.current.scrollIntoView({ behavior: 'smooth' });
//     ref.current.style.color = "red";
//   };

//   return (
//     <div className="bg-gray-900 min-h-screen text-gray-100 p-6">
//       <div className="max-w-7xl mx-auto">
//         <h1 className="text-4xl font-bold text-orange-400 mb-8 text-center">JavaScript String Methods</h1>
        
//         {/* Navigation Buttons */}
//         <div className="hidden md:flex flex-wrap justify-center gap-4 mb-12">
//           <button onClick={() => scrollToRef(charAtRef)} className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded transition">
//             charAt()
//           </button>
//           <button onClick={() => scrollToRef(lengthRef)} className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded transition">
//             length
//           </button>
//           <button onClick={() => scrollToRef(concatRef)} className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded transition">
//             concat()
//           </button>
//           <button onClick={() => scrollToRef(caseRef)} className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded transition">
//             Case Methods
//           </button>
//           <button onClick={() => scrollToRef(includesRef)} className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded transition">
//             includes()
//           </button>
//           <button onClick={() => scrollToRef(sliceRef)} className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded transition">
//             slice()
//           </button>
//           <button onClick={() => scrollToRef(substringRef)} className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded transition">
//             substring()
//           </button>
//           <button onClick={() => scrollToRef(replaceRef)} className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded transition">
//             replace()
//           </button>
//           <button onClick={() => scrollToRef(trimRef)} className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded transition">
//             trim()
//           </button>
//           <button onClick={() => scrollToRef(splitRef)} className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded transition">
//             split()
//           </button>
//         </div>

//         {/* Method Sections */}
//         <div className="space-y-8">
//           {/* charAt() */}
//           <section ref={charAtRef} className="bg-gray-800 p-6 rounded-lg shadow-lg">
//             <h2 className="text-2xl font-bold text-orange-300 mb-4">charAt() Method</h2>
//             <p className="mb-4">Returns the character at a specified index in a string.</p>
//             <pre className="bg-gray-900 p-4 rounded overflow-x-auto">
//               <code>{`let str = "abdullah";
// let char = str.charAt(2);  // 'd'
// console.log(char);`}</code>
//             </pre>
//             <div className="mt-4 p-4 bg-gray-700 rounded">
//               <h3 className="text-lg font-semibold text-orange-200 mb-2">Key Points:</h3>
//               <ul className="list-disc pl-5 space-y-1">
//                 <li>Index starts at 0 (first character is index 0)</li>
//                 <li>Returns empty string if index is out of range</li>
//                 <li>Alternative: you can use array-like notation (str[2])</li>
//               </ul>
//               <h3 className="text-lg font-semibold text-orange-200 mt-3 mb-2">Examples:</h3>
//               <pre className="bg-gray-900 p-4 rounded overflow-x-auto">
//                 <code>{`console.log(str.charAt(0)); // 'a'
// console.log(str.charAt(str.length - 1)); // 'h' (last character)`}</code>
//               </pre>
//             </div>
//           </section>

//           {/* length */}
//           <section ref={lengthRef} className="bg-gray-800 p-6 rounded-lg shadow-lg">
//             <h2 className="text-2xl font-bold text-orange-300 mb-4">length Property</h2>
//             <p className="mb-4">Returns the number of characters in a string.</p>
//             <pre className="bg-gray-900 p-4 rounded overflow-x-auto">
//               <code>{`let str = "mara name abdullah hai ";
// let length = str.length;
// console.log(length); // 25`}</code>
//             </pre>
//             <div className="mt-4 p-4 bg-gray-700 rounded">
//               <h3 className="text-lg font-semibold text-orange-200 mb-2">Notes:</h3>
//               <ul className="list-disc pl-5 space-y-1">
//                 <li>This is a property, not a method (no parentheses)</li>
//                 <li>Includes all whitespace characters</li>
//                 <li>Useful for loops and boundary checks</li>
//               </ul>
//             </div>
//           </section>

//           {/* concat() */}
//           <section ref={concatRef} className="bg-gray-800 p-6 rounded-lg shadow-lg">
//             <h2 className="text-2xl font-bold text-orange-300 mb-4">concat() Method</h2>
//             <p className="mb-4">Combines two or more strings and returns a new string.</p>
//             <pre className="bg-gray-900 p-4 rounded overflow-x-auto">
//               <code>{`let str1 = "Muhammad ";
// let str2 = "Abdullah";
// let fullName = str1.concat(str2);
// console.log(fullName); // "Muhammad Abdullah"`}</code>
//             </pre>
//             <div className="mt-4 p-4 bg-gray-700 rounded">
//               <h3 className="text-lg font-semibold text-orange-200 mb-2">Alternatives:</h3>
//               <ul className="list-disc pl-5 space-y-1">
//                 <li>Using + operator: <code className="bg-gray-800 px-1 rounded">str1 + str2</code></li>
//                 {/* <li>Template literals: <code className="bg-gray-800 px-1 rounded">`${str1}${str2}`</code></li> */}
//               </ul>
//               <h3 className="text-lg font-semibold text-orange-200 mt-3 mb-2">Best Practice:</h3>
//               <ul className="list-disc pl-5 space-y-1">
//                 <li>For simple concatenation, + operator is more readable</li>
//                 <li>concat() is useful when combining multiple strings in a chain</li>
//               </ul>
//             </div>
//           </section>

//           {/* Case Methods */}
//           <section ref={caseRef} className="bg-gray-800 p-6 rounded-lg shadow-lg">
//             <h2 className="text-2xl font-bold text-orange-300 mb-4">Case Conversion Methods</h2>
            
//             <div className="mb-6">
//               <h3 className="text-xl font-semibold text-orange-200 mb-2">toUpperCase()</h3>
//               <p className="mb-2">Converts a string to uppercase letters.</p>
//               <pre className="bg-gray-900 p-4 rounded overflow-x-auto">
//                 <code>{`let name = "abdullah";
// console.log(name.toUpperCase()); // "ABDULLAH"`}</code>
//               </pre>
//             </div>

//             <div>
//               <h3 className="text-xl font-semibold text-orange-200 mb-2">toLowerCase()</h3>
//               <p className="mb-2">Converts a string to lowercase letters.</p>
//               <pre className="bg-gray-900 p-4 rounded overflow-x-auto">
//                 <code>{`let upperName = "ABDULLAH";
// console.log(upperName.toLowerCase()); // "abdullah"`}</code>
//               </pre>
//             </div>

//             <div className="mt-4 p-4 bg-gray-700 rounded">
//               <h3 className="text-lg font-semibold text-orange-200 mb-2">Common Use Cases:</h3>
//               <ul className="list-disc pl-5 space-y-1">
//                 <li>Normalizing user input for case-insensitive comparisons</li>
//                 <li>Formatting strings for display</li>
//                 <li>Preparing data for case-sensitive operations</li>
//               </ul>
//             </div>
//           </section>

//           {/* includes() */}
//           <section ref={includesRef} className="bg-gray-800 p-6 rounded-lg shadow-lg">
//             <h2 className="text-2xl font-bold text-orange-300 mb-4">includes() Method</h2>
//             <p className="mb-4">Determines whether a string contains another string.</p>
//             <pre className="bg-gray-900 p-4 rounded overflow-x-auto">
//               <code>{`let text = "abdullah";
// console.log(text.includes("dull"));   // true
// console.log(text.includes("hello")); // false`}</code>
//             </pre>
//             <div className="mt-4 p-4 bg-gray-700 rounded">
//               <h3 className="text-lg font-semibold text-orange-200 mb-2">Key Features:</h3>
//               <ul className="list-disc pl-5 space-y-1">
//                 <li>Case-sensitive search</li>
//                 <li>Returns boolean (true/false)</li>
//                 <li>Optional second parameter for starting position</li>
//               </ul>
//               <h3 className="text-lg font-semibold text-orange-200 mt-3 mb-2">Alternatives:</h3>
//               <ul className="list-disc pl-5 space-y-1">
//                 <li><code className="bg-gray-800 px-1 rounded">indexOf()</code> - returns position or -1</li>
//                 <li><code className="bg-gray-800 px-1 rounded">search()</code> - supports regular expressions</li>
//               </ul>
//             </div>
//           </section>

//           {/* slice() */}
//           <section ref={sliceRef} className="bg-gray-800 p-6 rounded-lg shadow-lg">
//             <h2 className="text-2xl font-bold text-orange-300 mb-4">slice() Method</h2>
//             <p className="mb-4">Extracts a section of a string and returns it as a new string.</p>
//             <pre className="bg-gray-900 p-4 rounded overflow-x-auto">
//               <code>{`let word = "frontend";
// console.log(word.slice(0, 5));   // "front"
// console.log(word.slice(-4));     // "end"
// console.log(word.slice(1, -1));  // "ronten"`}</code>
//             </pre>
//             <div className="mt-4 p-4 bg-gray-700 rounded">
//               <h3 className="text-lg font-semibold text-orange-200 mb-2">Parameters:</h3>
//               <ul className="list-disc pl-5 space-y-1">
//                 <li><strong>start</strong>: Beginning index (inclusive)</li>
//                 <li><strong>end</strong>: Ending index (exclusive, optional)</li>
//                 <li>Negative values count from the end of the string</li>
//               </ul>
//               <h3 className="text-lg font-semibold text-orange-200 mt-3 mb-2">Behavior:</h3>
//               <ul className="list-disc pl-5 space-y-1">
//                 <li>Returns empty string if start equals end</li>
//                 {/* <li>If start > end, returns empty string</li> */}
//                 <li>Doesn't modify original string</li>
//               </ul>
//             </div>
//           </section>

//           {/* substring() */}
//           <section ref={substringRef} className="bg-gray-800 p-6 rounded-lg shadow-lg">
//             <h2 className="text-2xl font-bold text-orange-300 mb-4">substring() Method</h2>
//             <p className="mb-4">Extracts characters between two indices.</p>
//             <pre className="bg-gray-900 p-4 rounded overflow-x-auto">
//               <code>{`let str = "frontend";
// console.log(str.substring(0, 5)); // "front"
// console.log(str.substring(1, 4)); // "ron"`}</code>
//             </pre>
//             <div className="mt-4 p-4 bg-gray-700 rounded">
//               <h3 className="text-lg font-semibold text-orange-200 mb-2">Differences from slice():</h3>
//               <ul className="list-disc pl-5 space-y-1">
//                 <li>Doesn't accept negative indices</li>
//                 {/* <li>Swaps parameters if start > end</li> */}
//                 <li>Treats negative parameters as 0</li>
//               </ul>
//               <h3 className="text-lg font-semibold text-orange-200 mt-3 mb-2">When to use:</h3>
//               <ul className="list-disc pl-5 space-y-1">
//                 <li>When you need simple positive-index extraction</li>
//                 <li>When negative indices would complicate your code</li>
//               </ul>
//             </div>
//           </section>

//           {/* replace() */}
//           <section ref={replaceRef} className="bg-gray-800 p-6 rounded-lg shadow-lg">
//             <h2 className="text-2xl font-bold text-orange-300 mb-4">replace() Method</h2>
//             <p className="mb-4">Replaces text in a string, using a string or regular expression.</p>
//             <pre className="bg-gray-900 p-4 rounded overflow-x-auto">
//               <code>{`let oldName = "abdullah";
// let newName = "rajab";
// console.log(oldName.replace(oldName, newName)); // "rajab"

// // Replace single character
// console.log("code".replace("c", "m")); // "mode"`}</code>
//             </pre>
//             <div className="mt-4 p-4 bg-gray-700 rounded">
//               <h3 className="text-lg font-semibold text-orange-200 mb-2">Advanced Usage:</h3>
//               <pre className="bg-gray-900 p-4 rounded overflow-x-auto">
//                 <code>{`// Using regular expressions
// let text = "Visit Microsoft";
// console.log(text.replace(/Microsoft/, "Google")); // "Visit Google"

// // Global replacement
// let str = "Apples are round, and apples are juicy";
// console.log(str.replace(/apples/gi, "oranges"));`}</code>
//               </pre>
//               <h3 className="text-lg font-semibold text-orange-200 mt-3 mb-2">Notes:</h3>
//               <ul className="list-disc pl-5 space-y-1">
//                 <li>By default, only replaces first match</li>
//                 <li>Use regex with g flag for global replacement</li>
//                 <li>Case-sensitive by default (use i flag for case-insensitive)</li>
//               </ul>
//             </div>
//           </section>

//           {/* trim() */}
//           <section ref={trimRef} className="bg-gray-800 p-6 rounded-lg shadow-lg">
//             <h2 className="text-2xl font-bold text-orange-300 mb-4">trim() Method</h2>
//             <p className="mb-4">Removes whitespace from both ends of a string.</p>
//             <pre className="bg-gray-900 p-4 rounded overflow-x-auto">
//               <code>{`let spaced = "   abdullah   ";
// console.log(spaced.trim()); // "abdullah"`}</code>
//             </pre>
//             <div className="mt-4 p-4 bg-gray-700 rounded">
//               <h3 className="text-lg font-semibold text-orange-200 mb-2">Variations:</h3>
//               <ul className="list-disc pl-5 space-y-1">
//                 <li><code className="bg-gray-800 px-1 rounded">trimStart()</code> - removes whitespace from start only</li>
//                 <li><code className="bg-gray-800 px-1 rounded">trimEnd()</code> - removes whitespace from end only</li>
//               </ul>
//               <h3 className="text-lg font-semibold text-orange-200 mt-3 mb-2">Use Cases:</h3>
//               <ul className="list-disc pl-5 space-y-1">
//                 <li>Cleaning user input</li>
//                 <li>Preparing strings for comparison</li>
//                 <li>Removing accidental whitespace</li>
//               </ul>
//             </div>
//           </section>

//           {/* split() */}
//           <section ref={splitRef} className="bg-gray-800 p-6 rounded-lg shadow-lg">
//             <h2 className="text-2xl font-bold text-orange-300 mb-4">split() Method</h2>
//             <p className="mb-4">Splits a string into an array of substrings.</p>
//             <pre className="bg-gray-900 p-4 rounded overflow-x-auto">
//               <code>{`// Split by space
// let sentence = "Hello my name is Abdullah";
// let words = sentence.split(" ");
// console.log(words); // ["Hello", "my", "name", "is", "Abdullah"]

// // Split by comma
// let fruits = "apple,banana,mango";
// console.log(fruits.split(",")); // ["apple", "banana", "mango"]

// // Split by character
// console.log("abc".split("")); // ["a", "b", "c"]`}</code>
//             </pre>
//             <div className="mt-4 p-4 bg-gray-700 rounded">
//               <h3 className="text-lg font-semibold text-orange-200 mb-2">Advanced Usage:</h3>
//               <pre className="bg-gray-900 p-4 rounded overflow-x-auto">
//                 <code>{`// Limit number of splits
// console.log("a,b,c,d".split(",", 2)); // ["a", "b"]

// // Using regular expressions
// console.log("hello world".split(/\\s+/)); // ["hello", "world"]

// // Splitting on multiple delimiters
// console.log("apple,banana;mango".split(/[,;]/)); // ["apple", "banana", "mango"]`}</code>
//               </pre>
//               <h3 className="text-lg font-semibold text-orange-200 mt-3 mb-2">Common Use Cases:</h3>
//               <ul className="list-disc pl-5 space-y-1">
//                 <li>Parsing CSV data</li>
//                 <li>Processing command-line arguments</li>
//                 <li>Tokenizing strings</li>
//                 <li>Converting strings to character arrays</li>
//               </ul>
//             </div>
//           </section>
//         </div>
        
//         {/* Back to Top Button */}
//         <div className="mt-8 text-center">
//           <button 
//             onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} 
//             className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded transition"
//           >
//             Back to Top
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default StringMethodsPage;



"use client";
import React, { useRef, useState } from 'react';
import { 
  Search, 
  ArrowUp, 
  Type,
  Hash,
  Link,
  CaseSensitive,
  CaseUpper,
  CaseLower,
  Search as SearchIcon,
  Scissors,
  Replace,
  Filter,
  Split,
  Copy,
  Check,
  Play,
  Sparkles,
  Terminal,
  ChevronRight,
  Zap,
  Activity,
  Text,
  WrapText,
  AlignLeft,
  Code
} from 'lucide-react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';

const StringMethodsPage = () => {
  // Refs for each method
  const refs = {
    charAt: useRef(null),
    length: useRef(null),
    concat: useRef(null),
    caseMethods: useRef(null),
    includes: useRef(null),
    slice: useRef(null),
    substring: useRef(null),
    replace: useRef(null),
    trim: useRef(null),
    split: useRef(null),
    moreMethods: useRef(null)
  };

  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [copiedCode, setCopiedCode] = useState(null);
  const [activeMethod, setActiveMethod] = useState('charAt');

  // String methods data
  const stringMethods = [
    {
      id: 'charAt',
      title: 'charAt()',
      description: 'Returns the character at a specified index in a string.',
      category: 'access',
      level: 'Beginner',
      example: `// Basic usage
const str = "JavaScript";
console.log(str.charAt(0));    // "J"
console.log(str.charAt(4));    // "S"
console.log(str.charAt(9));    // "t"

// Accessing last character
console.log(str.charAt(str.length - 1)); // "t"

// Out of bounds returns empty string
console.log(str.charAt(20)); // ""

// Alternative bracket notation
console.log(str[0]); // "J" (same as charAt(0))

// Practical example: Password masking
function maskPassword(password) {
  let masked = "";
  for (let i = 0; i < password.length; i++) {
    if (i < 2 || i > password.length - 3) {
      masked += password.charAt(i);
    } else {
      masked += "*";
    }
  }
  return masked;
}

console.log(maskPassword("Password123")); // "Pa******23"`,
      notes: [
        'Index starts at 0 (first character)',
        'Returns empty string for out-of-range indices',
        'Alternative: bracket notation (str[index])',
        'charAt() is more explicit and compatible with older browsers'
      ],
      icon: Hash
    },
    {
      id: 'length',
      title: 'length',
      description: 'Property that returns the number of characters in a string.',
      category: 'access',
      level: 'Beginner',
      example: `// Basic usage
const name = "Abdullah";
console.log(name.length); // 8

// With whitespace
const sentence = "Hello, World!";
console.log(sentence.length); // 13

// Empty string
console.log("".length); // 0

// Practical: Form validation
function validateUsername(username) {
  if (username.length < 3) {
    return "Username must be at least 3 characters";
  }
  if (username.length > 20) {
    return "Username cannot exceed 20 characters";
  }
  return "Username is valid";
}

console.log(validateUsername("ab"));   // Too short
console.log(validateUsername("abdullah")); // Valid

// Iterating through string
const word = "Hello";
for (let i = 0; i < word.length; i++) {
  console.log(word[i]); // H, e, l, l, o
}`,
      notes: [
        'Property (not a method) - no parentheses needed',
        'Includes all characters including spaces and punctuation',
        'Immutable - cannot be changed directly',
        'Commonly used in loops and validations'
      ],
      icon: Type
    },
    {
      id: 'concat',
      title: 'concat()',
      description: 'Combines two or more strings and returns a new string.',
      category: 'manipulation',
      level: 'Beginner',
      example: `// Basic concatenation
const firstName = "Muhammad";
const lastName = "Abdullah";
const fullName = firstName.concat(" ", lastName);
console.log(fullName); // "Muhammad Abdullah"

// Multiple strings
const str1 = "Hello";
const str2 = " ";
const str3 = "World";
console.log(str1.concat(str2, str3, "!")); // "Hello World!"

// Practical: Building URLs
function buildURL(protocol, domain, path) {
  return protocol.concat("://", domain, "/", path);
}

console.log(buildURL("https", "example.com", "api/users")); // "https://example.com/api/users"

// Alternative methods
console.log(firstName + " " + lastName); // Using + operator
console.log(\`\${firstName} \${lastName}\`); // Template literal

// Chaining concat
const result = "Hello".concat(" ", "World", "!", " ", "Welcome");
console.log(result); // "Hello World! Welcome"`,
      notes: [
        'Returns new string (original unchanged)',
        'Can chain multiple strings',
        '+ operator and template literals are often more readable',
        'Useful when concatenating many strings programmatically'
      ],
      icon: Link
    },
    {
      id: 'caseMethods',
      title: 'Case Methods',
      description: 'toUpperCase() and toLowerCase() for case conversion.',
      category: 'manipulation',
      level: 'Beginner',
      example: `// Basic case conversion
const name = "Abdullah";
console.log(name.toUpperCase()); // "ABDULLAH"
console.log(name.toLowerCase()); // "abdullah"

// Case-insensitive comparison
function compareStringsIgnoreCase(str1, str2) {
  return str1.toLowerCase() === str2.toLowerCase();
}

console.log(compareStringsIgnoreCase("Hello", "hello")); // true
console.log(compareStringsIgnoreCase("WORLD", "world")); // true

// Password case validation
function hasUppercase(password) {
  return password !== password.toLowerCase();
}

function hasLowercase(password) {
  return password !== password.toUpperCase();
}

console.log(hasUppercase("Password123")); // true
console.log(hasLowercase("PASSWORD"));    // false

// Title case implementation
function toTitleCase(str) {
  return str.toLowerCase()
    .split(' ')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
}

console.log(toTitleCase("hello world javascript")); // "Hello World Javascript"

// URL normalization
function normalizeUrl(url) {
  return url.toLowerCase().trim();
}

console.log(normalUrl("HTTPS://EXAMPLE.COM")); // "https://example.com"`,
      notes: [
        'toUpperCase() converts all characters to uppercase',
        'toLowerCase() converts all characters to lowercase',
        'Great for case-insensitive comparisons',
        'Useful for data normalization and validation'
      ],
      icon: CaseSensitive
    },
    {
      id: 'includes',
      title: 'includes()',
      description: 'Checks if a string contains another string.',
      category: 'search',
      level: 'Beginner',
      example: `// Basic search
const text = "Hello, my name is Abdullah";
console.log(text.includes("name"));     // true
console.log(text.includes("world"));    // false
console.log(text.includes("Hello"));    // true
console.log(text.includes("hello"));    // false (case-sensitive)

// With position parameter
console.log(text.includes("name", 10)); // true
console.log(text.includes("name", 20)); // false

// Practical: Search functionality
function searchInText(content, searchTerm) {
  if (content.toLowerCase().includes(searchTerm.toLowerCase())) {
    return \`Found "\${searchTerm}" in text\`;
  }
  return \`"\${searchTerm}" not found\`;
}

console.log(searchInText("JavaScript is awesome", "script")); // Found "script"

// Email validation
function isValidEmail(email) {
  return email.includes("@") && email.includes(".");
}

console.log(isValidEmail("user@example.com")); // true
console.log(isValidEmail("invalid-email"));     // false

// File extension check
function isImageFile(filename) {
  const imageExtensions = ['.jpg', '.jpeg', '.png', '.gif', '.webp'];
  return imageExtensions.some(ext => filename.toLowerCase().includes(ext));
}

console.log(isImageFile("photo.jpg"));  // true
console.log(isImageFile("document.pdf")); // false`,
      notes: [
        'Case-sensitive by default',
        'Returns boolean (true/false)',
        'Optional second parameter for starting position',
        'More modern alternative to indexOf() > -1'
      ],
      icon: SearchIcon
    },
    {
      id: 'slice',
      title: 'slice()',
      description: 'Extracts a section of a string and returns it as a new string.',
      category: 'extraction',
      level: 'Beginner',
      example: `// Basic extraction
const str = "JavaScript";
console.log(str.slice(0, 4));     // "Java"
console.log(str.slice(4));        // "Script"
console.log(str.slice(4, 7));     // "Scr"

// Negative indices (count from end)
console.log(str.slice(-6));       // "Script"
console.log(str.slice(2, -2));    // "vaScri"
console.log(str.slice(-6, -2));   // "Scri"

// Practical: Extracting parts
const email = "user@example.com";
const username = email.slice(0, email.indexOf("@"));
const domain = email.slice(email.indexOf("@") + 1);
console.log(username); // "user"
console.log(domain);   // "example.com"

// File extension extraction
function getFileExtension(filename) {
  const lastDotIndex = filename.lastIndexOf(".");
  if (lastDotIndex === -1) return "";
  return filename.slice(lastDotIndex + 1);
}

console.log(getFileExtension("document.pdf")); // "pdf"

// URL path extraction
const url = "https://example.com/blog/post-123";
const path = url.slice(url.indexOf(".com") + 4);
console.log(path); // "/blog/post-123"

// First and last characters
function getFirstLast(str) {
  return {
    first: str.slice(0, 1),
    last: str.slice(-1)
  };
}

console.log(getFirstLast("Hello")); // { first: "H", last: "o" }`,
      notes: [
        'Negative indices count from end of string',
        'End index is exclusive (not included)',
        'Does not modify original string',
        'More flexible than substring() with negative indices'
      ],
      icon: Scissors
    },
    {
      id: 'substring',
      title: 'substring()',
      description: 'Extracts characters between two indices.',
      category: 'extraction',
      level: 'Beginner',
      example: `// Basic extraction
const str = "JavaScript";
console.log(str.substring(0, 4));   // "Java"
console.log(str.substring(4));      // "Script"
console.log(str.substring(4, 7));   // "Scr"

// Swaps indices if start > end
console.log(str.substring(7, 4));   // "Scr" (same as substring(4, 7))

// Negative indices become 0
console.log(str.substring(-3, 4));  // "Java" (negative becomes 0)

// Practical: Extracting initials
function getInitials(fullName) {
  const names = fullName.split(" ");
  return names.map(name => name.substring(0, 1)).join("");
}

console.log(getInitials("Muhammad Abdullah")); // "MA"

// Truncating text
function truncateText(text, maxLength) {
  if (text.length <= maxLength) return text;
  return text.substring(0, maxLength) + "...";
}

console.log(truncateText("This is a long text", 10)); // "This is a..."

// Masking sensitive data
function maskCreditCard(number) {
  const lastFour = number.substring(number.length - 4);
  return "****-****-****-" + lastFour;
}

console.log(maskCreditCard("1234567812345678")); // "****-****-****-5678"

// Extracting domain from URL
function extractDomain(url) {
  const start = url.indexOf("://") + 3;
  const end = url.indexOf("/", start);
  return url.substring(start, end !== -1 ? end : undefined);
}

console.log(extractDomain("https://example.com/path")); // "example.com"`,
      notes: [
        'Does not accept negative indices',
        'Swaps parameters if start > end',
        'Negative parameters treated as 0',
        'Useful for simple positive-index extraction'
      ],
      icon: WrapText
    },
    {
      id: 'replace',
      title: 'replace()',
      description: 'Replaces text in a string using string or regex pattern.',
      category: 'manipulation',
      level: 'Intermediate',
      example: `// Basic replacement
const text = "Hello World";
console.log(text.replace("World", "JavaScript")); // "Hello JavaScript"

// Only replaces first occurrence
const sentence = "cats are great, cats are cute";
console.log(sentence.replace("cats", "dogs")); // "dogs are great, cats are cute"

// Using regex for global replacement
console.log(sentence.replace(/cats/g, "dogs")); // "dogs are great, dogs are cute"

// Case-insensitive replacement
const mixed = "Hello hello HELLO";
console.log(mixed.replace(/hello/gi, "Hi")); // "Hi Hi Hi"

// Practical: Template replacement
function formatGreeting(template, name) {
  return template.replace("{name}", name);
}

console.log(formatGreeting("Hello {name}!", "Abdullah")); // "Hello Abdullah!"

// URL parameter replacement
function updateQueryParam(url, param, value) {
  const regex = new RegExp(\`(\${param}=)[^&]*\`);
  return url.replace(regex, \`\${param}=\${value}\`);
}

console.log(updateQueryParam("page.com?page=1&sort=asc", "page", "2")); // "page.com?page=2&sort=asc"

// HTML sanitization
function sanitizeHTML(input) {
  return input
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

console.log(sanitizeHTML('<script>alert("xss")</script>')); // Safe HTML

// Using replacement function
const numbers = "1 2 3 4";
const doubled = numbers.replace(/\\d+/g, match => parseInt(match) * 2);
console.log(doubled); // "2 4 6 8"`,
      notes: [
        'Replaces only first match by default',
        'Use regex with g flag for global replacement',
        'Case-sensitive by default (use i flag for case-insensitive)',
        'Can use function as replacement for dynamic updates'
      ],
      icon: Replace
    },
    {
      id: 'trim',
      title: 'trim()',
      description: 'Removes whitespace from both ends of a string.',
      category: 'cleaning',
      level: 'Beginner',
      example: `// Basic trimming
const spaced = "   Hello World   ";
console.log(spaced.trim()); // "Hello World"

// Multiple whitespace characters
const messy = "\\t\\n  Hello World  \\r\\n";
console.log(messy.trim()); // "Hello World"

// Practical: User input cleaning
function cleanUserInput(input) {
  return input.trim();
}

console.log(cleanUserInput("  user@email.com  ")); // "user@email.com"

// Form validation
function validateNonEmpty(fieldName, value) {
  if (!value.trim()) {
    return \`\${fieldName} cannot be empty\`;
  }
  return "";
}

console.log(validateNonEmpty("Name", "   ")); // "Name cannot be empty"

// Related methods
const text = "  Hello  ";
console.log(text.trimStart()); // "Hello  "
console.log(text.trimEnd());   // "  Hello"
console.log(text.trimLeft());  // "Hello  " (alias)
console.log(text.trimRight()); // "  Hello" (alias)

// CSV data cleaning
const csvRow = "  John,Doe,25,USA  ";
const cleanRow = csvRow.trim().split(",");
console.log(cleanRow); // ["John", "Doe", "25", "USA"]

// Search query cleaning
function cleanSearchQuery(query) {
  return query.trim().toLowerCase();
}

console.log(cleanSearchQuery("  JavaScript Tutorial  ")); // "javascript tutorial"`,
      notes: [
        'Removes spaces, tabs, newlines from both ends',
        'trimStart()/trimEnd() for single-side trimming',
        'Essential for cleaning user input',
        'Does not affect internal whitespace'
      ],
      icon: Filter
    },
    {
      id: 'split',
      title: 'split()',
      description: 'Splits a string into an array of substrings.',
      category: 'conversion',
      level: 'Beginner',
      example: `// Basic splitting
const sentence = "Hello World JavaScript";
console.log(sentence.split(" ")); // ["Hello", "World", "JavaScript"]

// Split by comma (CSV parsing)
const csv = "apple,banana,orange,mango";
console.log(csv.split(",")); // ["apple", "banana", "orange", "mango"]

// Split by character
console.log("hello".split("")); // ["h", "e", "l", "l", "o"]

// With limit parameter
console.log("a,b,c,d,e".split(",", 3)); // ["a", "b", "c"]

// Practical: URL parsing
function parseURL(url) {
  const [protocol, rest] = url.split("://");
  const [domain, ...pathParts] = rest.split("/");
  return { protocol, domain, path: "/" + pathParts.join("/") };
}

console.log(parseURL("https://example.com/api/users"));

// Email parsing
const email = "user@example.com";
const [username, domain] = email.split("@");
console.log({ username, domain });

// Sentence word count
function countWords(text) {
  return text.split(/\\s+/).filter(word => word.length > 0).length;
}

console.log(countWords("Hello world from JavaScript")); // 4

// Using regex for complex splitting
const data = "apple, banana; orange. mango";
console.log(data.split(/[,;.]\\s*/)); // ["apple", "banana", "orange", "mango"]

// Reverse string using split
function reverseString(str) {
  return str.split("").reverse().join("");
}

console.log(reverseString("hello")); // "olleh"

// Tag extraction from text
const textWithTags = "Hello #world #javascript #coding";
const tags = textWithTags.split(" ").filter(word => word.startsWith("#"));
console.log(tags); // ["#world", "#javascript", "#coding"]`,
      notes: [
        'Converts string to array',
        'Empty separator splits by character',
        'Optional limit parameter controls number of splits',
        'Can use regex for complex splitting patterns'
      ],
      icon: Split
    }
  ];

  // Filter methods
  const filteredMethods = stringMethods.filter(method => {
    const matchesSearch = method.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         method.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || method.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  // Categories for filter
  const categories = ['all', 'access', 'manipulation', 'search', 'extraction', 'cleaning', 'conversion'];

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
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 via-purple-600/20 to-pink-600/20"></div>
        <div className="relative max-w-7xl mx-auto px-6 py-12">
          <div className="text-center">
            <div className="flex items-center justify-center gap-3 mb-4">
              <Type size={48} className="text-blue-400" />
              <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                String Methods
              </h1>
              <Text size={48} className="text-yellow-400 animate-pulse" />
            </div>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Master JavaScript string manipulation with comprehensive examples, performance tips, and real-world applications.
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
                    placeholder="Search string methods..."
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
                  <Type size={16} className="text-blue-400" />
                  <span className="text-white font-bold">{stringMethods.length}</span> Methods
                </span>
                <span className="flex items-center gap-2">
                  <Zap size={16} className="text-purple-400" />
                  <span className="text-white font-bold">7</span> Categories
                </span>
                <span className="flex items-center gap-2">
                  <Activity size={16} className="text-pink-400" />
                  <span className="text-white font-bold">50+</span> Examples
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
            {stringMethods.map((method) => {
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
                      {method.id === 'concat' && (
                        <div className="flex items-start gap-2">
                          <span className="text-blue-400 font-mono text-xs mt-0.5">⚡</span>
                          <span>Use template literals for complex string building</span>
                        </div>
                      )}
                      {method.id === 'slice' && (
                        <div className="flex items-start gap-2">
                          <span className="text-blue-400 font-mono text-xs mt-0.5">⚡</span>
                          <span><code className="text-blue-400">slice()</code> is generally faster than <code className="text-blue-400">substring()</code></span>
                        </div>
                      )}
                      {method.id === 'split' && (
                        <div className="flex items-start gap-2">
                          <span className="text-blue-400 font-mono text-xs mt-0.5">⚡</span>
                          <span>Avoid using complex regex patterns with <code className="text-blue-400">split()</code> for performance</span>
                        </div>
                      )}
                      {method.id === 'replace' && (
                        <div className="flex items-start gap-2">
                          <span className="text-blue-400 font-mono text-xs mt-0.5">⚡</span>
                          <span>Compile regex patterns outside loops when using <code className="text-blue-400">replace()</code> repeatedly</span>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </section>
            );
          })}

          {/* Additional Methods Section */}
          <section ref={refs.moreMethods} className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6">
            <div className="flex items-center gap-3 mb-6">
              <Code size={32} className="text-purple-400" />
              <h2 className="text-2xl font-bold text-white">More String Methods</h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                { method: 'indexOf() / lastIndexOf()', description: 'Find position of substring' },
                { method: 'startsWith() / endsWith()', description: 'Check beginning or end of string' },
                { method: 'repeat()', description: 'Repeat string n times' },
                { method: 'padStart() / padEnd()', description: 'Pad string to specified length' },
                { method: 'match() / matchAll()', description: 'Match using regular expressions' },
                { method: 'search()', description: 'Search for regex match, returns index' },
                { method: 'localeCompare()', description: 'Compare strings for sorting' },
                { method: 'normalize()', description: 'Unicode normalization' }
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
              <Type className="text-gray-500 mx-auto mb-4" size={64} />
              <div className="text-gray-400 text-lg mb-4">
                No string methods found matching your criteria.
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

export default StringMethodsPage;