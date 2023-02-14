const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const db = require("../Models");
const users = db.Users;
const SECRET_KEY = "iaujshfklausfokjvuorjvksuirefkjauirjkauerfvkajbsru;foajckrabuv";

module.exports.register = async (req, res) => {
    const {name, avatar, cellphone, password } = req.body
    try {
        const user = await users.findOne({ where: { cellphone: cellphone} });

        if (user) {
            res.status(400).json({ error: "User exists" });
        } else {
             bcrypt.hash(password, 10, async (err, hash) => {
                if (err) {
                    return res.status(400).json({ error: "unable to protect password" });
                }
                const newUser = await users.create({name: name, avatar: avatar, cellphone: cellphone, password: hash});
                const token = jwt.sign({ newUser }, SECRET_KEY, { expiresIn: '1h' });
                res.json({message: 'User registered successfully', token });
            });

        }
    }catch(e) {
        res.status(500).json({error: "Database error while registring user!" });
    }
}


module.exports.login = async (req, res) => {
    const {cellphone, password } = req.body
    // try {
        const user = await users.findOne({ cellphone: cellphone });

        if (user.length == 0) {
            return res.status(400).json({ error: "user does not exists" })
        }else{
            bcrypt.compare(password, user.password, (err, result) => {
                if (err) {
                    return res.status(400).json({ error: "Unable to compare hashed password" });
                } else if (result === true){ 
                    const token = jwt.sign({
                        id: user.id,
                        name: user.name,
                        cellphone: user.cellphone,
                        avatar: user.avatar,
                        description: user.description,
                        user_status: user.status
                    }, 
                        SECRET_KEY, 
                    { 
                        expiresIn: "5h" 
                    });
                    res.status(200).json({ token: token});
                } else {
                    res.status(400).json({ error: "incorrect password" });
                }
            });
        }

    // }catch(e) {
    //     res.status(500).json({error: "Database error while trying to login a user!" });
    // }
}