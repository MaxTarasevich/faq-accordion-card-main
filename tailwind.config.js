module.exports = {
  content: ["./*.html"],
  theme: {
    colors: {
      'dark-blue': 'hsl(238, 29%, 16%)',
      'soft-red': 'hsl(14, 88%, 65%)',
      'soft-violet': 'hsl(273, 75%, 66%)',
      'soft-blue': 'hsl(240, 73%, 65%)',
      'very-dark-grayish-blue': 'hsl(237, 12%, 33%)',
      'dark-grayish-blue': ' hsl(240, 6%, 50%)',
      'light-grayish-blue': 'hsl(240, 5%, 91%)',
    },
    fontFamily: {
      'body': ['"Kumbh Sans"', 'sans-serif'],
    },
    extend: {
      keyframes: {       
         wiggle: {          
           '0%': { maxHeight: '0px' },          
           '100%': { maxHeight: '100px' },        
          }   ,
          backwiggle:{    
           '0%': { maxHeight: '100px' }, 
           '100%': { maxHeight: '0px' }, 
          }   
          },
          animation: {       
             wiggle: 'wiggle 1s ease-in-out 1 forwards',  
             backwiggle: 'backwiggle 1s ease-in-out 1 forwards',
             }
    },
  },
  plugins: [],
}
