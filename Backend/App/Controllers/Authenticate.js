const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const db = require("../Models");
const user = db.Users;

module.exports.register = async (req, res) => {
    try {
        const user = await user.find({ cellphone: req.body.cellphone });

        if (user.length != 0) {
            res.status(400).json({ error: "User exists" });
          } else {
            bcrypt.hash(req.body.password, 10, (err, hash) => {
                if (err) {
                    return res.status(400).json({ error: "not protected" });
                }
                const newUser = new user({
                    name: req.body.name,
                    avatar: req.body.avatar,
                    cellphone: req.body.cellphone,
                    password: hash,
                });

                newUser
                    .save()
                    .then((data) => {
                        const token = jwt.sign(
                            {
                              id: user._id,
                              cellphone: user.cellphone,
                              name: user.name,
                            },
                            SECRET_KEY,
                            {
                              expiresIn: "5h",
                            }
                        );
                        res.status(201).json({ message: "User created", token: token, user: newUser });
                    })
            });
        }
    }catch(e) {

    }
}


module.exports.login = async (req, res) => {
    try {

    }catch(e) {
        
    }
}