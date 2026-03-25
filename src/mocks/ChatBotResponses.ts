import type { BotResponse } from "../types/types";

export const ChatBotResponses: BotResponse[] = [
  {
    id: "1",
    sender: "bot",
    sampleQuestion: "What is UIUX Design?",
    label:
      "UI/UX stands for User Interface (UI) and User Experience (UX), two essential aspects of designing digital products such as websites, apps, and software.",
    content: [
      "UI (User Interface) design is about crafting the visual elements of a digital product, such as buttons, icons, typography, colours, and layout. The goal of UI is to create an appealing, cohesive look and feel that makes it easy for users to navigate and interact with the product.",
      "UI focuses on the visual elements — layout, colors, typography, and interactive components. UX focuses on the overall feel and usability of the product.",
    ],
    footer:
      "Together, UI/UX design ensures a product is not only visually attractive but also functional and user-friendly, leading to an engaging and effective experience for users.",
  },
  {
    id: "2",
    sender: "bot",
    sampleQuestion: "Why you should hire Rafał Kamiński?",
    label: "Here are the reasons why you might want to hire me",
    content: [
      "I already have a solid foundation in the technologies you're using, as well as some real-world experience working on projects in a team environment. ",
      "I'm motivated, I learn quickly, and I genuinely enjoy building frontend applications and improving user experience",
    ],
    footer:
      "I'm highly motivated and bring a strong work ethic to every project.",
  },
  {
    id: "3",
    sender: "bot",
    sampleQuestion: "How does recursion work?",
    label: "How does recursion work?",
    content: [
      "Recursion is when a function calls itself to solve a smaller instance of the same problem. Every recursive function needs a base case to stop the chain of calls.",
      "A classic example is calculating a factorial: factorial(n) calls factorial(n-1) until it reaches factorial(1) which returns 1.",
    ],
    footer:
      "Recursion can be elegant but watch out for stack overflow on deep calls.",
  },
  {
    id: "4",
    sender: "bot",
    sampleQuestion: "What is an API?",
    label: "What is an API?",
    content: [
      "API stands for Application Programming Interface. It defines a set of rules and protocols that allow different software applications to communicate with each other.",
      "For example, when a weather app fetches data from a remote server, it uses an API to send requests and receive structured responses.",
    ],
    footer: "APIs are the backbone of modern web and mobile applications.",
  },
  {
    id: "5",
    sender: "bot",
    sampleQuestion: "What is object-oriented programming?",
    label: "What is object-oriented programming?",
    content: [
      "Object-oriented programming (OOP) is a paradigm that organizes code around objects, which are instances of classes that bundle data and behavior together.",
      "The four core principles of OOP are encapsulation, abstraction, inheritance, and polymorphism. These help you model real-world concepts in code.",
    ],
    footer: "OOP is widely used in languages like Java, Python, and C#.",
  },
  {
    id: "6",
    sender: "bot",
    sampleQuestion: "What's the difference between == and ===?",
    label: "What is the difference between == and === in JavaScript?",
    content: [
      "The == operator checks for equality after performing type coercion, meaning it will try to convert both values to the same type before comparing them.",
      "The === operator is a strict equality check. It compares both value and type without any conversion, making it more predictable and generally safer to use.",
    ],
    footer: "Prefer === in JavaScript to avoid unexpected type coercion bugs.",
  },
  {
    id: "7",
    sender: "bot",
    sampleQuestion: "What is a promise in JavaScript?",
    label: "What is a promise in JavaScript?",
    content: [
      "A promise is an object that represents the eventual completion or failure of an asynchronous operation. It allows you to attach callbacks instead of passing them directly.",
      "A promise can be in one of three states: pending, fulfilled, or rejected. You handle results using .then() for success and .catch() for errors.",
    ],
    footer: "Promises are the foundation of modern async JavaScript code.",
  },
  {
    id: "8",
    sender: "bot",
    sampleQuestion: "What's the difference between let, const, and var?",
    label: "What is the difference between let, const, and var?",
    content: [
      "var is function-scoped and hoisted to the top of its scope, which can lead to confusing bugs. It was the original way to declare variables in JavaScript.",
      "let is block-scoped and allows reassignment, while const is also block-scoped but cannot be reassigned after its initial value is set. Both were introduced in ES6.",
    ],
    footer:
      "Use const by default and let when you need to reassign. Avoid var in modern code.",
  },
  {
    id: "9",
    sender: "bot",
    sampleQuestion: "What is Big O notation?",
    label: "What is Big O notation?",
    content: [
      "Big O notation is a way to describe the time or space complexity of an algorithm as the input size grows. It gives you an upper bound on how performance scales.",
      "Common complexities include O(1) for constant time, O(n) for linear, O(n²) for quadratic, and O(log n) for logarithmic, which is typical in binary search.",
    ],
    footer:
      "Big O helps you reason about efficiency before performance becomes a real problem.",
  },
  {
    id: "10",
    sender: "bot",
    sampleQuestion: "What is a closure?",
    label: "What is a closure?",
    content: [
      "A closure is a function that retains access to its outer scope even after that outer function has finished executing. It closes over the variables it needs.",
      "Closures are commonly used to create private state, build factory functions, and handle callbacks that need access to surrounding context.",
    ],
    footer:
      "Closures are one of the most powerful and frequently misunderstood features in JavaScript.",
  },
  {
    id: "11",
    sender: "bot",
    sampleQuestion: "What's the difference between SQL and NoSQL?",
    label: "What is the difference between SQL and NoSQL databases?",
    content: [
      "SQL databases are relational and store data in structured tables with predefined schemas. They use SQL for queries and are great for complex relationships and transactions.",
      "NoSQL databases are non-relational and can store data as documents, key-value pairs, graphs, or wide columns. They offer more flexibility and scale horizontally with ease.",
    ],
    footer:
      "The best choice depends on your data structure and scalability requirements.",
  },
  {
    id: "12",
    sender: "bot",
    sampleQuestion: "Why is version control important?",
    label: "What is version control and why is it important?",
    content: [
      "Version control is a system that tracks changes to files over time, allowing you to recall specific versions later. Git is the most widely used version control system today.",
      "It enables collaboration, lets you revert mistakes, and gives you a full history of your project. Every professional development team relies on it.",
    ],
    footer:
      "Commit early, commit often, and always write meaningful commit messages.",
  },
  {
    id: "13",
    sender: "bot",
    sampleQuestion: "How does the JavaScript event loop work?",
    label: "What is the event loop in JavaScript?",
    content: [
      "The event loop is the mechanism that allows JavaScript to perform non-blocking operations despite being single-threaded. It continuously checks if the call stack is empty before pushing queued tasks onto it.",
      "When async operations like setTimeout or fetch complete, their callbacks are placed in a queue. The event loop picks them up only after the current synchronous code finishes.",
    ],
    footer:
      "Understanding the event loop is key to writing predictable async JavaScript.",
  },
  {
    id: "14",
    sender: "bot",
    sampleQuestion: "What's the difference between sync and async code?",
    label: "What is the difference between synchronous and asynchronous code?",
    content: [
      "Synchronous code executes line by line, blocking further execution until the current operation completes. This is straightforward but can freeze your app during long tasks.",
      "Asynchronous code allows the program to continue running while waiting for an operation to finish, such as a network request or file read. Callbacks, promises, and async/await are common patterns for handling this.",
    ],
    footer: "Async patterns keep your UI responsive and your server efficient.",
  },
  {
    id: "15",
    sender: "bot",
    sampleQuestion: "What is TypeScript and why use it?",
    label: "What is TypeScript and why use it?",
    content: [
      "TypeScript is a statically typed superset of JavaScript developed by Microsoft. It adds optional type annotations that are checked at compile time before the code runs in the browser.",
      "It helps catch bugs early, improves code readability, and enables better editor tooling like autocompletion and inline documentation. Large codebases benefit greatly from its structure.",
    ],
    footer:
      "TypeScript is now an industry standard in modern frontend and backend development.",
  },
  {
    id: "16",
    sender: "bot",
    sampleQuestion: "What's the difference between stack and heap memory?",
    label: "What is the difference between stack and heap memory?",
    content: [
      "The stack is a region of memory that stores function calls and local variables. It is managed automatically and follows a last-in, first-out structure.",
      "The heap is used for dynamic memory allocation. Objects and data that need to persist beyond a single function call are stored here and must be managed carefully to avoid memory leaks.",
    ],
    footer:
      "Most high-level languages handle heap management through garbage collection.",
  },
  {
    id: "17",
    sender: "bot",
    sampleQuestion: "What is REST and how does it work?",
    label: "What is REST and how does it work?",
    content: [
      "REST stands for Representational State Transfer. It is an architectural style for designing networked applications using standard HTTP methods like GET, POST, PUT, and DELETE.",
      "RESTful APIs are stateless, meaning each request contains all the information the server needs. Resources are identified by URLs and responses are typically returned as JSON.",
    ],
    footer:
      "REST is the most common API design pattern used in web development today.",
  },
  {
    id: "18",
    sender: "bot",
    sampleQuestion: "What is a data structure?",
    label: "What is a data structure?",
    content: [
      "A data structure is a way of organizing and storing data so that it can be accessed and modified efficiently. Different structures are optimized for different kinds of tasks.",
      "Common examples include arrays for indexed access, linked lists for dynamic insertion, hash maps for fast lookups, and trees for hierarchical data.",
    ],
    footer:
      "Choosing the right data structure can make the difference between a fast and a slow program.",
  },
  {
    id: "19",
    sender: "bot",
    sampleQuestion:
      "What's the difference between compiled and interpreted languages?",
    label: "What is the difference between compilation and interpretation?",
    content: [
      "A compiled language translates source code into machine code before execution. This produces a standalone executable and typically results in faster runtime performance.",
      "An interpreted language is translated line by line at runtime by an interpreter. This allows for more flexibility and easier debugging but can be slower than compiled code.",
    ],
    footer:
      "Some modern languages like Java and Python use a hybrid approach involving bytecode.",
  },
  {
    id: "20",
    sender: "bot",
    sampleQuestion: "What is dependency injection?",
    label: "What is dependency injection?",
    content: [
      "Dependency injection is a design pattern where an object receives its dependencies from the outside rather than creating them internally. This decouples components and makes them easier to test.",
      "Instead of a class instantiating a service itself, the service is passed in via a constructor or function parameter. Frameworks like Angular and NestJS use this pattern heavily.",
    ],
    footer:
      "Dependency injection leads to more modular, testable, and maintainable code.",
  },
];
