// const fs = require('fs');
// const lunr = require('lunr');

// // Read the Hugo-generated JSON file
// fs.readFile('public/search/index.json', 'utf8', (readErr, data) => {
//   if (readErr) {
//     console.error('Error reading JSON file:', readErr);
//     return;
//   }

//   // Parse the JSON data
//   const documents = JSON.parse(data);

//   // Create a Lunr.js index
//   const idx = lunr(() => {
//     this.ref('title');
//     this.field('title');
//     this.field('content');
//     this.field('type');

//     documents.forEach((doc) => {
//       this.add({
//         title: doc.title,
//         content: doc.content,
//         type: doc.type,
//       });
//     });
//   });

//   // Save the pre-built Lunr.js index
//   fs.writeFile('public/search/prebuild.json', JSON.stringify(idx), (writeErr) => {
//     if (writeErr) {
//       console.error('Error writing pre-built index:', writeErr);
//     } else {
//       console.log('Pre-built index created successfully.');
//     }
//   });
// });
