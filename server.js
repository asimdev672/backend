const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config({ path: "./config.env" });
const cors = require('cors')
const app = require("./app");
// app.use(cors({
//     origin: 'http://localhost:3000',
//     methods: 'GET,POST,PUT,DELETE',
//     allowedHeaders: 'Content-Type,Authorization',
//     credentials: true
//   }));

// app.use(cors(corsOptions));
//  app.use(cors({ origin: true }));
// app.use(cors())
// app.use(cors({
//     origin: '*',
//   }));
const port = 8000;
const DB = process.env.DATABASE_LOCAL;
mongoose
  .connect(DB, {
    useNewUrlParser: true,
  })
  .then(() => console.log("successfully"));

app.listen(port, () => {
  console.log("server listning on port 8000...");
});
