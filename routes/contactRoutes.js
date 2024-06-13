import express from "express";
const router=express.Router();

import {get_all, create, update, get_one, del} from "../controllers/contactController.js";

router.route("/").get(get_all);
router.route("/").post(create);
// or multiple routes
router.route("/:id").put(update).get(get_one).delete(del);

export default router;