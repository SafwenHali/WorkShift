const Subscription = require("../models/subscriptions");

//POST
const createSubscription = async (req, res) => {
  //create
  try {
    const subscription = await Subscription.create({
      user_id: req.body.user_id,
      formationList: req.body.formationList
    });
    res.json({ subscription: subscription });
  } catch (error) { 
    console.log(error);
    res.json("subscription not created");
 }  
};

//GET all subscription
const getSubscription = async (req, res) => {
  //find
  const subscription = await Subscription.find();
  //return subscription&&
  res.json({ subscription: subscription });
};

//GET subscription by Id
const getSubscriptionById = async (req, res) => {
  try {
    const subscription = await Subscription.findById(req.params.id);
    res.json({ subscription: subscription });
  } catch (err) {
    console.log(err.message);
    res.json("subscription not found");
  }
};

//DELETE
const deleteSubscription = async (req, res) => {
  const subscription = await Subscription.findByIdAndDelete(req.params.id);
  console.log("item deleted");
  res.json("subscription deleted");
};

//UPDATE
const updateSubscription = async (req, res) => {
  try {
    const subscription = await Subscription.findByIdAndUpdate(req.params.id, {
      user_id: req.body.user_id,
      formationList: req.body.formationList
    });
    res.json(`subscription updated successfully`);
  } catch (err) {
    console.log(err.message);
    res.json("subscription not updated ");
  }
};
module.exports = {
  createSubscription,
  getSubscription,
  getSubscriptionById,
  deleteSubscription,
  updateSubscription,
};
