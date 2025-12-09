module.exports = {
  content: ["./app/**/*.{ts,tsx,js,jsx}", "./components/**/*.{ts,tsx,js,jsx}"],
  theme: {
    extend: {
      colors: {
        bg: "#fffdf6",
        ink: "#0b0b0c",
        mute: "#6b7280",
        card: "#fff7cc",
        line: "#f3e8a3",
        accent: "#f59e0b",
        accent2: "#0ea5a4"
      },
      boxShadow: { soft: "0 10px 20px rgba(2,6,23,.07), 0 2px 6px rgba(2,6,23,.06)" }
    }
  },
  plugins: []
};
