const express = require("express");
const app = express();
// const cors = require("cors");
const userRouter = require("./Routes/user.router");
const meetingRouter = require("./Routes/meeting.router");
const port = process.env.port|| 3000;

// app.use(cors());
app.use(express.json());
app.use("/user", userRouter);
app.use("/meeting"
, authMiddleware
, meetingRouter);

app.listen(port, () => {
  console.log(`process on port ${port}`);
});
