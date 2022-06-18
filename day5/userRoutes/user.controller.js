const userJson = require('./users.json');
const fs = require('fs').promises;

const insertUser = async (req, res) => {
    const { name, age } = req.body;
    let count = userJson.length;
    const newUser = {
        id: count + 1,
        name,
        age
    }
    userJson.push(newUser);

    await fs.writeFile('./users.json', JSON.stringify(userJson, null, 2));

    return res.send("New user added");
};

const getUser =  (req, res) => {
    const {id, name, age} = req.query;
    console.log(id, name, age);
    const users = userJson.filter(user => {
        if(id && id != user.id) {
            return false;
        }

        if (name && name !== user.name) {
            return false
        }

        if (age && age != user.age) {
            return false
        }

        return true;
    });
    return res.send(users);
};


module.exports = {
    insertUser,
    getUser
}