import express from "express"
import { PrismaClient } from "@prisma/client"
const router = express.Router()
const prisma = new PrismaClient()

router.post("/create")

router.get("/latest")

router.get("/filter")

router.post("/buy")

router.put("/verify")

router.get("/history")

router.post("/addToCart")

router.get("/:id")

export default couponRouter = router