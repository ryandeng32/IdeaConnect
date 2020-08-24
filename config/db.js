const mongoose = require("mongoose");
const config = require("config");

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI || config.get("mongoURI"), {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("MongoDB Connected...");
  } catch (err) {
    console.error(err.message);
    // Exit with failure
    process.exit(1);
  }
};

module.exports = connectDB;
