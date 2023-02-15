const db = require("../Models");
const user = db.Users;
const messages = db.Messages;
const Sequelize = db.Sequelize;

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

        const contacts = await messages.findAll({
            where: {
              recipient_id: sender_id
            },
            attributes: [
                'messages',
                [Sequelize.fn('max', Sequelize.col('chat_messages.createdAt')),'last_message_date'],
            ],
            include: [
                {
                  model: user,
                }
            ],
            group:[
                'user.id',
                'messages'
            ], 
            order:[
                ['last_message_date', 'DESC']
            ],    
            limit:1 
        });
        
        res.status(200).json({ users: contacts });

}