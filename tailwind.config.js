module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        limegreen: 'hsl(163, 72%, 41%)',
        brightred: 'hsl(356, 69%, 56%)',
        facebook: 'hsl(208, 92%, 53%)',
        twitter: 'hsl(203, 89%, 53%)',
        instagram: 'linear gradient hsl(37, 97%, 70%) to hsl(329, 70%, 58%)',
        youtube: 'hsl(348, 97%, 39%)',
        toggledark: 'linear gradient hsl(210, 78%, 56%) to hsl(146, 68%, 55%)', 
        togglelight: 'hsl(230, 22%, 74%)', 
        verydarkbluebg: 'hsl(230, 17%, 14%)',
        verydarkbluetopbg: 'hsl(232, 19%, 15%)',
        darkdesaturatedbluecardbg: 'hsl(228, 28%, 20%)',
        desaturatedbluetext: 'hsl(228, 34%, 66%)',
        whitetext: 'hsl(0, 0%, 100%) ',
        whitebg: 'hsl(0, 0%, 100%)',
        verypalebluetopbg: 'hsl(225, 100%, 98%)',
        lightgrayishbluecardbg: 'hsl(227, 47%, 96%)',
        darkgrayishbluetext: 'hsl(228, 12%, 44%)',
        verydarkbluetext: 'hsl(230, 17%, 14%) ',
      },
      fontFamily: {
        inter: 'Inter',
      },
      letterSpacing: {
        widest: '.35rem',
      }
    },
  },
  variants: {
    extend: {
      backgroundColor: ['checked'],
      borderColor: ['checked'],
    },
  },
  plugins: [],
}
