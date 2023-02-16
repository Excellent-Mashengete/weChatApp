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
    console.log(sender_id);
    try {
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

        const groups = await groupmembers.findAll({
            where: {
                user_id: sender_id
            },
            include: [
                {
                    model:conversations,
                    include:[
                        {
                            model: messages,
                            attributes: [
                                'id',
                                'messages',
                               [Sequelize.fn('max', Sequelize.col('conversation->chat_messages.createdAt')),'last_message_date'],
                            ],
                            order:[
                                ['createdAt', 'DESC']
                            ],
                            include: [
                                {    
                                    model: user,
                                }
                            ],
                        },
                    ]
                }
            ],
            group:[
                'groupMembers.id',
                'conversation.id',
                'conversation->chat_messages.id',
                'conversation->chat_messages->user.id'
            ]
            
        });
        let allContacts= [];

        await contacts.forEach(contact => {
          let userdata = {
                lastMessage: contact.dataValues.messages,
                datesend: contact.dataValues.last_message_date,
                id: contact.dataValues.user.id,
                name: contact.dataValues.user.name,
                cellphone: contact.dataValues.user.cellphone,
                avatar: contact.dataValues.user.avatar,
                user_status: contact.dataValues.user.user_status
            }
            allContacts.push(userdata);
        })

        await groups.forEach(group => {
          let contactGroup ={
                lastMessage: group.dataValues.conversation.chat_messages[0]?.dataValues.messages,
                datesend: group.dataValues.conversation.chat_messages[0]?.dataValues.last_message_date,
                id: group.dataValues.id,
                name: group.dataValues.conversation.name,
                cellphone: group.dataValues.conversation.chat_messages[0]?.user.dataValues.cellphone,
                username: group.dataValues.conversation.chat_messages[0]?.user.dataValues.name,
                avatar: group.dataValues.conversation.avatar,
                group_id: group.dataValues.group_id
            }
            allContacts.push(contactGroup);
        })

        res.status(200).json({ allContact: allContacts });

    } catch (error) {
        res.status(400).json({ error: "DB error" });
    }
}

module.exports.allMessages = async (req, res) => {
    
    const contacts = await messages.findAll({
        where: {
            group_id: req.params.id
        },
        include:[
            {
                model: user,
            }
        ],
        order:[
            ['createdAt', 'DESC']
        ],    
        limit:2
    })
    res.status(200).json({ users: contacts });
}


/*

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

        const groups = await groupmembers.findAll({
            where: {
                user_id: sender_id
            },
            include: [
                {
                    model:conversations,
                    include:[
                        {
                            model: messages,
                            attributes: [
                                'id',
                                'messages',
                               [Sequelize.fn('max', Sequelize.col('conversation->chat_messages.createdAt')),'last_message_date'],
                            ],
                            order:[
                                ['createdAt', 'DESC']
                            ], 
                             //Uncomment to add users to conversation
                            // include: [
                            //     {
                            //         model: user,
                            //     }
                            // ],
                        },
                    
                    ]
                }
            ],
            group:[
                'groupMembers.id',
                'conversation.id',
                'conversation->chat_messages.id',
                //uncomment to get group members
                // 'conversation->chat_messages->user.id'
            ]
            
        });

    res.status(200).json({ contacts: contacts, groups: groups });

}

*/