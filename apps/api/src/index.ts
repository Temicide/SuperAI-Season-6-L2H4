import dotenv from "dotenv";
dotenv.config();

import express from "express";
import cors from "cors";
import morgan from "morgan";
import { logger } from "./lib/logger";
import { connectDB } from "./lib/db";
import { errorHandler } from "./middleware/errorHandler";
import authRoutes from "./routes/auth";
import dishRoutes from "./routes/dishes";
import flavorDnaRoutes from "./routes/flavorDna";
import communityRoutes from "./routes/community";
import userRoutes from "./routes/user";
import "./lib/workers";

const app = express();
const PORT = process.env.PORT || 3001;

// Connect to MongoDB
connectDB();

app.use(cors({ origin: true, credentials: true }));
app.use(express.json());
app.use(morgan("combined", { stream: { write: (msg: string) => logger.info(msg.trim()) } }));

app.use("/api/auth", authRoutes);
app.use("/api/dishes", dishRoutes);
app.use("/api/flavor-dna", flavorDnaRoutes);
app.use("/api/community", communityRoutes);
app.use("/api/user", userRoutes);

app.get("/health", (_req, res) => {
  res.json({ success: true, data: { status: "ok" } });
});

app.use(errorHandler);

app.listen(PORT, () => {
  logger.info(`API server running on port ${PORT}`);
});
