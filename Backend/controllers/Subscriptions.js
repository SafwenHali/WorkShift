const Subscription = require("../models/subscriptions");

// Create a new subscription
const createSubscription = async (req, res) => {
  const { userId, formation_id } = req.body;

  try {
    const newSubscription = new Subscription({
      userId,
      formation_id,
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

    res.status(200).json({ subscriptions });
  } catch (err) {
    console.error(err);
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
  const { userId, formation_id } = req.body;

  try {
    const subscription = await Subscription.findById(subscriptionId);

    if (!subscription) {
      return res.status(404).json({ error: "Subscription not found" });
    }

    subscription.userId = userId;
    subscription.formation_id = formation_id;

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

module.exports = {
  createSubscription,
  getAllSubscriptions,
  getSubscriptionById,
  updateSubscription,
  deleteSubscription,
};
