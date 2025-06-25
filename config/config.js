require("dotenv").config();

const config = Object.freeze({
    port: process.env.PORT || 3000,
    databaseURI: process.env.MONGODB_URI || "mongodb+srv://himanshu:Dataflask123@pos-cluster.wdpw41e.mongodb.net/?retryWrites=true&w=majority&appName=pos-cluster",
    nodeEnv : process.env.NODE_ENV || "himanshu",
    accessTokenSecret: process.env.JWT_SECRET,
    razorpayKeyId: process.env.RAZORPAY_KEY_ID,
    razorpaySecretKey: process.env.RAZORPAY_KEY_SECRET,
    razorpyWebhookSecret: process.env.RAZORPAY_WEBHOOK_SECRET
});

module.exports = config;
