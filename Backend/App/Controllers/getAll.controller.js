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

module.exports.getUserWithMessage = async (req, res) => {
    const {id} = req.params
    try {
        const oneUser = await user.findOne({ 
            where: { 
                id: id
            }, 
            include: [{
                model:messages,
                where: {
                    recipient_id:{ include:[user]}
                }
                // include:[{
                //     model: user,
                    
                // }]
            }]
            
        });
        if (oneUser  === null || oneUser === undefined) {
            return res.status(400).json({ error: "User not found" });
        }

        res.status(200).json({ oneUser: oneUser });
    } catch (error) {
        res.status(400).json({ error: "DB error" });
    }
}  


/*
include: [{
                model: groupMembers, 
                include:[group]
            }, 
            {
                model: messages,
                include:[{
                    model: users,
                    where: {}
                }]
            }]

            */