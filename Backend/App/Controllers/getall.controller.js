const db = require("../Models");
const user = db.Users;
const messages = db.Messages;
const conversations = db.Conversations;
const groupmembers = db.GroupMembers;
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

        // const contacts = await messages.findAll({
        //     where: {
        //       recipient_id: sender_id
        //     },
        //     attributes: [
        //         'messages',
        //         [Sequelize.fn('max', Sequelize.col('chat_messages.createdAt')),'last_message_date'],
        //     ],
        //     include: [
        //         {
        //           model: user,
        //         }
        //     ],
        //     group:[
        //         'user.id',
        //         'messages'
        //     ], 
        //     order:[
        //         ['last_message_date', 'DESC']
        //     ],    
        //     limit:1 
        // });

        const groups = await conversations.findAll({
            where: {
              '$chat_messages.user_id$': sender_id
            },
            include: [
                {
                    model: groupmembers
                },
                {
                    model: messages
                },
            ]
        });

    res.status(200).json({ users: groups });

}