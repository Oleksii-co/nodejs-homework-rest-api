import express from "express";

const router = express.Router();

import ctrl from "../../controllers/contact.js";

import { addSchema } from "../../schemas/contact.js";

import { updateFavoriteSchema } from "../../schemas/contact.js";

import validateBody from "../../middlewares/validateBody.js";

import isValidId from "../../middlewares/isValidId.js";

router.get("/", ctrl.getAll);

router.get("/:contactId", isValidId, ctrl.getById);

router.post("/", validateBody(addSchema), ctrl.add);

router.put("/:contactId", isValidId, validateBody(addSchema), ctrl.updateById);

router.delete("/:contactId", isValidId, ctrl.deleteById);

router.patch(
  "/:contactId/favorite",
  isValidId,
  validateBody(updateFavoriteSchema),
  ctrl.updateStatusContact
);

export default router;
