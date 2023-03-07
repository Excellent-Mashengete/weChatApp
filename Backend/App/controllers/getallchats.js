const db = require("../models");
const user = db.Users;
const messages = db.Messages;
const conversations = db.Conversations;
const groupmembers = db.GroupMembers;
const {Sequelize} = db.sequelize

module.exports.getallchats = async (req, res) => {
    const { id } = req.params

    try{
        //get all user you are chatting to
        const contacts = await messages.findAll({
            where: { 
                [Sequelize.Op.or]: [
                    {user_id: id,},
                    {recipient_id: id}
                ],
                group_id: {[Sequelize.Op.is]: null}
            },
            include: [{ model: user}],
            order:[
                ['createdAt', 'DESC']
            ],
        });

        //get all groups a user is added to 
        const groups = await groupmembers.findAll({
            where: { user_id: id },
            include: [{
                model:conversations,
                include:[{
                    model: messages,
                    order:[
                        ['id', 'DESC']
                    ],
                    limit:1,
                    include: [{    
                        model: user,
                    }]
                }],
            }],
        });
        
        let allContacts= [];

        //format data for one-on-one chat
        await contacts.forEach(contact => {
            let userdata = {
                lastMessage: contact.dataValues.messages,
                datesend: contact.dataValues.createdAt,
                id: contact.dataValues.user.id,
                name: contact.dataValues.user.name,
                cellphone: contact.dataValues.user.cellphone,
                avatar: contact.dataValues.user.avatar,
                read: contact.dataValues.read,
                createdesc: contact.dataValues.user.updatedAt,
            }
            allContacts.push(userdata);
        })

        //format data for group chats
        await groups.forEach(group => {
            let contactGroup ={
                lastMessage: group.dataValues.conversation.chat_messages[0]?.dataValues.messages,
                datesend: group.dataValues.conversation.chat_messages[0]?.dataValues.createdAt,
                id: group.dataValues.id,
                name: group.dataValues.conversation.name,
                cellphone: group.dataValues.conversation.chat_messages[0]?.user.dataValues.cellphone,
                username: group.dataValues.conversation.chat_messages[0]?.user.dataValues.name,
                avatar: group.dataValues.conversation.avatar,
                group_id: group.dataValues.group_id,
                creator: group.dataValues.conversation.creator_id,
                createdesc: group.dataValues.conversation.updatedAt,
            }

            allContacts.push(contactGroup);
        })

        return res.status(200).json({ allContact: groups});
    } catch(e) {
        return res.status(500).json({ error: "Database error while retrieving group messages" });
    }
}