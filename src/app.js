import express from "express";
import userRouter from "./routes/user.route.js";
import postRouter from "./routes/post.route.js";

const app = express();

// Parse JSON request body
app.use(express.json());

// Declaration of routes
app.use("/api/v1/users", userRouter);
app.use("/api/v1/posts", postRouter);

export default app;
