import express from "express"
import jwt from "jsonwebtoken"
import bcrypt from "bcrypt"
import { UserModel } from "../models/Users.js"

const router = express.Router()


router.post('/register', async(req, res) => {
  const {username, password} = req.body;

  const user = await UserModel.findOne({username: username});

  res.json(user);

})

router.get('/register', async (req, res) => {
  try {
    const result = await UserModel.find({});
    console.log("no such user found:")
    res.status(200).json(result);
  } catch (err) {
    res.status(500).json(err);
  }

})



router.post('/login')









export { router as userRouter }