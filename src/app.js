import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import e from "express";

const app = express();

app.use(
  cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true,
  })
);

//JSON Accept
app.use(express.json({ limit: "16kb" }));

//URL Data Accept
app.use(express.urlencoded({ extended: true, limit: "16kb" }));

app.use(express.static("public"));

// Cookie Parser
app.use(cookieParser());

export { app };
