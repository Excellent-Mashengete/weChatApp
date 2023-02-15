const db = require("../Models");
const messages = db.Messages;
const Sequelize = db.Sequelize;

module.exports.getMessages = async (req, res) => {
    const {sender_id, recipient_id} = req.body;
    try {
        const userMessages = await messages.findAll({ 
            where: { 
                [Sequelize.Op.or]: [{
                    user_id: sender_id,
                    recipient_id: recipient_id
                },{
                    user_id: recipient_id,
                    recipient_id: sender_id
                }]
            }
        });
        if (userMessages  === null || userMessages === undefined) {
            return res.status(400).json({ error: "messages not found" });
        }

        res.status(200).json({ userMessages: userMessages });
    } catch (error) {
        res.status(400).json({ error: "DB error" });
    }
}  

module.exports.sendMessags = async (req, res) => {
    const {sender_id, recipient_id, message_text} = req.body;
    try {
        await messages.create({ messages: message_text, user_id: sender_id, recipient_id: recipient_id});
        res.status(200).json({ message: "Succesfully send" });
    } catch (error) {
        res.status(400).json({ error: "DB error" });
    }
}  