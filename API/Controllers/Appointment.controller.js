const APPOINTMENT_MODEL = require("../Models/Appointment.model");

const createAppointment = async (req, res) => {
    try {
        const { coachId, userId, startDate, endDate, practice } = req.body;

        const appointment = await APPOINTMENT_MODEL.create({
            coachId,
            userId,
            startDate,
            endDate,
            practice
        });

        res.status(201).json({ appointment });
    } catch (e) {
        res.status(500).json({ error: true, errorMessage: e.message });
    }
};

const getAllAppointments = async (req, res) => {
    try {
        const appointments = await APPOINTMENT_MODEL.find().populate('coachId').populate('userId');
        res.status(200).json(appointments);
    } catch (e) {
        res.status(500).json({ error: true, errorMessage: e.message });
    }
};

const getAppointmentById = async (req, res) => {
    try {
        const { id } = req.params;
        const appointment = await APPOINTMENT_MODEL.findById(id).populate('coachId').populate('userId');
        
        if (!appointment) {
            return res.status(404).json({ error: true, errorMessage: "Appointment not found" });
        }

        res.status(200).json(appointment);
    } catch (e) {
        res.status(500).json({ error: true, errorMessage: e.message });
    }
};

module.exports = {
    createAppointment,
    getAllAppointments,
    getAppointmentById,
};
