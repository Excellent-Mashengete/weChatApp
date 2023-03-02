const db = require("../models");
const messag = db.Messages;
const user = db.Users;
const Sequelize = db.Sequelize;

module.exports.groupmessages = async (req, res) => {
    const { id } = req.params

    try {
        const messages = await messag.findAll({where: {
                group_id: id
            },
            include:[{
                    model: user
                }
            ]
        })
        return res.status(200).json({ messages: messages });
    }
    catch(e) {
        return res.status(500).json({ error: "Database error while retrieving group messages" });
    }
}

module.exports.singlemess = async (req, res) => {
    const {sender, receiver} = req.body;

    try {
        const userMessages = await messag.findAll({ 
            where: { 
                [Sequelize.Op.or]: [{
                    user_id: sender,
                    recipient_id: receiver
                },{
                    user_id: receiver,
                    recipient_id: sender
                }]
            }
        });
        return res.status(200).json({ messages: userMessages });
    } catch (error) {
        return res.status(400).json({ error: "Database error while retrieving one-on-one messages"});
    }
}  

module.exports.sendtoone = async (req, res) => {
    const {sender, receiver, text} = req.body;
    try {
        await messag.create({ messages: text, user_id: sender, recipient_id: receiver});
        return res.status(200).json({ message: "Succesfully send" });
    } catch (error) {
        return res.status(400).json({ error: "DB error" });
    }
}  

module.exports.sendtogroup = async (req, res) => {
    const {sender, receiver, text} = req.body;
    try {
        await messag.create({ messages: text, user_id: sender, group_id: receiver});
        return res.status(200).json({ message: "Succesfully send" });
    } catch (error) {
        return res.status(400).json({ error: "DB error" });
    }
}  