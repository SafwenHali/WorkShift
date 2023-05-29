// Import necessary modules
const express = require("express");
const router = express.Router();
const {
  createSubscription,
  getAllSubscriptions,
  getSubscriptionById,
  updateSubscription,
  deleteSubscription,
} = require("../controllers/Subscriptions");

//post
router.post("/", createSubscription);

//get
router.get("/", getAllSubscriptions);
//get by id
router.get("/:id", getSubscriptionById);

//put
router.put("/:id", updateSubscription);
//delete
router.delete("/:id", deleteSubscription);

module.exports = router;
