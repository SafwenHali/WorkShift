// Import necessary modules
const express = require("express");
const router = express.Router();
const {
  newSubscription,
  getAllSubscriptions,
  getSubscriptionById,
  updateSubscription,
  deleteSubscription,
  testNow,
} = require("../controllers/Subscriptions");

//post
router.post("/", newSubscription);
router.get("/tst", testNow);

//get by id
router.get("/:id", getSubscriptionById);
//put
router.put("/:id", updateSubscription);
//delete
router.delete("/:id", deleteSubscription);

//get
router.get("/", getAllSubscriptions);

module.exports = router;
