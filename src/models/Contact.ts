import mongoose from "mongoose";

const { Schema, model, models } = mongoose;
const ContactSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },

    email: {
      type: String,
      required: true,
      lowercase: true,
      trim: true,
    },

    company: {
      type: String,
      default: "",
      trim: true,
    },

    website: {
      type: String,
      default: "",
      trim: true,
    },

    projectType: {
      type: String,
      required: true,
    },

    message: {
      type: String,
      required: true,
      trim: true,
    },

    status: {
      type: String,
      enum: [
        "New",
        "Contacted",
        "Proposal Sent",
        "In Progress",
        "Completed",
        "Closed",
      ],
      default: "New",
    },
  },
  {
    timestamps: true,
  }
);

const Contact = models.Contact || model("Contact", ContactSchema);

export default Contact;