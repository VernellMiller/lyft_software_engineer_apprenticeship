const express = require("express");

const app = express();

require("dotenv").config();

app.use(express.json());

app.post("/test", (req, res) => {
  //grab the data from the request body
  //push the data as an object into data array
  //send updated array
  let return_string = req.body.string_to_cut
    .split("")
    .filter((letter, index) => (index + 1) % 3 === 0);

  res.json({ return_string: return_string.join("") });
});

const port = process.env.PORT;
app.listen(port, () => {
  console.log(
    `You are now listening to the smooth sounds of port: ${port}. Thank you for the opportunity to apply for Software Engineering Apprenticeship at Lyft. My name is Vernell Miller and I hope to hear from the LYFT team soon😁.`
  );
});
