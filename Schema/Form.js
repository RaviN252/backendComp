const mongoose = require("mongoose");

// Define the schema
const formSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    companyName: {
      type: String,
      required: true,
      trim: true,
    },
    designation: {
      type: String,
      required: true,
      trim: true,
    },
    department: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
    },
    phone: {
      type: String,
      required: true,
    },
    quantity: {
      type: Number,
      required: true,
      min: 1, // Ensure quantity is at least 1
    },
  },
  {
    timestamps: true, // Add createdAt and updatedAt fields
  }
);

// Create and export the model
const Form = mongoose.model("Form", formSchema);
module.exports = Form;
