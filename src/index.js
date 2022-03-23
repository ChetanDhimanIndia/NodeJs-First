const express = require("express");
const PouchDB = require("pouchdb");
const db = new PouchDB("testingDb");
const app = express();
const json = require('json');

app.listen(7000, () => {
  console.log(`listing on port ${7000}`);
});

app.get("/test", (req, res) => {
//   db.post(
//     {
    
//       title: "Ziggy Stardust",
//     },
//     function (err, response) {
//       if (err) {
//         return console.log(err);
//       }
//       // handle response
      
//     }
//   );

  db.allDocs((err, doc) => {
    if (err) {
      return console.log(err);
    }
    // handle doc
    console.log(doc.rows);
  });

  

  res.status(200).json({
    respStatus: true,
    respMessage: "Executed",
  });
});
