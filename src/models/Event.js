import mongoose from "mongoose";

const EventSchema = new mongoose.Schema(
  {
    slug: { type: String, required: true, unique: true },
    title: { type: String, required: true },
    description: { type: String, required: true },
    category: {
      type: String,
      enum: ["workshop", "expert-talk", "competition", "seminar", "industrial-visit", "research"],
      required: true,
    },
    date: { type: Date, required: true },
    startTime: { type: String, required: true },
    endTime: { type: String, required: true },
    venue: { type: String, required: true },
    speaker: {
      name: { type: String, required: true },
      designation: { type: String, required: true },
      organization: { type: String, required: true },
      image: String,
    },
    posterUrl: { type: String, required: true },
    registrationLink: String,
    status: {
      type: String,
      enum: ["draft", "upcoming", "live", "completed", "cancelled"],
      default: "upcoming",
    },
  },
  { timestamps: true }
);

export default mongoose.models.Event || mongoose.model("Event", EventSchema);