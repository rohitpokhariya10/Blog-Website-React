export const DEFAULT_ARTICLE_IDS = [
    "default-react-hooks",
    "default-node-api",
    "default-clean-code"
];

export const DEFAULT_ARTICLES = [
    {
        id: "default-react-hooks",
        tags: ["React", "JavaScript", "Web Development"],
        title: "Getting Started with React Hooks",
        desc: "Learn how React Hooks can simplify your component logic and make your code more reusable.",
        author: "Sarah Chen",
        date: "January 15, 2024",
        type: "publish",
        content: `React Hooks revolutionized the way we write React components. Introduced in React 16.8, Hooks allow you to use state and other React features without writing a class component.

## Why Hooks?

Before Hooks, if you wanted to use state in a component, you had to use a class component. This led to complex lifecycle methods and hard-to-follow code.

### The useState Hook

The most basic Hook is useState. It lets you add state to functional components:

\`\`\`js
const [count, setCount] = useState(0);
\`\`\`

### The useEffect Hook

useEffect lets you perform side effects in your components. It serves the same purpose as componentDidMount, componentDidUpdate, and componentWillUnmount combined.

## Conclusion

Hooks make React code more readable, reusable, and easier to test. They represent the future of React development.`
    },
    {
        id: "default-node-api",
        tags: ["Node.js", "API", "Backend"],
        title: "Building Scalable APIs with Node.js",
        desc: "Explore best practices for creating robust and scalable REST APIs using Node.js and Express.",
        author: "Sarah Chen",
        date: "January 20, 2024",
        type: "publish",
        content: `Creating scalable APIs is crucial for modern web applications. Node.js provides excellent tools for building fast, efficient backend services.

## Architecture Patterns

When building APIs, consider these patterns:

### RESTful Design

Follow REST principles for predictable, standardized endpoints.

### Middleware Pattern

Use middleware for authentication, logging, and error handling.

### Database Optimization

Implement proper indexing and query optimization for better performance.

## Best Practices

- Use environment variables for configuration
- Implement proper error handling
- Add rate limiting for security
- Use caching strategically

## Conclusion

A well-designed API forms the backbone of any modern application.`
    },
    {
        id: "default-clean-code",
        tags: ["Programming", "Best Practices", "Software Engineering"],
        title: "The Art of Clean Code",
        desc: "Discover the principles and practices that separate good code from great code.",
        author: "Marcus Johnson",
        date: "February 1, 2024",
        type: "publish",
        content: `Writing clean code is more than just making it work—it's about making it understandable and maintainable.

## Principles of Clean Code

### Meaningful Names

Variables, functions, and classes should have descriptive names that reveal intent.

### Small Functions

Functions should do one thing and do it well. Keep them small and focused.

### Comments

Good code often doesn't need comments. When you do write them, explain why, not what.

## Code Smells to Avoid

- Long methods
- Large classes
- Feature envy
- Data clumps

## Refactoring

Regular refactoring keeps your codebase healthy. Don't be afraid to improve existing code.

## Conclusion

Clean code is a skill that improves with practice. Read other people's code, and always be willing to learn.`
    }
];

export const withDefaultArticles = (articles) => {
    const safeArticles = Array.isArray(articles) ? articles : [];
    const customArticles = safeArticles.filter((article) => !DEFAULT_ARTICLE_IDS.includes(article.id));
    return [...DEFAULT_ARTICLES, ...customArticles];
};
