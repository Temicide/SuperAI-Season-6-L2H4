import express, { Request, Response } from "express";
import cors from "cors";

const app = express();
const PORT = process.env.PORT || 4000;

app.use(cors());
app.use(express.json());

app.get("/health", (_req: Request, res: Response) => {
  res.json({ status: "ok", service: "api" });
});

app.listen(PORT, () => {
  console.log(`API server running on http://localhost:${PORT}`);
});
