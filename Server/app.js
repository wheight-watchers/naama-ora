const express = require("express");
const app = express();
// const cors = require("cors");
const userRouter = require("./Routes/user.router");
const meetingRouter = require("./Routes/meeting.router");
const diaryRouter = require("./Routes/meeting.router");
const accountRouter = require("./Routes/account.router");
const port = process.env.port || 3000;

// app.use(cors());
app.use(express.json());
app.use("/users", userRouter);
app.use("/meeting", authMiddleware, meetingRouter);
app.use("/account", authMiddleware, accountRouter);

app.listen(port, () => {
  console.log(`process on port ${port}`);
});
