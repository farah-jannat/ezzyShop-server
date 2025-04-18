const express = require("express");
const userrouter = require("./routes/userRouter.js");
const categoryRouter = require("./routes/categoryRouter.js");
const connectdb = require("./db/connection.js");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
const port = 8000;
const database =
  "mongodb+srv://farahjannatmithila:Yj9RBZesHnDHhYbj@cluster0.ngeelqa.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

app.use(bodyParser.json());
app.use(cors());
connectdb(database);
app.use("/api/user", userrouter);
app.use("/api/category", categoryRouter);

app.listen(port, () => {
  console.log(`server is ruuning at ${port}`);
});
