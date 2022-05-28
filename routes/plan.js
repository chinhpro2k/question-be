const express = require("express");
const Plan = require("../modal/Plan");
const router = express.Router();

//get list question
router.get("/", async (req, res) => {
  const plan = await Plan.find({});
  console.log(plan);
  return res.status(200).json({ plan });
});
//create question
router.post("/add", async (req, res) => {
  const newPlan = {
    title: req.body.title,
    description: req.body.description,
  };
  console.log(newPlan);
  try {
    const plan = await Plan.findOne({ title: newPlan.title });
    if (!plan) {
      await Plan.create(newPlan);
        const planRes = await Plan.findOne({ title: req.body.title });
      return res.status(200).json({
        message: "Them ke hoach thanh cong.",
        plan: planRes,
      });
    }else{
        return res.status(404).json({
            message: "Bị trùng suggest",
        })
    }
  } catch (e) {
    console.log(e);
    res.send("error");
  }
});
module.exports = router;
