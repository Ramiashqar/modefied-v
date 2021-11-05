Modernizr.load([
  {
    test: Modernizr.mq('webp'),
    yep: 'test',
    // nope: 'lib/js/respond.min.js'
  },
])
// Modernizr.load('webp', function (result) {
//   // `result == Modernizr.webp`
//   // console.log(result) // either `true` or `false`
//   if (result) {
//     // Has WebP support
//     console.log(result)
//   } else {
//     // No WebP support
//     console.log(result)
//   }
// })