import express from "express"
import { PrismaClient } from "@prisma/client"
const router = express.Router()
const prisma = new PrismaClient()

router.post("/signup/number")

router.post("/signup/email")

router.get("/signin")

router.put("/otp")

router.put("/forgotPassword")

router.put("changeAvatar")

router.get("/profile")

router.get("/notification")

router.get("/cart")

router.get("/balance")

router.get("/credit")

router.get("/history/transaction")

router.get("/history/credits")

router.get("/history/coupons")

export default userRouter = router