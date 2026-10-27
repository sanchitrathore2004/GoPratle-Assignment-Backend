import mongoose, { Schema, Document } from "mongoose";

export interface IEvent extends Document {
  name: string;
  type: string;
  date: string;
  endDate?: string;
  location: string;
  venue?: string;
  category: "Event Planner" | "Performer" | "Crew";
  services?: string;
  guestCount?: string;
  budget?: string;
  stage?: string;
  description?: string;
  setupRequirements?: string[];
  breakdownRequired?: "Yes" | "No";
  vendorCoordination?: "Yes" | "No";
  performanceType?: string;
  mode?: "Solo" | "Group";
  duration?: string;
  genre?: string;
  requirements?: string;
  equipment?: string[];
  stageSetup?: "Yes" | "No";
  travel?: string;
  role?: string;
  memberCount?: string;
  experience?: string;
  workingHours?: string;
  pay?: string;
  skills?: string[];
  dressCode?: string;
  specialRequests?: string;
  createdAt: Date;
  updatedAt: Date;
}

const EventSchema = new Schema<IEvent>(
  {
    name: { type: String, required: true, trim: true },
    type: {
      type: String,
      required: true,
      enum: ["Wedding", "Concert", "Corporate", "Festival"],
    },
    date: { type: String, required: true },
    endDate: { type: String },
    location: { type: String, required: true, trim: true },
    venue: { type: String, trim: true },
    category: {
      type: String,
      required: true,
      enum: ["Event Planner", "Performer", "Crew"],
    },

    services: String,
    guestCount: String,
    budget: String,
    stage: String,
    description: String,
    setupRequirements: [String],
    breakdownRequired: { type: String, enum: ["Yes", "No"] },
    vendorCoordination: { type: String, enum: ["Yes", "No"] },

    performanceType: String,
    mode: { type: String, enum: ["Solo", "Group"] },
    duration: String,
    genre: String,
    requirements: String,
    equipment: [String],
    stageSetup: { type: String, enum: ["Yes", "No"] },
    travel: String,

    role: String,
    memberCount: String,
    experience: String,
    workingHours: String,
    pay: String,
    skills: [String],
    dressCode: String,

    specialRequests: String,
  },
  { timestamps: true }
);

const Event =
  mongoose.models.Event ||
  mongoose.model<IEvent>("Event", EventSchema);

export default Event;