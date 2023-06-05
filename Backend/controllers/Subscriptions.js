const Subscription = require("../models/subscriptions");

// Create a new subscription
const newSubscription = async (req, res) => {
  const { user_id, formation_id, price } = req.body;
  try {
    const newSubscription = new Subscription({
      user_id,
      formation_id,
      price,
    });
    await newSubscription.save();

    res.status(201).json({ message: "Subscription created successfully" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Internal server error" });
  }
};

// Get all subscriptions
const getAllSubscriptions = async (req, res) => {
  try {
    const subscriptions = await Subscription.find();
    console.log("ici2");

    res.status(200).json({ subscriptions });
  } catch (err) {
    console.error(err);
    console.log("ici 22");
    res.status(500).json({ error: "Internal server error" });
  }
};

// Get subscription by ID
const getSubscriptionById = async (req, res) => {
  const { subscriptionId } = req.params;

  try {
    const subscription = await Subscription.findById(subscriptionId);

    if (!subscription) {
      return res.status(404).json({ error: "Subscription not found" });
    }

    res.status(200).json({ subscription });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Internal server error" });
  }
};

// Update subscription
const updateSubscription = async (req, res) => {
  const { subscriptionId } = req.params;
  const { user_id, formation_id, price } = req.body;

  try {
    const subscription = await Subscription.findById(subscriptionId);

    if (!subscription) {
      return res.status(404).json({ error: "Subscription not found" });
    }

    subscription.user_id = user_id;
    subscription.formation_id = formation_id;
    subscription.price = price;

    await subscription.save();

    res.status(200).json({ message: "Subscription updated successfully" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Internal server error" });
  }
};

// Delete subscription
const deleteSubscription = async (req, res) => {
  const { subscriptionId } = req.params;

  try {
    const subscription = await Subscription.findById(subscriptionId);

    if (!subscription) {
      return res.status(404).json({ error: "Subscription not found" });
    }

    await subscription.remove();

    res.status(200).json({ message: "Subscription deleted successfully" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Internal server error" });
  }
};

// Delete subscription
const testNow = async (req, res) => {
  console.log("in tst method");
  res.status(200).json({ message: "In test Now method " });
};

module.exports = {
  newSubscription,
  getAllSubscriptions,
  getSubscriptionById,
  updateSubscription,
  deleteSubscription,
  testNow,
};
