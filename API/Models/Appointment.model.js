const { Schema, model } = require("mongoose");

const appointmentSchema = new Schema({
  coachId: {
    type: String,
    required: true
  },
  userId: {
    type: Schema.Types.ObjectId,
    ref: 'user',
    required: true
  },
  startDate: {
    type: Date,
    required: true
  },
  endDate: {
    type: Date,
    required: true
  },
  practice: {
    type: String,
    required: true
  }
});

const APPOINTMENT_MODEL = model("Appointment", appointmentSchema);

module.exports = APPOINTMENT_MODEL;
