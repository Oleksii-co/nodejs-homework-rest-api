import express from "express";

const router = express.Router();

import ctrl from "../../controllers/contact.js";

import { addSchema } from "../../schemas/contact.js";

import { updateFavoriteSchema } from "../../schemas/contact.js";

import validateBody from "../../middlewares/validateBody.js";

import isValidId from "../../middlewares/isValidId.js";
import authenticate from "../../middlewares/authenticate.js";

router.get("/", authenticate, ctrl.getAll);

router.get("/:contactId", authenticate, isValidId, ctrl.getById);

router.post("/", authenticate, validateBody(addSchema), ctrl.add);

router.put(
  "/:contactId",
  authenticate,
  isValidId,
  validateBody(addSchema),
  ctrl.updateById
);

router.delete("/:contactId", authenticate, isValidId, ctrl.deleteById);

router.patch(
  "/:contactId/favorite",
  isValidId,
  validateBody(updateFavoriteSchema),
  ctrl.updateStatusContact
);

export default router;
