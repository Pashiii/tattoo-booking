import express from "express";
import { authorizeRoles, protect } from "../middlewares/auth.middleware";
import { UserRole } from "../types";
import {
  createArtist,
  deleteArtist,
  updateArtist,
} from "../controllers/artist.controller";

const router = express.Router();

router.post(
  "/create-artist",
  protect,
  createArtist,
  authorizeRoles(UserRole.SUPER_ADMIN, UserRole.BRANCH_ADMIN),
);
router.get("");

router.put(
  "/update-artist/:id",
  protect,
  authorizeRoles(UserRole.SUPER_ADMIN, UserRole.BRANCH_ADMIN),
  updateArtist,
);

router.delete(
  "/remove-artist/:id",
  protect,
  authorizeRoles(UserRole.SUPER_ADMIN, UserRole.BRANCH_ADMIN),
  deleteArtist,
);

export default router;
