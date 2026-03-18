import express from "express";
import userRoutes from "./auth.routes";
import bookingRoutes from "./booking.routes";
import inquiriesRoutes from "./inquiry.routes";
import artistRoutes from "./artist.routes";

const router = express.Router();

router.use("/auth", userRoutes);
router.use("/booking", bookingRoutes);
router.use("/inquiries", inquiriesRoutes);
router.use("/artist", artistRoutes);

export default router;
