"use client";
import React, { useRef, useState } from 'react';
import SEO from "../../Component/SeoComp"

import { 
  Search, 
  ArrowUp, 
  Code,
  Box,
  Layers,
  GitBranch,
  Settings,
  Copy,
  Check,
  Sparkles,
  Terminal,
  ChevronRight,
  Zap,
  Activity,
  Grid,
  List,
  GitPullRequest,
  Filter,
  BarChart,
  Network,
  Database,
  Package,
  FolderTree,
  Hash,
  Cpu,
  Braces
} from 'lucide-react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';

const STLReferencePage = () => {
  // Refs for each STL component
  const refs = {
    containers: useRef(null),
    algorithms: useRef(null),
    iterators: useRef(null),
    utilities: useRef(null),
    array: useRef(null),
    vector: useRef(null),
    deque: useRef(null),
    list: useRef(null),
    stack: useRef(null),
    queue: useRef(null),
    priorityQueue: useRef(null),
    set: useRef(null),
    map: useRef(null),
    unorderedSet: useRef(null),
    unorderedMap: useRef(null),
    moreContainers: useRef(null)
  };

  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [copiedCode, setCopiedCode] = useState(null);
  const [activeSection, setActiveSection] = useState('containers');

  // STL containers data
  const stlContainers = [
    {
      id: 'array',
      title: 'array<T,N>',
      description: 'Fixed-size array container with bounds checking.',
      category: 'sequence',
      level: 'Beginner',
      example: `#include <iostream>
#include <array>
using namespace std;

int main() {
    // Create and initialize array
    array<int, 5> arr = {1, 2, 3, 4, 5};
    
    // Access elements
    cout << "First element: " << arr.front() << endl;  // 1
    cout << "Last element: " << arr.back() << endl;    // 5
    cout << "Element at index 2: " << arr.at(2) << endl; // 3
    
    // Size and capacity
    cout << "Size: " << arr.size() << endl;      // 5
    cout << "Max size: " << arr.max_size() << endl; // 5
    
    // Iterate using range-based for loop
    cout << "All elements: ";
    for (int num : arr) {
        cout << num << " ";
    }
    cout << endl;
    
    // Fill array with value
    arr.fill(10);
    cout << "After fill(10): ";
    for (int num : arr) cout << num << " "; // 10 10 10 10 10
    
    return 0;
}`,
      notes: [
        'Fixed size determined at compile time',
        'Safer than C-style arrays with bounds checking',
        'Supports STL algorithms and iterators',
        'Stored in contiguous memory'
      ],
      icon: Grid
    },
    {
      id: 'vector',
      title: 'vector<T>',
      description: 'Dynamic array with automatic resizing.',
      category: 'sequence',
      level: 'Beginner',
      example: `#include <iostream>
#include <vector>
using namespace std;

int main() {
    vector<int> nums;
    
    // Add elements
    nums.push_back(10);
    nums.push_back(20);
    nums.push_back(30);
    nums.insert(nums.begin() + 1, 15); // Insert at position 1
    
    cout << "Elements: ";
    for (int num : nums) cout << num << " "; // 10 15 20 30
    
    // Access elements
    cout << "\\nFirst: " << nums.front();    // 10
    cout << " Last: " << nums.back();        // 30
    cout << " At index 2: " << nums[2];      // 20
    
    // Capacity management
    cout << "\\nSize: " << nums.size();          // 4
    cout << " Capacity: " << nums.capacity();    // At least 4
    
    nums.reserve(100); // Reserve capacity
    cout << " After reserve(100): " << nums.capacity(); // 100
    
    // Remove elements
    nums.pop_back(); // Remove last
    nums.erase(nums.begin()); // Remove first
    
    cout << "\\nAfter removal: ";
    for (int num : nums) cout << num << " "; // 15 20
    
    // Clear vector
    nums.clear();
    cout << "\\nAfter clear, size: " << nums.size(); // 0
    
    return 0;
}`,
      notes: [
        'Dynamic resizing when capacity exceeded',
        'Fast random access O(1)',
        'Insertion/removal at end is O(1)',
        'Middle operations are O(n)'
      ],
      icon: Layers
    },
    {
      id: 'deque',
      title: 'deque<T>',
      description: 'Double-ended queue with efficient front/back operations.',
      category: 'sequence',
      level: 'Intermediate',
      example: `#include <iostream>
#include <deque>
using namespace std;

int main() {
    deque<int> dq;
    
    // Insert at both ends
    dq.push_back(30);      // Back: [30]
    dq.push_front(20);     // Front: [20, 30]
    dq.push_back(40);      // Back: [20, 30, 40]
    dq.push_front(10);     // Front: [10, 20, 30, 40]
    
    cout << "Deque elements: ";
    for (int num : dq) cout << num << " "; // 10 20 30 40
    
    // Access ends
    cout << "\\nFront: " << dq.front();    // 10
    cout << " Back: " << dq.back();        // 40
    
    // Remove from both ends
    dq.pop_front(); // Remove 10
    dq.pop_back();  // Remove 40
    
    cout << "\\nAfter pop operations: ";
    for (int num : dq) cout << num << " "; // 20 30
    
    // Random access
    cout << "\\nElement at index 1: " << dq[1]; // 30
    cout << " Element at index 1 (at): " << dq.at(1); // 30
    
    // Insert at position
    dq.insert(dq.begin() + 1, 25);
    cout << "\\nAfter insert at position 1: ";
    for (int num : dq) cout << num << " "; // 20 25 30
    
    // Size operations
    cout << "\\nSize: " << dq.size();
    cout << " Empty? " << (dq.empty() ? "Yes" : "No");
    
    return 0;
}`,
      notes: [
        'Efficient insertion/removal at both ends O(1)',
        'Random access O(1) but slower than vector',
        'Memory not contiguous internally',
        'Good for queues and sliding window problems'
      ],
      icon: GitPullRequest
    },
    {
      id: 'list',
      title: 'list<T>',
      description: 'Doubly linked list with bidirectional iteration.',
      category: 'sequence',
      level: 'Intermediate',
      example: `#include <iostream>
#include <list>
using namespace std;

int main() {
    list<int> myList = {10, 20, 30, 40, 50};
    
    // Add elements
    myList.push_front(5);    // Add to front: [5, 10, 20, 30, 40, 50]
    myList.push_back(60);    // Add to back: [5, 10, 20, 30, 40, 50, 60]
    
    // Insert at position
    auto it = myList.begin();
    advance(it, 3); // Move to position 3
    myList.insert(it, 25);
    
    cout << "List elements: ";
    for (int num : myList) cout << num << " ";
    
    // Special list operations
    myList.remove(30); // Remove all 30s
    cout << "\\nAfter remove(30): ";
    for (int num : myList) cout << num << " ";
    
    // Sort the list
    myList.sort();
    cout << "\\nAfter sort(): ";
    for (int num : myList) cout << num << " ";
    
    // Remove duplicates
    myList.unique();
    cout << "\\nAfter unique(): ";
    for (int num : myList) cout << num << " ";
    
    // Reverse the list
    myList.reverse();
    cout << "\\nAfter reverse(): ";
    for (int num : myList) cout << num << " ";
    
    // Splice - transfer elements from another list
    list<int> otherList = {100, 200, 300};
    myList.splice(myList.begin(), otherList);
    
    cout << "\\nAfter splice: ";
    for (int num : myList) cout << num << " ";
    
    return 0;
}`,
      notes: [
        'Doubly linked list implementation',
        'Insertion/removal anywhere O(1)',
        'No random access (must traverse)',
        'Special operations: splice, merge, sort'
      ],
      icon: Network
    },
    {
      id: 'stack',
      title: 'stack<T>',
      description: 'LIFO (Last-In-First-Out) container adapter.',
      category: 'adapter',
      level: 'Beginner',
      example: `#include <iostream>
#include <stack>
#include <string>
using namespace std;

int main() {
    stack<string> books;
    
    // Push elements (LIFO)
    books.push("C++ Primer");
    books.push("Effective Modern C++");
    books.push("The C++ Programming Language");
    
    cout << "Stack operations:\\n";
    cout << "Top book: " << books.top() << endl;
    
    books.pop(); // Remove top
    cout << "After pop, top: " << books.top() << endl;
    
    books.push("STL Tutorial");
    cout << "After push, top: " << books.top() << endl;
    
    // Stack size
    cout << "Number of books: " << books.size() << endl;
    
    // Check if empty
    cout << "Is empty? " << (books.empty() ? "Yes" : "No") << endl;
    
    // Empty the stack
    cout << "\\nPopping all books:\\n";
    while (!books.empty()) {
        cout << "Reading: " << books.top() << endl;
        books.pop();
    }
    
    cout << "Stack empty? " << (books.empty() ? "Yes" : "No") << endl;
    
    return 0;
}`,
      notes: [
        'LIFO (Last-In-First-Out) principle',
        'Container adapter (default uses deque)',
        'No iterator support',
        'Only top element accessible'
      ],
      icon: BarChart
    },
    {
      id: 'queue',
      title: 'queue<T>',
      description: 'FIFO (First-In-First-Out) container adapter.',
      category: 'adapter',
      level: 'Beginner',
      example: `#include <iostream>
#include <queue>
#include <string>
using namespace std;

int main() {
    queue<string> printerQueue;
    
    // Add print jobs (FIFO)
    printerQueue.push("Document1.pdf");
    printerQueue.push("Report.docx");
    printerQueue.push("Image.png");
    
    cout << "Printer Queue:\\n";
    cout << "First job: " << printerQueue.front() << endl;
    cout << "Last job: " << printerQueue.back() << endl;
    cout << "Queue size: " << printerQueue.size() << endl;
    
    // Process jobs
    cout << "\\nProcessing jobs:\\n";
    while (!printerQueue.empty()) {
        cout << "Printing: " << printerQueue.front() << endl;
        printerQueue.pop();
        
        if (!printerQueue.empty()) {
            cout << "Next: " << printerQueue.front() << endl;
        }
    }
    
    cout << "Queue empty? " << (printerQueue.empty() ? "Yes" : "No") << endl;
    
    // Priority queue example
    priority_queue<int> maxHeap;
    maxHeap.push(30);
    maxHeap.push(10);
    maxHeap.push(50);
    maxHeap.push(20);
    
    cout << "\\nPriority Queue (Max Heap):\\n";
    while (!maxHeap.empty()) {
        cout << maxHeap.top() << " ";
        maxHeap.pop();
    }
    // Output: 50 30 20 10
    
    return 0;
}`,
      notes: [
        'FIFO (First-In-First-Out) principle',
        'Container adapter (default uses deque)',
        'Access only front and back elements',
        'No iterator support'
      ],
      icon: Filter
    },
    {
      id: 'set',
      title: 'set<T>',
      description: 'Collection of unique keys, sorted automatically.',
      category: 'associative',
      level: 'Intermediate',
      example: `#include <iostream>
#include <set>
using namespace std;

int main() {
    set<int> uniqueNumbers;
    
    // Insert elements (automatically sorted and unique)
    uniqueNumbers.insert(30);
    uniqueNumbers.insert(10);
    uniqueNumbers.insert(20);
    uniqueNumbers.insert(30); // Duplicate, will be ignored
    uniqueNumbers.insert(40);
    
    cout << "Set elements (sorted): ";
    for (int num : uniqueNumbers) cout << num << " "; // 10 20 30 40
    
    // Find elements
    auto it = uniqueNumbers.find(20);
    if (it != uniqueNumbers.end()) {
        cout << "\\nFound 20 in set" << endl;
    }
    
    // Check existence
    if (uniqueNumbers.count(30) > 0) {
        cout << "30 exists in set" << endl;
    }
    
    // Remove elements
    uniqueNumbers.erase(20);
    cout << "After erasing 20: ";
    for (int num : uniqueNumbers) cout << num << " "; // 10 30 40
    
    // Lower and upper bounds
    set<int> nums = {10, 20, 30, 40, 50};
    auto lb = nums.lower_bound(25); // First element >= 25
    auto ub = nums.upper_bound(35); // First element > 35
    
    if (lb != nums.end()) cout << "\\nLower bound of 25: " << *lb; // 30
    if (ub != nums.end()) cout << " Upper bound of 35: " << *ub;   // 40
    
    // Multiset (allows duplicates)
    multiset<int> multi = {10, 20, 20, 30, 20, 40};
    cout << "\\nMultiset: ";
    for (int num : multi) cout << num << " "; // 10 20 20 20 30 40
    
    cout << "\\nCount of 20 in multiset: " << multi.count(20); // 3
    
    return 0;
}`,
      notes: [
        'Elements are unique and sorted',
        'Implemented as balanced binary search tree',
        'Search, insert, delete: O(log n)',
        'Useful for ordered collections'
      ],
      icon: Database
    },
    {
      id: 'map',
      title: 'map<K,V>',
      description: 'Collection of key-value pairs, sorted by keys.',
      category: 'associative',
      level: 'Intermediate',
      example: `#include <iostream>
#include <map>
#include <string>
using namespace std;

int main() {
    map<int, string> studentRecords;
    
    // Insert key-value pairs
    studentRecords[101] = "Alice";
    studentRecords[102] = "Bob";
    studentRecords[103] = "Charlie";
    studentRecords[104] = "David";
    
    // Alternative insertion
    studentRecords.insert({105, "Eve"});
    studentRecords.insert(make_pair(106, "Frank"));
    
    cout << "Student Records:\\n";
    for (const auto& record : studentRecords) {
        cout << "ID: " << record.first 
             << ", Name: " << record.second << endl;
    }
    
    // Access elements
    cout << "\\nStudent 102: " << studentRecords[102] << endl;
    
    // Check existence
    if (studentRecords.find(103) != studentRecords.end()) {
        cout << "Student 103 exists" << endl;
    }
    
    // Count (returns 0 or 1 since keys are unique)
    cout << "Count of key 101: " << studentRecords.count(101) << endl;
    
    // Update value
    studentRecords[102] = "Robert";
    cout << "\\nAfter update, Student 102: " << studentRecords[102] << endl;
    
    // Remove element
    studentRecords.erase(103);
    cout << "After erasing 103, size: " << studentRecords.size() << endl;
    
    // Lower and upper bounds
    auto lb = studentRecords.lower_bound(102);
    auto ub = studentRecords.upper_bound(104);
    
    cout << "\\nRange [102, 104]:\\n";
    for (auto it = lb; it != ub; ++it) {
        cout << it->first << ": " << it->second << endl;
    }
    
    // Multimap (allows duplicate keys)
    multimap<string, int> scores;
    scores.insert({"Alice", 85});
    scores.insert({"Bob", 90});
    scores.insert({"Alice", 92});
    
    cout << "\\nMultimap scores for Alice:\\n";
    auto range = scores.equal_range("Alice");
    for (auto it = range.first; it != range.second; ++it) {
        cout << it->first << ": " << it->second << endl;
    }
    
    return 0;
}`,
      notes: [
        'Keys are unique and sorted',
        'Each element is a key-value pair',
        'Implemented as balanced binary search tree',
        'Search, insert, delete: O(log n)'
      ],
      icon: Package
    }
  ];

  // Filter containers
  const filteredContainers = stlContainers.filter(container => {
    const matchesSearch = container.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         container.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || container.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  // Categories for filter
  const categories = ['all', 'sequence', 'associative', 'adapter', 'unordered'];

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
  const copyToClipboard = (code, containerId) => {
    navigator.clipboard.writeText(code);
    setCopiedCode(containerId);
    setTimeout(() => setCopiedCode(null), 2000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black text-white">
      {/* Hero Section */}
      <SEO title='C++ STL | Algo Tate'/>
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 via-purple-600/20 to-pink-600/20"></div>
        <div className="relative max-w-7xl mx-auto px-6 py-12">
          <div className="text-center">
            <div className="flex items-center justify-center gap-3 mb-4">
              <Code size={48} className="text-blue-400" />
              <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                C++ STL Reference
              </h1>
              <Box size={48} className="text-yellow-400 animate-pulse" />
            </div>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Comprehensive guide to Standard Template Library containers, algorithms, and utilities with practical examples.
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
                    placeholder="Search STL containers..."
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
                      {category === 'all' ? 'All Containers' : category}
                    </button>
                  ))}
                </div>
              </div>
              
              {/* Quick Stats */}
              <div className="flex justify-center gap-8 text-sm text-gray-400">
                <span className="flex items-center gap-2">
                  <Box size={16} className="text-blue-400" />
                  <span className="text-white font-bold">{stlContainers.length}</span> Containers
                </span>
                <span className="flex items-center gap-2">
                  <Zap size={16} className="text-purple-400" />
                  <span className="text-white font-bold">4</span> Categories
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
            {stlContainers.map((container) => {
              const ContainerIcon = container.icon;
              return (
                <button
                  key={container.id}
                  onClick={() => scrollToRef(refs[container.id], container.id)}
                  className={`flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-semibold whitespace-nowrap transition-all ${
                    activeSection === container.id
                      ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg'
                      : 'bg-white/10 text-gray-300 hover:bg-white/20'
                  }`}
                >
                  <ContainerIcon size={16} />
                  {container.title}
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* STL Overview */}
      <section ref={refs.containers} className="max-w-7xl mx-auto px-6 mb-8">
        <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6">
          <div className="flex items-center gap-3 mb-6">
            <Layers size={32} className="text-blue-400" />
            <h2 className="text-2xl font-bold text-white">STL Containers Overview</h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-blue-500/10 border border-blue-500/20 p-4 rounded-xl">
              <h3 className="text-lg font-semibold text-blue-400 mb-2">Sequence Containers</h3>
              <ul className="space-y-1 text-sm text-gray-300">
                <li className="flex items-center gap-2">
                  <span className="text-blue-400">•</span>
                  <span><code>array</code> - Fixed-size array</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-blue-400">•</span>
                  <span><code>vector</code> - Dynamic array</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-blue-400">•</span>
                  <span><code>deque</code> - Double-ended queue</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-blue-400">•</span>
                  <span><code>list</code> - Doubly linked list</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-blue-400">•</span>
                  <span><code>forward_list</code> - Singly linked list</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-purple-500/10 border border-purple-500/20 p-4 rounded-xl">
              <h3 className="text-lg font-semibold text-purple-400 mb-2">Associative Containers</h3>
              <ul className="space-y-1 text-sm text-gray-300">
                <li className="flex items-center gap-2">
                  <span className="text-purple-400">•</span>
                  <span><code>set</code> - Unique keys, sorted</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-purple-400">•</span>
                  <span><code>multiset</code> - Allows duplicates</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-purple-400">•</span>
                  <span><code>map</code> - Key-value pairs</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-purple-400">•</span>
                  <span><code>multimap</code> - Multiple values per key</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-pink-500/10 border border-pink-500/20 p-4 rounded-xl">
              <h3 className="text-lg font-semibold text-pink-400 mb-2">Container Adapters</h3>
              <ul className="space-y-1 text-sm text-gray-300">
                <li className="flex items-center gap-2">
                  <span className="text-pink-400">•</span>
                  <span><code>stack</code> - LIFO structure</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-pink-400">•</span>
                  <span><code>queue</code> - FIFO structure</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-pink-400">•</span>
                  <span><code>priority_queue</code> - Priority-based</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Containers Grid */}
      <div className="max-w-7xl mx-auto px-6 pb-16">
        <div className="grid grid-cols-1 gap-6">
          {filteredContainers.map((container) => {
            const ContainerIcon = container.icon;
            
            return (
              <section
                key={container.id}
                ref={refs[container.id]}
                className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl overflow-hidden hover:border-white/20 transition-all duration-300 hover:scale-[1.02] group"
              >
                {/* Container Header */}
                <div className="p-6 border-b border-white/10">
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <ContainerIcon size={24} className="text-blue-400" />
                        <h2 className="text-2xl font-bold text-white group-hover:text-blue-400 transition-colors">
                          {container.title}
                        </h2>
                        <span className={`px-3 py-1 rounded-full text-xs font-semibold border ${getLevelColor(container.level)}`}>
                          {container.level}
                        </span>
                      </div>
                      <p className="text-gray-300">{container.description}</p>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-xs text-gray-500 bg-gray-800/50 px-3 py-1 rounded-full capitalize">
                        {container.category}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Container Content */}
                <div className="p-6">
                  {/* Key Points */}
                  {container.notes && (
                    <div className="mb-6 p-4 bg-blue-500/10 border border-blue-500/20 rounded-xl">
                      <div className="flex items-center gap-2 text-blue-400 mb-3">
                        <Sparkles size={16} />
                        <span className="font-semibold">Key Points</span>
                      </div>
                      <ul className="space-y-2">
                        {container.notes.map((note, idx) => (
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
                          onClick={() => copyToClipboard(container.example, container.id)}
                          className="flex items-center gap-2 px-3 py-1.5 bg-blue-500/20 hover:bg-blue-500/30 border border-blue-500/30 rounded-lg text-blue-400 hover:text-white transition-all duration-200 text-sm"
                        >
                          {copiedCode === container.id ? (
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
                        language="cpp"
                        style={vscDarkPlus}
                        customStyle={{
                          margin: 0,
                          padding: '1.5rem',
                          fontSize: '13px',
                          background: 'transparent'
                        }}
                      >
                        {container.example}
                      </SyntaxHighlighter>
                    </div>
                  </div>

                  {/* Time Complexity */}
                  <div className="mt-6 p-4 bg-gray-800/50 rounded-xl">
                    <div className="flex items-center gap-2 mb-3">
                      <Zap size={16} className="text-yellow-400" />
                      <span className="text-sm font-semibold text-gray-300">Time Complexity</span>
                    </div>
                    <div className="space-y-2 text-sm text-gray-400">
                      {container.id === 'vector' && (
                        <>
                          <div className="flex items-start gap-2">
                            <span className="text-blue-400 font-mono text-xs mt-0.5">⚡</span>
                            <span>Access: O(1), Insert/Remove end: O(1)*, Insert/Remove middle: O(n)</span>
                          </div>
                          <div className="flex items-start gap-2">
                            <span className="text-blue-400 font-mono text-xs mt-0.5">📊</span>
                            <span>*Amortized O(1) for push_back (may need reallocation)</span>
                          </div>
                        </>
                      )}
                      {container.id === 'list' && (
                        <>
                          <div className="flex items-start gap-2">
                            <span className="text-blue-400 font-mono text-xs mt-0.5">⚡</span>
                            <span>Insert/Remove any position: O(1), Access: O(n)</span>
                          </div>
                          <div className="flex items-start gap-2">
                            <span className="text-blue-400 font-mono text-xs mt-0.5">📊</span>
                            <span>No random access, must traverse with iterators</span>
                          </div>
                        </>
                      )}
                      {container.id === 'set' && (
                        <>
                          <div className="flex items-start gap-2">
                            <span className="text-blue-400 font-mono text-xs mt-0.5">⚡</span>
                            <span>Search/Insert/Delete: O(log n)</span>
                          </div>
                          <div className="flex items-start gap-2">
                            <span className="text-blue-400 font-mono text-xs mt-0.5">📊</span>
                            <span>Elements automatically sorted and unique</span>
                          </div>
                        </>
                      )}
                      {container.id === 'map' && (
                        <>
                          <div className="flex items-start gap-2">
                            <span className="text-blue-400 font-mono text-xs mt-0.5">⚡</span>
                            <span>Search/Insert/Delete: O(log n)</span>
                          </div>
                          <div className="flex items-start gap-2">
                            <span className="text-blue-400 font-mono text-xs mt-0.5">📊</span>
                            <span>Keys sorted automatically, values accessed by key</span>
                          </div>
                        </>
                      )}
                    </div>
                  </div>
                </div>
              </section>
            );
          })}

          {/* STL Algorithms Section */}
          <section ref={refs.algorithms} className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6">
            <div className="flex items-center gap-3 mb-6">
              <Cpu size={32} className="text-purple-400" />
              <h2 className="text-2xl font-bold text-white">STL Algorithms</h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {[
                { category: 'Sorting', algorithms: ['sort()', 'stable_sort()', 'partial_sort()', 'nth_element()'] },
                { category: 'Searching', algorithms: ['binary_search()', 'lower_bound()', 'upper_bound()', 'equal_range()'] },
                { category: 'Modifying', algorithms: ['copy()', 'fill()', 'replace()', 'remove()', 'unique()'] },
                { category: 'Numerical', algorithms: ['accumulate()', 'inner_product()', 'adjacent_difference()', 'partial_sum()'] },
                { category: 'Heap', algorithms: ['make_heap()', 'push_heap()', 'pop_heap()', 'sort_heap()'] },
                { category: 'Min/Max', algorithms: ['min()', 'max()', 'minmax()', 'min_element()', 'max_element()'] }
              ].map((group) => (
                <div key={group.category} className="bg-gray-800/50 p-4 rounded-xl">
                  <h3 className="text-sm font-semibold text-purple-400 mb-2">{group.category}</h3>
                  <div className="space-y-1">
                    {group.algorithms.map((algo) => (
                      <div key={algo} className="text-sm text-gray-300 font-mono">
                        {algo}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Unordered Containers */}
          <section ref={refs.unorderedSet} className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6">
            <div className="flex items-center gap-3 mb-6">
              <Hash size={32} className="text-green-400" />
              <h2 className="text-2xl font-bold text-white">Unordered Containers (C++11)</h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-gray-800/50 p-4 rounded-xl">
                <h3 className="text-lg font-semibold text-green-400 mb-2">unordered_set</h3>
                <ul className="space-y-2 text-sm text-gray-300">
                  <li>Hash table implementation</li>
                  <li>Average O(1) for search, insert, delete</li>
                  <li>Elements not sorted</li>
                  <li>Requires hash function for type</li>
                </ul>
              </div>
              <div className="bg-gray-800/50 p-4 rounded-xl">
                <h3 className="text-lg font-semibold text-green-400 mb-2">unordered_map</h3>
                <ul className="space-y-2 text-sm text-gray-300">
                  <li>Hash table of key-value pairs</li>
                  <li>Average O(1) access</li>
                  <li>Keys not sorted</li>
                  <li>Faster than map for large datasets</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Empty State */}
          {filteredContainers.length === 0 && (
            <div className="text-center py-16 bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl">
              <Box className="text-gray-500 mx-auto mb-4" size={64} />
              <div className="text-gray-400 text-lg mb-4">
                No STL containers found matching your criteria.
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

export default STLReferencePage;