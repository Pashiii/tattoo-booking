import express from "express";
import {
  createBooking,
  getAllBooking,
  getUserBooking,
  updateBooking,
} from "../controllers/booking.controller";
import { authorizeRoles, protect } from "../middlewares/auth.middleware";
import { UserRole } from "../types";

const router = express.Router();

router.post("/create-book", createBooking, protect);
router.put(
  "/update-booking/:id",
  updateBooking,
  protect,
  authorizeRoles(UserRole.BRANCH_ADMIN, UserRole.SUPER_ADMIN),
);
router.get("/user-book/:id", getUserBooking, protect);

router.get(
  "/all-booking",
  getAllBooking,
  protect,
  authorizeRoles(UserRole.BRANCH_ADMIN, UserRole.SUPER_ADMIN),
);

export default router;
