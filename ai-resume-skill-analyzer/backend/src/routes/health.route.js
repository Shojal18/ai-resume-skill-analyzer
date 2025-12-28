import { Router } from "express";

const router = Router();

router.get("/health", (req, res) => {
  res.status(200).json({
    status: "OK",
    message: "Backend is healthy"
  });
});

export default router;
