const db = require("../Models");
const user = db.Users;
const messages = db.Messages;
const groupMembers = db.GroupMembers;
const group = db.Conversations;

module.exports.getUser = async (req, res) => {
    try {
        const users = await user.findAll();
        res.status(200).json({ users: users });
    } catch (error) {
        res.status(400).json({ error: "DB error" });
    }
}   

module.exports.getAllChatusers = async (req, res) => {
    const { sender_id } = req.params;
    try {
        const contacts = await messages.findAll({
            where: {
              recipient_id: sender_id
            },
            attributes: [
                'messages', 'createdAt',
            ],
            include: [
                {
                  model: user,
                  attributes: ['name']
                }
            ]
        });
        
        res.status(200).json({ users: contacts });
        
    } catch (error) {
        res.status(400).json({ error: "DB error" });
    }
}