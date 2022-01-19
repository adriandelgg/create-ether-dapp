require("dotenv").config();
import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import helmet from "helmet";
import hpp from "hpp";
import mongoSanitize from "express-mongo-sanitize";

const app = express();

mongoose
	.connect("mongodb://localhost:27017/blockchain")
	.then(() => console.log("Connected to MongoDB..."))
	.catch(err => console.error("FAILED to connect to MongoDB: " + err));

// Middleware
app.use(cors());
app.use(helmet());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(mongoSanitize());
app.use(hpp());

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Listening on port ${port}...`));
