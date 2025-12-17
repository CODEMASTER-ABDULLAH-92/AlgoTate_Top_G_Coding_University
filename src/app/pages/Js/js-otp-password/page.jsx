// "use client";
// import React, { useState } from 'react';

// const GeneratorExamples = () => {
//   const [otp, setOtp] = useState('');
//   const [password, setPassword] = useState('');
//   const [passwordLength, setPasswordLength] = useState(10);

//   // OTP Generator function
//   const generateOtp = () => {
//     const length = 6;
//     const num = "0123456789";
//     let otp = "";
    
//     for(let i = 0; i < length; i++) {
//       let randomOTP = num[Math.floor(Math.random() * num.length)];
//       otp += randomOTP;
//     }
    
//     console.log("OTP: ", otp);
//     setOtp(otp);
//     return otp;
//   };

//   // Password Generator function
//   const generateStrongPassword = (length = passwordLength) => {
//     const digits = "0123456789";
//     const lowercase = "abcdefghijklmnopqrstuvwxyz";
//     const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
//     const symbols = "!@#$%^&*";
    
//     const allChar = digits + lowercase + uppercase + symbols;
//     let password = "";

//     for (let i = 0; i < length; i++) {
//       const randomPass = allChar[Math.floor(Math.random() * allChar.length)];
//       password += randomPass;
//     }

//     console.log("Generated Password: ", password);
//     setPassword(password);
//     return password;
//   };

//   return (
//     <div className="bg-gray-900 p-6  shadow-lg space-y-8">
//       {/* OTP Generator Section */}
//       <section className="bg-gray-800 p-6 rounded-lg">
//         <h2 className="text-2xl font-bold text-orange-300 mb-4">OTP Generator</h2>
//         <div className="mb-4">
//           <p className="text-gray-300 mb-4">Generates a 6-digit numeric OTP using Math.random() and Math.floor():</p>
//           <pre className="bg-gray-900 p-4 text-amber-200 rounded overflow-x-auto">
//             <code>{`const generateOtp = () => {
//   const length = 6;
//   const num = "0123456789";
//   let otp = "";
  
//   for(let i = 0; i < length; i++) {
//     let randomOTP = num[Math.floor(Math.random() * num.length)];
//     otp += randomOTP;
//   }
//   return otp;
// };`}</code>
//           </pre>
//         </div>
//         <div className="mt-4 p-4 bg-gray-700 rounded">
//           <h3 className="text-lg font-semibold text-orange-200 mb-2">How It Works:</h3>
//           <ul className="list-disc pl-5 space-y-1 text-gray-300">
//             <li>Creates a string of numbers 0-9</li>
//             <li>Loops 6 times (for 6-digit OTP)</li>
//             <li>Math.random() generates a float between 0-0.999...</li>
//             <li>Multiplies by num.length (10) to get index 0-9</li>
//             <li>Math.floor() converts to integer index</li>
//             <li>Concatenates each random digit to form OTP</li>
//           </ul>
//         </div>
//         <div className="flex items-center gap-4 mt-4">
//           <button 
//             onClick={generateOtp}
//             className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded transition"
//           >
//             Generate OTP
//           </button>
//           {otp && (
//             <div className="bg-gray-700 p-3 rounded">
//               <span className="font-mono text-xl">{otp}</span>
//             </div>
//           )}
//         </div>
//       </section>

//       {/* Password Generator Section */}
//       <section className="bg-gray-800 p-6 rounded-lg">
//         <h2 className="text-2xl font-bold text-orange-300 mb-4">Password Generator</h2>
//         <div className="mb-4">
//           <p className="text-gray-300 mb-4">Generates a strong random password with mixed characters:</p>
//           <pre className="bg-gray-900 p-4 text-amber-200 rounded overflow-x-auto">
//             <code>{`const generatePassword = (length = 10) => {
//   const digits = "0123456789";
//   const lowercase = "abcdefghijklmnopqrstuvwxyz";
//   const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
//   const symbols = "!@#$%^&*";
  
//   const allChar = digits + lowercase + uppercase + symbols;
//   let password = "";

//   for (let i = 0; i < length; i++) {
//     const randomPass = allChar[Math.floor(Math.random() * allChar.length)];
//     password += randomPass;
//   }
//   return password;
// };`}</code>
//           </pre>
//         </div>
//         <div className="mt-4 p-4 bg-gray-700 rounded">
//           <h3 className="text-lg font-semibold text-orange-200 mb-2">Key Features:</h3>
//           <ul className="list-disc pl-5 space-y-1 text-gray-300">
//             <li>Combines 4 character types: digits, lowercase, uppercase, symbols</li>
//             <li>Math.random() gives float between 0-0.999...</li>
//             <li>Multiplies by allChar.length to get proper index range</li>
//             <li>Math.floor() converts to integer index</li>
//             <li>Builds password character by character</li>
//             <li>Customizable length (default 10 characters)</li>
//           </ul>
//           <h3 className="text-lg font-semibold text-orange-200 mt-3 mb-2">Security Notes:</h3>
//           <ul className="list-disc pl-5 space-y-1 text-gray-300">
//             <li>For cryptographic purposes, use window.crypto.getRandomValues()</li>
//             <li>Minimum 8 characters recommended for basic security</li>
//             <li>Include at least 3 character types for stronger passwords</li>
//           </ul>
//         </div>
//         <div className="flex flex-col sm:flex-row gap-4 items-center mt-4">
//           <div className="flex items-center gap-2">
//             <label htmlFor="length" className="text-gray-300">Length:</label>
//             <input
//               type="number"
//               id="length"
//               min="6"
//               max="32"
//               value={passwordLength}
//               onChange={(e) => setPasswordLength(parseInt(e.target.value) || 10)}
//               className="bg-gray-700 text-white p-2 rounded w-16"
//             />
//           </div>
//           <button 
//             onClick={() => generateStrongPassword()}
//             className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded transition"
//           >
//             Generate Password
//           </button>
//           {password && (
//             <div className="bg-gray-700 p-3 rounded overflow-x-auto max-w-full">
//               <span className="font-mono text-sm sm:text-base">{password}</span>
//             </div>
//           )}
//         </div>
//       </section>

//       {/* Combined Notes Section */}
//       <section className="bg-gray-800 p-6 rounded-lg">
//         <h2 className="text-2xl font-bold text-orange-300 mb-4">Implementation Notes</h2>
//         <div className="p-4 bg-gray-700 rounded">
//           <h3 className="text-lg font-semibold text-orange-200 mb-2">Common Techniques Used:</h3>
//           <ul className="list-disc pl-5 space-y-2 text-gray-300">
//             <li>
//               <span className="font-bold">Math.random():</span> Generates pseudo-random float between 0 (inclusive) and 1 (exclusive)
//             </li>
//             <li>
//               <span className="font-bold">Math.floor():</span> Rounds down to nearest integer (combined with random() for index selection)
//             </li>
//             <li>
//               <span className="font-bold">String Concatenation:</span> Builds the result string character by character
//             </li>
//             <li>
//               <span className="font-bold">Character Pool:</span> Pre-defined strings of allowed characters for each type
//             </li>
//           </ul>
          
//           <h3 className="text-lg font-semibold text-orange-200 mt-4 mb-2">When to Use:</h3>
//           <table className="min-w-full bg-gray-800 mt-2">
//             <thead>
//               <tr>
//                 <th className="px-4 text-gray-300  py-2 text-left border-b border-gray-600">Generator</th>
//                 <th className="px-4 text-gray-300 py-2 text-left border-b border-gray-600">Best For</th>
//                 <th className="px-4 text-gray-300 py-2 text-left border-b border-gray-600">Security Level</th>
//               </tr>
//             </thead>
//             <tbody>
//               <tr>
//                 <td className="px-4 py-2 border-b text-gray-300 border-gray-600">OTP Generator</td>
//                 <td className="px-4 py-2 border-b text-gray-300 border-gray-600">One-time passwords, verification codes</td>
//                 <td className="px-4 py-2 border-b text-gray-300 border-gray-600">Medium (for non-critical use)</td>
//               </tr>
//               <tr>
//                 <td className="px-4 py-2 border-b text-gray-300 border-gray-600">Password Generator</td>
//                 <td className="px-4 py-2 border-b text-gray-300 border-gray-600">User account passwords, temporary access</td>
//                 <td className="px-4 py-2 border-b text-gray-300 border-gray-600">High (when length ≥ 12)</td>
//               </tr>
//             </tbody>
//           </table>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default GeneratorExamples;


"use client";
import React, { useState, useEffect } from 'react';
import { 
  Search, 
  ArrowUp, 
  Lock,
  Key,
  Shield,
  Zap,
  Copy,
  Check,
  RefreshCw,
  Eye,
  EyeOff,
  Clipboard,
  LockKeyhole,
  Hash,
  Settings,
  CheckCircle,
  AlertCircle,
  Cpu,
  Fingerprint,
  Sparkles,
  Terminal,
  ChevronRight,
  ClipboardCheck
} from 'lucide-react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';

const GeneratorExamples = () => {
  const [otp, setOtp] = useState('');
  const [password, setPassword] = useState('');
  const [passwordLength, setPasswordLength] = useState(12);
  const [includeNumbers, setIncludeNumbers] = useState(true);
  const [includeLowercase, setIncludeLowercase] = useState(true);
  const [includeUppercase, setIncludeUppercase] = useState(true);
  const [includeSymbols, setIncludeSymbols] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const [copiedOTP, setCopiedOTP] = useState(false);
  const [copiedPassword, setCopiedPassword] = useState(false);
  const [passwordStrength, setPasswordStrength] = useState('');
  const [generationHistory, setGenerationHistory] = useState([]);

  // OTP Generator function
  const generateOtp = () => {
    const length = 6;
    const num = "0123456789";
    let otp = "";
    
    for(let i = 0; i < length; i++) {
      let randomOTP = num[Math.floor(Math.random() * num.length)];
      otp += randomOTP;
    }
    
    setOtp(otp);
    setCopiedOTP(false);
    addToHistory(`OTP: ${otp}`);
    return otp;
  };

  // Password Generator function
  const generateStrongPassword = () => {
    let charPool = "";
    let password = "";

    // Build character pool based on selections
    if (includeNumbers) charPool += "0123456789";
    if (includeLowercase) charPool += "abcdefghijklmnopqrstuvwxyz";
    if (includeUppercase) charPool += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    if (includeSymbols) charPool += "!@#$%^&*()-_=+[]{}|;:,.<>?";

    // Ensure at least one character type is selected
    if (charPool.length === 0) {
      charPool = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    }

    // Generate password
    for (let i = 0; i < passwordLength; i++) {
      const randomIndex = Math.floor(Math.random() * charPool.length);
      password += charPool[randomIndex];
    }

    setPassword(password);
    setCopiedPassword(false);
    calculatePasswordStrength(password);
    addToHistory(`Password: ${password}`);
    return password;
  };

  // Calculate password strength
  const calculatePasswordStrength = (pass) => {
    let score = 0;
    
    // Length score
    if (pass.length >= 12) score += 2;
    else if (pass.length >= 8) score += 1;
    
    // Character variety score
    const hasLower = /[a-z]/.test(pass);
    const hasUpper = /[A-Z]/.test(pass);
    const hasNumber = /[0-9]/.test(pass);
    const hasSymbol = /[!@#$%^&*()\-_=+[\]{}|;:,.<>?]/.test(pass);
    
    if (hasLower) score += 1;
    if (hasUpper) score += 1;
    if (hasNumber) score += 1;
    if (hasSymbol) score += 2;
    
    // Determine strength level
    if (score >= 6) setPasswordStrength('Very Strong');
    else if (score >= 4) setPasswordStrength('Strong');
    else if (score >= 3) setPasswordStrength('Medium');
    else setPasswordStrength('Weak');
  };

  // Add to generation history
  const addToHistory = (item) => {
    const newItem = {
      id: Date.now(),
      text: item,
      timestamp: new Date().toLocaleTimeString()
    };
    setGenerationHistory(prev => [newItem, ...prev.slice(0, 9)]);
  };

  // Copy to clipboard functions
  const copyToClipboard = (text, type) => {
    navigator.clipboard.writeText(text);
    if (type === 'otp') {
      setCopiedOTP(true);
      setTimeout(() => setCopiedOTP(false), 2000);
    } else {
      setCopiedPassword(true);
      setTimeout(() => setCopiedPassword(false), 2000);
    }
  };

  // Generate on component mount
  useEffect(() => {
    generateOtp();
    generateStrongPassword();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black text-white">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 via-purple-600/20 to-pink-600/20"></div>
        <div className="relative max-w-7xl mx-auto px-6 py-12">
          <div className="text-center">
            <div className="flex items-center justify-center gap-3 mb-4">
              <Lock size={48} className="text-blue-400" />
              <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                OTP & Password Generator
              </h1>
              <Shield size={48} className="text-yellow-400 animate-pulse" />
            </div>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Generate secure OTPs and passwords with customizable options. Learn the implementation with practical examples.
            </p>

            {/* Stats */}
            <div className="flex justify-center gap-8 text-sm text-gray-400 mb-12">
              <span className="flex items-center gap-2">
                <Zap size={16} className="text-blue-400" />
                <span className="text-white font-bold">2</span> Generators
              </span>
              <span className="flex items-center gap-2">
                <LockKeyhole size={16} className="text-purple-400" />
                <span className="text-white font-bold">4</span> Character Types
              </span>
              <span className="flex items-center gap-2">
                <Cpu size={16} className="text-pink-400" />
                <span className="text-white font-bold">Real-time</span> Generation
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* OTP Generator Card */}
          <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl overflow-hidden hover:border-blue-500/30 transition-all duration-300 group">
            <div className="p-6 border-b border-white/10">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  <Key size={24} className="text-blue-400" />
                  <h2 className="text-2xl font-bold text-white">OTP Generator</h2>
                </div>
                <span className="px-3 py-1 bg-blue-500/20 text-blue-400 text-xs font-semibold rounded-full">
                  6-Digit
                </span>
              </div>
              <p className="text-gray-300">Generates a 6-digit numeric OTP using Math.random() and Math.floor()</p>
            </div>

            <div className="p-6">
              {/* OTP Display */}
              <div className="mb-6">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-semibold text-gray-300">Generated OTP</span>
                  <button
                    onClick={() => copyToClipboard(otp, 'otp')}
                    className="flex items-center gap-2 px-3 py-1.5 bg-blue-500/20 hover:bg-blue-500/30 border border-blue-500/30 rounded-lg text-blue-400 hover:text-white transition-all duration-200 text-sm"
                  >
                    {copiedOTP ? (
                      <>
                        <Check size={14} />
                        Copied!
                      </>
                    ) : (
                      <>
                        <Copy size={14} />
                        Copy
                      </>
                    )}
                  </button>
                </div>
                <div className="bg-gray-900/50 p-4 rounded-xl border border-gray-700">
                  <div className="flex items-center justify-center gap-3">
                    {otp.split('').map((digit, index) => (
                      <div
                        key={index}
                        className="w-12 h-16 bg-gray-800 rounded-lg flex items-center justify-center text-2xl font-bold text-blue-400 border border-gray-700"
                      >
                        {digit}
                      </div>
                    ))}
                  </div>
                  <div className="text-center mt-3 text-sm text-gray-400">
                    Valid for 10 minutes • One-time use only
                  </div>
                </div>
              </div>

              {/* Generate Button */}
              <button
                onClick={generateOtp}
                className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-semibold py-3 px-6 rounded-xl transition-all duration-300 transform hover:scale-[1.02] mb-6"
              >
                <RefreshCw size={20} />
                Generate New OTP
              </button>

              {/* Code Example */}
              <div className="mb-4">
                <div className="flex items-center gap-2 mb-3">
                  <Terminal size={18} className="text-green-400" />
                  <span className="text-sm font-semibold text-gray-300">Implementation</span>
                </div>
                <div className="bg-gray-900 rounded-xl overflow-hidden border border-gray-700">
                  <SyntaxHighlighter
                    language="javascript"
                    style={vscDarkPlus}
                    customStyle={{
                      margin: 0,
                      padding: '1rem',
                      fontSize: '13px',
                      background: 'transparent'
                    }}
                  >
{`const generateOtp = () => {
  const length = 6;
  const num = "0123456789";
  let otp = "";
  
  for(let i = 0; i < length; i++) {
    let randomOTP = num[Math.floor(Math.random() * num.length)];
    otp += randomOTP;
  }
  return otp;
};`}
                  </SyntaxHighlighter>
                </div>
              </div>

              {/* Key Points */}
              <div className="p-4 bg-blue-500/10 border border-blue-500/20 rounded-xl">
                <div className="flex items-center gap-2 text-blue-400 mb-3">
                  <Sparkles size={16} />
                  <span className="font-semibold">How It Works</span>
                </div>
                <ul className="space-y-2 text-sm text-gray-300">
                  <li className="flex items-start gap-2">
                    <ChevronRight size={14} className="text-blue-400 mt-0.5 flex-shrink-0" />
                    <span>Math.random() generates a float between 0-0.999...</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ChevronRight size={14} className="text-blue-400 mt-0.5 flex-shrink-0" />
                    <span>Multiplied by 10 to get index range 0-9</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ChevronRight size={14} className="text-blue-400 mt-0.5 flex-shrink-0" />
                    <span>Math.floor() converts to integer index</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ChevronRight size={14} className="text-blue-400 mt-0.5 flex-shrink-0" />
                    <span>Six iterations create a 6-digit code</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Password Generator Card */}
          <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl overflow-hidden hover:border-purple-500/30 transition-all duration-300 group">
            <div className="p-6 border-b border-white/10">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  <LockKeyhole size={24} className="text-purple-400" />
                  <h2 className="text-2xl font-bold text-white">Password Generator</h2>
                </div>
                <span className="px-3 py-1 bg-purple-500/20 text-purple-400 text-xs font-semibold rounded-full">
                  Strong
                </span>
              </div>
              <p className="text-gray-300">Generate secure passwords with customizable character sets and length</p>
            </div>

            <div className="p-6">
              {/* Password Display */}
              <div className="mb-6">
                <div className="flex items-center justify-between mb-2">
                  <div>
                    <span className="text-sm font-semibold text-gray-300">Generated Password</span>
                    <span className="ml-3 text-xs text-green-400 bg-green-500/20 px-2 py-1 rounded-full">
                      {passwordStrength}
                    </span>
                  </div>
                  <div className="flex gap-2">
                    <button
                      onClick={() => setShowPassword(!showPassword)}
                      className="flex items-center gap-1 px-3 py-1.5 bg-gray-700/50 hover:bg-gray-700/70 border border-gray-600 rounded-lg text-gray-400 hover:text-white transition-all duration-200 text-sm"
                    >
                      {showPassword ? <EyeOff size={14} /> : <Eye size={14} />}
                      {showPassword ? 'Hide' : 'Show'}
                    </button>
                    <button
                      onClick={() => copyToClipboard(password, 'password')}
                      className="flex items-center gap-1 px-3 py-1.5 bg-purple-500/20 hover:bg-purple-500/30 border border-purple-500/30 rounded-lg text-purple-400 hover:text-white transition-all duration-200 text-sm"
                    >
                      {copiedPassword ? (
                        <>
                          <Check size={14} />
                          Copied
                        </>
                      ) : (
                        <>
                          <Copy size={14} />
                          Copy
                        </>
                      )}
                    </button>
                  </div>
                </div>
                <div className="bg-gray-900/50 p-4 rounded-xl border border-gray-700">
                  <div className="font-mono text-lg text-center">
                    {showPassword ? password : '•'.repeat(passwordLength)}
                  </div>
                  <div className="text-center mt-2 text-sm text-gray-400">
                    Length: {passwordLength} characters
                  </div>
                </div>
              </div>

              {/* Password Settings */}
              <div className="mb-6">
                <div className="flex items-center gap-2 mb-3">
                  <Settings size={18} className="text-yellow-400" />
                  <span className="text-sm font-semibold text-gray-300">Customization</span>
                </div>
                <div className="grid grid-cols-2 gap-3 mb-4">
                  {[
                    { state: includeNumbers, setState: setIncludeNumbers, label: 'Numbers', color: 'text-blue-400' },
                    { state: includeLowercase, setState: setIncludeLowercase, label: 'Lowercase', color: 'text-green-400' },
                    { state: includeUppercase, setState: setIncludeUppercase, label: 'Uppercase', color: 'text-yellow-400' },
                    { state: includeSymbols, setState: setIncludeSymbols, label: 'Symbols', color: 'text-pink-400' }
                  ].map((option, idx) => (
                    <label key={idx} className="flex items-center gap-2 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={option.state}
                        onChange={(e) => option.setState(e.target.checked)}
                        className="w-4 h-4 text-blue-500 bg-gray-700 border-gray-600 rounded focus:ring-blue-600"
                      />
                      <span className={`text-sm ${option.color}`}>{option.label}</span>
                    </label>
                  ))}
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-sm text-gray-300 flex-shrink-0">Length: {passwordLength}</span>
                  <input
                    type="range"
                    min="8"
                    max="32"
                    value={passwordLength}
                    onChange={(e) => setPasswordLength(parseInt(e.target.value))}
                    className="flex-1 h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer"
                  />
                  <span className="text-sm text-gray-300 w-8 text-right">{passwordLength}</span>
                </div>
              </div>

              {/* Generate Button */}
              <button
                onClick={generateStrongPassword}
                className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-purple-500 to-pink-600 hover:from-purple-600 hover:to-pink-700 text-white font-semibold py-3 px-6 rounded-xl transition-all duration-300 transform hover:scale-[1.02] mb-6"
              >
                <RefreshCw size={20} />
                Generate New Password
              </button>

              {/* Code Example */}
              <div className="mb-4">
                <div className="flex items-center gap-2 mb-3">
                  <Terminal size={18} className="text-green-400" />
                  <span className="text-sm font-semibold text-gray-300">Implementation</span>
                </div>
                <div className="bg-gray-900 rounded-xl overflow-hidden border border-gray-700">
                  <SyntaxHighlighter
                    language="javascript"
                    style={vscDarkPlus}
                    customStyle={{
                      margin: 0,
                      padding: '1rem',
                      fontSize: '13px',
                      background: 'transparent'
                    }}
                  >
{`const generatePassword = (length = 12) => {
  const digits = "0123456789";
  const lowercase = "abcdefghijklmnopqrstuvwxyz";
  const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const symbols = "!@#$%^&*";
  
  const allChar = digits + lowercase + uppercase + symbols;
  let password = "";

  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * allChar.length);
    password += allChar[randomIndex];
  }
  return password;
};`}
                  </SyntaxHighlighter>
                </div>
              </div>

              {/* Security Tips */}
              <div className="p-4 bg-purple-500/10 border border-purple-500/20 rounded-xl">
                <div className="flex items-center gap-2 text-purple-400 mb-3">
                  <AlertCircle size={16} />
                  <span className="font-semibold">Security Notes</span>
                </div>
                <ul className="space-y-2 text-sm text-gray-300">
                  <li className="flex items-start gap-2">
                    <ChevronRight size={14} className="text-purple-400 mt-0.5 flex-shrink-0" />
                    <span>For cryptographic purposes, use window.crypto.getRandomValues()</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ChevronRight size={14} className="text-purple-400 mt-0.5 flex-shrink-0" />
                    <span>Minimum 12 characters recommended for strong passwords</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ChevronRight size={14} className="text-purple-400 mt-0.5 flex-shrink-0" />
                    <span>Include at least 3 character types for better security</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Generation History */}
        <div className="mt-8">
          <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6">
            <div className="flex items-center gap-2 mb-4">
              <Clipboard size={20} className="text-gray-400" />
              <h3 className="text-lg font-semibold text-white">Generation History</h3>
              <span className="text-xs text-gray-500 bg-gray-800/50 px-2 py-1 rounded-full">
                Last 10 items
              </span>
            </div>
            {generationHistory.length > 0 ? (
              <div className="space-y-2">
                {generationHistory.map((item) => (
                  <div
                    key={item.id}
                    className="flex items-center justify-between p-3 bg-gray-800/30 rounded-lg border border-gray-700/50"
                  >
                    <div className="font-mono text-sm text-gray-300 truncate">
                      {item.text}
                    </div>
                    <div className="text-xs text-gray-500 flex-shrink-0">
                      {item.timestamp}
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-8 text-gray-400">
                <Clipboard className="mx-auto mb-2" size={32} />
                <p>No generation history yet</p>
              </div>
            )}
            {generationHistory.length > 0 && (
              <button
                onClick={() => setGenerationHistory([])}
                className="mt-4 text-sm text-gray-400 hover:text-gray-300 transition-colors"
              >
                Clear History
              </button>
            )}
          </div>
        </div>

        {/* Comparison & Best Practices */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-gradient-to-r from-blue-500/10 to-purple-600/10 border border-white/10 rounded-2xl p-6">
            <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
              <Fingerprint size={24} className="text-blue-400" />
              When to Use Each
            </h3>
            <div className="space-y-4">
              <div className="bg-white/5 p-4 rounded-xl">
                <h4 className="text-sm font-semibold text-blue-400 mb-2">OTP Generator</h4>
                <ul className="text-sm text-gray-300 space-y-1">
                  <li>• One-time passwords for authentication</li>
                  <li>• Email/SMS verification codes</li>
                  <li>• Two-factor authentication (2FA)</li>
                  <li>• Account recovery codes</li>
                </ul>
              </div>
              <div className="bg-white/5 p-4 rounded-xl">
                <h4 className="text-sm font-semibold text-purple-400 mb-2">Password Generator</h4>
                <ul className="text-sm text-gray-300 space-y-1">
                  <li>• User account creation</li>
                  <li>• Password reset functionality</li>
                  <li>• API key generation</li>
                  <li>• Temporary access tokens</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-purple-500/10 to-pink-600/10 border border-white/10 rounded-2xl p-6">
            <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
              <CheckCircle size={24} className="text-green-400" />
              Best Practices
            </h3>
            <div className="space-y-3">
              {[
                "Always validate generated codes/passwords meet requirements",
                "Store passwords securely using hashing (bcrypt, Argon2)",
                "Set appropriate expiration times for OTPs",
                "Provide users with copy-to-clipboard functionality",
                "Consider accessibility (screen readers, color contrast)",
                "Log generation for security audit purposes"
              ].map((practice, idx) => (
                <div key={idx} className="flex items-start gap-2 text-sm text-gray-300">
                  <span className="text-green-400 font-mono text-xs mt-0.5">✓</span>
                  <span>{practice}</span>
                </div>
              ))}
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
    </div>
  );
};

export default GeneratorExamples;