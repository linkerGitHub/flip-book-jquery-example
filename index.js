import {$} from './src/libs'

window.PDFJS_LOCALE = {
  pdfJsWorker: 'src/flip-book/js/pdf.worker.js'
};
require('./src/flip-book');

const pdfUrl = (new URL(document.location)).searchParams.get('pdfUrl')
// Sample 0 {
$('#container').FlipBook({
  pdf: 'books/pdf/' + pdfUrl,
  propertiesCallback: function(props) {
    console.log(props)
    props.page.depth /= 4;
    props.preloadPages = 3;
    return props;
  },
  template: {
    html: 'src/flip-book/templates/default-book-view.html',
    links: [
      {
        rel: 'stylesheet',
        href: 'src/flip-book/css/font-awesome.min.css'
      }
    ],
    styles: [
      'src/flip-book/css/short-white-book-view.css'
    ],
    links: [{
      rel: 'stylesheet',
      href: 'src/flip-book/css/font-awesome.min.css'
    }],
    script: 'src/flip-book/js/default-book-view.js',
    sounds: {
      startFlip: 'src/flip-book/sounds/start-flip.mp3',
      endFlip: 'src/flip-book/sounds/end-flip.mp3'
    }
  }
});
// }

// // Sample 1 {
// function theKingIsBlackPageCallback(n) {
//   return {
//     type: 'image',
//     src: 'books/image/theKingIsBlack/'+(n+1)+'.jpg',
//     interactive: false
//   };
// }

// $('#container').FlipBook({
//   pageCallback: theKingIsBlackPageCallback,
//   pages: 10,
//   propertiesCallback: function(props) {
//     props.cover.color = 0x000000;
//     return props;
//   },
//   template: {
//     html: 'src/flip-book/templates/default-book-view.html',
//     links: [
//       {
//         rel: 'stylesheet',
//         href: 'src/flip-book/css/font-awesome.min.css'
//       }
//     ],
//     styles: [
//       'src/flip-book/css/short-white-book-view.css'
//     ],
//     links: [{
//       rel: 'stylesheet',
//       href: 'src/flip-book/css/font-awesome.min.css'
//     }],
//     script: 'src/flip-book/js/default-book-view.js',
//     sounds: {
//       startFlip: 'src/flip-book/sounds/start-flip.mp3',
//       endFlip: 'src/flip-book/sounds/end-flip.mp3'
//     }
//   }
// });
// // }

// // Sample 2 {
// $('#container').FlipBook({
//   pdf: 'books/pdf/CondoLiving.pdf',
//   template: {
//     html: 'src/flip-book/templates/default-book-view.html',
//     links: [
//       {
//         rel: 'stylesheet',
//         href: 'src/flip-book/css/font-awesome.min.css'
//       }
//     ],
//     styles: [
//       'src/flip-book/css/white-book-view.css'
//     ],
//     links: [{
//       rel: 'stylesheet',
//       href: 'src/flip-book/css/font-awesome.min.css'
//     }],
//     script: 'src/flip-book/js/default-book-view.js'
//   }
// });
// // }
//
// // Sample 3 {
// $('#container').FlipBook({
//   pdf: 'books/pdf/TheThreeMusketeers.pdf',
//   propertiesCallback: function(props) {
//     props.page.depth /= 2.5;
//     props.cover.padding = 0.002;
//     return props;
//   },
//   template: {
//     html: 'src/flip-book/templates/default-book-view.html',
//     links: [
//       {
//         rel: 'stylesheet',
//         href: 'src/flip-book/css/font-awesome.min.css'
//       }
//     ],
//     styles: [
//       'src/flip-book/css/short-black-book-view.css'
//     ],
//     links: [{
//       rel: 'stylesheet',
//       href: 'src/flip-book/css/font-awesome.min.css'
//     }],
//     script: 'src/flip-book/js/default-book-view.js'
//   }
// });
// // }
//
// // Sample 4 {
// function preview(n) {
//   return {
//     type: 'html',
//     src: 'books/html/preview/'+(n%3+1)+'.html',
//     interactive: true
//   };
// }
//
// $('#container').FlipBook({
//   pageCallback: preview,
//   pages: 10,
//   propertiesCallback: function(props) {
//     props.sheet.color = 0x008080;
//     props.cover.padding = 0.002;
//     return props;
//   },
//   template: {
//     html: 'src/flip-book/templates/default-book-view.html',
//     links: [
//       {
//         rel: 'stylesheet',
//         href: 'src/flip-book/css/font-awesome.min.css'
//       }
//     ],
//     styles: [
//       'src/flip-book/css/black-book-view.css'
//     ],
//     links: [{
//       rel: 'stylesheet',
//       href: 'src/flip-book/css/font-awesome.min.css'
//     }],
//     script: 'src/flip-book/js/default-book-view.js'
//   }
// });
// // }
