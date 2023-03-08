const express = require("express");
const app = express();
const mongoose = require("mongoose");
const routes = require("./routes/api");

const connectionString =
  "mongodb+srv://admin:admin@webprogramming.uzoxeb6.mongodb.net/ECommerce?retryWrites=true&w=majority";

async function connect() {
  try {
    await mongoose.connect(connectionString, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Connected to MongoDB!");
  } catch (err) {
    console.log(err);
  }
}
app.use(express.urlencoded({ extended: false }));

app.use(express.json());

app.use("/api", routes);

let server = app.listen(3000, () => {
  console.log(`Server running on PORT ${server.address().port}`);
});
connect();
