import dotenv from "dotenv";
dotenv.config();

export default {
  DB: {
    URI: process.env.URI,
  },
};
