const express = require("express");
const router = express.Router();
const {
  createSubscription,
  getSubscription,
  getSubscriptionById,
  updateSubscription,
  deleteSubscription,
} = require("../controllers/Subscriptions");

//post
router.post("/", createSubscription);

//get by id
router.get("/:id", getSubscriptionById);
//put
router.put("/:id", updateSubscription);
//delete
router.delete("/:id", deleteSubscription);

//get
router.get("/", getSubscription);

module.exports = router;
