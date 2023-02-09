const db = require("../Models");
const user = db.Users;

module.exports.getUser = async (req, res) => {
    try {
        const users = await user.findAll();
        res.status(200).json({ users: users });
    } catch (error) {
        res.status(400).json({ error: "DB error" });
    }
}   