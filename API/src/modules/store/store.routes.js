import { Router } from "express";
import { validate } from "../../middlewares/validate.js";
import {
  createStoreDTO,
  getStoreByIdDTO,
  updateStoreDTO,
} from "./store.dto.js";
import StoreController from "./store.controller.js";

const router = Router();

router.get("/", StoreController.getAllStores);

router.get(
  "/:id",
  validate(getStoreByIdDTO, "params"),
  StoreController.getStoreById,
);
router.post("/", validate(createStoreDTO), StoreController.createStore);

router.put(
  "/:id",
  validate(getStoreByIdDTO, "params"),
  validate(updateStoreDTO),
  StoreController.updateStore,
);

router.delete(
  "/:id",
  validate(getStoreByIdDTO, "params"),
  StoreController.deleteStore,
);

export default router;
