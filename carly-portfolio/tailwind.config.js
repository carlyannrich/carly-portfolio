module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      'inter': ['Inter', 'sans-serif'],
      'press-start': ['"Press Start 2P"', 'cursive']
    },
    extend: {
      backgroundImage: {
        'star-bg': "url('/symbol-scatter-haikei.svg')",
      }
    }
  }
  // plugins: [],
}
