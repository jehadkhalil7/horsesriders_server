const USER_MODEL = require("../Models/user.model");

const login = async (req, res) => {
    try {
        const { userName, pass } = req.body;
        const user = await USER_MODEL.findOne({ name: userName });

        if (!user) {
            return res.status(404).json({ error: true, errorMessage: "No user found" });
        }

        if (user.pass === pass) {
            return res.status(200).json({ auth: true, user });
        } else {
            return res.status(401).json({ auth: false, errorMessage: "Incorrect password" });
        }
    } catch (e) {
        console.error('Error during login:', e.message);
        return res.status(500).json({ error: true, errorMessage: e.message });
    }
};

const createNewUser = (req, res) => {
    const { name, phone, points, pass } = req.body;

    USER_MODEL.create({
        name: name,
        phone: phone,
        points: points,
        pass
    })
        .then((createRes) => {
            res.status(200).json({ user: createRes._doc });
        })
        .catch((e) =>
            res.status(500).json({ error: true, errorMessage: e.message })
        );
};
const getAllUsers = async (req, res) => {
    try {
        const users = await USER_MODEL.find({ name: 'malek' });
        res.status(200).json(users);
    } catch (e) {
        res.status(500).json({ error: true, errorMessage: e.message });
    }
};

module.exports = {
    login,
    createNewUser,
    getAllUsers,
};