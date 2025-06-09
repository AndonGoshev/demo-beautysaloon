/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,njk,md}"],
  theme: {
    extend: {
      colors: {
        'primary': {
          'black': '#0a0a0a',
          'red': '#dc2626',
          'white': '#ffffff',
          'gray': '#f3f4f6',
          'dark-gray': '#1a1a1a',
          'blue': '#010057',
          'accent': '#FDC57B'
        },
        'beauty': {
          'cream': '#FAE8D9',         // Cream with more warmth and body
          'warm-beige': '#EFD1B5',    // Toastier beige, still soft
          'soft-brown': '#D5B6A1',    // Mid-brown with a hint of rose
          'warm-taupe': '#8F6F62',    // Earthier taupe, gentle contrast
          'deep-brown': '#805F4C',     // Richer, darker brown with more contrast and presence
          'rose-gold': '#CB765F',     // Softly glowing rose-gold
          'soft-pink': '#EDC3BF',     // Gentle but noticeable blush pink
          'warm-white': '#FBF6F1'     // Warmer white with slight richness
        }


      },
      maxWidth: {
        '90': '90%',
        '95': '95%'
      },
      backgroundImage: {
        'gradient-primary': 'linear-gradient(to bottom right, #0a0a0a, #1a1a1a,rgb(45, 43, 5))',
        'gradient-beauty': 'linear-gradient(135deg, #FDF8F3 0%, #F5E6D3 50%, #E8D5C4 100%)',
        'gradient-warm': 'linear-gradient(135deg, #F5E6D3 0%, #E8D5C4 50%, #D4C4B7 100%)'
      }
    },
  },
  plugins: [],
} 