const db = require("../Models");
const user = db.Users;

module.exports.getId = async (req, res) => {
    const {phone} = req.body
    try {
        const oneUser = await user.findOne({ where: { cellphone: phone } });
        
        if (oneUser  === null || oneUser === undefined) {
            return res.status(400).json({ error: "User not found" });
        }
        res.status(200).json({ oneUser: oneUser });
    } catch (error) {
        res.status(400).json({ error: "DB error" });
    }
}   