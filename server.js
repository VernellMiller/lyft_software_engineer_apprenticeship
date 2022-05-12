// require dependencies
const express = require("express");

// initialize the express app
const app = express();

// configure application settings
require("dotenv").config(); // expose .env to this file

// database
const string_to_cut_array = [
  {
    string_to_cut: "iamyourlyftdrive",
  },
];

// mount middleware - this turns incoming JSON data into req.body
app.use(express.json());

// mount routes - following INDUCES(index, new, delete, update, create, edit, show)
app.get("/tests", (req, res) => {
  res.send(string_to_cut_array);
});

app.post("/tests", (req, res) => {
  // need to grab the data from the request body
  // need to push the data as an object into data array
  //send updated array
  let return_string = req.body.string_to_cut
    .split("")
    .filter((letter, index) => (index + 1) % 3 === 0);

  const returned_string = {
    string_to_cut: req.body.string_to_cut,
    return_string: return_string.join(""),
  };
  string_to_cut_array.push(returned_string);
  res.send(string_to_cut_array);
});

app.get("/tests/:indexOfString_to_cutArray", (req, res) => {
  const string_to_cut =
    string_to_cut_array[req.params.indexOfString_to_cutArray];
  res.send(string_to_cut);
});

// listen on port 3000
const port = process.env.PORT;
app.listen(port, () => {
  console.log(
    "Thank you for the opportunity to apply for Software Engineering Apprenticeship at Lyft. My name is Vernell Miller and I hope to hear from the LYFT team soon😁."
  );
});
