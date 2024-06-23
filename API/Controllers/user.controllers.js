const login = async (req, res) =>{
    const { userName, pass } = req.body;

    const user = await USER_MODEL.findOne({ userName: userName })
        .catch(e => {
            res.status(500).json({ error: true, errorMessage: e.message }
            );
            if (!user) {
                res.status(550).json({ error: true, errorMessage: "no user" });
                return;
            }
            if (user.pass == pass) {
                res.status(200).json({ auth: true, user: user });
            } else {
                res.status(545).json({ auth: false, errorMessage: "bad pass" });
            }

        });
};

const createNewUser = (req, res) => {
    const { name, phone, points, pass } = req.body;
  
    USER_MODEL.create({
      name: name,
      phone: phone,
      points: points,
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