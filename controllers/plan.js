const Plan = require('../modal/Plan');

//get
const getPlan=async(req,res)=>{
    const plan=await Plan.find({})
    return res.status(200).json({ plan })
}
//get one plan
const getOnePlan=async(req,res)=>{
    const{planID}=req.params;
    const plan=await Plan.findById(planID)
    const planValue={
        planName:plan.planName,
        content:plan.content
    }
    return res.status(200).json({planValue})
}
//create
const createPlan=async(req,res)=>{
    const newPlan={
        planName:req.body.planName,
        content:req.body.content,
        point:req.body.point
    }
    console.log(newPlan)
    try {
        await Plan.create(newPlan);
        res.status(201).json({
            message: "Them ke hoach thanh cong."
        });

    } catch (e) {
        console.log(e)
        res.send("error")
    }
}

module.exports={
    createPlan,
    getPlan,
    getOnePlan
}