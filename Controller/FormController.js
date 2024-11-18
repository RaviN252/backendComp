const Modal = require("../Schema/Form");
const mongoose = require("mongoose");
// Post all Data
exports.FormPost = async (req, res) => {
  try {
    // Create a new form entry in the database using the request body data
    const formData = await Modal.create(req.body);

    // Respond with a success message and the created form data
    res.status(201).json({
      message: "Form submitted successfully",
      formData,
    });
  } catch (err) {
    // Handle validation or database errors
    console.error(err);
    res.status(400).json({
      message: "Form submission failed",
      error: err.message,
    });
  }
};

// Getting Data

exports.GetAllForms = async (req, res) => {
  try {
    const allForms = await Modal.find(); // Find all form entries in the database

    if (allForms.length > 0) {
      res.status(200).json({
        message: "Forms Retrieved Successfully",
        allForms,
      });
    } else {
      res.status(404).json({
        message: "No Forms Found",
      });
    }
  } catch (err) {
    res.status(500).json({
      message: "Internal Server Error",
      err: err.message,
    });
  }
};

// delete all data

// const mongoose = require('mongoose');

// Delete function in backend

exports.DeleteForm = async (req, res) => {
  try {
    const formId = req.params.id;

    // Validate the ObjectId
    if (!mongoose.Types.ObjectId.isValid(formId)) {
      return res.status(400).json({ message: "Invalid Form ID" });
    }

    // Use the correct model (Form)
    const DeleteFormData = await Modal.findByIdAndDelete(formId); // Use Form model

    if (DeleteFormData) {
      res.status(200).json({ message: "Form Data Deleted Successfully" });
    } else {
      res.status(404).json({ message: "Form not found" });
    }
  } catch (err) {
    console.error("Error while deleting form:", err); // Log the error
    res.status(500).json({
      message: "Internal Server Error",
      error: err.message, // Send the error message for debugging
    });
  }
};
