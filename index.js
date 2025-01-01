import express from "express"
import couponRouter from "./routes/couponRouter"
import userRouter from "./routes/userRouter"

const app = express()
app.use(express.json())

// wallet and transaction
app.use("/coupon",couponRouter)
app.use("/user",userRouter)
app.use((err, req, res, next) => {
    console.log(err)
    res.status(500).send({error:err})
})

export default app