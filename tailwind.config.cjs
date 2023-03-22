/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'modak': ['Modak', 'cursive'],
        'robotoSlab': ['Roboto Slab', 'serif'],
        'poppins' : ['Poppins', 'sans-serif'],
        'lobster' : ['Lobster', 'cursive'],
        'marker' : ['Permanent Marker', 'cursive'],
        'shojumaru' : ['Zhi Mang Xing', 'cursive'],
        'zhi' : ['Kaushan Script', 'cursive'],
        'zilla' : ['Zilla Slab Highlight', 'cursive'],
      },
      animation: {
        blob: "blob 7s infinite",
        tilt: "tilt 3s infinite linear",
      },
      keyframes: {
        blob: {
          "0%" : {
            transform: "translate(0px, 0px) scale(1)"
          },
          "33%" : {
            transform: "translate(30px, -50px) scale(1.1)"
          },
          "66%" : {
            transform: "translate(-20px, 20px) scale(0.9)"
          },
          "100%" : {
            transform: "translate(0px, 0px) scale(1)"
          },
        },
        tilt: {
          '0%, 50%, 100%': {
            transform: 'rotate(0deg)',
          },
          '25%': {
            transform: 'rotate(2deg)',
          },
          '75%': {
            transform: 'rotate(-2deg)',
          },
        }
      },
      colors: {
      'regal-blue': '#243c5a',
      'tan': '#b68d40',
      'cream': '#f4ebd0',
      'charcoal': '#122620',
      'gold': '#d6ad60',
      'forestgreen': '#104210',
      'coolgrey': '#264653',
      'peacockgreen': '#2A9D8F',
      'yellowochre': '#E9C46A',
      'sand': '#F4A261',
      'cadmiumorange': '#E76F51',
      'otterTeal': '#3cbcc0',
      'onyx': '#6F8F72',
      'portGray': '#F2F2F2',
      'jsYellow': '#f7df1e',
      'reactTeal': '#00d8ff',
      'htmlOrange': '#ff7816',
      'tailwindTeal': '#4db6ac',
      'nodeGreen': '#5cad47',
      'viteBlue': '#4dc0ff',
      'cBlue': '#649ad2',
      'pythonBlue': '#498abc',
      'devGreen': '#4caf50',
      'compTan' : '#ad7047',
      'compPurp' : '#9947ad',
      'compPink' : '#d660b3',
      'compAqua' : '#60d6a9',
      'compGray' : '#92a5c2',
      'suchGray' : '#d1dbdb',
      'kitsuneOrange' : '#f37834',
      'kitsuneBlue' : '#34b0f3',
      'resumeBrown' : '#7a534a',
      'kitsuneOrange2' : '#f5b529',
      'kitsuneBlue2' : '#2f9edb',
      'kitsuneBlue3' : '#2a8fc5',
      'soGreen' : '#10b981',
      'soGreen2' : '#34d399',
      'kindaBlue' : '#4281a4',
      'kindaBlue2' : '#15202b',
      'textGray' : '#a3a3a3',
      'emeraldGreen' : '#5cdb95',
      'imperialBlue' : '#05386b',
      'emeraldGreenDark' : '#379683',
      'emeraldGreenLight' : '#8ee4af',
      'kindaTan' : '#edf5ef',
      'darkAqua' : '#88bdbc',
      'darkTurquoise' : '#254e58',
      'reallyDarkTurquoise' : '#112d32',
      'darkStone' : '#4f4a41',
      'lightStone' : '#6e6658',
      'bone' : '#F3EFE6'
    }, 
    screens: {
      'tablet': '640px', 

      'mobile': '400px',

      'iphone5': '300px',

      '350': '350px'
    }
    
  },
  },
  plugins: [

  ],
}
