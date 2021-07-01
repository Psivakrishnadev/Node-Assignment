const mongoose = require("mongoose");
//establish connection to mongoDB
mongoose.connect(
  "mongodb+srv://siva:qwerty12345@cluster0.swpw3.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",
  { useNewUrlParser: true, useUnifiedTopology: true },
  (err) => {
    if (!err) {
      console.log("MongoDB Connection Succeeded.");
    } else {
      console.log("Error in DB connection : " + err);
    }
  }
);
