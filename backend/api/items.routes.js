import express from "express"
import ItemsCtrl from "./items.controller.js"

const router = express.Router()

router.route("/").get(ItemsCtrl.apiGetItems)

export default router