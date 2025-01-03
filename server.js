const http = require("http");
const mongodb = require("mongodb");

// MongoDB ulanish satri
const connectionString =
  "mongodb+srv://Edward_MIT:2C1XwA84vUsgTJPC@cluster0.kyw1m.mongodb.net/Reja";

// MongoDB ulanish
mongodb.connect(
  connectionString,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true
  },
  (err, client) => {
    if (err) {
      console.log("Error on Connection");
    } else {
      console.log("MongoDB connection succeeded");
      module.exports = client;

      // `app` ni oling va serverni ishga tushiring
      const app = require("./app");
      const server = http.createServer(app);
      let PORT = 4002;
      server.listen(PORT, function () {
        console.log(
          `The server is running successfully on port: ${PORT}, http://localhost:${PORT}`
        );
      });
    }
  }
);
