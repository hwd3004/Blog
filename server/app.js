import express from "express";
import mongoose from "mongoose";
import config from "./config";

const app = express();
const { MONGO_URI } = config;

app.use(hpp());
app.use(helmet());
app.use(cors({ origin: true, credentials: true }));
app.use(morgan("dev"))
app.use(express.json())

mongoose
  .connect(MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("MongoDB 연결 성공");
  })
  .catch((e) => {
    console.log("MongoDB 연결 실패");
    console.log(e);
  });

app.get("/");

export default app;
