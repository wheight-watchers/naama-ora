const express = require("express");
const app = express();
// const cors = require("cors");
const userController = require("./controllers/user.controller");
const meetingController = require("./controllers/meeting.controller");
const port = process.env.port|| 3000;

// app.use(cors());
app.use(express.json());
app.use("/user", userController);
app.use("/meeting"
// , authMiddleware
, meetingController);

app.listen(port, () => {
  console.log(`process on port ${port}`);
});
