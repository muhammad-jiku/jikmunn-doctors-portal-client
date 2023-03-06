module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      backgroundImage: {
        'banner-image': "url('/src/assets/images/chair.png')",
        'appointment-image': "url('/src/assets/images/appointment.png')",
        'footer-image': "url('/src/assets/images/footer.png')",
      },
      //   //   spacing: {
      //   //     // ...
      //   //   },
      //   // backgroundSize: ({ theme }) => ({
      //   //   auto: 'auto',
      //   //   cover: 'cover',
      //   //   contain: 'contain',
      //   //   ...theme('spacing'),
      //   // }),
    },
  },
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: '#0FCFEC',
          secondary: '#19D3AE',
          accent: '#3A4256',
          neutral: '#3d4451',
          'base-100': '#ffffff',
        },
      },
      'dark',
      'cupcake',
    ],
  },

  plugins: [require('daisyui')],
};
