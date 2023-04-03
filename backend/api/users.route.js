import express from "express"
import UsersCtrl from "./users.controller.js"
import ItemsCtrl from "./items.controller.js"

const router = express.Router()

router.route("/").get(UsersCtrl.apiGetUsers)
router.route("/items").get(ItemsCtrl.apiGetItems)

export default router