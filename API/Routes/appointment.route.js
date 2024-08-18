const { Router } = require("express");
const { createAppointment, getAllAppointments, getAppointmentById } = require("../Controllers/Appointment.controller");

const appointmentRouter = Router();

appointmentRouter.post('/createAppointment', createAppointment);
appointmentRouter.get('/getAllAppointments', getAllAppointments);
appointmentRouter.get('/getAppointmentById/:id', getAppointmentById);

module.exports = appointmentRouter;
