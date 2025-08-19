/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
  ],
  safelist: [
    // Keep arbitrary animation utilities you trigger at runtime
    { pattern: /animate-\[swipeUp_.+\]/ },
    { pattern: /animate-\[fadeInScale_.+\]/ },
    { pattern: /animate-\[kenBurns_.+\]/ },
    { pattern: /animate-\[slideUp_.+\]/ },
  ],
  theme: { extend: {} },
  plugins: [],
};
