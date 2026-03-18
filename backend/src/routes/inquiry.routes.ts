import express from "express";
import {
  createInquiry,
  replyInquiry,
  updateInquiry,
} from "../controllers/inquiry.controller";
import { authorizeRoles, protect } from "../middlewares/auth.middleware";
import { UserRole } from "../types";

const router = express.Router();

router.post("/create-inquiry", createInquiry);
router.put(
  "/update-status/:id",
  updateInquiry,
  protect,
  authorizeRoles(UserRole.BRANCH_ADMIN, UserRole.SUPER_ADMIN),
);

router.post(
  "/reply-inquiry",
  replyInquiry,
  protect,
  authorizeRoles(UserRole.SUPER_ADMIN, UserRole.BRANCH_ADMIN),
);

export default router;
