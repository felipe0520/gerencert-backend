import express from "express";
import { AddressInfo } from "net";
import cors from "cors";
import { userRouter } from "./src/router/userRouter";

const app = express();
app.use(cors());
app.use(express.json());

const server = app.listen(3000, () => {
  if (server) {
    const address = server.address() as AddressInfo;
    console.log(`server running on http://localhost:${address.port}`);
  } else {
    console.error(` fail server run.`);
  }
});

app.use("/user", userRouter);

export default app;
