/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      typography: ({ theme }) => ({
        invert: {
          css: {
            "--tw-prose-pre-bg": theme("colors.gray[800]"),
            "--tw-prose-quote-borders": theme("colors.white"),
            "--tw-prose-invert-headings": theme("colors.gray[400]"),
            "--tw-prose-invert-body": theme("colors.gray[400]"),
            "blockquote p:first-of-type::before": { content: "none" },
            "blockquote p:first-of-type::after": { content: "none" },
          },
        },
      }),
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
